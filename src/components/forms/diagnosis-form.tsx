'use client'

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from 'react'
import { z } from 'zod'
import { CheckCircle2, RotateCcw, Send } from 'lucide-react'
import type { ApiResponse } from '@/lib/api/response'
import { track } from '@/lib/analytics/track'
import {
  diagnosisSchema,
  getDiagnosisFieldErrors,
  type DiagnosisFieldErrors,
} from '@/lib/validation/diagnosis'
import { Button } from '@/components/ui/button'
import { normalizeAttribution } from '@/lib/validation/attribution'
import { ATTRIBUTION_KEY } from './attribution-capture'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type DiagnosisResponse = ApiResponse<{ accepted: true }>
const responseSchema = z.discriminatedUnion('ok', [
  z.object({
    ok: z.literal(true),
    data: z.object({ accepted: z.literal(true) }),
    requestId: z.string(),
  }),
  z.object({
    ok: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string(),
      fieldErrors: z.record(z.string(), z.array(z.string())).optional(),
    }),
    requestId: z.string(),
  }),
])
const subscribe = () => () => {}

const fieldClassName =
  'min-h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] aria-invalid:border-[var(--status-error)]'

const labelClassName =
  'mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase'

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null

  return (
    <p id={id} className="mt-1.5 text-sm text-[var(--text-primary)]">
      {errors[0]}
    </p>
  )
}

function readAttribution() {
  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY)
    if (stored) return normalizeAttribution(JSON.parse(stored))
  } catch {
    /* Optional attribution never blocks a lead. */
  }
  const params = new URLSearchParams(window.location.search)
  return normalizeAttribution({
    utmSource: params.get('utm_source'),
    utmMedium: params.get('utm_medium'),
    utmCampaign: params.get('utm_campaign'),
    utmTerm: params.get('utm_term'),
    utmContent: params.get('utm_content'),
    landingPage: window.location.pathname,
  })
}

export function DiagnosisForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
  const [status, setStatus] = useState<Status>('idle')
  const [fieldErrors, setFieldErrors] = useState<DiagnosisFieldErrors>({})
  const [message, setMessage] = useState('')
  const [requestId, setRequestId] = useState('')
  const submission = useRef<{ key: string; body: string } | null>(null)
  const inFlight = useRef(false)
  const [changedSubmission, setChangedSubmission] = useState(false)
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  function focusFirstInvalidField(errors: DiagnosisFieldErrors) {
    const firstField = Object.keys(errors)[0]
    if (!firstField) return
    requestAnimationFrame(() => {
      const field = formRef.current?.elements.namedItem(firstField)
      if (field instanceof HTMLElement) field.focus()
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inFlight.current) return

    const form = new FormData(event.currentTarget)
    const body = {
      name: form.get('name'),
      company: form.get('company'),
      email: form.get('email'),
      phone: form.get('phone'),
      interest: form.get('interest'),
      message: form.get('message'),
      website: form.get('website'),
      attribution: readAttribution(),
    }
    const validated = diagnosisSchema.safeParse(body)

    if (!validated.success) {
      const errors = getDiagnosisFieldErrors(validated.error)
      setFieldErrors(errors)
      setMessage('Revise os campos destacados e tente novamente.')
      setStatus('error')
      focusFirstInvalidField(errors)
      return
    }

    const serialized = JSON.stringify(validated.data)
    if (submission.current && submission.current.body !== serialized) {
      setChangedSubmission(true)
      setMessage(
        'O envio anterior pode ter sido recebido. Para enviar dados diferentes, inicie um novo envio.',
      )
      setStatus('error')
      return
    }
    submission.current ??= { key: crypto.randomUUID(), body: serialized }
    inFlight.current = true

    setStatus('submitting')
    setFieldErrors({})
    setMessage('')
    setRequestId('')

    try {
      const response = await fetch('/api/leads/diagnostico', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'idempotency-key': submission.current.key,
        },
        body: submission.current.body,
        signal: AbortSignal.timeout(20_000),
      })
      const result: DiagnosisResponse = responseSchema.parse(await response.json())
      if (result.ok && !response.ok) throw new Error('Invalid response')

      if (!result.ok) {
        const errors = result.error.fieldErrors ?? {}
        setFieldErrors(errors)
        setMessage(result.error.message)
        setRequestId(result.requestId)
        setStatus('error')
        focusFirstInvalidField(errors)
        return
      }

      setRequestId(result.requestId)
      setStatus('success')
      formRef.current?.reset()
      submission.current = null
      try {
        track({ name: 'submit_diagnosis', formId: 'diagnosis-contact' })
      } catch {
        /* Telemetry must not reverse a confirmed receipt. */
      }
    } catch {
      setMessage(
        'Não foi possível enviar agora. Seus dados foram mantidos para uma nova tentativa.',
      )
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  if (status === 'success') {
    return (
      <div className="space-y-5" role="status" aria-live="polite">
        <CheckCircle2 className="h-9 w-9 text-[var(--green-700)]" aria-hidden="true" />
        <div>
          <h2
            ref={successRef}
            tabIndex={-1}
            className="font-display text-2xl font-bold text-[var(--text-primary)]"
          >
            Solicitação recebida
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            Informaremos o próximo passo pelos canais fornecidos.
          </p>
          <p className="mt-2 text-xs text-[var(--text-muted)]">Código: {requestId}</p>
        </div>
        <Button type="button" variant="outline" onClick={() => setStatus('idle')}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Enviar outra solicitação
        </Button>
      </div>
    )
  }

  const errorFor = (field: keyof DiagnosisFieldErrors) => fieldErrors[field]

  return (
    <form
      ref={formRef}
      method="post"
      action="/api/leads/diagnostico"
      className="space-y-4"
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="text-xs text-[var(--text-secondary)]">Campos com * são obrigatórios.</p>
      <noscript>
        <p>
          Ative o JavaScript para enviar este formulário. Nenhum dado será enviado sem sua
          confirmação.
        </p>
      </noscript>
      <div>
        <label htmlFor="name" className={labelClassName}>
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          placeholder="Seu nome"
          className={fieldClassName}
          aria-invalid={Boolean(errorFor('name'))}
          aria-describedby={errorFor('name') ? 'name-error' : undefined}
        />
        <FieldError id="name-error" errors={errorFor('name')} />
      </div>

      <div>
        <label htmlFor="company" className={labelClassName}>
          Empresa *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          maxLength={160}
          autoComplete="organization"
          placeholder="Nome da empresa"
          className={fieldClassName}
          aria-invalid={Boolean(errorFor('company'))}
          aria-describedby={errorFor('company') ? 'company-error' : undefined}
        />
        <FieldError id="company-error" errors={errorFor('company')} />
      </div>

      <div>
        <label htmlFor="email" className={labelClassName}>
          E-mail profissional *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          inputMode="email"
          placeholder="voce@suaempresa.com.br"
          className={fieldClassName}
          aria-invalid={Boolean(errorFor('email'))}
          aria-describedby={errorFor('email') ? 'email-error' : undefined}
        />
        <FieldError id="email-error" errors={errorFor('email')} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClassName}>
          WhatsApp / Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          maxLength={24}
          autoComplete="tel"
          inputMode="tel"
          placeholder="(00) 00000-0000"
          className={fieldClassName}
          aria-invalid={Boolean(errorFor('phone'))}
          aria-describedby={errorFor('phone') ? 'phone-error' : undefined}
        />
        <FieldError id="phone-error" errors={errorFor('phone')} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClassName}>
          Objetivo do contato
        </label>
        <select id="interest" name="interest" className={fieldClassName} defaultValue="diagnostico">
          <option value="diagnostico">Avaliar minha operação</option>
          <option value="parcerias">Parcerias</option>
          <option value="institucional">Assunto institucional</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Mensagem ou contexto da operação <span className="normal-case">(opcional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Conte resumidamente sobre o seu negócio e o desafio atual..."
          className={`${fieldClassName} min-h-30 resize-y py-3`}
          aria-invalid={Boolean(errorFor('message'))}
          aria-describedby={errorFor('message') ? 'message-error' : 'message-help'}
        />
        <p id="message-help" className="mt-1.5 text-xs text-[var(--text-muted)]">
          Não inclua senhas, credenciais ou outros dados sensíveis.
        </p>
        <FieldError id="message-error" errors={errorFor('message')} />
      </div>

      <div className="pointer-events-none absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {message ? (
        <div
          role="alert"
          className="border-l-2 border-[var(--status-error)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-secondary)]"
        >
          <p>{message}</p>
          {requestId ? (
            <p className="mt-1 text-xs text-[var(--text-muted)]">Código: {requestId}</p>
          ) : null}
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        loading={status === 'submitting'}
        loadingText="Enviando para análise..."
        disabled={!hydrated}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Enviar para análise
      </Button>
      {changedSubmission && (
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            submission.current = null
            setChangedSubmission(false)
            setMessage('Novo envio iniciado. Revise os dados antes de enviar.')
          }}
        >
          Iniciar novo envio
        </Button>
      )}
    </form>
  )
}
