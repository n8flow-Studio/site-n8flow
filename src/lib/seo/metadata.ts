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

const defaultOgImage = '/brand/og-default.png'

/**
 * Constrói o objeto Metadata do Next.js para cada página.
 * Usa título e descrição da estratégia editorial vigente como base.
 * Usa a imagem social oficial como fallback quando a página não possui imagem própria.
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
  const resolvedOgImage = ogImage ?? defaultOgImage

  const openGraph: Metadata['openGraph'] = {
    type: 'website',
    locale: 'pt_BR',
    url: canonical,
    siteName: siteConfig.name,
    title: title ?? siteConfig.tagline,
    description: resolvedDescription,
    images: [
      {
        url: resolvedOgImage,
        width: 1200,
        height: 630,
        alt: title ?? siteConfig.tagline,
      },
    ],
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
      images: [resolvedOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

/**
 * Metadata padrão da Home.
 * Posicionamento aprovado no ADR-0007.
 */
export const homeMetadata = buildMetadata({
  title: 'N8FLOW — Assessoria de Growth Marketing B2B',
  description:
    'Assessoria de Growth Marketing para conectar estratégia, aquisição, conversão, dados e vendas em uma operação orientada a crescimento.',
  pathname: '/',
})
