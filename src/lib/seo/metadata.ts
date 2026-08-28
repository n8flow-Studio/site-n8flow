/**
 * Utilitários de SEO e metadata.
 *
 * Referências:
 *   docs/copy-conteudo/04-seo-metadata.md — títulos e descriptions por página
 *   docs/arquitetura-tecnica/05-seo-analytics-observabilidade.md §5.1
 */
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface BuildMetadataOptions {
  title?: string
  description?: string
  pathname?: string
  noIndex?: boolean
  ogImage?: string
}

/**
 * Constrói o objeto Metadata do Next.js para cada página.
 * Usa título e descrição da Copy v1.0 como base.
 * OG image depende de assets oficiais — deixa undefined se não houver.
 */
export function buildMetadata({
  title,
  description,
  pathname = '/',
  noIndex = false,
  ogImage,
}: BuildMetadataOptions = {}): Metadata {
  const canonical = `${siteConfig.url}${pathname}`

  const resolvedTitle = title
    ? { template: `%s | ${siteConfig.name}`, default: title }
    : { template: `%s | ${siteConfig.name}`, default: siteConfig.tagline }

  const resolvedDescription = description ?? siteConfig.description

  const openGraph: Metadata['openGraph'] = {
    type: 'website',
    locale: 'pt_BR',
    url: canonical,
    siteName: siteConfig.name,
    title: title ?? siteConfig.tagline,
    description: resolvedDescription,
    // ogImage é adicionado somente quando asset oficial estiver disponível
    ...(ogImage ? { images: [{ url: ogImage, alt: title ?? siteConfig.tagline }] } : {}),
  }

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: title ?? siteConfig.tagline,
      description: resolvedDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

/**
 * Metadata padrão da Home.
 * Copy v1.0 — sujeita a revisão.
 */
export const homeMetadata = buildMetadata({
  title: 'N8FLOW — Engenharia de Growth e Tecnologia',
  description:
    'Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações conectadas e orientadas a crescimento.',
  pathname: '/',
})
