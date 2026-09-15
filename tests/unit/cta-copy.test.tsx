import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import HomePage from '@/app/page'
import ServicesPage from '@/app/servicos/page'
import ServiceDetailPage from '@/app/servicos/[slug]/page'
import MethodPage from '@/app/metodo/page'
import CasesPage from '@/app/cases/page'
import AboutPage from '@/app/sobre/page'
import { Header } from '@/components/layout/header'
import { LeadFormProvider } from '@/components/forms/lead-form-dialog'

async function render(component: React.ReactNode | Promise<React.ReactNode>) {
  return renderToStaticMarkup(<LeadFormProvider>{await component}</LeadFormProvider>)
}

describe('CTA copy', () => {
  it('uses a human global CTA and contextual primary actions', async () => {
    const header = await render(<Header />)
    const home = await render(HomePage())
    const services = await render(ServicesPage())
    const method = await render(<MethodPage />)
    const about = await render(<AboutPage />)

    expect(header).toContain('Falar com a N8FLOW')
    expect(home).toContain('Entender meu próximo passo')
    expect(home).toContain('Conversar sobre meu negócio')
    expect(services).toContain('Encontrar a solução certa')
    expect(services).toContain('Conversar sobre meu negócio')
    expect(method).toContain('Aplicar este método ao meu negócio')
    expect(method).toContain('Conversar sobre minha operação')
    expect(about).toContain('Falar com a N8FLOW')
  })

  it('keeps service and case conversion labels specific to their context', async () => {
    const service = await render(
      ServiceDetailPage({
        params: Promise.resolve({ slug: 'presenca-digital-e-posicionamento' }),
      }),
    )
    const cases = await render(CasesPage())

    expect(service).toContain('Avaliar esta solução')
    expect(service).toContain('Conversar sobre esta solução')
    expect(cases).toContain('Quer estruturar melhor sua operação?')
    expect(cases).toContain('Conversar sobre minha operação')
    expect(cases).not.toContain('próximo case de sucesso')
  })

  it('renders conversion actions as dialog triggers without contact-page links', async () => {
    const home = await render(HomePage())
    const services = await render(ServicesPage())

    expect(home).toContain('aria-haspopup="dialog"')
    expect(services).toContain('aria-haspopup="dialog"')
    expect(home).not.toContain('href="/contato"')
    expect(services).not.toContain('href="/contato"')
  })
})
