import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { CaseSummary } from '@/types/content'
import { cn } from '@/lib/cn'

export interface CaseCardProps {
  caseStudy: CaseSummary
  className?: string
}

export function CaseCard({ caseStudy, className }: CaseCardProps) {
  const { slug, title, summary, client, sector, challenge, resultSummary, metrics, services } =
    caseStudy

  return (
    <Card
      variant="interactive"
      padding="lg"
      className={cn('group flex h-full flex-col justify-between', className)}
    >
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {client && (
            <span className="text-xs font-semibold tracking-wider text-[var(--action-primary)] uppercase">
              {client}
            </span>
          )}
          {sector && (
            <Badge variant="neutral" size="sm">
              {sector}
            </Badge>
          )}
        </div>

        <h3 className="display-readable font-display text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-primary)]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{summary}</p>

        {challenge && (
          <div className="mt-4 text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--text-secondary)]">Desafio:</strong> {challenge}
          </div>
        )}

        {/* Somente exibe métricas se existirem dados comprovados */}
        {metrics && metrics.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border-subtle)] pt-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-[var(--radius-sm)] bg-[var(--bg-elevated)] p-2.5">
                <div className="font-display text-lg font-bold text-[var(--action-primary)]">
                  {m.value}
                </div>
                <div className="mt-0.5 text-xs text-[var(--text-muted)]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {resultSummary && (
          <p className="mt-4 border-l-2 border-[var(--action-primary)] pl-3 text-xs text-[var(--text-secondary)] italic">
            {resultSummary}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
        <div className="flex flex-wrap gap-1.5">
          {services.map((srv, i) => (
            <span
              key={i}
              className="rounded bg-[var(--bg-elevated)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]"
            >
              {srv}
            </span>
          ))}
        </div>
        <Link
          href={`/cases/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--action-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <span>Ver case</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  )
}
