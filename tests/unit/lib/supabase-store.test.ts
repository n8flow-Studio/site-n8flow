import { describe, expect, it, vi } from 'vitest'
vi.mock('server-only', () => ({}))
import { SupabaseLeadStore } from '@/server/leads/supabase-store'
import { diagnosisSchema } from '@/lib/validation/diagnosis'

const { website: _website, ...payload } = diagnosisSchema.parse({
  name: 'Teste',
  company: 'Empresa',
  email: 'teste@example.com',
  phone: '84999999999',
})
const input = {
  key: 'test-request-000001',
  requestId: '00000000-0000-4000-8000-000000000001',
  payload,
}
describe('adapter Supabase', () => {
  it('envia RPC server-side sem redirects e valida recibo', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json({ requestId: input.requestId, duplicate: false }))
    const adapter = new SupabaseLeadStore(
      { url: 'https://sandbox.example', secretKey: 'test-only' },
      fetcher,
    )
    await expect(adapter.save(input)).resolves.toEqual({
      requestId: input.requestId,
      duplicate: false,
    })
    expect(fetcher.mock.calls[0][1]).toMatchObject({
      method: 'POST',
      cache: 'no-store',
      redirect: 'error',
      headers: { apikey: 'test-only' },
    })
  })
  it.each([{}, { accepted: true }, { requestId: 'bad', duplicate: false }])(
    'não aceita qualquer HTTP 200: %j',
    async (response) => {
      const adapter = new SupabaseLeadStore(
        { url: 'https://sandbox.example', secretKey: 'test-only' },
        vi.fn().mockResolvedValue(Response.json(response)),
      )
      await expect(adapter.save(input)).rejects.toMatchObject({ code: 'UNAVAILABLE' })
    },
  )
  it('mapeia conflito sem confirmar aceite', async () => {
    const adapter = new SupabaseLeadStore(
      { url: 'https://sandbox.example', secretKey: 'test-only' },
      vi.fn().mockResolvedValue(Response.json({ conflict: true })),
    )
    await expect(adapter.save(input)).rejects.toMatchObject({ code: 'CONFLICT' })
  })
})
