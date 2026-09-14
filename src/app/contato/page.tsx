import type { Metadata } from 'next'
import { Building2, ShieldCheck } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { DiagnosisForm } from '@/components/forms/diagnosis-form'

export const metadata: Metadata = buildMetadata({
  title: 'Diagnóstico Gratuito | Fale com a N8FLOW',
  description:
    'Solicite um diagnóstico gratuito e descubra o que o seu negócio precisa para crescer no digital.',
  pathname: '/contato',
})

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Diagnóstico gratuito"
        title="Conte sobre o seu negócio. A gente cuida do resto."
        description="Preencha o formulário e nos conte sobre a sua empresa e o principal desafio que enfrenta agora. Em seguida, fazemos um diagnóstico gratuito e apresentamos o que faz sentido implementar."
        variant="editorial"
      />

      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12">
          {/* Formulário de Contato */}
          <div className="lg:col-span-7">
            <Card variant="surface" padding="lg">
              <h2 className="font-display mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Solicitar diagnóstico gratuito
              </h2>

              <DiagnosisForm />
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
                <span>Privacidade &amp; Tratamento</span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Usamos as informações fornecidas para avaliar e responder à sua solicitação. Não
                inclua senhas, credenciais ou outros dados sensíveis na mensagem.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
