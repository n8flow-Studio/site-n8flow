import { describe, it, expect } from 'vitest'
import { contentRepository } from '@/lib/content/repository'

describe('ContentRepository', () => {
  it('retorna a lista de 4 serviços principais', async () => {
    const services = await contentRepository.listServices()
    expect(services).toHaveLength(4)
    expect(services.map((s) => s.slug)).toContain('sites-e-landing-pages')
    expect(services.map((s) => s.slug)).toContain('automacao-e-ia')
    expect(services.map((s) => s.slug)).toContain('crm-e-agentes')
    expect(services.map((s) => s.slug)).toContain('trafego-e-dados')
  })

  it('recupera um serviço específico por slug com capabilities e faq', async () => {
    const service = await contentRepository.getService('automacao-e-ia')
    expect(service).not.toBeNull()
    expect(service?.title).toBe('Automação e IA')
    expect(service?.capabilities.length).toBeGreaterThan(0)
    expect(service?.faq).toBeDefined()
  })

  it('retorna null para slug de serviço inexistente', async () => {
    const service = await contentRepository.getService('servico-inexistente')
    expect(service).toBeNull()
  })

  it('retorna lista de eventos públicos excluindo drafts', async () => {
    const events = await contentRepository.listEvents()
    expect(events.length).toBeGreaterThan(0)
    expect(events.every((e) => e.status !== 'draft')).toBe(true)
  })

  it('recupera evento específico por slug', async () => {
    const event = await contentRepository.getEvent('growth-ia-mercado-imobiliario')
    expect(event).not.toBeNull()
    expect(event?.venue).toBe('Seahub Sebrae')
    expect(event?.price).toBe(97)
    expect(event?.capacity).toBe(40)
  })

  it('retorna lista de artigos e suporta busca por slug', async () => {
    const articles = await contentRepository.listArticles()
    expect(articles.length).toBeGreaterThan(0)

    const article = await contentRepository.getArticle(articles[0].slug)
    expect(article).not.toBeNull()
    expect(article?.author).toBe('Engenharia N8FLOW')
  })
})
