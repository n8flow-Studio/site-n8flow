import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/cn'

describe('cn', () => {
  it('retorna string vazia para nenhum argumento', () => {
    expect(cn()).toBe('')
  })

  it('combina classes simples', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('ignora valores falsy', () => {
    expect(cn('foo', false, undefined, null, '')).toBe('foo')
  })

  it('deduplicação de classes Tailwind conflitantes', () => {
    // tailwind-merge deve manter a última classe vencedora
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('text-red-500', 'text-green-500')).toBe('text-green-500')
  })

  it('mantém classes não-conflitantes', () => {
    expect(cn('flex', 'items-center', 'gap-4')).toBe('flex items-center gap-4')
  })

  it('suporta classes condicionais com objeto', () => {
    expect(cn('base', { active: true, inactive: false })).toBe('base active')
  })

  it('suporta array de classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz')
  })
})
