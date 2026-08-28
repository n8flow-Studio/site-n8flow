import { describe, it, expect } from 'vitest'

/**
 * Testes de smoke para validação de ambiente.
 *
 * env.ts importa 'server-only' que não funciona fora do contexto Next.js.
 * Aqui testamos os schemas Zod de forma isolada.
 */
import { z } from 'zod'

// Schema extraído para teste isolado (espelha src/lib/env.ts)
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  N8N_WEBHOOK_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

const productionRequiredSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
})

describe('env schema (Zod)', () => {
  it('aceita objeto vazio com defaults', () => {
    const result = envSchema.safeParse({})
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.NODE_ENV).toBe('development')
    }
  })

  it('rejeita URL inválida para NEXT_PUBLIC_SITE_URL', () => {
    const result = envSchema.safeParse({ NEXT_PUBLIC_SITE_URL: 'nao-e-uma-url' })
    expect(result.success).toBe(false)
  })

  it('aceita URL válida para NEXT_PUBLIC_SITE_URL', () => {
    const result = envSchema.safeParse({ NEXT_PUBLIC_SITE_URL: 'https://n8flow.com.br' })
    expect(result.success).toBe(true)
  })

  it('rejeita N8N_WEBHOOK_URL inválida', () => {
    const result = envSchema.safeParse({ N8N_WEBHOOK_URL: 'nao-e-uma-url' })
    expect(result.success).toBe(false)
  })

  it('schema de produção rejeita SITE_URL ausente', () => {
    const result = productionRequiredSchema.safeParse({})
    expect(result.success).toBe(false)
  })

  it('schema de produção rejeita SITE_URL inválida', () => {
    const result = productionRequiredSchema.safeParse({ NEXT_PUBLIC_SITE_URL: 'invalida' })
    expect(result.success).toBe(false)
  })

  it('schema de produção aceita SITE_URL válida', () => {
    const result = productionRequiredSchema.safeParse({
      NEXT_PUBLIC_SITE_URL: 'https://n8flow.com.br',
    })
    expect(result.success).toBe(true)
  })
})
