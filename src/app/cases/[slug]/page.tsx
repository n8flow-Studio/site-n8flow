import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Target, Cpu, TrendingUp } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const cases = await contentRepository.listCases()
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const caseItem = await contentRepository.getCase(slug)

  if (!caseItem) {
    return { title: 'Case não encontrado | N8FLOW' }
  }

  return buildMetadata({
    title: caseItem.seo.title,
    description: caseItem.seo.description,
    pathname: `/cases/${slug}`,
  })
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  const { slug } = await params
  const caseItem = await contentRepository.getCase(slug)

  if (!caseItem) {
    notFound()
  }

  return (
    <>
      <Container className="pt-8">
        <Breadcrumb
          items={[
            { label: 'Cases', href: '/cases' },
            { label: caseItem.title },
          ]}
        />
      </Container>

      <Hero
        eyebrow={caseItem.client || 'Case de Estudo'}
        title={caseItem.title}
        description={caseItem.summary}
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(110_68_255/0.1)] text-[var(--violet-700)]">
                <Target className="h-4 w-4" />
              </div>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                O Desafio
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {caseItem.challenge}
            </p>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(0_245_160/0.1)] text-[var(--action-primary)]">
                <Cpu className="h-4 w-4" />
              </div>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                A Abordagem Técnica
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {caseItem.approach}
            </p>
          </div>

          {caseItem.metrics && caseItem.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {caseItem.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-[var(--action-primary)]">
                      {m.value}
                    </span>
                    <TrendingUp className="h-4 w-4 text-[var(--action-primary)] opacity-80" />
                  </div>
                  <div className="text-xs font-medium text-[var(--text-muted)]">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      <CtaSection
        title="Quer estruturar sua operação com os mesmos resultados?"
        description="Fale com nosso time e descubra o que faz sentido implementar no seu negócio."
        primaryAction={{
          label: 'Diagnóstico gratuito',
          href: '/contato',
        }}
      />
    </>
  )
}
