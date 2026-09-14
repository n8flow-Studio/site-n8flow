import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

export interface ServiceCardProps {
  slug: string
  title: string
  description: string
  outcomes?: string[]
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({
  slug,
  title,
  description,
  outcomes,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <Card
      variant="interactive"
      padding="md"
      className={cn('group flex h-full flex-col justify-between', className)}
    >
      <div>
        {icon && (
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--action-primary)] transition-colors group-hover:border-[var(--action-primary)] group-hover:bg-[rgb(0_245_160/0.1)]">
            {icon}
          </div>
        )}

        <h3 className="display-readable font-display text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>

        {outcomes && outcomes.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-muted)]">
            {outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--action-primary)]" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={`/servicos/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--action-primary)] transition-all group-hover:translate-x-1"
        >
          <span>Conhecer solução</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  )
}
