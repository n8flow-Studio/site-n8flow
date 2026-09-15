import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { contentRepository } from '@/lib/content/repository'

/**
 * sitemap.ts — inclui todas as rotas canônicas e publicadas.
 *
 * Filtros de segurança:
 * - Artigos e serviços ativos
 * - Comunidade e Eventos suspensos pelo ADR-0007
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  const now = new Date()

  // Páginas estáticas principais
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/metodo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cases`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Rotas dinâmicas de Serviços
  const services = await contentRepository.listServices()
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Rotas dinâmicas de Artigos
  const articles = await contentRepository.listArticles()
  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Rotas dinâmicas de Cases
  const cases = await contentRepository.listCases()
  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes, ...caseRoutes]
}
