import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { env } from '@/lib/env'
import { ADMIN_COOKIE_NAME } from '@/server/auth/session'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ ok: false, message: 'E-mail e senha são obrigatórios.' }, { status: 400 })
    }

    if (!env.SUPABASE_URL) {
      return NextResponse.json({ ok: false, message: 'Serviço de autenticação não configurado.' }, { status: 503 })
    }

    // Autenticar com o Supabase Auth (GoTrue)
    const authRes = await fetch(`${env.SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_SECRET_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    })

    const authData = await authRes.json()

    if (!authRes.ok || !authData.access_token) {
      return NextResponse.json({ ok: false, message: 'Credenciais inválidas.' }, { status: 401 })
    }

    const token = authData.access_token

    // Verificar se o usuário possui perfil ativo de admin
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
      return NextResponse.json({ ok: false, message: 'Erro ao verificar permissões de acesso.' }, { status: 500 })
    }

    const profile = await profileRes.json()

    if (!profile || profile.role !== 'admin' || !profile.active) {
      return NextResponse.json({ ok: false, message: 'Acesso restrito apenas a administradores ativos.' }, { status: 403 })
    }

    // Setar cookie HTTP-only seguro
    const cookieStore = await cookies()
    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: env.VERCEL_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: authData.expires_in ?? 3600 * 24, // padrão 24 horas
    })

    return NextResponse.json({ ok: true, user: profile })
  } catch (error) {
    console.error('Erro na rota de login:', error)
    return NextResponse.json({ ok: false, message: 'Erro interno ao autenticar.' }, { status: 500 })
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE_NAME)
  return NextResponse.json({ ok: true })
}
