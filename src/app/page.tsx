import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, Check, Network } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { GrowthSystem } from '@/components/marketing/growth-system'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'N8FLOW — Assessoria de Growth Marketing B2B',
  description:
    'Assessoria de Growth Marketing para conectar estratégia, aquisição, conversão, dados e vendas em uma operação orientada a crescimento.',
  pathname: '/',
})

const problems = [
  {
    number: '01',
    title: 'Marketing sem prioridade compartilhada',
    description: 'Ações e canais avançam sem uma agenda comum ligada aos objetivos comerciais.',
  },
  {
    number: '02',
    title: 'Demanda sem continuidade',
    description: 'Leads chegam, mas encontram jornadas, mensagens e acompanhamentos fragmentados.',
  },
  {
    number: '03',
    title: 'Dados sem contexto de decisão',
    description:
      'Indicadores existem, mas não explicam onde priorizar esforço, investimento e aprendizado.',
  },
] as const

const method = [
  { number: '01', label: 'Diagnosticar', description: 'Contexto, objetivos, operação e gargalos.' },
  {
    number: '02',
    label: 'Priorizar',
    description: 'Hipóteses e iniciativas pelo impacto esperado.',
  },
  { number: '03', label: 'Implementar', description: 'Execução coordenada das frentes aprovadas.' },
  { number: '04', label: 'Medir', description: 'Indicadores conectados ao objetivo comercial.' },
  { number: '05', label: 'Otimizar', description: 'Aprendizado incorporado ao próximo ciclo.' },
] as const

const fitCriteria = [
  'Possui uma oferta comercial definida e capacidade de atendimento.',
  'Precisa gerar demanda ou melhorar a conversão de oportunidades.',
  'Quer aproximar marketing, dados e processo comercial.',
  'Está disposta a trabalhar com prioridades, mensuração e aprendizado contínuo.',
] as const

export default async function HomePage() {
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="Assessoria de Growth Marketing B2B"
        title={
          <>
            Growth não é uma campanha.{' '}
            <span className="text-[var(--violet-700)]">É uma operação.</span>
          </>
        }
        description="A N8FLOW conecta estratégia, aquisição, conversão, dados e vendas em um sistema orientado a crescimento — sem limitar a atuação a um único setor."
        primaryAction={{ label: 'Solicitar diagnóstico', href: '/contato' }}
        secondaryAction={{ label: 'Conhecer nossa atuação', href: '/servicos' }}
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
                Iniciativas isoladas não formam uma operação de Growth.
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
                Crescimento exige estratégia, execução e vendas operando como um único sistema.
              </h2>
            </div>
            <p className="border-l border-[rgb(255_255_255/0.28)] pl-5 text-base leading-relaxed text-[var(--neutral-300)] lg:col-span-4">
              Tecnologia, automação e IA entram onde fortalecem o processo, preservam contexto e
              tornam a operação mensurável.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="method-title">
        <Container>
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Método
              </p>
              <h2
                id="method-title"
                className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Um ciclo contínuo de decisão, execução e aprendizado.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 border-b border-[var(--text-primary)] pb-1 text-sm font-semibold"
              >
                Conhecer o método <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ol className="border-y border-[var(--border-strong)]">
            {method.map((item, index) => (
              <li
                key={item.number}
                className="grid gap-5 border-b border-[var(--border-default)] py-7 last:border-b-0 sm:grid-cols-[88px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-xs text-[var(--text-muted)]">{item.number}</span>
                <div className="grid gap-2 sm:grid-cols-2 sm:items-center">
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{item.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
                <ArrowDownRight
                  className={`h-6 w-6 ${index % 2 ? 'text-[var(--violet-600)]' : 'text-[var(--green-600)]'}`}
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
                Frentes de atuação
              </p>
              <h2
                id="solutions-title"
                className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Capacidades combinadas conforme o momento da empresa.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                O diagnóstico define prioridades. Nenhuma ferramenta ou canal é tratado como
                resposta universal.
              </p>
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

      <section className="py-20 md:py-28" aria-labelledby="fit-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Aderência
              </p>
              <h2
                id="fit-title"
                className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Para empresas preparadas para tratar Growth como operação.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                A N8FLOW não limita a atuação por setor. O ponto de partida é a maturidade do
                negócio e o desafio comercial.
              </p>
            </div>
            <ul className="border-y border-[var(--border-strong)] lg:col-span-7" role="list">
              {fitCriteria.map((criterion) => (
                <li
                  key={criterion}
                  className="flex gap-4 border-b border-[var(--border-default)] py-6 last:border-b-0"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--green-700)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-[var(--text-secondary)]">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32" aria-labelledby="final-title">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12 lg:items-end">
            <h2
              id="final-title"
              className="font-display max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl lg:col-span-9"
            >
              Onde sua operação está perdendo oportunidades de crescimento?
            </h2>
            <div className="lg:col-span-3">
              <Link
                href="/contato"
                className="flex min-h-14 items-center justify-between border border-[var(--text-primary)] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)]"
              >
                Solicitar diagnóstico <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
