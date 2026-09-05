import type { Metadata } from 'next'
import { Building2, ShieldCheck, Send } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = buildMetadata({
  title: 'Contato Institucional e Comercial | N8FLOW',
  description:
    'Entre em contato com a N8FLOW para assuntos institucionais, parcerias comerciais ou diagnóstico de projetos.',
  pathname: '/contato',
})

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Diagnóstico comercial"
        title="Vamos entender o contexto da sua operação."
        description="Compartilhe informações iniciais sobre a empresa e o desafio atual. Escopo, formato e condições comerciais só são definidos depois dessa avaliação."
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12">
          {/* Formulário de Contato */}
          <div className="lg:col-span-7">
            <Card variant="surface" padding="lg">
              <h2 className="font-display mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Solicitar diagnóstico
              </h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Nome da empresa"
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    E-mail profissional *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="voce@suaempresa.com.br"
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    Objetivo do contato
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  >
                    <option value="diagnostico">Solicitar diagnóstico comercial</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="institucional">Assunto institucional</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase"
                  >
                    Mensagem ou contexto da operação
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Conte resumidamente sobre o seu negócio e o desafio atual..."
                    className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--action-primary)] text-sm font-semibold text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-all hover:scale-[1.01] hover:bg-[var(--action-primary-hover)]"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar solicitação</span>
                </button>
              </form>
            </Card>
          </div>

          {/* Dados Corporativos & Confirmações */}
          <div className="space-y-6 lg:col-span-5">
            <Card variant="surface" padding="lg">
              <h3 className="font-display mb-4 flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
                <Building2 className="h-5 w-5 text-[var(--action-primary)]" />
                Dados da Empresa
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                <div>
                  <span className="text-[var(--text-muted)]">Razão Social:</span>
                  <p className="font-medium text-[var(--text-primary)]">{siteConfig.legalName}</p>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">CNPJ:</span>
                  <p className="font-medium text-[var(--text-primary)]">{siteConfig.cnpj}</p>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">Domínio Canônico:</span>
                  <p className="font-medium text-[var(--text-primary)]">{siteConfig.domain}</p>
                </div>
              </div>
            </Card>

            <Card variant="featured" padding="lg">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--action-primary)]">
                <ShieldCheck className="h-4 w-4" />
                <span>Privacidade & Tratamento</span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Os dados enviados através deste canal são utilizados estritamente para qualificação
                e atendimento comercial da sua solicitação pela equipe N8FLOW.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
