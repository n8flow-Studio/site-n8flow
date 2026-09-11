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
const optionalText = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().optional(),
)
const optionalUrl = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().url().optional(),
)
const envSchema = z
  .object({
    // Públicas
    NEXT_PUBLIC_SITE_URL: optionalUrl,
    NEXT_PUBLIC_GTM_ID: z.string().optional(),
    NEXT_PUBLIC_GA_ID: z.string().optional(),
    NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),

    // Server-only — integrações
    N8N_WEBHOOK_URL: optionalUrl,
    N8N_WEBHOOK_SECRET: z.string().optional(),

    SUPABASE_URL: optionalUrl,
    SUPABASE_SECRET_KEY: optionalText,
    LEAD_RATE_LIMIT_SECRET: optionalText,
    LEAD_CAPTURE_ENABLED: z.enum(['true', 'false']).default('false'),
    VERCEL: optionalText,

    // Ambiente Vercel
    VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  })
  .superRefine((value, ctx) => {
    if (value.LEAD_CAPTURE_ENABLED !== 'true') return
    for (const field of [
      'SUPABASE_URL',
      'SUPABASE_SECRET_KEY',
      'LEAD_RATE_LIMIT_SECRET',
      'NEXT_PUBLIC_SITE_URL',
    ] as const) {
      if (!value[field])
        ctx.addIssue({
          code: 'custom',
          path: [field],
          message: 'Obrigatório para ativar captação.',
        })
    }
    if (value.SUPABASE_URL) {
      const url = new URL(value.SUPABASE_URL)
      if (
        url.protocol !== 'https:' ||
        url.pathname !== '/' ||
        url.search ||
        url.hash ||
        url.username ||
        url.password
      ) {
        ctx.addIssue({
          code: 'custom',
          path: ['SUPABASE_URL'],
          message: 'Informe a origem HTTPS do projeto, sem caminho ou credenciais.',
        })
      }
    }
    if (value.SUPABASE_SECRET_KEY && !value.SUPABASE_SECRET_KEY.startsWith('sb_secret_')) {
      ctx.addIssue({
        code: 'custom',
        path: ['SUPABASE_SECRET_KEY'],
        message: 'Use uma secret key Supabase, não uma chave pública.',
      })
    }
    if (value.LEAD_RATE_LIMIT_SECRET && value.LEAD_RATE_LIMIT_SECRET.length < 32) {
      ctx.addIssue({
        code: 'custom',
        path: ['LEAD_RATE_LIMIT_SECRET'],
        message: 'Use segredo aleatório de pelo menos 32 caracteres.',
      })
    }
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

// Validação extra em produção na Vercel
if (parsed.data.VERCEL_ENV === 'production') {
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
