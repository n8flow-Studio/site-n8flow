import { cn } from '@/lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Container — largura máxima 1280px com padding lateral responsivo.
 *
 * Referência: DS §3.2
 * - Padding: 20px mobile, 32px tablet (md), 48px desktop (xl)
 * - Max-width: 1280px (content)
 */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-[1280px] px-5 md:px-8 xl:px-12',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
