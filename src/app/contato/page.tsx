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
        eyebrow="Canal Oficial"
        title="Vamos entender o próximo passo da sua operação."
        description="Use este canal para assuntos institucionais ou comerciais que não se encaixem diretamente em evento, comunidade ou diagnóstico."
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Formulário de Contato */}
          <div className="lg:col-span-7">
            <Card variant="surface" padding="lg">
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6">
                Envie sua mensagem
              </h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full h-11 px-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                  >
                    E-mail profissional *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="voce@suaempresa.com.br"
                    className="w-full h-11 px-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                  >
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full h-11 px-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                  >
                    Assunto de interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full h-11 px-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)] text-sm text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
                  >
                    <option value="diagnostico">Solicitar Diagnóstico Comercial (B2B)</option>
                    <option value="evento">Dúvidas sobre Eventos / Imersões</option>
                    <option value="comunidade">Informações da Comunidade</option>
                    <option value="parcerias">Parcerias e Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                  >
                    Mensagem ou contexto da operação
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Conte resumidamente sobre o seu negócio e o desafio atual..."
                    className="w-full p-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--action-primary)] font-semibold text-sm text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-all hover:bg-[var(--action-primary-hover)] hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar mensagem</span>
                </button>
              </form>
            </Card>
          </div>

          {/* Dados Corporativos & Confirmações */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="surface" padding="lg">
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[var(--action-primary)]" />
                Dados da Empresa
              </h3>

              <div className="space-y-3 text-xs text-[var(--text-secondary)] leading-relaxed">
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
              <div className="flex items-center gap-2 mb-2 text-[var(--action-primary)] font-semibold text-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>Privacidade & Tratamento</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Os dados enviados através deste canal são utilizados estritamente para qualificação e atendimento comercial da sua solicitação pela equipe N8FLOW.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
