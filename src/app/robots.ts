import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * robots.ts — controla indexação por crawler.
 *
 * Regras:
 * - Preview deployments devem usar noindex (configurado via header/middleware na Vercel)
 * - Rotas de API, checkout e admin não são indexadas
 *
 * Referência: docs/arquitetura-tecnica/05-seo-analytics-observabilidade.md §5.1
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/checkout/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
