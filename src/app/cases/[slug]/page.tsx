import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
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
          <Card variant="surface" padding="lg">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
              O Desafio
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {caseItem.challenge}
            </p>
          </Card>

          <Card variant="surface" padding="lg">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
              A Abordagem Técnica
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {caseItem.approach}
            </p>
          </Card>

          {caseItem.metrics && caseItem.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {caseItem.metrics.map((m, idx) => (
                <Card key={idx} variant="featured" padding="md">
                  <div className="font-display text-2xl font-bold text-[var(--action-primary)]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">{m.label}</div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Section>

      <CtaSection
        title="Quer estruturar sua operação com os mesmos resultados?"
        description="Fale com nosso time de engenharia de Growth e descubra o plano ideal."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
      />
    </>
  )
}
