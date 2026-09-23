'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        setError(data.message || 'Falha ao autenticar.')
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Ocorreu um erro ao conectar ao servidor.')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center">
      <div className="w-full max-w-md rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <Image
              src="/brand/logo.png"
              alt="N8FLOW"
              width={64}
              height={49}
              className="h-auto w-14"
              priority
            />
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Painel N8FLOW</h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Acesso exclusivo para administradores</p>
        </div>

        {error && (
          <div className="mb-6 rounded-[var(--radius-sm)] border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@n8flow.com.br"
              className="mt-1 block w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--action-primary)] focus:bg-[var(--bg-canvas)]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--action-primary)] focus:bg-[var(--bg-canvas)]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] py-2.5 text-sm font-semibold text-[var(--text-inverse)] transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Entrando...' : 'Entrar no Painel'}
          </button>
        </form>
      </div>
    </div>
  )
}
