/**
 * Validação tipada de variáveis de ambiente.
 *
 * Importar apenas em módulos server-side. Nunca em Client Components.
 * Proteção por 'server-only' garante que o módulo não entre no bundle cliente.
 *
 * Referência: docs/arquitetura-tecnica/04-seguranca-e-privacidade.md §4.4
 */
import 'server-only'
import { z } from 'zod'

// ---------------------------------------------------------------------------
// Schema de variáveis de ambiente
// ---------------------------------------------------------------------------
const envSchema = z.object({
  // Públicas
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),

  // Server-only — integrações
  N8N_WEBHOOK_URL: z.string().url().optional(),
  N8N_WEBHOOK_SECRET: z.string().optional(),

  // Ambiente Vercel
  VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

// ---------------------------------------------------------------------------
// Variáveis que são OBRIGATÓRIAS em produção
// (validadas separadamente para não bloquear dev local)
// ---------------------------------------------------------------------------
const productionRequiredSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url({
    message: 'NEXT_PUBLIC_SITE_URL deve ser uma URL válida em produção',
  }),
})

// ---------------------------------------------------------------------------
// Parse e validação
// ---------------------------------------------------------------------------
const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Variáveis de ambiente inválidas:', parsed.error.flatten().fieldErrors)
  throw new Error('Configuração de ambiente inválida. Verifique .env.example')
}

// Validação extra em produção
if (parsed.data.NODE_ENV === 'production' || parsed.data.VERCEL_ENV === 'production') {
  const prodParsed = productionRequiredSchema.safeParse(process.env)
  if (!prodParsed.success) {
    console.error(
      '❌ Variáveis obrigatórias em produção ausentes:',
      prodParsed.error.flatten().fieldErrors,
    )
    throw new Error('Variáveis de produção faltando. Verifique o dashboard da Vercel.')
  }
}

export const env = parsed.data
