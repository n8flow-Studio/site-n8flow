import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Conteúdos N8FLOW',
  description:
    'Conteúdos sobre marketing digital, tecnologia, automação, CRM e Inteligência Artificial.',
  pathname: '/blog',
})

export default async function BlogPage() {
  const articles = await contentRepository.listArticles()
  return (
    <>
      <Hero
        eyebrow="Conteúdo"
        title="Conhecimento aplicado ao seu negócio."
        description="Conteúdos sobre presença digital, captação de clientes, automação, CRM e Inteligência Artificial serão publicados com autoria e referências verificáveis."
        variant="editorial"
      />
      <section className="py-20 md:py-28" aria-labelledby="content-title">
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 shadow-xs sm:p-12">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgb(110_68_255/0.2)] bg-[rgb(110_68_255/0.08)] text-[var(--violet-700)] shadow-xs">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2
              id="content-title"
              className="display-readable font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl"
            >
              {articles.length > 0 ? 'Conteúdos publicados' : 'Publicação editorial em preparação.'}
            </h2>
            {articles.length === 0 && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                Os artigos iniciais permanecem fora do site público até que autoria, data e fontes
                estejam aprovadas.
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
