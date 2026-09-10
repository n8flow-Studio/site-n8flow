import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utilitário de composição de classes CSS.
 * Combina clsx (condicionais) com tailwind-merge (deduplicação de classes Tailwind).
 *
 * Uso: cn('base-class', condition && 'conditional-class', props.className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
