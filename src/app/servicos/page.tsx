import type { Metadata } from 'next'
import { Globe, Bot, Users, BarChart3 } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ServiceCard } from '@/components/marketing/service-card'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Soluções em Growth, Automação e Tecnologia | N8FLOW',
  description:
    'Estruture uma operação de Growth conectada de ponta a ponta: sites de alta conversão, automação inteligente no n8n, CRM com WhatsApp Oficial e tráfego pago.',
  pathname: '/servicos',
})

export default async function ServicesPage() {
  const services = await contentRepository.listServices()

  const serviceIcons = [
    <Globe key="web" className="h-6 w-6" />,
    <Bot key="ai" className="h-6 w-6" />,
    <Users key="crm" className="h-6 w-6" />,
    <BarChart3 key="data" className="h-6 w-6" />,
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Auditoria & Diagnóstico',
      desc: 'Mapeamos o fluxo atual de leads, canais de aquisição, uso do CRM e gargalos operacionais da sua empresa.',
    },
    {
      step: '02',
      title: 'Setup & Integração',
      desc: 'Implementamos a infraestrutura técnica: automações n8n, personalização do CRM, inteligência artificial e páginas.',
    },
    {
      step: '03',
      title: 'Acompanhamento & Otimização',
      desc: 'Monitoramos as métricas de conversão e ajustamos os fluxos para garantir escala e consistência de vendas.',
    },
  ]

  return (
    <>
      <Hero
        eyebrow="Assessoria B2B"
        title="Estruture uma operação de Growth conectada de ponta a ponta."
        description="A N8FLOW combina estratégia, experiência digital, automação, CRM, IA, tráfego e dados para integrar aquisição, atendimento e processo comercial."
        primaryAction={{
          label: 'Solicitar diagnóstico comercial',
          href: '/contato',
        }}
        variant="b2b"
      />

      {/* Grid de Soluções */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Nossos Pilares
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Uma máquina de vendas é um sistema, não uma ferramenta isolada.
          </h2>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Conheça as quatro frentes integradas de atuação da N8FLOW.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((srv, idx) => (
            <ServiceCard
              key={srv.slug}
              slug={srv.slug}
              title={srv.title}
              description={srv.summary}
              outcomes={srv.outcomes}
              icon={serviceIcons[idx % serviceIcons.length]}
            />
          ))}
        </div>
      </Section>

      {/* Processo Confirmado (Auditoria, Setup, Acompanhamento) */}
      <Section>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Como Trabalhamos
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Processo estruturado para implementação de alta precisão.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {processSteps.map((p) => (
            <Card key={p.step} variant="surface" padding="lg" className="relative">
              <span className="font-display text-4xl font-bold text-[var(--action-primary)] opacity-40">
                {p.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                {p.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <CtaSection
        title="Quer entender onde sua operação está perdendo vendas?"
        description="Agende uma conversa estratégica com nossos especialistas e receba um diagnóstico das oportunidades de automação e crescimento."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
      />
    </>
  )
}
