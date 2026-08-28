import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'
import { MobileNav } from '@/components/layout/mobile-nav'

/**
 * Header — navegação principal.
 *
 * Estrutura confirmada (UX §6.1, DS §4.16):
 * Logo | Soluções | Comunidade | Eventos | Cases | Conteúdos | CTA
 */
export function Header() {
  return (
    <header
      className="sticky top-0 z-[var(--z-sticky)] border-b"
      style={{
        background: 'rgba(9, 13, 18, 0.85)',
        borderColor: 'var(--border-subtle)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container as="nav" aria-label="Navegação principal">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          {/* Logo — identificador oficial da marca */}
          <Link
            href="/"
            aria-label="N8FLOW — Página inicial"
            className="flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            <span className="text-[var(--action-primary)]">N8</span>
            <span>FLOW</span>
          </Link>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-[var(--radius-sm)] px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA header & Mobile Nav */}
          <div className="flex items-center gap-3">
            <Link
              href="/eventos"
              className="hidden rounded-[var(--radius-md)] bg-[var(--action-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--action-primary-hover)] md:inline-flex"
            >
              Próximo evento
            </Link>

            {/* Menu mobile */}
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
