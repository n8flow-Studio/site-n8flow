import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Network,
  Crosshair,
  ChartNoAxesCombined,
  Users,
  Workflow,
  MousePointer2,
  Layers,
  Unplug,
  ScanLine,
  Search,
  Target,
  Cpu,
  BarChart3,
  RefreshCw,
} from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { DigitalSystem } from '@/components/marketing/growth-system'
import { contentRepository } from '@/lib/content/repository'
import { Founders } from '@/components/marketing/founders'
import { LeadFormTrigger } from '@/components/forms/lead-form-dialog'

export const metadata: Metadata = buildMetadata({
  title: 'N8FLOW — Tecnologia e Marketing para o Seu Negócio',
  description:
    'Posicionamento no Google, captação de clientes qualificados, automação de processos e soluções com Inteligência Artificial. Tudo integrado, do jeito que o seu negócio precisa.',
  pathname: '/',
})

const problems = [
  {
    number: '01',
    title: 'Invisível no Google',
    description:
      'Seus concorrentes aparecem nas buscas, mas o seu negócio não. Sem presença digital, os clientes encontram outra empresa antes de chegar até você.',
  },
  {
    number: '02',
    title: 'Leads chegam, mas não viram clientes',
    description:
      'Contatos dispersos em WhatsApp, e-mails sem acompanhamento e processo manual travam as vendas antes mesmo de começar.',
  },
  {
    number: '03',
    title: 'Tempo perdido em tarefas repetitivas',
    description:
      'Atendimento, agendamento e processos internos consomem tempo que poderia estar gerando mais vendas.',
  },
] as const

const method = [
  {
    number: '01',
    label: 'Diagnosticar',
    description:
      'Entendemos onde você está: presença digital, captação, processo de atendimento e o que está travando o crescimento.',
  },
  {
    number: '02',
    label: 'Priorizar',
    description:
      'Identificamos o que resolve mais rápido e com mais impacto — para não desperdiçar tempo nem dinheiro.',
  },
  {
    number: '03',
    label: 'Implementar',
    description:
      'Executamos o que foi acordado: site, Google, automação, CRM, IA — com responsáveis e critérios claros.',
  },
  {
    number: '04',
    label: 'Medir',
    description:
      'Acompanhamos os resultados para garantir que o que foi implementado está funcionando.',
  },
  {
    number: '05',
    label: 'Otimizar',
    description:
      'Aprendemos com os dados e evoluímos continuamente — porque o negócio também evolui.',
  },
] as const

const fitCriteria = [
  'Quer aparecer melhor no Google e atrair clientes qualificados.',
  'Precisa de um site, landing page ou integração com WhatsApp e CRM.',
  'Quer automatizar atendimento, agendamento ou processos internos.',
  'Busca desenvolver sistemas personalizados ou soluções com Inteligência Artificial.',
] as const

const serviceIcons = [Crosshair, ChartNoAxesCombined, MousePointer2, Users, Workflow]
const problemIcons = [Layers, Unplug, ScanLine]
const methodIcons = [Search, Target, Cpu, BarChart3, RefreshCw]

export default async function HomePage() {
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="Tecnologia e marketing para o seu negócio"
        title={
          <>
            Apareça no lugar certo.{' '}
            <span className="hero-title-accent">Capture os clientes certos.</span>
          </>
        }
        description="A N8FLOW identifica o que o seu negócio precisa agora — seja uma presença sólida no Google, um site que converte, processos automatizados ou um sistema para acompanhar seus clientes."
        primaryAction={{ label: 'Entender meu próximo passo', intent: 'lead-form' }}
        secondaryAction={{ label: 'Ver o que fazemos', href: '/servicos' }}
      >
        <DigitalSystem />
      </Hero>

      <section className="home-section" aria-labelledby="problem-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                O problema
              </p>
              <h2 id="problem-title" className="section-title mt-5">
                Sem estrutura digital, o negócio perde clientes todos os dias.
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
                    <span className="service-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div className="grid gap-3">
                      <h3 className="font-sans text-xl font-semibold">{problem.title}</h3>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {problem.description}
                      </p>
                    </div>
                  </article>
                )
              })}
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
                <Network className="h-4 w-4" aria-hidden="true" /> O que acreditamos
              </p>
              <h2 id="thesis-title" className="section-title mt-6 text-[var(--text-inverse)]">
                Seu negócio no lugar certo, com o processo certo para atender e fidelizar clientes.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--neutral-300)]">
                Diagnóstico, presença digital, captação, automação e inteligência artificial —
                aplicados ao que a sua empresa precisa agora, sem desperdício.
              </p>
            </div>
            <div className="thesis-visual lg:col-span-5" aria-hidden="true">
              <div className="thesis-layer">
                <Crosshair size={28} />
                Presença Digital
              </div>
              <div className="thesis-layer">
                <Workflow size={28} />
                Captação
              </div>
              <div className="thesis-layer">
                <Users size={28} />
                Atendimento
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section method-section" aria-labelledby="method-title">
        <Container>
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Como trabalhamos
              </p>
              <h2 id="method-title" className="section-title mt-5">
                Da primeira conversa à solução implementada.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 border-b border-[var(--text-primary)] pb-1 text-sm font-semibold"
              >
                Ver como trabalhamos <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ol className="method-track">
            {method.map((item, index) => {
              const StepIcon = methodIcons[index] ?? Workflow
              return (
                <li key={item.label} className="method-step group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--violet-700)] shadow-xs transition-colors group-hover:border-[var(--violet-500)] group-hover:text-[var(--violet-500)]">
                    <StepIcon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="mt-4 grid gap-2">
                    <h3 className="font-sans text-xl font-semibold text-[var(--text-primary)]">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </Container>
      </section>

      <section
        className="home-section solutions-section border-y border-[var(--border-subtle)]"
        data-theme="dark"
        aria-labelledby="solutions-title"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                O que fazemos
              </p>
              <h2 id="solutions-title" className="section-title mt-5">
                Soluções para cada necessidade do seu negócio.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                No diagnóstico inicial, identificamos o que você precisa — e entregamos exatamente
                isso.
              </p>
            </div>
            <div className="lg:col-span-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Workflow
                return (
                  <article
                    key={service.slug}
                    className="service-row group grid gap-5 border-t border-[var(--border-default)] py-7 transition-colors hover:bg-[var(--bg-surface)]/60 sm:grid-cols-[44px_1fr_auto] sm:items-start"
                  >
                    <span className="service-icon transition-transform duration-200 group-hover:scale-105">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-semibold transition-colors group-hover:text-[var(--violet-300)]">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                        {service.summary}
                      </p>
                    </div>
                    <Link
                      href={`/servicos/${service.slug}`}
                      aria-label={`Ver ${service.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--border-strong)] transition-all group-hover:bg-[var(--text-primary)] group-hover:text-[var(--text-inverse)]"
                    >
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section" aria-labelledby="fit-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Para quem fazemos
              </p>
              <h2 id="fit-title" className="section-title mt-5">
                Para empresas que querem crescer com estrutura, não com tentativas.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                Trabalhamos com negócios de diferentes segmentos. O ponto de partida é sempre o
                mesmo: entender o que você precisa agora.
              </p>
            </div>
            <ul className="border-y border-[var(--border-strong)] lg:col-span-7" role="list">
              {fitCriteria.map((criterion) => (
                <li
                  key={criterion}
                  className="flex items-start gap-4 border-b border-[var(--border-default)] py-6 transition-colors last:border-b-0 hover:bg-[var(--bg-subtle)]/40"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgb(0_245_160/0.15)] text-[var(--green-700)]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="leading-relaxed text-[var(--text-secondary)]">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Founders />

      <section className="home-section final-section" aria-labelledby="final-title">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12 lg:items-end">
            <h2 id="final-title" className="section-title lg:col-span-9">
              Pronto para descobrir o que o seu negócio precisa agora?
            </h2>
            <div className="lg:col-span-3">
              <LeadFormTrigger className="flex min-h-14 items-center justify-between border border-[var(--text-primary)] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)]">
                Conversar sobre meu negócio <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LeadFormTrigger>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
