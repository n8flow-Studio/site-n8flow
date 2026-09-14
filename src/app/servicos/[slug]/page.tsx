import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2, AlertTriangle, Layers, XCircle, Workflow, Cpu, Sparkles, ShieldCheck, Database, Gauge, Zap } from 'lucide-react'
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

const capabilityIcons = [Workflow, Cpu, Sparkles, ShieldCheck, Database, Gauge, Zap, Layers]

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
        eyebrow="Solução"
        title={service.title}
        description={service.summary}
        primaryAction={{
          label: 'Diagnóstico gratuito',
          href: '/contato',
        }}
        variant="b2b"
      />

      {/* Problemas vs Resultados */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problemas */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] border-l-4 border-l-[var(--red-400)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(255_100_124/0.12)] text-[var(--status-error)]">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Gargalos relacionados
              </h3>
            </div>
            <ul className="space-y-3.5 text-sm text-[var(--text-secondary)]">
              {service.problems.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--status-error)]" aria-hidden="true" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultados */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] border-l-4 border-l-[var(--green-500)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(0_245_160/0.12)] text-[var(--action-primary)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Efeitos buscados
              </h3>
            </div>
            <ul className="space-y-3.5 text-sm text-[var(--text-secondary)]">
              {service.outcomes.map((o, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--action-primary)]" aria-hidden="true" />
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capacidades Técnicas */}
      <Section>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="brand" size="md" className="mb-3">
            Capacidades aplicáveis
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Recursos combinados a partir do diagnóstico.
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {service.capabilities.map((cap, idx) => {
            const CapIcon = capabilityIcons[idx % capabilityIcons.length]
            return (
              <div
                key={idx}
                className="group relative flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-xs"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgb(0_245_160/0.25)] bg-[rgb(0_245_160/0.1)] text-[var(--action-primary)] transition-transform duration-200 group-hover:scale-105">
                  <CapIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="mt-1 text-sm font-medium leading-relaxed text-[var(--text-primary)]">{cap}</span>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Processo da Solução */}
      {service.process && service.process.length > 0 && (
        <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Etapas de implementação
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-xs"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--text-muted)]">
                      Passo {idx + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--action-primary)] opacity-80 transition-transform group-hover:scale-125" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--violet-700)]">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
                </div>
              </div>
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
        title="Pronto para descobrir o que o seu negócio precisa agora?"
        description="No diagnóstico gratuito, entendemos o contexto antes de definir escopo, canais ou ferramentas."
        primaryAction={{
          label: 'Diagnóstico gratuito',
          href: '/contato',
        }}
      />
    </>
  )
}
