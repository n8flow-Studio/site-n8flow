import { renderToStaticMarkup } from 'react-dom/server'
import { describe, it, expect } from 'vitest'
import { Founders } from '@/components/marketing/founders'

describe('Founders', () => {
  it('renders only the approved names and roles', () => {
    const html = renderToStaticMarkup(<Founders />)
    expect(html).toContain('QUEM ESTÁ POR TRÁS DA N8FLOW')
    expect(html).toContain('WEDSON SANTOS')
    expect(html).toContain('PEDRO NASCIMENTO')
    expect(html).toContain('CEO | CO-FUNDADOR')
    expect(html).toContain('CTO | CO-FUNDADOR')
  })

  it('reserves space without broken images or fictional biographies', () => {
    const html = renderToStaticMarkup(<Founders />)
    expect(html.match(/<img /g)).toHaveLength(1)
    expect(html).toContain('pedro-nascimento.png')
    expect(html).toContain('alt="Pedro Nascimento, CTO e co-fundador da N8FLOW"')
    expect(html).toContain('loading="lazy"')
    expect(html.match(/class="founder-photo-reserved" aria-hidden="true"/g)).toHaveLength(1)
    expect(html.match(/class="founder-bio"><\/div>/g)).toHaveLength(2)
    expect(html).toContain('aria-labelledby="founders-title"')
  })
})
