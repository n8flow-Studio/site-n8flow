import type { Metadata } from 'next'
import { ArrowRight, Check, Globe, Laptop, MessageSquare, Workflow, Cpu } from 'lucide-react'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { contentRepository } from '@/lib/content/repository'
import { LeadFormTrigger } from '@/components/forms/lead-form-dialog'

export const metadata: Metadata = buildMetadata({
  title: 'Soluções de Marketing e Tecnologia para seu Negócio | N8FLOW',
  description:
    'Do posicionamento no Google à automação de processos: soluções sob medida para o que o seu negócio precisa agora.',
  pathname: '/servicos',
})

const operatingPrinciples = [
  'O diagnóstico inicial define o que vai ser implementado, não um pacote pré-definido.',
  'Cada solução tem objetivo claro, prazo e indicador de resultado.',
  'Marketing, vendas e tecnologia trabalhando integrados, não separados.',
  'Automação e Inteligência Artificial entram quando fazem sentido para o seu processo.',
] as const

const serviceIcons = [Globe, Laptop, MessageSquare, Workflow, Cpu]

export default async function ServicesPage() {
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="O que fazemos"
        title="Soluções sob medida para o que o seu negócio precisa."
        description="No diagnóstico inicial, entendemos sua situação e definimos juntos quais soluções fazem sentido agora — sem pacotes genéricos."
        primaryAction={{ label: 'Encontrar a solução certa', intent: 'lead-form' }}
        secondaryAction={{ label: 'Ver como trabalhamos', href: '/metodo' }}
        variant="b2b"
      />

      <section
        className="border-y border-[var(--border-default)] bg-[var(--bg-subtle)] py-20 md:py-28"
        aria-labelledby="acting-title"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                Como atuamos
              </p>
              <h2 id="acting-title" className="section-title mt-5">
                Trabalhamos conforme o que você precisa, não com pacotes prontos.
              </h2>
            </div>
            <ul className="border-y border-[var(--border-strong)] lg:col-span-8" role="list">
              {operatingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-4 rounded-sm border-b border-[var(--border-default)] px-3 py-6 transition-colors last:border-b-0 hover:bg-[var(--bg-surface)]/40"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgb(0_245_160/0.15)] text-[var(--green-700)]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="text-base leading-relaxed text-[var(--text-secondary)]">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="fronts-title">
        <Container>
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
              O que entregamos
            </p>
            <h2 id="fronts-title" className="section-title mt-5">
              Do Google ao sistema: tudo que o seu negócio pode precisar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
              Cada solução é escolhida no diagnóstico. Você não paga por o que não precisa.
            </p>
          </div>

          <div className="border-y border-[var(--border-strong)]">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Workflow
              return (
                <article
                  key={service.slug}
                  className="group relative -mx-4 grid gap-6 rounded-lg border-b border-[var(--border-default)] px-4 py-8 transition-all last:border-b-0 hover:bg-[var(--bg-surface)]/60 lg:grid-cols-[56px_1fr_1fr_auto] lg:items-center"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--violet-700)] shadow-xs transition-transform duration-200 group-hover:scale-105 group-hover:border-[var(--violet-500)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="display-readable font-display text-2xl font-semibold transition-colors group-hover:text-[var(--violet-700)]">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                    {service.summary}
                  </p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[var(--border-strong)] transition-all group-hover:bg-[var(--text-primary)] group-hover:text-[var(--text-inverse)]"
                    aria-label={`Ver ${service.title}`}
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
        </Container>
      </section>

      <section
        className="bg-[var(--text-primary)] py-20 text-[var(--text-inverse)] md:py-28"
        aria-labelledby="diagnosis-title"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-400)] uppercase">
                Próximo passo
              </p>
              <h2 id="diagnosis-title" className="section-title mt-6 text-[var(--text-inverse)]">
                Quer saber o que o seu negócio precisa agora?
              </h2>
            </div>
            <LeadFormTrigger className="flex min-h-14 items-center justify-between border border-[var(--text-inverse)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)] lg:col-span-3">
              Conversar sobre meu negócio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LeadFormTrigger>
          </div>
        </Container>
      </section>
    </>
  )
}
