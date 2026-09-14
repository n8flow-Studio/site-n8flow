import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/marketing/hero'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'Conteúdos N8FLOW',
  description: 'Conteúdos sobre marketing digital, tecnologia, automação, CRM e Inteligência Artificial.',
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
          <div className="border-y border-[var(--border-strong)] py-10">
            <h2 id="content-title" className="font-display text-3xl font-semibold">
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
