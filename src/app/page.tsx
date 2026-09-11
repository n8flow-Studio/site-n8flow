import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Network, Crosshair, ChartNoAxesCombined, Users, Workflow, MousePointer2, Layers, Unplug, ScanLine } from 'lucide-react'
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

const serviceIcons = [Crosshair, ChartNoAxesCombined, MousePointer2, Users, Workflow]
const problemIcons = [Layers, Unplug, ScanLine]

export default async function HomePage() {
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="Assessoria de Growth Marketing B2B"
        title={
          <>
            Growth não é uma campanha.{' '}
            <span className="hero-title-accent">É uma operação.</span>
          </>
        }
        description="A N8FLOW conecta estratégia, aquisição, conversão, dados e vendas em um sistema orientado a crescimento — sem limitar a atuação a um único setor."
        primaryAction={{ label: 'Solicitar diagnóstico', href: '/contato' }}
        secondaryAction={{ label: 'Conhecer nossa atuação', href: '/servicos' }}
      >
        <GrowthSystem />
      </Hero>

      <section className="home-section" aria-labelledby="problem-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                O problema
              </p>
              <h2
                id="problem-title"
                className="section-title mt-5"
              >
                Iniciativas isoladas não formam uma operação de Growth.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              {problems.map((problem, index) => {
                const Icon = problemIcons[index]
                return (
                <article
                  key={problem.number}
                  className="grid gap-4 border-t border-[var(--border-strong)] py-7 sm:grid-cols-[72px_1fr]"
                >
                  <span className="service-icon"><Icon size={22} aria-hidden="true" /></span>
                  <div className="grid gap-3">
                    <h3 className="font-display text-xl font-semibold">{problem.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {problem.description}
                    </p>
                  </div>
                </article>
              )})}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="home-section bg-[var(--text-primary)] text-[var(--text-inverse)]"
        aria-labelledby="thesis-title"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[var(--green-400)] uppercase">
                <Network className="h-4 w-4" aria-hidden="true" /> Tese N8FLOW
              </p>
              <h2
                id="thesis-title"
                className="section-title mt-6 text-[var(--text-inverse)]"
              >
                Crescimento exige estratégia, execução e vendas operando como um único sistema.
              </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--neutral-300)]">
              Tecnologia, automação e IA entram onde fortalecem o processo, preservam contexto e
              tornam a operação mensurável.
            </p>
            </div>
            <div className="thesis-visual lg:col-span-5" aria-hidden="true">
              <div className="thesis-layer"><Crosshair size={28} />Estratégia</div>
              <div className="thesis-layer"><Workflow size={28} />Execução</div>
              <div className="thesis-layer"><Users size={28} />Vendas</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section" aria-labelledby="method-title">
        <Container>
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Método
              </p>
              <h2
                id="method-title"
                className="section-title mt-5"
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
          <ol className="method-track">
            {method.map((item) => (
              <li
                key={item.number}
                className="method-step"
              >
                <span className="font-mono text-xs text-[var(--text-muted)]">{item.number}</span>
                <div className="mt-3 grid gap-3">
                  <h3 className="font-display text-xl font-semibold">{item.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="home-section border-y border-[var(--border-subtle)] bg-[var(--bg-subtle)]"
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
                className="section-title mt-5"
              >
                Capacidades combinadas conforme o momento da empresa.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                O diagnóstico define prioridades. Nenhuma ferramenta ou canal é tratado como
                resposta universal.
              </p>
            </div>
            <div className="lg:col-span-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Workflow
                return (
                <article
                  key={service.slug}
                  className="service-row grid gap-5 border-t border-[var(--border-default)] py-7 sm:grid-cols-[44px_1fr_auto] sm:items-start"
                >
                  <span className="service-icon"><Icon size={22} aria-hidden="true" /></span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
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
              )})}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section" aria-labelledby="fit-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Aderência
              </p>
              <h2
                id="fit-title"
                className="section-title mt-5"
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

      <section className="home-section bg-[var(--violet-50)]" aria-labelledby="final-title">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12 lg:items-end">
            <h2
              id="final-title"
              className="section-title lg:col-span-9"
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
