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
          <div className="mx-auto max-w-2xl text-center py-12">
            <Card variant="outline" padding="lg" className="border-dashed">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-elevated)] text-[var(--action-primary)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Publicação de Cases em Andamento
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                A N8FLOW não utiliza depoimentos forjados ou métricas fictícias. Estamos consolidando e auditando os dados das primeiras operações assistidas para publicação oficial.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/servicos"
                  className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] px-6 text-sm font-semibold text-[var(--text-inverse)] hover:bg-[var(--action-primary-hover)]"
                >
                  Conhecer nossas soluções
                </Link>
                <Link
                  href="/eventos"
                  className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] px-6 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                >
                  Participar do evento
                </Link>
              </div>
            </Card>
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
