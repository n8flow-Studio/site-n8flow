import type { CSSProperties } from 'react'

/** Decorative wave, finite motion and no client-side runtime. */
export function BrandSlats({ className = '' }: { className?: string }) {
  return (
    <div className={`brand-slats ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }, (_, index) => (
        <span key={index} style={{ '--slat-index': index } as CSSProperties} />
      ))}
    </div>
  )
}
