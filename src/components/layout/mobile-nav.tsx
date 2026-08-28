'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Fecha ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Botão de Toggle */}
      <button
        type="button"
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-default)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 top-16 z-[var(--z-overlay)] flex flex-col bg-[var(--bg-canvas)]/95 px-6 py-8 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-6" aria-label="Navegação mobile">
            <ul className="flex flex-col gap-3" role="list">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-[var(--radius-md)] px-4 py-3 text-lg font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface)] hover:text-[var(--action-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-6">
              <Link
                href="/eventos"
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] px-6 font-semibold text-[var(--text-inverse)] shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--action-primary-hover)]"
              >
                Próximo evento
              </Link>
              <Link
                href="/servicos"
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] px-6 font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
