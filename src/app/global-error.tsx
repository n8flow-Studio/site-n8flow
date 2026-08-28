'use client'

/**
 * Global error boundary — captura erros no layout raiz (incluindo layout.tsx).
 * Deve ser um Client Component minimal — sem imports pesados.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body
        style={{
          background: '#090d12',
          color: '#f7f8fa',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          textAlign: 'center',
          padding: '20px',
          margin: 0,
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Ocorreu um erro inesperado.
        </h1>
        <p style={{ color: '#b8bfcc', marginBottom: '1.5rem', maxWidth: '360px' }}>
          Tente novamente.{' '}
          {error.digest && (
            <span>
              Código: <code style={{ fontSize: '0.875rem' }}>{error.digest}</code>
            </span>
          )}
        </p>
        <button
          onClick={reset}
          style={{
            background: '#00f5a0',
            color: '#090d12',
            border: 'none',
            borderRadius: '10px',
            padding: '12px 24px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Tentar novamente
        </button>
      </body>
    </html>
  )
}
