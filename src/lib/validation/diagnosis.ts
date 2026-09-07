import { z } from 'zod'

const trimmedString = (label: string, max: number) =>
  z
    .string({ error: `Informe ${label}.` })
    .trim()
    .min(1, `Informe ${label}.`)
    .max(max, `${label} deve ter no máximo ${max} caracteres.`)

export const diagnosisInterestSchema = z.enum(['diagnostico', 'parcerias', 'institucional'])

export const diagnosisSchema = z
  .object({
    name: trimmedString('seu nome completo', 120),
    company: trimmedString('a empresa', 160),
    email: z
      .string({ error: 'Informe seu e-mail profissional.' })
      .trim()
      .min(1, 'Informe seu e-mail profissional.')
      .max(254, 'O e-mail deve ter no máximo 254 caracteres.')
      .email('Digite um e-mail válido.')
      .transform((value) => value.toLowerCase()),
    phone: z
      .string({ error: 'Informe seu WhatsApp ou telefone.' })
      .trim()
      .min(1, 'Informe seu WhatsApp ou telefone.')
      .max(24, 'O telefone deve ter no máximo 24 caracteres.')
      .refine((value) => value.replace(/\D/g, '').length >= 10, {
        message: 'Digite um WhatsApp válido com DDD.',
      })
      .transform((value) => value.replace(/\D/g, '')),
    interest: diagnosisInterestSchema.default('diagnostico'),
    message: z
      .string()
      .trim()
      .max(2000, 'A mensagem deve ter no máximo 2000 caracteres.')
      .default(''),
    website: z.string().max(200).default(''),
    attribution: z
      .object({
        utmSource: z.string().trim().max(100).nullable().default(null),
        utmMedium: z.string().trim().max(100).nullable().default(null),
        utmCampaign: z.string().trim().max(160).nullable().default(null),
        utmTerm: z.string().trim().max(160).nullable().default(null),
        utmContent: z.string().trim().max(160).nullable().default(null),
        landingPage: z.string().trim().max(500).default('/contato'),
      })
      .strict()
      .default({
        utmSource: null,
        utmMedium: null,
        utmCampaign: null,
        utmTerm: null,
        utmContent: null,
        landingPage: '/contato',
      }),
  })
  .strict()

export type DiagnosisInput = z.infer<typeof diagnosisSchema>
export type DiagnosisFieldErrors = Partial<Record<keyof DiagnosisInput, string[]>>

export function getDiagnosisFieldErrors(error: z.ZodError<DiagnosisInput>) {
  return error.flatten().fieldErrors as DiagnosisFieldErrors
}
