import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { SkipLink } from '@/components/layout/skip-link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

// ---------------------------------------------------------------------------
// Fontes — RECOMENDADAS DS; validação visual pendente (DS §1.3, §8.7)
// Space Grotesk: display/títulos | Inter: corpo/interface
// ---------------------------------------------------------------------------
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

// ---------------------------------------------------------------------------
// Metadata global — Copy v1.0, sujeita a revisão (Copy §4)
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    template: '%s | N8FLOW',
    default: 'N8FLOW — Engenharia de Growth e Tecnologia',
  },
  description:
    'Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações conectadas e orientadas a crescimento.',
  metadataBase: new URL('https://n8flow.com.br'),
  alternates: {
    canonical: 'https://n8flow.com.br',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'N8FLOW',
    url: 'https://n8flow.com.br',
    images: [
      {
        url: '/brand/og-default.png',
        width: 1200,
        height: 630,
        alt: 'N8FLOW — Engenharia de Growth e Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/brand/og-default.png'],
  },
  // Schema.org Organization adicionado na Fase 4 com dados confirmados
}

// ---------------------------------------------------------------------------
// Layout global
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[var(--bg-canvas)] font-sans text-[var(--text-primary)] antialiased">
        {/* Skip link para acessibilidade — WCAG 2.2 AA (DS §6.3) */}
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
