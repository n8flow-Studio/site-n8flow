import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, Users, Ticket, CheckCircle2, ShieldCheck } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { contentRepository } from '@/lib/content/repository'
import { LeadFormTrigger } from '@/components/forms/lead-form-dialog'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await contentRepository.listEvents()
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await contentRepository.getEvent(slug)

  if (!event) {
    return { title: 'Evento não encontrado | N8FLOW' }
  }

  return buildMetadata({
    title: event.seo.title,
    description: event.seo.description,
    pathname: `/eventos/${slug}`,
  })
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await contentRepository.getEvent(slug)

  if (!event) {
    notFound()
  }

  const isSoldOut = event.status === 'sold_out'
  const isClosed = event.status === 'closed'

  return (
    <>
      <Container className="pt-8">
        <Breadcrumb items={[{ label: 'Eventos', href: '/eventos' }, { label: event.title }]} />
      </Container>

      {/* Hero do Evento */}
      <Hero
        eyebrow="Imersão Presencial Exclusiva"
        title={event.title}
        description={event.summary}
        primaryAction={{
          label: isSoldOut
            ? 'Vagas Esgotadas'
            : isClosed
              ? 'Evento Encerrado'
              : 'Garantir minha vaga presencial',
          href: '#inscricao',
        }}
        variant="landing"
      />

      {/* Detalhes & Inscrição */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Conteúdo Programático */}
          <div className="space-y-8 lg:col-span-7">
            <div>
              <Badge variant="brand" size="md" className="mb-3">
                Metodologia Prática
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                O que você vai aprender e aplicar no encontro:
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              <Card variant="surface" padding="md">
                <h3 className="font-display mb-2 flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)]" />
                  1. Arquitetura da Máquina de Vendas
                </h3>
                <p>
                  Como integrar seus anúncios no Meta/Google, landing page, automação no n8n e CRM
                  em uma esteira única sem perda de dados.
                </p>
              </Card>

              <Card variant="surface" padding="md">
                <h3 className="font-display mb-2 flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)]" />
                  2. Atendimento Imediato com Agentes de IA
                </h3>
                <p>
                  Demonstração em tempo real de triagem inteligente e qualificação de clientes no
                  WhatsApp Oficial antes do encaminhamento ao corretor.
                </p>
              </Card>

              <Card variant="surface" padding="md">
                <h3 className="font-display mb-2 flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)]" />
                  3. Gestão e Acompanhamento no CRM
                </h3>
                <p>
                  Funis comerciais de alta conversão, réguas automáticas de acompanhamento
                  pós-visita e prevenção de perda de negócios.
                </p>
              </Card>
            </div>
          </div>

          {/* Card de Inscrição / Checkout */}
          <div id="inscricao" className="lg:col-span-5">
            <Card variant="featured" padding="lg" className="sticky top-28 bg-[var(--bg-surface)]">
              <div className="mb-6 flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <Badge variant={isSoldOut ? 'error' : isClosed ? 'neutral' : 'success'} dot>
                  {isSoldOut ? 'Esgotado' : isClosed ? 'Encerrado' : 'Vagas Abertas'}
                </Badge>
                <span className="text-xs text-[var(--text-muted)]">Lote Oficial</span>
              </div>

              {event.price && (
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                    Investimento
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm text-[var(--text-secondary)]">R$</span>
                    <span className="font-display text-5xl font-bold text-[var(--action-primary)]">
                      {event.price}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">/ participante</span>
                  </div>
                </div>
              )}

              {/* Informações confirmadas de local e formato */}
              <div className="space-y-3 border-y border-[var(--border-subtle)] py-4 text-xs text-[var(--text-secondary)]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--action-primary)]" />
                  <div>
                    <strong className="text-[var(--text-primary)]">{event.venue}</strong>
                    <p className="text-[var(--text-muted)]">{event.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="h-4 w-4 shrink-0 text-[var(--action-primary)]" />
                  <span>Turma restrita a {event.capacity} participantes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 shrink-0 text-[var(--action-primary)]" />
                  <span>{event.startsAt}</span>
                </div>
              </div>

              <div className="mt-6">
                <LeadFormTrigger className="flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--action-primary)] font-semibold text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-all hover:scale-[1.01] hover:bg-[var(--action-primary-hover)]">
                  <Ticket className="h-4 w-4" />
                  <span>Inscrever-se agora</span>
                </LeadFormTrigger>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--status-success)]" />
                  <span>Confirmação imediata e suporte direto</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
