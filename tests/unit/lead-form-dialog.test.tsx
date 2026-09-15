import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { LeadFormProvider, LeadFormTrigger } from '@/components/forms/lead-form-dialog'

describe('LeadFormDialog', () => {
  it('exposes a semantic dialog trigger without navigation', () => {
    const html = renderToStaticMarkup(
      <LeadFormProvider>
        <LeadFormTrigger>Falar com a N8FLOW</LeadFormTrigger>
      </LeadFormProvider>,
    )

    expect(html).toContain('<button')
    expect(html).toContain('aria-haspopup="dialog"')
    expect(html).toContain('Falar com a N8FLOW')
    expect(html).not.toContain('href=')
  })

  it('keeps the global dialog named even before it is opened', () => {
    const html = renderToStaticMarkup(
      <LeadFormProvider>
        <span>Conteúdo</span>
      </LeadFormProvider>,
    )

    expect(html).toContain('<dialog')
    expect(html).toContain('aria-labelledby="lead-dialog-title"')
    expect(html).toContain('aria-describedby="lead-dialog-description"')
  })
})
