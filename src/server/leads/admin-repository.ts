import 'server-only'
import { cookies } from 'next/headers'
import { env } from '@/lib/env'
import { ADMIN_COOKIE_NAME, getAdminSession } from '@/server/auth/session'

export interface AdminLeadItem {
  id: string
  requestId: string
  createdAt: string
  name: string
  email: string
  company: string
  phone: string
  interest: string
  message: string
  attribution?: Record<string, unknown>
}

export interface AdminLeadDetail {
  id: string
  requestId: string
  createdAt: string
  payload: {
    name?: string
    company?: string
    email?: string
    phone?: string
    interest?: string
    message?: string
    attribution?: Record<string, unknown>
  }
}

export interface AdminLeadsResult {
  total: number
  leads: AdminLeadItem[]
}

/**
 * Consulta autorizada de leads via RPC n8flow_get_admin_leads.
 * O token JWT do usuário autenticado é repassado para o PostgreSQL validar se é admin ativo via RLS/Security Definer.
 */
export async function getAdminLeads(limit = 50, offset = 0): Promise<AdminLeadsResult> {
  const admin = await getAdminSession()
  if (!admin) {
    throw new Error('UNAUTHORIZED')
  }

  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value

  const response = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/n8flow_get_admin_leads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_SECRET_KEY || '',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ p_limit: limit, p_offset: offset }),
    cache: 'no-store',
  })

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('UNAUTHORIZED')
    }
    throw new Error('DATABASE_ERROR')
  }

  return (await response.json()) as AdminLeadsResult
}

export async function getAdminLeadById(id: string): Promise<AdminLeadDetail | null> {
  const admin = await getAdminSession()
  if (!admin) {
    throw new Error('UNAUTHORIZED')
  }

  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value

  const response = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/n8flow_get_admin_lead_by_id`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_SECRET_KEY || '',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ p_lead_id: id }),
    cache: 'no-store',
  })

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('UNAUTHORIZED')
    }
    throw new Error('DATABASE_ERROR')
  }

  return (await response.json()) as AdminLeadDetail | null
}
