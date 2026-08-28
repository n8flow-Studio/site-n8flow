import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  as?: React.ElementType
  container?: boolean
  'aria-label'?: string
  'aria-labelledby'?: string
}

/**
 * Section — wrapper padrão de seção de página.
 *
 * Responsabilidades:
 * - Padding vertical padrão (DS §3.4)
 * - Container opcional (1280px)
 * - Semântica de seção com ARIA label obrigatório
 *
 * Referência: DS §4.1, §3.4
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  as: Tag = 'section',
  container = true,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('py-16 md:py-24', className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {container ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  )
}
