import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getAdminSession } from '@/server/auth/session'
import { getAdminLeads, type AdminLeadItem } from '@/server/leads/admin-repository'

export default async function AdminDashboardPage() {
  const admin = await getAdminSession()

  if (!admin) {
    redirect('/admin/login')
  }

  let leadsData = { total: 0, leads: [] as AdminLeadItem[] }
  let loadError: string | null = null

  try {
    leadsData = await getAdminLeads(100, 0)
  } catch (error) {
    console.error('Erro ao carregar leads:', error)
    loadError = 'Não foi possível carregar os leads do banco de dados.'
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Leads Captados</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Acompanhamento de formulários e diagnósticos solicitados
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--action-subtle)] px-3 py-1 text-xs font-semibold text-[var(--action-primary)]">
            {leadsData.total} {leadsData.total === 1 ? 'registro' : 'registros'}
          </span>
        </div>
      </div>

      {loadError && (
        <div className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {loadError}
        </div>
      )}

      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] shadow-sm">
        {leadsData.leads.length === 0 ? (
          <div className="p-12 text-center text-sm text-[var(--text-secondary)]">
            Nenhum lead registrado até o momento.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                <tr>
                  <th className="px-5 py-3.5">Data / Hora</th>
                  <th className="px-5 py-3.5">Nome / Contato</th>
                  <th className="px-5 py-3.5">Empresa</th>
                  <th className="px-5 py-3.5">Objetivo</th>
                  <th className="px-5 py-3.5 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {leadsData.leads.map((lead) => {
                  const date = new Date(lead.createdAt).toLocaleString('pt-BR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })

                  return (
                    <tr key={lead.id} className="hover:bg-[var(--bg-subtle)] transition-colors">
                      <td className="whitespace-nowrap px-5 py-4 text-xs text-[var(--text-secondary)]">
                        {date}
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-semibold text-[var(--text-primary)]">{lead.name}</div>
                        <div className="text-xs text-[var(--text-secondary)]">{lead.email}</div>
                        <div className="text-xs text-[var(--text-secondary)]">{lead.phone}</div>
                      </td>
                      <td className="px-5 py-4 font-medium text-[var(--text-primary)]">
                        {lead.company}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] px-2.5 py-0.5 text-xs font-medium capitalize text-[var(--text-primary)]">
                          {lead.interest || 'diagnóstico'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-right">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
                        >
                          Ver Detalhes
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
