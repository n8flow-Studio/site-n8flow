const limits = {
  utmSource: 100,
  utmMedium: 100,
  utmCampaign: 160,
  utmTerm: 160,
  utmContent: 160,
} as const

export function normalizeAttribution(value: unknown) {
  const input = value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
  function campaign(key: keyof typeof limits) {
    const text = input[key]
    // Campaign codes only. Drop free-form values, addresses and oversized data.
    return typeof text === 'string' &&
      text.length <= limits[key] &&
      /^[\p{L}\p{N}_ .-]+$/u.test(text.trim())
      ? text.trim()
      : null
  }
  const path =
    typeof input.landingPage === 'string' ? input.landingPage.split(/[?#]/)[0] : '/contato'
  // Only known marketing paths; never preserve arbitrary query strings or user IDs.
  const landingPage =
    /^\/(?:contato|servicos(?:\/[a-z0-9-]+)?|metodo|sobre|blog|cases)?$/.test(path) &&
    path.length <= 200
      ? path
      : '/contato'
  return {
    utmSource: campaign('utmSource'),
    utmMedium: campaign('utmMedium'),
    utmCampaign: campaign('utmCampaign'),
    utmTerm: campaign('utmTerm'),
    utmContent: campaign('utmContent'),
    landingPage,
  }
}
