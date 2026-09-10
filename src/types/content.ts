/**
 * Tipos de conteúdo do site N8FLOW.
 *
 * Baseados nos modelos mínimos definidos em:
 * docs/arquitetura-tecnica/02-conteudo-dados-e-cache.md §2.2
 *
 * Implementação Markdown/MDX conforme ADR-0001.
 */

// ---------------------------------------------------------------------------
// Status de evento (confirmado no DS §5.5 e Arquitetura §2.2)
// 'draft' nunca aparece em produção nem no sitemap
// ---------------------------------------------------------------------------
export type EventStatus = 'draft' | 'published' | 'open' | 'sold_out' | 'closed'

// ---------------------------------------------------------------------------
// SEO — campos compartilhados entre tipos de conteúdo
// ---------------------------------------------------------------------------
export interface ContentSeo {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

// ---------------------------------------------------------------------------
// Evento
// ---------------------------------------------------------------------------
export interface EventSummary {
  id: string
  slug: string
  title: string
  summary: string
  status: EventStatus
  startsAt: string // ISO 8601
  endsAt?: string // ISO 8601
  timezone: string // ex.: 'America/Sao_Paulo'
  venue: string
  address: string
  price?: number
  currency: string
  capacity?: number
  image?: string
}

export interface Event extends EventSummary {
  seo: ContentSeo
  body: string // HTML/MDX compilado
}

// ---------------------------------------------------------------------------
// Artigo de blog
// ---------------------------------------------------------------------------
export interface ArticleSummary {
  slug: string
  title: string
  description: string
  publishedAt: string // ISO 8601
  updatedAt?: string
  author: string
  category: string
  tags: string[]
  readingTime?: number // minutos
  image?: string
  relatedServices?: string[] // slugs
}

export interface Article extends ArticleSummary {
  seo: ContentSeo
  body: string
}

// ---------------------------------------------------------------------------
// Case de sucesso
// Campos de resultado e prova são opcionais — somente valores reais (DS §5.6)
// ---------------------------------------------------------------------------
export interface CaseSummary {
  slug: string
  title: string
  summary: string
  services: string[] // slugs de serviços relacionados
  challenge: string
  publishedAt: string
  image?: string
  // Opcionais — somente quando existirem dados reais
  client?: string
  sector?: string
  resultSummary?: string
  metrics?: CaseMetric[]
}

export interface CaseMetric {
  label: string
  value: string
  // Sem "antes/depois" fabricados; somente métricas comprovadas
}

export interface CaseStudy extends CaseSummary {
  approach: string
  results?: string
  testimonial?: Testimonial
  seo: ContentSeo
  body: string
}

// ---------------------------------------------------------------------------
// Depoimento — PENDENTE até existirem depoimentos reais (DS §5.7)
// ---------------------------------------------------------------------------
export interface Testimonial {
  quote: string
  author: string
  role: string
  organization: string
  image?: string
}

// ---------------------------------------------------------------------------
// Serviço
// ---------------------------------------------------------------------------
export interface ServiceSummary {
  slug: string
  title: string
  summary: string
  problems: string[]
  outcomes: string[]
}

export interface Service extends ServiceSummary {
  capabilities: string[]
  process?: ProcessStep[]
  faq?: FaqItem[]
  seo: ContentSeo
  body: string
}

export interface ProcessStep {
  label: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

// ---------------------------------------------------------------------------
// Filtros de consulta
// ---------------------------------------------------------------------------
export interface EventFilter {
  status?: EventStatus | EventStatus[]
  limit?: number
}

export interface ArticleFilter {
  category?: string
  tag?: string
  limit?: number
}
