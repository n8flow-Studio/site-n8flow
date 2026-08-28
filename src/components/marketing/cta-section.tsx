import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
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
  if (variant === 'band') {
    return (
      <section
        aria-label="Ação final"
        className={cn(
          'relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-subtle)] py-16 md:py-20',
          className,
        )}
      >
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={primaryAction.href}
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] px-8 font-semibold text-[var(--text-inverse)] transition-all hover:bg-[var(--action-primary-hover)] hover:scale-[1.02]"
              >
                {primaryAction.label}
              </Link>
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] px-8 font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--bg-elevated)]"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section aria-label="Ação final" className={cn('py-16 md:py-24', className)}>
      <Container>
        <Card
          variant="featured"
          padding="lg"
          className="relative overflow-hidden text-center max-w-4xl mx-auto bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-elevated)]"
        >
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30"
            style={{ background: 'var(--gradient-hero)' }}
          />

          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg max-w-2xl mx-auto">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryAction.href}
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] px-8 font-semibold text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-all hover:bg-[var(--action-primary-hover)] hover:scale-[1.02]"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-8 font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </Card>
      </Container>
    </section>
  )
}
