import { getDiagnosisAdapter } from '@/server/integrations/diagnosis'
import { MemoryIdempotency } from '@/server/idempotency/memory-idempotency'
import { processDiagnosis, type DiagnosisSuccessData } from '@/server/diagnosis/process-diagnosis'
import { MemoryRateLimit } from '@/server/rate-limit/memory-rate-limit'
import type { ApiFailure, ApiSuccess } from '@/lib/api/response'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 16 * 1024
const IDEMPOTENCY_KEY_PATTERN = /^[A-Za-z0-9_-]{16,128}$/
const rateLimit = new MemoryRateLimit()
const idempotency = new MemoryIdempotency<ApiSuccess<DiagnosisSuccessData>>()

function json(
  body: ApiSuccess<DiagnosisSuccessData> | ApiFailure,
  status: number,
  headers?: HeadersInit,
) {
  return Response.json(body, {
    status,
    headers: { 'cache-control': 'no-store', ...headers },
  })
}

function getClientKey(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return true

  try {
    return new URL(origin).host === new URL(request.url).host
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID()

  if (!hasAllowedOrigin(request)) {
    return json(
      {
        ok: false,
        error: { code: 'INVALID_ORIGIN', message: 'Não foi possível validar a origem do envio.' },
        requestId,
      },
      403,
    )
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return json(
      {
        ok: false,
        error: { code: 'PAYLOAD_TOO_LARGE', message: 'O conteúdo enviado excede o limite.' },
        requestId,
      },
      413,
    )
  }

  const idempotencyKey = request.headers.get('idempotency-key') ?? ''
  if (!IDEMPOTENCY_KEY_PATTERN.test(idempotencyKey)) {
    return json(
      {
        ok: false,
        error: { code: 'INVALID_REQUEST', message: 'Não foi possível validar o envio.' },
        requestId,
      },
      400,
    )
  }

  let body: unknown
  try {
    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json(
        {
          ok: false,
          error: { code: 'PAYLOAD_TOO_LARGE', message: 'O conteúdo enviado excede o limite.' },
          requestId,
        },
        413,
      )
    }
    body = JSON.parse(rawBody)
  } catch {
    return json(
      {
        ok: false,
        error: { code: 'INVALID_JSON', message: 'Não foi possível interpretar o envio.' },
        requestId,
      },
      400,
    )
  }

  const result = await processDiagnosis({
    adapter: getDiagnosisAdapter(),
    body,
    clientKey: getClientKey(request),
    idempotencyKey,
    rateLimit,
    idempotency,
    requestId,
  })

  console.info(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      level: result.response.ok ? 'info' : 'warn',
      service: 'diagnosis-form',
      route: '/api/leads/diagnostico',
      requestId: result.response.requestId,
      outcome: result.response.ok ? 'accepted' : 'rejected',
      errorCode: result.response.ok ? undefined : result.response.error.code,
    }),
  )

  return json(
    result.response,
    result.status,
    result.retryAfterSeconds ? { 'retry-after': result.retryAfterSeconds.toString() } : undefined,
  )
}
