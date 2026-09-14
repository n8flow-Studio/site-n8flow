import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { CaseCard } from '@/components/marketing/case-card'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Cases de Sucesso e Resultados | N8FLOW',
  description:
    'Conheça operações reais estruturadas pela N8FLOW com automação, IA, CRM e engenharia de crescimento.',
  pathname: '/cases',
})

export default async function CasesPage() {
  const cases = await contentRepository.listCases()

  return (
    <>
      <Hero
        eyebrow="Provas Reais"
        title="Resultados construídos com método e engenharia."
        description="Acreditamos em transparência. Apresentamos apenas cases de clientes com métricas e impactos de negócio comprovados."
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        {cases.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </div>
        ) : (
          /* Empty state honesto conforme governança do Design System */
          <div className="mx-auto max-w-2xl py-12 text-center">
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 shadow-xs sm:p-12">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgb(0_245_160/0.2)] bg-[rgb(0_245_160/0.08)] text-[var(--action-primary)] shadow-xs">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h2 className="display-readable font-display text-2xl font-bold text-[var(--text-primary)]">
                Publicação de Cases em Andamento
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                A N8FLOW não utiliza depoimentos forjados ou métricas fictícias. Estamos
                consolidando e auditando os dados das primeiras operações assistidas para publicação
                oficial.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/servicos"
                  className="inline-flex h-11 items-center justify-center rounded-sm bg-[var(--text-primary)] px-6 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)]"
                >
                  Conhecer nossas soluções
                </Link>
                <Link
                  href="/metodo"
                  className="inline-flex h-11 items-center justify-center rounded-sm border border-[var(--border-strong)] px-6 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
                >
                  Conhecer nosso método
                </Link>
              </div>
            </div>
          </div>
        )}
      </Section>

      <CtaSection
        title="Quer ser o próximo case de sucesso da N8FLOW?"
        description="Agende uma sessão diagnóstica com nossos consultores para avaliar o potencial de automação e escala da sua empresa."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
      />
    </>
  )
}
