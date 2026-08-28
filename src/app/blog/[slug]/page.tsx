import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Clock, Calendar, User } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await contentRepository.listArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await contentRepository.getArticle(slug)

  if (!article) {
    return { title: 'Artigo não encontrado | N8FLOW' }
  }

  return buildMetadata({
    title: article.seo.title,
    description: article.seo.description,
    pathname: `/blog/${slug}`,
  })
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await contentRepository.getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Container className="pt-8">
        <Breadcrumb
          items={[
            { label: 'Conteúdos', href: '/blog' },
            { label: article.title },
          ]}
        />
      </Container>

      {/* Cabeçalho do Artigo */}
      <article className="pt-6 pb-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="brand" size="md">
                {article.category}
              </Badge>
              {article.readingTime && (
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingTime} min de leitura
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                {article.publishedAt}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl leading-tight">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-8">
              {article.description}
            </p>

            {/* Corpo do Artigo */}
            <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-secondary)] prose prose-invert max-w-none">
              {article.body.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h2
                      key={idx}
                      className="mt-8 font-display text-2xl font-bold text-[var(--text-primary)]"
                    >
                      {paragraph.replace('### ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').map((i) => i.replace('- ', ''))
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                      {items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  )
                }
                return <p key={idx}>{paragraph}</p>
              })}
            </div>

            {/* Tags e Autor */}
            <div className="mt-12 border-t border-[var(--border-subtle)] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <User className="h-4 w-4" />
                <span>Por <strong className="text-[var(--text-secondary)]">{article.author}</strong></span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* CTA Final */}
      <CtaSection
        title="Gostou do conteúdo? Dê o próximo passo."
        description="Participe do nosso próximo evento presencial ou solicite um diagnóstico da sua operação."
        primaryAction={{
          label: 'Ver próximos eventos',
          href: '/eventos',
        }}
        secondaryAction={{
          label: 'Voltar ao Blog',
          href: '/blog',
        }}
      />
    </>
  )
}
