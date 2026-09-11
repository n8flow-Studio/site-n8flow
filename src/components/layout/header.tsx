import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'
import { MobileNav } from '@/components/layout/mobile-nav'

/**
 * Header — navegação principal.
 *
 * Estrutura confirmada (UX §6.1, DS §4.16):
 * Logo | Soluções | Método | Cases | Conteúdos | Sobre | CTA
 */
export function Header() {
  return (
    <header
      className="sticky top-0 z-[var(--z-sticky)] border-b"
      style={{
        background: 'var(--bg-canvas)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <Container as="nav" aria-label="Navegação principal">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          {/* Logo oficial da marca */}
          <Link
            href="/"
            aria-label="N8FLOW — Página inicial"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/brand/logo.png"
              alt="N8FLOW"
              width={1024}
              height={783}
              sizes="64px"
              className="block"
              style={{ width: '64px', height: 'auto' }}
              preload
            />
          </Link>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
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
              href="/contato"
              className="hidden min-h-11 items-center rounded-sm border border-[var(--text-primary)] bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)] lg:inline-flex"
            >
              Solicitar diagnóstico
            </Link>

            {/* Menu mobile */}
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
