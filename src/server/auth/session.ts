import 'server-only'
import { cookies } from 'next/headers'
import { env } from '@/lib/env'

export interface AdminUser {
  id: string
  email: string
  role: 'admin' | 'commercial'
  active: boolean
}

export const ADMIN_COOKIE_NAME = 'n8flow_admin_token'

/**
 * Valida o token JWT do usuário junto ao GoTrue (Supabase Auth)
 * e verifica na tabela n8flow_private.profiles se é um administrador ativo.
 */
export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value

  if (!token || !env.SUPABASE_URL) {
    return null
  }

  try {
    // 1. Validar JWT com Supabase Auth
    const userRes = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_SECRET_KEY || '',
      },
      cache: 'no-store',
    })

    if (!userRes.ok) {
      return null
    }

    const userData = await userRes.json()
    const userId = userData?.id

    if (!userId) return null

    // 2. Chamar RPC n8flow_get_my_profile com o token do usuário autenticado
    const profileRes = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/n8flow_get_my_profile`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_SECRET_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({}),
      cache: 'no-store',
    })

    if (!profileRes.ok) {
      return null
    }

    const profile = (await profileRes.json()) as AdminUser | null

    if (!profile || profile.role !== 'admin' || !profile.active) {
      return null
    }

    return profile
  } catch (error) {
    console.error('Erro na validação da sessão de administrador:', error)
    return null
  }
}
