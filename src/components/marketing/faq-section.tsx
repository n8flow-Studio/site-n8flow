import React from 'react'
import { Container } from '@/components/ui/container'
import { Accordion, type AccordionItemData } from '@/components/ui/accordion'
import { cn } from '@/lib/cn'

export interface FaqSectionProps {
  title?: string
  description?: string
  items: AccordionItemData[]
  className?: string
}

export function FaqSection({
  title = 'Perguntas frequentes',
  description = 'Respostas diretas para dúvidas comuns sobre a operação, soluções e metodologia da N8FLOW.',
  items,
  className,
}: FaqSectionProps) {
  return (
    <section aria-label="Perguntas frequentes" className={cn('py-16 md:py-24', className)}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="display-readable font-display text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base text-[var(--text-secondary)] sm:text-lg">
                {description}
              </p>
            )}
          </div>

          <Accordion items={items} allowMultiple />
        </div>
      </Container>
    </section>
  )
}
