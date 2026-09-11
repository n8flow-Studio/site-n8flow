import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface CtaSectionProps {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  variant?: 'band' | 'card' | 'split'
  className?: string
}

export function CtaSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'card',
  className,
}: CtaSectionProps) {
  return (
    <section aria-label="Ação final" className={cn('home-section bg-[var(--violet-50)]', className)}>
      <Container>
        <div className={cn('grid gap-8', variant === 'split' ? 'lg:grid-cols-2 lg:items-center' : 'mx-auto max-w-3xl text-center')}>
          <div>
            <h2 className={cn('section-title', variant !== 'split' && 'mx-auto')}>{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">{description}</p>
          </div>
          <div className={cn('flex flex-col gap-3 sm:flex-row', variant !== 'split' && 'justify-center')}>
            <Link href={primaryAction.href} className="action-link inline-flex min-h-13 items-center justify-center gap-3 rounded-sm bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-inverse)] transition-colors hover:bg-[var(--violet-700)]">
              {primaryAction.label}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            {secondaryAction && (
              <Link href={secondaryAction.href} className="inline-flex min-h-13 items-center justify-center px-6 py-3 text-sm font-semibold text-[var(--text-primary)] underline underline-offset-8">
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
