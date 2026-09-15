'use client'

import dynamic from 'next/dynamic'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const DiagnosisForm = dynamic(
  () => import('@/components/forms/diagnosis-form').then((module) => module.DiagnosisForm),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-4" aria-label="Carregando formulário">
        <div className="h-11 animate-pulse rounded-[var(--radius-md)] bg-white/10" />
        <div className="h-11 animate-pulse rounded-[var(--radius-md)] bg-white/10" />
        <div className="h-11 animate-pulse rounded-[var(--radius-md)] bg-white/10" />
        <div className="h-28 animate-pulse rounded-[var(--radius-md)] bg-white/10" />
      </div>
    ),
  },
)

interface LeadFormContextValue {
  openLeadForm: (trigger: HTMLElement) => void
}

const LeadFormContext = createContext<LeadFormContextValue | null>(null)

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const closeLeadForm = useCallback(() => {
    const dialog = dialogRef.current
    if (dialog?.open) dialog.close()
    setIsOpen(false)
    requestAnimationFrame(() => returnFocusRef.current?.focus())
  }, [])

  const openLeadForm = useCallback((trigger: HTMLElement) => {
    returnFocusRef.current = trigger
    setIsOpen(true)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!isOpen || !dialog || dialog.open) return

    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="lead-dialog-title"
        aria-describedby="lead-dialog-description"
        className="lead-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(1120px,calc(100%-2rem))] max-w-none overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-transparent p-0 text-left shadow-2xl backdrop:bg-[rgb(245_242_236/0.82)]"
        onCancel={(event) => {
          event.preventDefault()
          closeLeadForm()
        }}
        onClose={() => {
          document.body.style.overflow = ''
          setIsOpen(false)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLeadForm()
        }}
      >
        {isOpen ? (
          <div
            data-theme="dark"
            className="lead-dialog-panel relative grid max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[var(--marketing-ink)] lg:grid-cols-[0.75fr_1.25fr]"
          >
            <button
              type="button"
              aria-label="Fechar formulário"
              onClick={closeLeadForm}
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition-colors hover:border-[var(--green-400)] hover:text-[var(--green-400)] focus-visible:outline-[var(--green-400)] sm:top-6 sm:right-6"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative overflow-hidden border-b border-white/10 px-6 pt-20 pb-10 sm:px-10 lg:border-r lg:border-b-0 lg:px-12 lg:py-16">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full border border-[rgb(0_245_160/0.22)]" />
              <div className="absolute right-8 bottom-12 h-40 w-40 rotate-12 border border-[rgb(110_68_255/0.3)]" />
              <div className="relative">
                <p className="eyebrow mb-6 text-[var(--green-300)]">Conversa inicial</p>
                <h2
                  id="lead-dialog-title"
                  className="display-readable font-display max-w-sm text-4xl leading-[1.05] text-white sm:text-5xl"
                >
                  Conte sobre o seu negócio
                </h2>
                <p
                  id="lead-dialog-description"
                  className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--neutral-300)] sm:text-base"
                >
                  Preencha o formulário e nos conte sobre a sua empresa e o principal desafio que
                  enfrenta agora. Em seguida, fazemos um diagnóstico gratuito e apresentamos o que
                  faz sentido implementar.
                </p>
              </div>
            </div>

            <div className="bg-[var(--marketing-panel)] px-6 pt-20 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:py-16">
              <DiagnosisForm />
            </div>
          </div>
        ) : (
          <div className="sr-only">
            <span id="lead-dialog-title">Conte sobre o seu negócio</span>
            <span id="lead-dialog-description">
              Preencha o formulário e nos conte sobre a sua empresa e o principal desafio que
              enfrenta agora. Em seguida, fazemos um diagnóstico gratuito e apresentamos o que faz
              sentido implementar.
            </span>
          </div>
        )}
      </dialog>
    </LeadFormContext.Provider>
  )
}

export interface LeadFormTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function LeadFormTrigger({ children, className, onClick, ...props }: LeadFormTriggerProps) {
  const context = useContext(LeadFormContext)

  if (!context) throw new Error('LeadFormTrigger deve estar dentro de LeadFormProvider.')

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event)
    if (!event.defaultPrevented) context?.openLeadForm(event.currentTarget)
  }

  return (
    <button
      type="button"
      className={cn(className)}
      aria-haspopup="dialog"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export function LeadFormArrow() {
  return <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
}
