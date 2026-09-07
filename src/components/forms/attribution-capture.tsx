'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { normalizeAttribution } from '@/lib/validation/attribution'

export const ATTRIBUTION_KEY = 'n8flow:attribution:v1'
export function AttributionCapture() {
  const pathname = usePathname()
  const params = useSearchParams()
  useEffect(() => {
    try {
      if (sessionStorage.getItem(ATTRIBUTION_KEY)) return
      sessionStorage.setItem(
        ATTRIBUTION_KEY,
        JSON.stringify(
          normalizeAttribution({
            landingPage: pathname,
            utmSource: params.get('utm_source'),
            utmMedium: params.get('utm_medium'),
            utmCampaign: params.get('utm_campaign'),
            utmTerm: params.get('utm_term'),
            utmContent: params.get('utm_content'),
          }),
        ),
      )
    } catch {
      /* Storage disabled: submission remains available. */
    }
  }, [pathname, params])
  return null
}
