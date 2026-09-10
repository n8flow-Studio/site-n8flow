'use client'

import Link from 'next/link'
import { useEffect } from 'react'

/**
 * Error boundary de rota — exibido em erros de renderização no lado cliente.
 * Mostra requestId (quando disponível) sem revelar stack trace.
 *
 * Referência: docs/arquitetura-tecnica/04-seguranca-e-privacidade.md §4.7
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Em Fase 4: enviar para Sentry via adapter de observabilidade
    console.error('[Error Boundary]', error.digest ?? 'no-digest')
  }, [error])

  return (
    <div
      className="flex min-h-[80dvh] flex-col items-center justify-center px-5 text-center"
      role="main"
    >
      <h1
        className="mb-4 font-display text-2xl font-semibold md:text-3xl"
        style={{ color: 'var(--text-primary)' }}
      >
        Algo não funcionou como esperado.
      </h1>
      <p className="mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
        Tente novamente. Se o problema persistir, entre em contato.
        {error.digest && (
          <>
            {' '}
            Código:{' '}
            <code
              className="rounded px-1 py-0.5 text-sm"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
            >
              {error.digest}
            </code>
          </>
        )}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] px-6 font-semibold transition-colors duration-[var(--duration-fast)]"
          style={{ background: 'var(--action-primary)', color: 'var(--text-inverse)' }}
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border px-6 font-semibold transition-colors duration-[var(--duration-fast)]"
          style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  )
}
