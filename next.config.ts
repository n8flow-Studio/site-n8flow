import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      { source: '/comunidade', destination: '/servicos', permanent: true },
      { source: '/eventos/:path*', destination: '/servicos', permanent: true },
      {
        source: '/servicos/sites-e-landing-pages',
        destination: '/servicos/conversao-e-experiencia',
        permanent: true,
      },
      {
        source: '/servicos/automacao-e-ia',
        destination: '/servicos/dados-automacao-e-ia',
        permanent: true,
      },
      {
        source: '/servicos/crm-e-agentes',
        destination: '/servicos/crm-e-relacionamento',
        permanent: true,
      },
      {
        source: '/servicos/trafego-e-dados',
        destination: '/servicos/aquisicao-e-midia',
        permanent: true,
      },
    ]
  },

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
