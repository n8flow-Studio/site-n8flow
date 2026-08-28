import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Blog & Conteúdos Estratégicos | N8FLOW',
  description:
    'Artigos técnicos e estratégicos sobre Engenharia de Growth, automação inteligente, IA e CRM para o mercado imobiliário.',
  pathname: '/blog',
})

export default async function BlogPage() {
  const articles = await contentRepository.listArticles()

  return (
    <>
      <Hero
        eyebrow="Conhecimento Estratégico"
        title="Artigos, métodos e insights sobre Growth e IA."
        description="Conteúdo técnico e direto ao ponto para profissionais e empresas que querem evoluir sua máquina de vendas."
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((art) => (
            <Card
              key={art.slug}
              variant="interactive"
              padding="lg"
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="brand" size="sm">
                    {art.category}
                  </Badge>
                  {art.readingTime && (
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Clock className="h-3.5 w-3.5" />
                      {art.readingTime} min de leitura
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Calendar className="h-3.5 w-3.5" />
                    {art.publishedAt}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--action-primary)] transition-colors">
                  {art.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {art.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {art.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-[var(--bg-elevated)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  {art.author}
                </span>
                <Link
                  href={`/blog/${art.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--action-primary)] transition-transform group-hover:translate-x-1"
                >
                  <span>Ler artigo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Quer aplicar esses conceitos na sua empresa?"
        description="Agende uma conversa com nosso time para desenharmos uma estratégia prática para a sua realidade."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
        secondaryAction={{
          label: 'Ver próximos eventos',
          href: '/eventos',
        }}
      />
    </>
  )
}
