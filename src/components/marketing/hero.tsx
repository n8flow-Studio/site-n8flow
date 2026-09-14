import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
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
      data-theme="dark"
      aria-label="Apresentação principal"
      className={cn(
        'hero-section relative overflow-hidden border-b border-[var(--border-subtle)]',
        isHome && children ? 'hero-home' : 'hero-editorial',
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
            {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}

            <h1 className="hero-title font-display text-[var(--text-primary)]">{title}</h1>

            <p className="hero-description mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className={cn(
                      'action-link inline-flex min-h-13 items-center justify-center gap-3 rounded-sm border px-5 py-3 text-sm font-semibold transition-colors',
                      primaryAction.variant === 'secondary'
                        ? 'border-[var(--action-secondary)] bg-[var(--action-secondary)] text-white hover:bg-[var(--action-secondary-hover)]'
                        : 'border-[var(--green-400)] bg-[var(--green-400)] text-[var(--neutral-950)] hover:bg-[var(--green-200)]',
                    )}
                  >
                    {primaryAction.label}
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="action-link inline-flex min-h-13 items-center justify-center gap-3 px-3 py-3 text-sm font-semibold text-[var(--text-primary)] underline decoration-[var(--border-default)] underline-offset-8 transition-colors hover:text-[var(--text-link)]"
                  >
                    {secondaryAction.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
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
