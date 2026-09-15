/**
 * Skip link — acessibilidade WCAG 2.2 AA (DS §6.3)
 * Permite usuários de teclado e leitores de tela pular direto ao conteúdo.
 * Visível apenas no foco — não interfere no design.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--z-toast)] focus:rounded-[var(--radius-md)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      style={{
        background: 'var(--action-primary)',
        color: 'var(--text-inverse)',
      }}
    >
      Ir para o conteúdo principal
    </a>
  )
}
