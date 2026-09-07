import { createHmac, randomUUID } from 'node:crypto'
import { isIP } from 'node:net'
import { diagnosisSchema, getDiagnosisFieldErrors } from '@/lib/validation/diagnosis'
import { LeadStoreError, type LeadStore } from './store'

type Options = {
  getStore: () => LeadStore
  origin: string
  hashSecret: string
  vercel: boolean
  environment: string
  log?: (entry: Record<string, unknown>) => void
}
class RequestError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message)
  }
}
export async function readLimitedBody(request: Request, maxBytes = 16_384, timeoutMs = 5_000) {
  const declared = request.headers.get('content-length')
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > maxBytes))
    throw new RequestError(413, 'PAYLOAD_TOO_LARGE', 'O conteúdo enviado excede o limite.')
  const reader = request.body?.getReader()
  if (!reader) throw new RequestError(400, 'INVALID_JSON', 'Não foi possível interpretar o envio.')
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () =>
        reject(
          new RequestError(
            408,
            'REQUEST_TIMEOUT',
            'O envio demorou mais que o esperado. Tente novamente.',
          ),
        ),
      timeoutMs,
    )
  })
  const chunks: Uint8Array[] = []
  let size = 0
  let complete = false
  try {
    while (true) {
      const { done, value } = await Promise.race([reader.read(), timeout])
      if (done) {
        complete = true
        break
      }
      size += value.byteLength
      if (size > maxBytes)
        throw new RequestError(413, 'PAYLOAD_TOO_LARGE', 'O conteúdo enviado excede o limite.')
      chunks.push(value)
    }
    try {
      return new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks))
    } catch {
      throw new RequestError(400, 'INVALID_ENCODING', 'Não foi possível interpretar o envio.')
    }
  } finally {
    clearTimeout(timer)
    if (!complete) void reader.cancel().catch(() => {})
    reader.releaseLock()
  }
}
export async function handleLeadSubmission(request: Request, options: Options) {
  const requestId = randomUUID()
  const started = Date.now()
  function respond(status: number, body: object, code?: string, retryAfter?: number) {
    options.log?.({
      timestamp: new Date().toISOString(),
      level: status < 400 ? 'info' : 'warn',
      environment: options.environment,
      service: 'lead-capture',
      route: '/api/leads/diagnostico',
      requestId,
      duration: Date.now() - started,
      outcome: status < 400 ? 'accepted' : 'rejected',
      errorCode: code,
    })
    return Response.json(body, {
      status,
      headers: {
        'cache-control': 'no-store',
        ...(retryAfter ? { 'retry-after': String(retryAfter) } : {}),
      },
    })
  }
  function fail(
    status: number,
    code: string,
    message: string,
    fieldErrors?: object,
    retry?: number,
  ) {
    return respond(
      status,
      { ok: false, error: { code, message, ...(fieldErrors ? { fieldErrors } : {}) }, requestId },
      code,
      retry,
    )
  }
  try {
    if (
      request.headers.get('origin') !== new URL(options.origin).origin ||
      request.headers.get('sec-fetch-site') === 'cross-site'
    )
      return fail(403, 'INVALID_ORIGIN', 'Não foi possível validar a origem do envio.')
    if (
      request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json'
    )
      return fail(415, 'UNSUPPORTED_MEDIA_TYPE', 'Não foi possível interpretar o envio.')
    const key = request.headers.get('idempotency-key') ?? ''
    if (!/^[A-Za-z0-9_-]{16,128}$/.test(key))
      return fail(400, 'INVALID_REQUEST', 'Não foi possível validar o envio.')
    const raw = await readLimitedBody(request)
    const ip = options.vercel ? request.headers.get('x-vercel-forwarded-for')?.trim() : 'local'
    if (!ip || (options.vercel && !isIP(ip)) || options.hashSecret.length < 32)
      throw new LeadStoreError('UNAVAILABLE')
    const store = options.getStore()
    const rate = await store.checkRateLimit(
      createHmac('sha256', options.hashSecret).update(ip).digest('hex'),
    )
    if (!rate.allowed)
      return fail(
        429,
        'RATE_LIMITED',
        'Muitas tentativas em pouco tempo. Aguarde alguns minutos.',
        undefined,
        rate.retryAfterSeconds,
      )
    let body: unknown
    try {
      body = JSON.parse(raw)
    } catch {
      return fail(400, 'INVALID_JSON', 'Não foi possível interpretar o envio.')
    }
    const parsed = diagnosisSchema.safeParse(body)
    if (!parsed.success)
      return fail(
        422,
        'VALIDATION_ERROR',
        'Revise os campos destacados e tente novamente.',
        getDiagnosisFieldErrors(parsed.error),
      )
    if (parsed.data.website)
      return fail(422, 'INVALID_REQUEST', 'Não foi possível validar o envio.')
    const { website: _website, ...payload } = parsed.data
    const receipt = await store.save({ key, requestId, payload })
    return respond(receipt.duplicate ? 200 : 201, {
      ok: true,
      data: { accepted: true },
      requestId: receipt.requestId,
    })
  } catch (error) {
    if (error instanceof RequestError) return fail(error.status, error.code, error.message)
    if (error instanceof LeadStoreError && error.code === 'CONFLICT')
      return fail(
        409,
        'IDEMPOTENCY_CONFLICT',
        'Os dados deste envio foram alterados. Inicie uma nova solicitação.',
      )
    if (error instanceof LeadStoreError && error.code === 'TIMEOUT')
      return fail(504, 'DELIVERY_TIMEOUT', 'O envio demorou mais que o esperado. Tente novamente.')
    return fail(
      503,
      'DELIVERY_UNAVAILABLE',
      'Não foi possível enviar agora. Seus dados foram mantidos para uma nova tentativa.',
    )
  }
}
