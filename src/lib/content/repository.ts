/**
 * Interface ContentRepository — camada de abstração de conteúdo.
 *
 * O site acessa todo conteúdo por meio desta interface, nunca por `fs` espalhado.
 * Isso permite migrar de dados locais para MDX/CMS headless sem alterar as páginas.
 *
 * Implementação: MemoryContentRepository alimentado por dados estruturados validados.
 * Referência: docs/arquitetura-tecnica/02-conteudo-dados-e-cache.md §2.1
 */
import type {
  Article,
  ArticleFilter,
  ArticleSummary,
  CaseStudy,
  CaseSummary,
  Event,
  EventFilter,
  EventSummary,
  Service,
  ServiceSummary,
} from '@/types/content'
import { initialServices, initialEvents, initialCases } from './data'

export interface ContentRepository {
  // Eventos
  listEvents(filter?: EventFilter): Promise<EventSummary[]>
  getEvent(slug: string): Promise<Event | null>

  // Artigos
  listArticles(filter?: ArticleFilter): Promise<ArticleSummary[]>
  getArticle(slug: string): Promise<Article | null>

  // Cases
  listCases(): Promise<CaseSummary[]>
  getCase(slug: string): Promise<CaseStudy | null>

  // Serviços
  listServices(): Promise<ServiceSummary[]>
  getService(slug: string): Promise<Service | null>
}

export class MemoryContentRepository implements ContentRepository {
  async listEvents(filter?: EventFilter): Promise<EventSummary[]> {
    let events = initialEvents.filter((e) => e.status !== 'draft')

    if (filter?.status) {
      const allowed = Array.isArray(filter.status) ? filter.status : [filter.status]
      events = events.filter((e) => allowed.includes(e.status))
    }

    if (filter?.limit) {
      events = events.slice(0, filter.limit)
    }

    return events.map(({ seo: _, body: __, ...summary }) => summary)
  }

  async getEvent(slug: string): Promise<Event | null> {
    const event = initialEvents.find((e) => e.slug === slug && e.status !== 'draft')
    return event ?? null
  }

  async listArticles(_filter?: ArticleFilter): Promise<ArticleSummary[]> {
    // Autoria, data e fontes dos artigos iniciais ainda não foram aprovadas.
    return []
  }

  async getArticle(_slug: string): Promise<Article | null> {
    return null
  }

  async listCases(): Promise<CaseSummary[]> {
    return initialCases.map(({ seo: _, body: __, approach: ___, ...summary }) => summary)
  }

  async getCase(slug: string): Promise<CaseStudy | null> {
    const caseItem = initialCases.find((c) => c.slug === slug)
    return caseItem ?? null
  }

  async listServices(): Promise<ServiceSummary[]> {
    return initialServices.map(
      ({ capabilities: _, process: __, faq: ___, seo: ____, body: _____, ...summary }) => summary,
    )
  }

  async getService(slug: string): Promise<Service | null> {
    const service = initialServices.find((s) => s.slug === slug)
    return service ?? null
  }
}

// Repositório singleton
export const contentRepository: ContentRepository = new MemoryContentRepository()
