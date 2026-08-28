import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'

/**
 * Footer — navegação, posicionamento e dados legais.
 *
 * Estrutura confirmada (UX §6.3, DS §4.18):
 * Resumo de posicionamento | Navegação | Soluções | Eventos | Comunidade |
 * Conteúdo | Contato | Redes sociais | Dados empresariais | Legais
 *
 * Dados PENDENTES (não inventar):
 * - e-mail, telefone, redes sociais → slots não publicados
 * - links de privacidade e termos → só publicar com documentos jurídicos válidos
 *
 * Dados CONFIRMADOS: nome legal, CNPJ, domínio.
 *
 * Referência: docs/copy-conteudo/02-paginas.md §Contato
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="mt-auto border-t bg-[var(--text-primary)] pt-14 pb-8 text-[var(--text-inverse)]"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Posicionamento */}
          <div className="lg:col-span-2">
            {/* Logo oficial */}
            <Link
              href="/"
              aria-label="N8FLOW — Página inicial"
              className="mb-5 inline-flex items-center"
            >
              <Image
                src="/brand/logo-dark.png"
                alt="N8FLOW"
                width={1024}
                height={783}
                className="block"
                style={{ width: '160px', height: 'auto' }}
              />
            </Link>
            <p className="mb-2 font-semibold text-[var(--text-inverse)]">
              Engenharia de Growth e Tecnologia
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--neutral-300)]">
              Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações
              conectadas e orientadas a crescimento.
            </p>

            {/* Redes sociais — PENDENTE (não publicar sem canais confirmados) */}
            {/* TODO: adicionar links quando canais oficiais forem confirmados */}
          </div>

          {/* Soluções */}
          <div>
            <p className="mb-4 text-sm font-semibold text-[var(--text-inverse)]">Soluções</p>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { label: 'Sites e Landing Pages', href: '/servicos/sites-e-landing-pages' },
                { label: 'Automação e IA', href: '/servicos/automacao-e-ia' },
                { label: 'CRM e Agentes', href: '/servicos/crm-e-agentes' },
                { label: 'Tráfego e Dados', href: '/servicos/trafego-e-dados' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-[var(--duration-fast)] hover:text-[var(--text-primary)]"
                    style={{ color: 'var(--neutral-300)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <p className="mb-4 text-sm font-semibold text-[var(--text-inverse)]">N8FLOW</p>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { label: 'Eventos', href: '/eventos' },
                { label: 'Comunidade', href: '/comunidade' },
                { label: 'Cases', href: '/cases' },
                { label: 'Conteúdos', href: '/blog' },
                { label: 'Sobre', href: '/sobre' },
                { label: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-[var(--duration-fast)] hover:text-[var(--text-primary)]"
                    style={{ color: 'var(--neutral-300)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé legal */}
        <div
          className="mt-10 flex flex-col items-start gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgb(255 255 255 / 0.16)', color: 'var(--neutral-400)' }}
        >
          <div className="space-y-1">
            <p>{siteConfig.legalName}</p>
            <p>CNPJ: {siteConfig.cnpj}</p>
            <p>
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
          </div>

          {/* Links legais — PENDENTE (publicar somente com documentos jurídicos válidos) */}
          {/* TODO: descomentar quando privacidade e termos estiverem aprovados */}
          {/*
          <nav aria-label="Links legais">
            <ul className="flex gap-4" role="list">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--text-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          */}
        </div>
      </Container>
    </footer>
  )
}
