import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'

export interface HeroAction {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export interface HeroProps {
  eyebrow?: string
  title: React.ReactNode
  description: React.ReactNode
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  proof?: React.ReactNode
  variant?: 'home' | 'landing' | 'editorial' | 'b2b'
  className?: string
  children?: React.ReactNode
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  proof,
  variant = 'home',
  className,
  children,
}: HeroProps) {
  const isHome = variant === 'home'

  return (
    <section
      aria-label="Apresentação principal"
      className={cn(
        'relative overflow-hidden border-b border-[var(--border-default)] py-16 md:py-24 lg:py-32',
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            isHome ? 'grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12' : 'max-w-4xl',
          )}
        >
          <div className={cn(isHome && 'lg:col-span-7')}>
            {eyebrow && (
              <p className="mb-8 flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.18em] text-[var(--text-secondary)] uppercase">
                <span className="h-px w-10 bg-[var(--violet-500)]" aria-hidden="true" />
                {eyebrow}
              </p>
            )}

            <h1 className="font-display text-[clamp(2.75rem,7vw,6.4rem)] leading-[0.94] font-semibold tracking-[-0.055em] text-[var(--text-primary)]">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl border-l border-[var(--border-strong)] pl-5 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className={cn(
                      'inline-flex h-12 items-center justify-center border px-7 text-sm font-semibold transition-colors',
                      primaryAction.variant === 'secondary'
                        ? 'border-[var(--action-secondary)] bg-[var(--action-secondary)] text-white hover:bg-[var(--action-secondary-hover)]'
                        : 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--text-inverse)] hover:bg-[var(--violet-700)]',
                    )}
                  >
                    {primaryAction.label}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] bg-transparent px-7 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}

            {proof && <div className="mt-8">{proof}</div>}
          </div>
          {children && <div className={cn('w-full', isHome && 'lg:col-span-5')}>{children}</div>}
        </div>
      </Container>
    </section>
  )
}
