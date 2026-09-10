import { afterEach, describe, expect, it, vi } from 'vitest'
vi.mock('server-only', () => ({}))
afterEach(() => { vi.unstubAllEnvs(); vi.restoreAllMocks(); vi.resetModules() })
async function readEnv(values: Record<string,string>) {
  vi.resetModules()
  for (const key of ['SUPABASE_URL','SUPABASE_SECRET_KEY','LEAD_RATE_LIMIT_SECRET','N8N_WEBHOOK_URL','NEXT_PUBLIC_SITE_URL']) vi.stubEnv(key,'')
  vi.stubEnv('LEAD_CAPTURE_ENABLED','false')
  vi.stubEnv('NODE_ENV','test')
  vi.stubEnv('VERCEL_ENV','development')
  for (const [key,value] of Object.entries(values)) vi.stubEnv(key,value)
  vi.spyOn(console,'error').mockImplementation(()=>{})
  return (await import('@/lib/env')).env
}
describe('configuração real da captação', () => {
  it('aceita env.example vazio com captação desativada', async () => {
    expect((await readEnv({})).SUPABASE_URL).toBeUndefined()
  })
  it('não permite ativação sem configuração', async () => {
    await expect(readEnv({LEAD_CAPTURE_ENABLED:'true'})).rejects.toThrow('Configuração')
  })
  const valid = {LEAD_CAPTURE_ENABLED:'true',SUPABASE_URL:'https://test.supabase.co',SUPABASE_SECRET_KEY:'sb_secret_test-only-not-a-real-key',LEAD_RATE_LIMIT_SECRET:'x'.repeat(32),NEXT_PUBLIC_SITE_URL:'http://127.0.0.1:3010'}
  it('aceita configuração completa de sandbox', async () => { expect((await readEnv(valid)).LEAD_CAPTURE_ENABLED).toBe('true') })
  it.each([{SUPABASE_URL:'http://test.supabase.co'},{SUPABASE_URL:'https://test.supabase.co/path'},{SUPABASE_SECRET_KEY:'sb_publishable_test'},{LEAD_RATE_LIMIT_SECRET:'short'}])('rejeita configuração insegura %j', async change => {
    await expect(readEnv({...valid,...change})).rejects.toThrow('Configuração')
  })
})
