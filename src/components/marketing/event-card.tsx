import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Ticket } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { EventStatus } from '@/types/content'
import { cn } from '@/lib/cn'

export interface EventCardProps {
  id: string
  slug: string
  title: string
  summary: string
  status: EventStatus
  startsAt: string
  venue: string
  address: string
  price?: number
  capacity?: number
  className?: string
  featured?: boolean
}

export function EventCard({
  slug,
  title,
  summary,
  status,
  startsAt,
  venue,
  address,
  price,
  capacity,
  className,
  featured = false,
}: EventCardProps) {
  // Configurações contextuais por status
  const statusConfig: Record<
    EventStatus,
    {
      label: string
      variant: 'success' | 'warning' | 'neutral' | 'error'
      cta: string
      disabled: boolean
    }
  > = {
    open: {
      label: 'Inscrições abertas',
      variant: 'success',
      cta: 'Quero participar',
      disabled: false,
    },
    published: { label: 'Em breve', variant: 'warning', cta: 'Ver detalhes', disabled: false },
    sold_out: {
      label: 'Vagas esgotadas',
      variant: 'error',
      cta: 'Evento esgotado',
      disabled: true,
    },
    closed: { label: 'Evento encerrado', variant: 'neutral', cta: 'Encerrado', disabled: true },
    draft: { label: 'Rascunho', variant: 'neutral', cta: 'Rascunho', disabled: true },
  }

  const currentStatus = statusConfig[status] || statusConfig.open

  return (
    <Card
      variant={featured ? 'featured' : 'surface'}
      padding="lg"
      className={cn('relative flex h-full flex-col justify-between', className)}
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge variant={currentStatus.variant} dot>
            {currentStatus.label}
          </Badge>
          {price && (
            <span className="font-display text-lg font-bold text-[var(--action-primary)]">
              R$ {price}
            </span>
          )}
        </div>

        <h3 className="display-readable font-display text-2xl font-bold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {summary}
        </p>

        {/* Metadados do evento */}
        <div className="mt-6 space-y-2.5 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] p-4 text-xs text-[var(--text-secondary)] sm:text-sm">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 shrink-0 text-[var(--action-primary)]" />
            <time dateTime={startsAt}>{startsAt}</time>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-[var(--action-primary)]" />
            <span>
              {venue} — <span className="text-[var(--text-muted)]">{address}</span>
            </span>
          </div>
          {capacity && (
            <div className="flex items-center gap-2.5">
              <Users className="h-4 w-4 shrink-0 text-[var(--action-primary)]" />
              <span>Limite de {capacity} participantes</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 border-t border-[var(--border-subtle)] pt-4">
        <Link
          href={`/eventos/${slug}`}
          className={cn(
            'flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] text-sm font-semibold transition-all',
            currentStatus.disabled
              ? 'pointer-events-none bg-[var(--bg-elevated)] text-[var(--text-muted)]'
              : 'bg-[var(--action-primary)] text-[var(--text-inverse)] hover:scale-[1.01] hover:bg-[var(--action-primary-hover)]',
          )}
        >
          <Ticket className="h-4 w-4" />
          <span>{currentStatus.cta}</span>
        </Link>
      </div>
    </Card>
  )
}
