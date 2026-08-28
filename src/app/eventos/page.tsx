import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { EventCard } from '@/components/marketing/event-card'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Eventos N8FLOW',
  description: 'Eventos sobre Growth e tecnologia aplicada ao mercado imobiliário.',
  pathname: '/eventos',
})

export default async function EventsPage() {
  const events = await contentRepository.listEvents()
  return (
    <>
      <Hero
        eyebrow="Eventos N8FLOW"
        title="Educação para conectar Growth, tecnologia e vendas."
        description="Os encontros presenciais são a porta de entrada educacional da N8FLOW. Datas e disponibilidade são publicadas somente após confirmação."
        variant="editorial"
      />
      <section className="py-20 md:py-28" aria-labelledby="events-title">
        <Container>
          <h2 id="events-title" className="font-display text-4xl font-semibold tracking-[-0.04em]">
            Agenda
          </h2>
          {events.length > 0 ? (
            <div className="mt-10 grid gap-8">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-8 border-y border-[var(--border-strong)] py-10 md:grid-cols-2">
              <p className="font-display text-2xl font-semibold">
                Nenhuma edição publicada no momento.
              </p>
              <div>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  A próxima data será exibida aqui quando agenda, disponibilidade e informações
                  práticas estiverem confirmadas.
                </p>
                <Link
                  href="/sobre"
                  className="mt-6 inline-flex items-center gap-2 border-b border-[var(--text-primary)] pb-1 text-sm font-semibold"
                >
                  Conhecer a N8FLOW <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
