import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
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
  const isCentered = variant === 'home' || variant === 'landing'

  return (
    <section
      aria-label="Apresentação principal"
      className={cn(
        'relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32',
        className,
      )}
    >
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-30 blur-[120px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #00f5a0 0%, #6e44ff 70%, transparent 100%)',
          }}
        />
      </div>

      <Container>
        <div
          className={cn(
            'flex flex-col',
            isCentered ? 'items-center text-center mx-auto max-w-4xl' : 'items-start text-left max-w-3xl',
          )}
        >
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="brand" size="md">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl md:leading-relaxed max-w-2xl">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div
              className={cn(
                'mt-10 flex flex-col w-full gap-4 sm:w-auto sm:flex-row',
                isCentered && 'justify-center',
              )}
            >
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className={cn(
                    'inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] px-8 text-base font-semibold shadow-[var(--shadow-md)] transition-all hover:scale-[1.02] active:scale-[0.98]',
                    primaryAction.variant === 'secondary'
                      ? 'bg-[var(--action-secondary)] text-white hover:bg-[var(--action-secondary-hover)]'
                      : 'bg-[var(--action-primary)] text-[var(--text-inverse)] hover:bg-[var(--action-primary-hover)]',
                  )}
                >
                  {primaryAction.label}
                </Link>
              )}

              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-8 text-base font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}

          {proof && <div className="mt-8">{proof}</div>}
          {children && <div className="mt-12 w-full">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
