import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'

export const metadata: Metadata = buildMetadata({
  title: 'Como Trabalhamos | N8FLOW',
  description:
    'Conheça o processo da N8FLOW: do diagnóstico inicial à implementação e acompanhamento dos resultados.',
  pathname: '/metodo',
})

const steps = [
  {
    number: '01',
    title: 'Diagnosticar',
    description:
      'Entendemos onde você está: presença digital, captação, processo de atendimento e o que está travando o crescimento.',
  },
  {
    number: '02',
    title: 'Priorizar',
    description:
      'Identificamos o que resolve mais rápido e com mais impacto — para não desperdiçar tempo nem dinheiro.',
  },
  {
    number: '03',
    title: 'Implementar',
    description:
      'Executamos o que foi acordado: site, Google, automação, CRM, IA — com responsáveis e critérios claros.',
  },
  {
    number: '04',
    title: 'Medir',
    description:
      'Acompanhamos os resultados para garantir que o que foi implementado está funcionando.',
  },
  {
    number: '05',
    title: 'Otimizar',
    description:
      'Aprendemos com os dados e evoluímos continuamente — porque o negócio também evolui.',
  },
] as const

export default function MethodPage() {
  return (
    <>
      <Hero
        eyebrow="Como trabalhamos"
        title="Do diagnóstico à solução: um processo claro, do começo ao fim."
        description="A assessoria começa entendendo o que você precisa. Só depois definimos o que implementar — e acompanhamos cada resultado."
        primaryAction={{ label: 'Diagnóstico gratuito', href: '/contato' }}
        secondaryAction={{ label: 'Ver nossas soluções', href: '/servicos' }}
        variant="editorial"
      />

      <section
        className="border-y border-[var(--border-default)] bg-[var(--bg-subtle)] py-20 md:py-28"
        aria-labelledby="cycle-title"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--green-700)] uppercase">
                Nosso processo
              </p>
              <h2
                id="cycle-title"
                className="section-title mt-5"
              >
                Cada empresa tem um ponto de partida diferente.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                O diagnóstico define o caminho. Não existe solução padrão aqui.
              </p>
            </div>
            <ol className="border-y border-[var(--border-strong)] lg:col-span-8">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-4 border-b border-[var(--border-default)] py-8 last:border-b-0 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-mono text-xs text-[var(--violet-700)]">{step.number}</span>
                  <div className="grid gap-3 md:grid-cols-2 md:gap-8">
                    <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="commitment-title">
        <Container>
          <div className="grid gap-10 border-t border-[var(--border-strong)] pt-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--violet-700)] uppercase">
                Compromisso
              </p>
              <h2
                id="commitment-title"
                className="section-title mt-5"
              >
                Clareza total sobre o que será feito, por quem e com qual objetivo.
              </h2>
            </div>
            <Link
              href="/contato"
              className="flex min-h-14 items-center justify-between border border-[var(--text-primary)] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)] lg:col-span-3"
            >
              Diagnóstico gratuito <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
