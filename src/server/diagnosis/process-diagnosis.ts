import { randomUUID } from 'node:crypto'
import type { ApiFailure, ApiResponse, ApiSuccess } from '@/lib/api/response'
import { diagnosisSchema, getDiagnosisFieldErrors } from '@/lib/validation/diagnosis'
import type { DiagnosisAdapter, DiagnosisEnvelope } from '@/server/integrations/diagnosis/types'
import { DiagnosisDeliveryError } from '@/server/integrations/diagnosis/types'
import { MemoryIdempotency } from '@/server/idempotency/memory-idempotency'
import { MemoryRateLimit } from '@/server/rate-limit/memory-rate-limit'

export type DiagnosisSuccessData = { accepted: true }

type ProcessDiagnosisOptions = {
  adapter: DiagnosisAdapter
  body: unknown
  clientKey: string
  idempotencyKey: string
  rateLimit: MemoryRateLimit
  idempotency: MemoryIdempotency<ApiSuccess<DiagnosisSuccessData>>
  now?: Date
  requestId?: string
}

export type ProcessDiagnosisResult = {
  status: number
  retryAfterSeconds?: number
  response: ApiResponse<DiagnosisSuccessData>
}

function failure(
  requestId: string,
  status: number,
  code: string,
  message: string,
  fieldErrors?: Record<string, string[]>,
): ProcessDiagnosisResult {
  const response: ApiFailure = {
    ok: false,
    error: { code, message, ...(fieldErrors ? { fieldErrors } : {}) },
    requestId,
  }

  return { status, response }
}

export async function processDiagnosis({
  adapter,
  body,
  clientKey,
  idempotencyKey,
  rateLimit,
  idempotency,
  now = new Date(),
  requestId = randomUUID(),
}: ProcessDiagnosisOptions): Promise<ProcessDiagnosisResult> {
  const cached = idempotency.get(idempotencyKey, now.getTime())
  if (cached) return { status: 200, response: cached }

  const rate = rateLimit.check(clientKey, now.getTime())
  if (!rate.allowed) {
    return {
      ...failure(
        requestId,
        429,
        'RATE_LIMITED',
        'Muitas tentativas em pouco tempo. Aguarde alguns minutos.',
      ),
      retryAfterSeconds: rate.retryAfterSeconds,
    }
  }

  const parsed = diagnosisSchema.safeParse(body)
  if (!parsed.success) {
    return failure(
      requestId,
      422,
      'VALIDATION_ERROR',
      'Revise os campos destacados e tente novamente.',
      getDiagnosisFieldErrors(parsed.error),
    )
  }

  if (parsed.data.website) {
    const response: ApiSuccess<DiagnosisSuccessData> = {
      ok: true,
      data: { accepted: true },
      requestId,
    }
    idempotency.set(idempotencyKey, response, now.getTime())
    return { status: 200, response }
  }

  const { website: _website, attribution, ...payload } = parsed.data
  const envelope: DiagnosisEnvelope = {
    schemaVersion: '1.0',
    event: 'lead.submitted',
    occurredAt: now.toISOString(),
    requestId,
    idempotencyKey,
    source: 'n8flow.com.br',
    payload,
    attribution,
  }

  try {
    await adapter.submit(envelope)
  } catch (error) {
    if (error instanceof DiagnosisDeliveryError && error.code === 'DELIVERY_TIMEOUT') {
      return failure(
        requestId,
        504,
        'DELIVERY_TIMEOUT',
        'O envio demorou mais que o esperado. Tente novamente.',
      )
    }

    return failure(
      requestId,
      503,
      'DELIVERY_UNAVAILABLE',
      'Não foi possível enviar agora. Seus dados foram mantidos para uma nova tentativa.',
    )
  }

  const response: ApiSuccess<DiagnosisSuccessData> = {
    ok: true,
    data: { accepted: true },
    requestId,
  }
  idempotency.set(idempotencyKey, response, now.getTime())
  return { status: 201, response }
}
