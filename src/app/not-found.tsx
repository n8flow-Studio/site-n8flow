import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página não encontrada | N8FLOW',
  robots: { index: false, follow: false },
}

/**
 * Página 404 — Copy v1.0 (docs/copy-conteudo/03-formularios-faqs-ctas.md)
 * CTA: Voltar para a Home.
 */
export default function NotFound() {
  return (
    <div
      className="flex min-h-[80dvh] flex-col items-center justify-center px-5 text-center"
      role="main"
    >
      <p
        className="mb-3 font-display text-8xl font-bold tracking-tight"
        style={{ color: 'var(--action-primary)', letterSpacing: '-0.03em' }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        className="mb-4 font-display text-2xl font-semibold md:text-3xl"
        style={{ color: 'var(--text-primary)' }}
      >
        Esta página não foi encontrada.
      </h1>
      <p className="mb-8 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
        O endereço pode estar incorreto ou o conteúdo foi movido.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] px-6 font-semibold transition-colors duration-[var(--duration-fast)]"
        style={{ background: 'var(--action-primary)', color: 'var(--text-inverse)' }}
      >
        Voltar para a Home
      </Link>
    </div>
  )
}
