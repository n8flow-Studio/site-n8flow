import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'

export const metadata: Metadata = buildMetadata({
  title: 'Comunidade N8FLOW',
  description: 'Conheça a proposta da Comunidade N8FLOW.',
  pathname: '/comunidade',
  noIndex: true,
})

export default function CommunityPage() {
  return (
    <>
      <Hero
        eyebrow="Comunidade N8FLOW"
        title="Um espaço de acompanhamento em construção."
        description="A proposta da comunidade está sendo estruturada. Formato, frequência, plataforma, cobrança e regras ainda dependem de validação antes da publicação da oferta."
        variant="editorial"
      />
      <section className="py-20 md:py-28" aria-labelledby="community-status">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12">
            <h2
              id="community-status"
              className="font-display text-4xl font-semibold tracking-[-0.04em] lg:col-span-7"
            >
              Sem promessas antes da operação estar definida.
            </h2>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                Networking, conhecimento, templates, suporte, aulas e encontros online fazem parte
                da proposta inicial. Os detalhes serão publicados somente quando estiverem
                aprovados.
              </p>
              <Link
                href="/sobre"
                className="mt-7 inline-flex items-center gap-2 border-b border-[var(--text-primary)] pb-1 text-sm font-semibold"
              >
                Conhecer a N8FLOW <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
