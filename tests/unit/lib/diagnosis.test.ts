import { describe, expect, it, vi } from 'vitest'
import { diagnosisSchema } from '@/lib/validation/diagnosis'
import { MemoryIdempotency } from '@/server/idempotency/memory-idempotency'
import type { DiagnosisAdapter } from '@/server/integrations/diagnosis/types'
import { DiagnosisDeliveryError } from '@/server/integrations/diagnosis/types'
import { processDiagnosis, type DiagnosisSuccessData } from '@/server/diagnosis/process-diagnosis'
import { MemoryRateLimit } from '@/server/rate-limit/memory-rate-limit'
import type { ApiSuccess } from '@/lib/api/response'

const validBody = {
  name: '  Pedro Silva  ',
  company: ' N8FLOW ',
  email: ' PEDRO@EXAMPLE.COM ',
  phone: '(84) 99999-9999',
  interest: 'diagnostico',
  message: ' Contexto inicial ',
  website: '',
  attribution: {
    utmSource: 'google',
    utmMedium: null,
    utmCampaign: null,
    utmTerm: null,
    utmContent: null,
    landingPage: '/contato?utm_source=google',
  },
}

function dependencies(adapter: DiagnosisAdapter, limit = 5) {
  return {
    adapter,
    rateLimit: new MemoryRateLimit(limit, 60_000),
    idempotency: new MemoryIdempotency<ApiSuccess<DiagnosisSuccessData>>(60_000),
  }
}

describe('diagnosisSchema', () => {
  it('normaliza e-mail, telefone e espaços', () => {
    const parsed = diagnosisSchema.parse(validBody)

    expect(parsed.email).toBe('pedro@example.com')
    expect(parsed.phone).toBe('84999999999')
    expect(parsed.name).toBe('Pedro Silva')
  })

  it('rejeita propriedades inesperadas', () => {
    const result = diagnosisSchema.safeParse({ ...validBody, admin: true })
    expect(result.success).toBe(false)
  })
})

describe('processDiagnosis', () => {
  it('encaminha um formulário válido ao adapter sem o honeypot', async () => {
    const submit = vi.fn<DiagnosisAdapter['submit']>().mockResolvedValue()
    const result = await processDiagnosis({
      ...dependencies({ submit }),
      body: validBody,
      clientKey: 'client-1',
      idempotencyKey: 'valid-key-123456',
      requestId: 'request-1',
      now: new Date('2026-09-06T12:00:00.000Z'),
    })

    expect(result.status).toBe(201)
    expect(result.response.ok).toBe(true)
    expect(submit).toHaveBeenCalledOnce()
    expect(submit.mock.calls[0][0]).toMatchObject({
      requestId: 'request-1',
      idempotencyKey: 'valid-key-123456',
      payload: { email: 'pedro@example.com', phone: '84999999999' },
    })
    expect(submit.mock.calls[0][0].payload).not.toHaveProperty('website')
  })

  it('não chama a integração quando o formulário é inválido', async () => {
    const submit = vi.fn<DiagnosisAdapter['submit']>().mockResolvedValue()
    const result = await processDiagnosis({
      ...dependencies({ submit }),
      body: { ...validBody, email: 'invalido' },
      clientKey: 'client-2',
      idempotencyKey: 'valid-key-234567',
      requestId: 'request-2',
    })

    expect(result.status).toBe(422)
    expect(submit).not.toHaveBeenCalled()
  })

  it('aceita honeypot silenciosamente sem transmitir PII', async () => {
    const submit = vi.fn<DiagnosisAdapter['submit']>().mockResolvedValue()
    const result = await processDiagnosis({
      ...dependencies({ submit }),
      body: { ...validBody, website: 'https://spam.example' },
      clientKey: 'client-3',
      idempotencyKey: 'valid-key-345678',
      requestId: 'request-3',
    })

    expect(result.response.ok).toBe(true)
    expect(submit).not.toHaveBeenCalled()
  })

  it('não duplica um envio aceito com a mesma chave', async () => {
    const submit = vi.fn<DiagnosisAdapter['submit']>().mockResolvedValue()
    const deps = dependencies({ submit })
    const options = {
      ...deps,
      body: validBody,
      clientKey: 'client-4',
      idempotencyKey: 'valid-key-456789',
      requestId: 'request-4',
    }

    await processDiagnosis(options)
    const duplicate = await processDiagnosis(options)

    expect(duplicate.status).toBe(200)
    expect(submit).toHaveBeenCalledOnce()
  })

  it('limita tentativas repetidas do mesmo cliente', async () => {
    const submit = vi.fn<DiagnosisAdapter['submit']>().mockResolvedValue()
    const deps = dependencies({ submit }, 1)
    await processDiagnosis({
      ...deps,
      body: { ...validBody, email: 'invalido' },
      clientKey: 'client-5',
      idempotencyKey: 'valid-key-567890',
      requestId: 'request-5',
    })
    const limited = await processDiagnosis({
      ...deps,
      body: validBody,
      clientKey: 'client-5',
      idempotencyKey: 'valid-key-678901',
      requestId: 'request-6',
    })

    expect(limited.status).toBe(429)
    expect(limited.retryAfterSeconds).toBeGreaterThan(0)
    expect(submit).not.toHaveBeenCalled()
  })

  it('não confirma sucesso quando a entrega externa falha', async () => {
    const submit = vi
      .fn<DiagnosisAdapter['submit']>()
      .mockRejectedValue(new DiagnosisDeliveryError('DELIVERY_UNAVAILABLE'))
    const result = await processDiagnosis({
      ...dependencies({ submit }),
      body: validBody,
      clientKey: 'client-6',
      idempotencyKey: 'valid-key-789012',
      requestId: 'request-7',
    })

    expect(result.status).toBe(503)
    expect(result.response.ok).toBe(false)
  })
})
