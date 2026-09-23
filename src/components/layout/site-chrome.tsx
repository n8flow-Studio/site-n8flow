'use client'

import { usePathname } from 'next/navigation'
import { Suspense, type ReactNode } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SkipLink } from '@/components/layout/skip-link'
import { AttributionCapture } from '@/components/forms/attribution-capture'

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <SkipLink />
      <Suspense fallback={null}>
        <AttributionCapture />
      </Suspense>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
