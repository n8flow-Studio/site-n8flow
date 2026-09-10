import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva(
  'rounded-[var(--radius-lg)] transition-all duration-[var(--duration-normal)] relative overflow-hidden',
  {
    variants: {
      variant: {
        surface: 'bg-[var(--bg-surface)] border border-[var(--border-subtle)]',
        outline: 'bg-transparent border border-[var(--border-default)]',
        interactive: [
          'bg-[var(--bg-surface)] border border-[var(--border-subtle)]',
          'hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]',
          'hover:-translate-y-1 hover:shadow-[var(--shadow-md)]',
          'cursor-pointer',
        ],
        featured: [
          'bg-[var(--bg-surface)] border border-[rgb(0_245_160/0.4)]',
          'shadow-[var(--glow-green)]',
        ],
      },
      padding: {
        none: 'p-0',
        sm: 'p-4 sm:p-5',
        md: 'p-6 sm:p-8',
        lg: 'p-8 sm:p-10',
      },
    },
    defaultVariants: {
      variant: 'surface',
      padding: 'md',
    },
  },
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType
}

export function Card({
  className,
  variant,
  padding,
  as: Tag = 'div',
  children,
  ...props
}: CardProps) {
  return (
    <Tag className={cn(cardVariants({ variant, padding }), className)} {...props}>
      {children}
    </Tag>
  )
}
