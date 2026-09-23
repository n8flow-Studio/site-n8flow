import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { getAdminSession } from '@/server/auth/session'
import { getAdminLeadById, type AdminLeadDetail } from '@/server/leads/admin-repository'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function AdminLeadDetailPage({ params }: PageProps) {
  const admin = await getAdminSession()

  if (!admin) {
    redirect('/admin/login')
  }

  const { id } = await params
  let lead: AdminLeadDetail | null = null

  try {
    lead = await getAdminLeadById(id)
  } catch (error) {
    console.error('Erro ao buscar lead:', error)
  }

  if (!lead) {
    notFound()
  }

  const payload = lead.payload || {}
  const attribution = payload.attribution || {}
  const date = new Date(lead.createdAt).toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'medium',
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin"
          className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--action-primary)] transition-colors"
        >
          ← Voltar para listagem
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">{payload.name}</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Submetido em {date}
          </p>
        </div>
        <div className="text-xs text-[var(--text-secondary)]">
          ID: <code className="bg-[var(--bg-subtle)] px-2 py-1 rounded font-mono">{lead.id}</code>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Dados de Contato e Empresa */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 shadow-sm space-y-4">
          <h2 className="font-display text-base font-semibold border-b border-[var(--border-subtle)] pb-2">
            Dados do Lead
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Nome</span>
              <span className="font-medium text-[var(--text-primary)]">{payload.name}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Empresa</span>
              <span className="font-medium text-[var(--text-primary)]">{payload.company}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">E-mail</span>
              <a href={`mailto:${payload.email}`} className="font-medium text-[var(--action-primary)] hover:underline">
                {payload.email}
              </a>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Telefone / WhatsApp</span>
              <a href={`https://wa.me/55${payload.phone?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--action-primary)] hover:underline">
                {payload.phone}
              </a>
            </div>
            <div className="col-span-2">
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Objetivo</span>
              <span className="inline-flex mt-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] px-2.5 py-0.5 text-xs font-medium capitalize">
                {payload.interest || 'diagnostico'}
              </span>
            </div>
            {payload.message && (
              <div className="col-span-2">
                <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Mensagem / Desafio</span>
                <p className="mt-1 rounded-[var(--radius-md)] bg-[var(--bg-subtle)] p-3 text-sm text-[var(--text-primary)] whitespace-pre-wrap">
                  {payload.message}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Origem e Atribuição */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 shadow-sm space-y-4">
          <h2 className="font-display text-base font-semibold border-b border-[var(--border-subtle)] pb-2">
            Origem e Rastreamento
          </h2>
          <div className="space-y-3 text-sm">
            {Object.keys(attribution).length === 0 ? (
              <p className="text-xs text-[var(--text-secondary)]">Nenhum parâmetro UTM ou rastreamento gravado.</p>
            ) : (
              Object.entries(attribution).map(([key, val]) => (
                <div key={key} className="flex justify-between border-b border-[var(--border-subtle)] py-1.5 last:border-none">
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)]">{key}</span>
                  <span className="font-mono text-xs font-semibold">{String(val)}</span>
                </div>
              ))
            )}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-[var(--text-secondary)]">Request ID</span>
              <code className="text-xs font-mono text-[var(--text-secondary)]">{lead.requestId}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
