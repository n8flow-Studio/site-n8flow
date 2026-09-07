import { describe, expect, it, vi } from 'vitest'
import { handleLeadSubmission, readLimitedBody } from '@/server/leads/handle-submission'
import { LeadStoreError, type LeadStore } from '@/server/leads/store'
import { normalizeAttribution } from '@/lib/validation/attribution'

const body = {
  name: 'Teste',
  company: 'Empresa teste',
  email: 'lead@example.com',
  phone: '(84) 99999-9999',
  interest: 'diagnostico',
  message: '',
  website: '',
}
const request = (payload: unknown = body, headers: Record<string, string> = {}) =>
  new Request('https://n8flow.com.br/api/leads/diagnostico', {
    method: 'POST',
    headers: {
      origin: 'https://n8flow.com.br',
      'content-type': 'application/json',
      'idempotency-key': 'test-request-key-0001',
      ...headers,
    },
    body: JSON.stringify(payload),
  })
function setup() {
  const store: LeadStore = {
    checkRateLimit: vi.fn().mockResolvedValue({ allowed: true, retryAfterSeconds: 0 }),
    save: vi.fn().mockResolvedValue({ requestId: 'receipt-1', duplicate: false }),
  }
  const options = {
    getStore: () => store,
    origin: 'https://n8flow.com.br',
    hashSecret: 'x'.repeat(32),
    vercel: false,
    environment: 'test',
    log: vi.fn(),
  }
  return { store, options }
}
describe('captação persistente', () => {
  it('normaliza e confirma apenas após gravação', async () => {
    const { store, options } = setup()
    const result = await handleLeadSubmission(request(), options)
    expect(result.status).toBe(201)
    expect(store.save).toHaveBeenCalledWith(
      expect.objectContaining({ payload: expect.objectContaining({ phone: '84999999999' }) }),
    )
    expect(vi.mocked(store.save).mock.calls[0][0].payload).not.toHaveProperty('website')
    expect(result.headers.get('cache-control')).toBe('no-store')
    expect(JSON.stringify(options.log.mock.calls)).not.toContain(body.email)
  })
  it.each(['UNAVAILABLE', 'TIMEOUT', 'CONFLICT'] as const)('falha segura: %s', async (code) => {
    const { store, options } = setup()
    vi.mocked(store.save).mockRejectedValue(new LeadStoreError(code))
    const result = await handleLeadSubmission(request(), options)
    expect(result.status).toBe({ UNAVAILABLE: 503, TIMEOUT: 504, CONFLICT: 409 }[code])
    expect((await result.json()).ok).toBe(false)
  })
  it('duplicata confirmada pelo banco retorna recibo anterior', async () => {
    const { store, options } = setup()
    vi.mocked(store.save).mockResolvedValue({ requestId: 'receipt-original', duplicate: true })
    const result = await handleLeadSubmission(request(), options)
    expect(result.status).toBe(200)
    expect((await result.json()).requestId).toBe('receipt-original')
  })
  it.each([
    { email: 'inválido' },
    { phone: 'abc84999999999' },
    { admin: true },
    { website: 'spam' },
  ])('rejeita entrada inválida sem gravar: %j', async (invalid) => {
    const { store, options } = setup()
    expect((await handleLeadSubmission(request({ ...body, ...invalid }), options)).status).toBe(422)
    expect(store.save).not.toHaveBeenCalled()
  })
  it.each([
    { origin: 'https://evil.example' },
    { origin: 'null' },
    { origin: 'http://n8flow.com.br' },
  ])('bloqueia origem: %j', async (headers) => {
    const { store, options } = setup()
    expect((await handleLeadSubmission(request(body, headers), options)).status).toBe(403)
    expect(store.save).not.toHaveBeenCalled()
  })
  it('bloqueia envio nativo sem JS, sem transportar PII na URL', async () => {
    const { store, options } = setup()
    expect(
      (
        await handleLeadSubmission(
          request(body, { 'content-type': 'application/x-www-form-urlencoded' }),
          options,
        )
      ).status,
    ).toBe(415)
    expect(store.save).not.toHaveBeenCalled()
  })
  it('limite distribuído bloqueia a gravação e informa retry', async () => {
    const { store, options } = setup()
    vi.mocked(store.checkRateLimit).mockResolvedValue({ allowed: false, retryAfterSeconds: 60 })
    const result = await handleLeadSubmission(request(), options)
    expect(result.status).toBe(429)
    expect(result.headers.get('retry-after')).toBe('60')
    expect(store.save).not.toHaveBeenCalled()
  })
  it('não aceita IP forjado fora do proxy Vercel', async () => {
    const { store, options } = setup()
    await handleLeadSubmission(request(body, { 'x-forwarded-for': '1.2.3.4' }), options)
    await handleLeadSubmission(request(body, { 'x-forwarded-for': '9.9.9.9' }), options)
    expect(vi.mocked(store.checkRateLimit).mock.calls[0]).toEqual(
      vi.mocked(store.checkRateLimit).mock.calls[1],
    )
  })
  it('Vercel exige IP válido fornecido pelo proxy', async () => {
    const { store, options } = setup()
    expect((await handleLeadSubmission(request(), { ...options, vercel: true })).status).toBe(503)
    expect(store.save).not.toHaveBeenCalled()
  })
  it('env/config ausente nunca usa mock', async () => {
    const { options } = setup()
    const result = await handleLeadSubmission(request(), {
      ...options,
      getStore: () => {
        throw new LeadStoreError('UNAVAILABLE')
      },
    })
    expect(result.status).toBe(503)
  })
})
describe('corpo limitado e atribuição', () => {
  it('rejeita corpo excessivo sem Content-Length', async () => {
    await expect(readLimitedBody(request({ message: 'x'.repeat(17000) }))).rejects.toMatchObject({
      status: 413,
    })
  })
  it('encerra leitura lenta', async () => {
    const stream = new ReadableStream<Uint8Array>({ start() {} })
    const req = new Request('https://example.com', {
      method: 'POST',
      body: stream,
      duplex: 'half',
    } as RequestInit)
    await expect(readLimitedBody(req, 16384, 10)).rejects.toMatchObject({ status: 408 })
  })
  it('remove query, valores inválidos e campanhas excessivas', () => {
    expect(
      normalizeAttribution({
        landingPage: '/contato?email=lead@example.com',
        utmSource: 'a'.repeat(300),
        utmCampaign: 'lead@example.com',
      }),
    ).toMatchObject({ landingPage: '/contato', utmSource: null, utmCampaign: null })
  })
})
