import type { Metadata } from 'next'
import { getAdminSession } from '@/server/auth/session'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'N8FLOW — Painel Administrativo',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const admin = await getAdminSession()

  return (
    <div className="min-h-screen bg-[var(--bg-subtle)] text-[var(--text-primary)]">
      {/* Topbar administrativa (apenas exibida se estiver autenticado) */}
      {admin && (
        <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="font-display text-xl font-bold tracking-tight text-[var(--action-primary)]">
                N8FLOW <span className="text-xs font-normal uppercase tracking-wider text-[var(--text-secondary)]">CRM Interno</span>
              </Link>
              <nav className="flex items-center gap-4 text-sm font-medium">
                <Link href="/admin" className="hover:text-[var(--action-primary)] transition-colors">
                  Leads & Diagnósticos
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-[var(--text-secondary)]">{admin.email}</span>
              <form action="/api/admin/auth" method="DELETE">
                <button
                  type="submit"
                  className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-semibold hover:bg-[var(--bg-subtle)] transition-colors"
                >
                  Sair
                </button>
              </form>
            </div>
          </div>
        </header>
      )}

      <main className="mx-auto max-w-7xl p-6 md:p-8">
        {children}
      </main>
    </div>
  )
}
