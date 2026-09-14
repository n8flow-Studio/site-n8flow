import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { contentRepository } from '@/lib/content/repository'

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

export default async function ServicesPage() {
  const services = await contentRepository.listServices()

  return (
    <>
      <Hero
        eyebrow="O que fazemos"
        title="Soluções sob medida para o que o seu negócio precisa."
        description="No diagnóstico inicial, entendemos sua situação e definimos juntos quais soluções fazem sentido agora — sem pacotes genéricos."
        primaryAction={{ label: 'Diagnóstico gratuito', href: '/contato' }}
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
              <h2
                id="acting-title"
                className="section-title mt-5"
              >
                Trabalhamos conforme o que você precisa, não com pacotes prontos.
              </h2>
            </div>
            <ul className="border-y border-[var(--border-strong)] lg:col-span-8" role="list">
              {operatingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-4 border-b border-[var(--border-default)] py-6 last:border-b-0"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--green-700)]"
                    aria-hidden="true"
                  />
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
            <h2
              id="fronts-title"
              className="section-title mt-5"
            >
              Do Google ao sistema: tudo que o seu negócio pode precisar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
              Cada solução é escolhida no diagnóstico. Você não paga por o que não precisa.
            </p>
          </div>

          <div className="border-y border-[var(--border-strong)]">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-6 border-b border-[var(--border-default)] py-9 last:border-b-0 lg:grid-cols-[80px_1fr_1fr_auto] lg:items-start"
              >
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.summary}
                </p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border-strong)] transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--text-inverse)]"
                  aria-label={`Conhecer ${service.title}`}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
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
              <h2
                id="diagnosis-title"
                className="section-title mt-6 text-[var(--text-inverse)]"
              >
                Quer saber o que o seu negócio precisa agora?
              </h2>
            </div>
            <Link
              href="/contato"
              className="flex min-h-14 items-center justify-between border border-[var(--text-inverse)] px-5 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)] lg:col-span-3"
            >
              Diagnóstico gratuito <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
