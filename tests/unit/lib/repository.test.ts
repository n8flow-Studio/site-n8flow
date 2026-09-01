import { describe, it, expect } from 'vitest'
import { contentRepository } from '@/lib/content/repository'

describe('ContentRepository', () => {
  it('retorna as 5 frentes de atuação da assessoria', async () => {
    const services = await contentRepository.listServices()
    expect(services).toHaveLength(5)
    expect(services.map((s) => s.slug)).toEqual([
      'estrategia-e-gestao-de-growth',
      'aquisicao-e-midia',
      'conversao-e-experiencia',
      'crm-e-relacionamento',
      'dados-automacao-e-ia',
    ])
  })

  it('recupera uma frente específica por slug com capacidades e processo', async () => {
    const service = await contentRepository.getService('dados-automacao-e-ia')
    expect(service).not.toBeNull()
    expect(service?.title).toBe('Dados, Automação e IA')
    expect(service?.capabilities.length).toBeGreaterThan(0)
    expect(service?.process).toHaveLength(3)
  })

  it('retorna null para slug de serviço inexistente', async () => {
    const service = await contentRepository.getService('servico-inexistente')
    expect(service).toBeNull()
  })

  it('não publica eventos enquanto a oferta estiver suspensa', async () => {
    const events = await contentRepository.listEvents()
    expect(events).toHaveLength(0)
  })

  it('não recupera eventos pela rota pública enquanto suspensos', async () => {
    const event = await contentRepository.getEvent('growth-ia-mercado-imobiliario')
    expect(event).toBeNull()
  })

  it('não publica artigos sem autoria, data e fontes aprovadas', async () => {
    const articles = await contentRepository.listArticles()
    expect(articles).toHaveLength(0)
    expect(await contentRepository.getArticle('rascunho')).toBeNull()
  })
})
