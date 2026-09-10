import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/cn'

export interface PricingCardProps {
  name: string
  price: number
  period?: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  disclaimer?: string
  featured?: boolean
  className?: string
}

export function PricingCard({
  name,
  price,
  period = '/mês',
  description,
  features,
  cta,
  disclaimer,
  featured = true,
  className,
}: PricingCardProps) {
  return (
    <Card
      variant={featured ? 'featured' : 'surface'}
      padding="lg"
      className={cn('flex flex-col justify-between max-w-lg mx-auto relative', className)}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <Badge variant="brand" size="md">
            {name}
          </Badge>
          {featured && (
            <span className="text-xs font-semibold text-[var(--action-primary)] uppercase tracking-wider">
              Acesso contínuo
            </span>
          )}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-[var(--text-secondary)]">R$</span>
          <span className="font-display text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            {price}
          </span>
          <span className="text-sm text-[var(--text-muted)]">{period}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
            O que está incluído:
          </p>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)]" role="list">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgb(0_245_160/0.15)] text-[var(--action-primary)]">
                  <Check className="h-3 w-3" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-4 border-t border-[var(--border-subtle)]">
        <Link
          href={cta.href}
          className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] px-8 font-semibold text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-all hover:bg-[var(--action-primary-hover)] hover:scale-[1.01]"
        >
          {cta.label}
        </Link>
        {disclaimer && (
          <p className="mt-3 text-center text-xs text-[var(--text-muted)]">
            {disclaimer}
          </p>
        )}
      </div>
    </Card>
  )
}
