import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { EventCard } from '@/components/marketing/event-card'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Eventos e Imersões Presenciais | N8FLOW',
  description:
    'Aprenda a conectar Growth, tecnologia e vendas. Encontros presenciais práticos para o mercado imobiliário no Seahub Sebrae.',
  pathname: '/eventos',
})

export default async function EventsPage() {
  const events = await contentRepository.listEvents()

  return (
    <>
      <Hero
        eyebrow="Imersões Presenciais"
        title="Aprenda a conectar Growth, tecnologia e vendas."
        description="Encontros presenciais para corretores e profissionais do mercado imobiliário que querem aplicar IA, CRM, aquisição e automação com clareza e método."
        primaryAction={{
          label: 'Ver próxima edição',
          href: '#eventos-disponiveis',
        }}
      />

      {/* Grid de Eventos */}
      <Section id="eventos-disponiveis" className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Calendário Oficial
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Edições abertas para inscrição
          </h2>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Turmas reduzidas para garantir interação prática e resolução de dúvidas.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {events.map((evt) => (
            <EventCard
              key={evt.id}
              id={evt.id}
              slug={evt.slug}
              title={evt.title}
              summary={evt.summary}
              status={evt.status}
              startsAt={evt.startsAt}
              venue={evt.venue}
              address={evt.address}
              price={evt.price}
              capacity={evt.capacity}
              featured
            />
          ))}
        </div>
      </Section>

      {/* Para quem é o evento */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Para quem são os encontros N8FLOW?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card variant="surface" padding="lg">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)]" />
                Corretores Autônomos
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Que desejam parar de perder tempo com tarefas manuais e querem usar IA e WhatsApp para qualificar leads e agendar mais visitas.
              </p>
            </Card>

            <Card variant="surface" padding="lg">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)]" />
                Gestores e Imobiliárias
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Que precisam de processos comerciais previsíveis, CRM ativo e campanhas de aquisição que tragam retorno sobre o investimento.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Quer levar a imersão N8FLOW para sua imobiliária?"
        description="Realizamos também workshops in-company customizados para equipes comerciais."
        primaryAction={{
          label: 'Falar sobre evento in-company',
          href: '/contato',
        }}
      />
    </>
  )
}
