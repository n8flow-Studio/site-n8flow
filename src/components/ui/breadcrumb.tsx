import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Trilha de navegação" className={cn('mb-6', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-muted)] sm:text-sm">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-[var(--text-primary)]"
          >
            Início
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight
                className="h-3.5 w-3.5 text-[var(--text-muted)] shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-medium text-[var(--text-primary)]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
