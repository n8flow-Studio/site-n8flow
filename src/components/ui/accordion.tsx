'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface AccordionItemData {
  id: string
  title: React.ReactNode
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItemData[]
  allowMultiple?: boolean
  defaultExpandedIds?: string[]
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultExpandedIds = [],
  className,
}: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpandedIds)

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      } else {
        return allowMultiple ? [...prev, id] : [id]
      }
    })
  }

  return (
    <div
      className={cn(
        'divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]',
        className,
      )}
    >
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id)
        const headerId = `accordion-header-${item.id}`
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id} className="group">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between py-5 text-left font-sans text-base font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--action-primary)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] sm:text-lg"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-[var(--duration-normal)] group-hover:text-[var(--text-primary)]',
                    isExpanded && 'rotate-180 text-[var(--action-primary)]',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isExpanded}
              className={cn(
                'pb-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base',
                !isExpanded && 'hidden',
              )}
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
