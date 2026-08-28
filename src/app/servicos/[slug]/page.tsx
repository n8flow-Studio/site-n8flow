import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2, AlertTriangle, Layers } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { FaqSection } from '@/components/marketing/faq-section'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await contentRepository.listServices()
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await contentRepository.getService(slug)

  if (!service) {
    return { title: 'Serviço não encontrado | N8FLOW' }
  }

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    pathname: `/servicos/${slug}`,
  })
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await contentRepository.getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Container className="pt-8">
        <Breadcrumb
          items={[
            { label: 'Soluções', href: '/servicos' },
            { label: service.title },
          ]}
        />
      </Container>

      {/* Hero do Serviço */}
      <Hero
        eyebrow="Solução Especializada"
        title={service.title}
        description={service.summary}
        primaryAction={{
          label: 'Solicitar diagnóstico desta solução',
          href: '/contato',
        }}
        variant="b2b"
      />

      {/* Problemas vs Resultados */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problemas */}
          <Card variant="surface" padding="lg">
            <div className="flex items-center gap-2 mb-4 text-[var(--status-error)] font-display text-lg font-bold">
              <AlertTriangle className="h-5 w-5" />
              <span>Gargalos e Dores Comuns</span>
            </div>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {service.problems.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--status-error)] font-bold mt-0.5">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Resultados */}
          <Card variant="featured" padding="lg">
            <div className="flex items-center gap-2 mb-4 text-[var(--action-primary)] font-display text-lg font-bold">
              <CheckCircle2 className="h-5 w-5" />
              <span>Resultados Esperados</span>
            </div>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {service.outcomes.map((o, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--action-primary)] font-bold mt-0.5">✓</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Capacidades Técnicas */}
      <Section>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            O Que Está Incluído
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Capacidades técnicas e entregáveis.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {service.capabilities.map((cap, idx) => (
            <Card key={idx} variant="surface" padding="md" className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(0_245_160/0.1)] text-[var(--action-primary)]">
                <Layers className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-[var(--text-primary)] mt-1.5">{cap}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Processo da Solução */}
      {service.process && service.process.length > 0 && (
        <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Etapas de implementação
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {service.process.map((step, idx) => (
              <Card key={idx} variant="surface" padding="lg">
                <span className="font-display text-2xl font-bold text-[var(--action-primary)] opacity-50">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{step.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ da Solução */}
      {service.faq && service.faq.length > 0 && (
        <FaqSection
          title="Dúvidas sobre esta solução"
          items={service.faq.map((f, i) => ({
            id: `faq-${i}`,
            title: f.question,
            content: f.answer,
          }))}
        />
      )}

      {/* CTA Final */}
      <CtaSection
        title={`Pronto para implementar ${service.title.toLowerCase()}?`}
        description="Converse com nossa equipe para desenharmos a estratégia personalizada para o seu modelo de negócio."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
      />
    </>
  )
}
