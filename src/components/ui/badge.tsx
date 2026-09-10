import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-medium rounded-full transition-colors select-none',
  {
    variants: {
      variant: {
        neutral: 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
        brand: 'bg-[rgb(0_245_160/0.12)] text-[var(--action-primary)] border border-[rgb(0_245_160/0.3)]',
        brandViolet: 'bg-[rgb(110_68_255/0.15)] text-[var(--violet-300)] border border-[rgb(110_68_255/0.3)]',
        success: 'bg-[rgb(0_245_160/0.12)] text-[var(--status-success)] border border-[rgb(0_245_160/0.25)]',
        warning: 'bg-[rgb(255_189_74/0.12)] text-[var(--status-warning)] border border-[rgb(255_189_74/0.25)]',
        error: 'bg-[rgb(255_100_124/0.12)] text-[var(--status-error)] border border-[rgb(255_100_124/0.25)]',
        info: 'bg-[rgb(77_183_255/0.12)] text-[var(--status-info)] border border-[rgb(77_183_255/0.25)]',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-xs font-semibold',
      },
    },
    defaultVariants: {
      variant: 'brand',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

export function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
