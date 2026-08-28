import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { Slot } from './slot'

// ---------------------------------------------------------------------------
// Variantes do Button — DS §4.2
// ---------------------------------------------------------------------------
const buttonVariants = cva(
  // Base
  [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-semibold',
    'rounded-[var(--radius-md)]',
    'border border-transparent',
    'transition-colors duration-[var(--duration-fast)]',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'focus-visible:outline-[var(--focus-ring)]',
    'disabled:pointer-events-none disabled:opacity-40',
    'select-none',
  ],
  {
    variants: {
      variant: {
        /**
         * primary — verde; CTA dominante de conversão (CONFIRMADO)
         * Texto quase preto para contraste adequado no verde de marca
         */
        primary: [
          'bg-[var(--action-primary)]',
          'text-[var(--text-inverse)]',
          'hover:bg-[var(--action-primary-hover)]',
          'active:bg-[var(--action-primary-active)]',
        ],
        /**
         * secondary — roxo; ação alternativa relevante (CONFIRMADO)
         */
        secondary: [
          'bg-[var(--action-secondary)]',
          'text-white',
          'hover:bg-[var(--action-secondary-hover)]',
        ],
        /**
         * outline — fundo transparente + borda; alternativa visível
         */
        outline: [
          'border-[var(--border-default)]',
          'text-[var(--text-primary)]',
          'hover:border-[var(--border-strong)]',
          'hover:bg-[var(--bg-elevated)]',
        ],
        /**
         * ghost — baixa ênfase
         */
        ghost: [
          'text-[var(--text-secondary)]',
          'hover:bg-[var(--bg-elevated)]',
          'hover:text-[var(--text-primary)]',
        ],
        /**
         * destructive — APENAS ação destrutiva, nunca CTA comercial (DS §4.2)
         */
        destructive: [
          'bg-[var(--status-error)]',
          'text-white',
          'hover:opacity-90',
        ],
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  loadingText?: string
  asChild?: boolean
}

/**
 * Button — componente primário de ação.
 *
 * - loading: preserva largura, exibe spinner, anuncia aria-busy, bloqueia cliques.
 * - asChild: delega renderização ao filho (útil para Link como botão).
 * - disabled: não recebe clique e é anunciado por tecnologia assistiva.
 *
 * Referência: DS §4.2
 */
export function Button({
  className,
  variant,
  size,
  loading = false,
  loadingText,
  asChild = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const isDisabled = disabled || loading

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      {...props}
    >
      {loading ? (
        <>
          {/* Spinner acessível */}
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          <span>{loadingText ?? children}</span>
        </>
      ) : (
        children
      )}
    </Comp>
  )
}
