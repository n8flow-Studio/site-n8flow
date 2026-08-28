import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Cabeçalhos de segurança básicos (expandir em Fase 4 com CSP por allowlist real)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Imagens: domínios permitidos (expandir quando ativos forem servidos de CDN)
  images: {
    formats: ['image/avif', 'image/webp'],
    // remotePatterns será configurado quando CDN/CMS for definido
  },
}

export default nextConfig
