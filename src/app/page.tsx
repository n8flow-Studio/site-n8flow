import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, Check, Network } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { GrowthSystem } from '@/components/marketing/growth-system'
import { EventCard } from '@/components/marketing/event-card'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'N8FLOW — Engenharia de Growth e Tecnologia',
  description:
    'Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações conectadas e orientadas a crescimento.',
  pathname: '/',
})

const problems = [
  {
    number: '01',
    title: 'Aquisição sem continuidade',
    description:
      'Leads entram por diferentes canais, mas não encontram um processo claro de acompanhamento.',
  },
  {
    number: '02',
    title: 'Atendimento dependente de esforço manual',
    description:
      'Informações e tarefas ficam dispersas entre conversas, planilhas e rotinas individuais.',
  },
  {
    number: '03',
    title: 'Dados sem conexão com vendas',
    description: 'Marketing, CRM e operação comercial medem partes diferentes da mesma jornada.',
  },
] as const

const method = [
  {
    number: '01',
    label: 'Educação',
    description: 'Conhecimento aplicável para avançar com clareza.',
  },
  {
    number: '02',
    label: 'Comunidade',
    description: 'Acompanhamento, relacionamento e evolução contínua.',
  },
  {
    number: '03',
    label: 'Assessoria e tecnologia',
    description: 'Diagnóstico, implementação e integração da operação.',
  },
] as const

export default async function HomePage() {
  const [nextEvent] = await contentRepository.listEvents({ limit: 1 })
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="Assessoria de Growth Marketing e Tecnologia"
        title={
          <>
            Engenharia para uma operação de{' '}
            <span className="text-[var(--violet-700)]">Growth conectada.</span>
          </>
        }
        description="A N8FLOW integra estratégia, dados, automação, IA, CRM e processos comerciais para transformar ações isoladas em uma operação orientada a crescimento."
        primaryAction={{ label: 'Conhecer as soluções', href: '/servicos' }}
        secondaryAction={{ label: 'Conhecer a N8FLOW', href: '/sobre' }}
      >
        <GrowthSystem />
      </Hero>

      <section className="py-20 md:py-28" aria-labelledby="problem-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                O problema
              </p>
              <h2
                id="problem-title"
                className="font-display mt-5 max-w-xl text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Mais ferramentas não resolvem uma operação desconectada.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              {problems.map((problem) => (
                <article
                  key={problem.number}
                  className="grid gap-4 border-t border-[var(--border-strong)] py-7 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {problem.number}
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-8">
                    <h3 className="font-display text-xl font-semibold">{problem.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {problem.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="bg-[var(--text-primary)] py-20 text-[var(--text-inverse)] md:py-28"
        aria-labelledby="thesis-title"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[var(--green-400)] uppercase">
                <Network className="h-4 w-4" aria-hidden="true" /> Tese N8FLOW
              </p>
              <h2
                id="thesis-title"
                className="font-display mt-8 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] text-[var(--text-inverse)] sm:text-6xl lg:text-7xl"
              >
                Growth acontece quando estratégia, tecnologia e vendas operam como um único sistema.
              </h2>
            </div>
            <p className="border-l border-[rgb(255_255_255/0.28)] pl-5 text-base leading-relaxed text-[var(--neutral-300)] lg:col-span-4">
              A tecnologia funciona como infraestrutura: conecta processos, preserva contexto e
              torna a operação mensurável.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="method-title">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Método
              </p>
              <h2
                id="method-title"
                className="font-display mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Três formas de avançar. Uma mesma arquitetura.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              Educação, relacionamento e implementação formam caminhos complementares, não um funil
              obrigatório.
            </p>
          </div>
          <ol className="border-y border-[var(--border-strong)]">
            {method.map((item, index) => (
              <li
                key={item.number}
                className="grid gap-5 border-b border-[var(--border-default)] py-8 last:border-b-0 sm:grid-cols-[88px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-xs text-[var(--text-muted)]">{item.number}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{item.label}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
                <ArrowDownRight
                  className={`h-6 w-6 ${index === 1 ? 'text-[var(--violet-600)]' : 'text-[var(--green-600)]'}`}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="border-y border-[var(--border-default)] bg-[var(--bg-subtle)] py-20 md:py-28"
        aria-labelledby="solutions-title"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                Sistema de soluções
              </p>
              <h2
                id="solutions-title"
                className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Capacidade técnica organizada pelo problema.
              </h2>
              <Link
                href="/servicos"
                className="mt-8 inline-flex items-center gap-2 border-b border-[var(--text-primary)] pb-1 text-sm font-semibold"
              >
                Ver arquitetura de soluções <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  className="grid gap-5 border-t border-[var(--border-strong)] py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                      {service.summary}
                    </p>
                    <ul className="mt-5 grid gap-2 text-xs text-[var(--text-muted)] md:grid-cols-2">
                      {service.problems.slice(0, 2).map((problem) => (
                        <li key={problem} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-700)]"
                            aria-hidden="true"
                          />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/servicos/${service.slug}`}
                    aria-label={`Conhecer ${service.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border-strong)] transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--text-inverse)]"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {nextEvent && (
        <section className="py-20 md:py-28" aria-labelledby="event-title">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                  Próximo evento
                </p>
                <h2
                  id="event-title"
                  className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em]"
                >
                  Comece pela educação aplicada.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <EventCard {...nextEvent} featured />
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 md:py-32" aria-labelledby="final-title">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12 lg:items-end">
            <h2
              id="final-title"
              className="font-display max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl lg:col-span-9"
            >
              Estruture marketing, tecnologia e vendas como uma operação conectada.
            </h2>
            <div className="lg:col-span-3">
              <Link
                href="/servicos"
                className="flex min-h-14 items-center justify-between border border-[var(--text-primary)] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)]"
              >
                Conhecer as soluções <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
