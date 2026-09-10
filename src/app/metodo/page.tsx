import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'

export const metadata: Metadata = buildMetadata({
  title: 'Método de Growth | N8FLOW',
  description:
    'Conheça o ciclo de diagnóstico, priorização, implementação, mensuração e otimização da assessoria N8FLOW.',
  pathname: '/metodo',
})

const steps = [
  {
    number: '01',
    title: 'Diagnosticar',
    description:
      'Compreender contexto, oferta, objetivos, canais, jornada, dados e capacidade operacional.',
  },
  {
    number: '02',
    title: 'Priorizar',
    description:
      'Organizar hipóteses e iniciativas pelo impacto esperado, esforço e dependências reais.',
  },
  {
    number: '03',
    title: 'Implementar',
    description:
      'Executar as frentes aprovadas com escopo, responsáveis e critérios de conclusão explícitos.',
  },
  {
    number: '04',
    title: 'Medir',
    description: 'Acompanhar indicadores compatíveis com o objetivo e distinguir sinal de ruído.',
  },
  {
    number: '05',
    title: 'Otimizar',
    description: 'Transformar dados e observações em decisões para o ciclo seguinte.',
  },
] as const

export default function MethodPage() {
  return (
    <>
      <Hero
        eyebrow="Método N8FLOW"
        title="Growth como um ciclo contínuo de decisão e execução."
        description="A assessoria combina direção estratégica, implementação coordenada e aprendizado para evoluir a operação conforme o contexto da empresa."
        primaryAction={{ label: 'Solicitar diagnóstico', href: '/contato' }}
        secondaryAction={{ label: 'Conhecer as soluções', href: '/servicos' }}
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
                Ciclo operacional
              </p>
              <h2
                id="cycle-title"
                className="font-display mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Método sem fórmula universal.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                As etapas orientam o trabalho, mas o escopo e a combinação de capacidades dependem
                do diagnóstico.
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
                className="font-display mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-6xl"
              >
                Clareza sobre prioridade, execução e aprendizado — sem promessa de resultado
                automático.
              </h2>
            </div>
            <Link
              href="/contato"
              className="flex min-h-14 items-center justify-between border border-[var(--text-primary)] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)] lg:col-span-3"
            >
              Solicitar diagnóstico <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
