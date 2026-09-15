import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AttributionCapture } from '@/components/forms/attribution-capture'
import { LeadFormProvider } from '@/components/forms/lead-form-dialog'
import { Anton, Inter } from 'next/font/google'
import { SkipLink } from '@/components/layout/skip-link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

// ---------------------------------------------------------------------------
// Display condensado e corpo legível, auto-hospedados por next/font (ADR-0009).
// ---------------------------------------------------------------------------
const display = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

// ---------------------------------------------------------------------------
// Metadata global — Copy v1.0, sujeita a revisão (Copy §4)
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    template: '%s | N8FLOW',
    default: 'N8FLOW — Tecnologia e marketing para fazer seu negócio crescer',
  },
  description:
    'Posicionamento no Google, captação de clientes qualificados, automação de processos e soluções com Inteligência Artificial. Tudo integrado, do jeito que o seu negócio precisa.',
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
        alt: 'N8FLOW — Tecnologia e marketing para fazer seu negócio crescer',
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
    <html lang="pt-BR" data-theme="light" className={`${display.variable} ${inter.variable}`}>
      <body className="bg-[var(--bg-canvas)] font-sans text-[var(--text-primary)] antialiased">
        <LeadFormProvider>
          {/* Skip link para acessibilidade — WCAG 2.2 AA (DS §6.3) */}
          <SkipLink />
          <Suspense fallback={null}>
            <AttributionCapture />
          </Suspense>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LeadFormProvider>
      </body>
    </html>
  )
}
