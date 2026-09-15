import type { Metadata } from 'next'
import { Cpu, BarChart2, Zap, RefreshCw, Building2 } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Badge } from '@/components/ui/badge'
import { CtaSection } from '@/components/marketing/cta-section'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = buildMetadata({
  title: 'Sobre a N8FLOW | Tecnologia e Marketing para o seu Negócio',
  description:
    'Conheça a N8FLOW: combinamos tecnologia, marketing digital e Inteligência Artificial para estruturar a presença e a operação comercial do seu negócio.',
  pathname: '/sobre',
})

export default function AboutPage() {
  const principles = [
    {
      icon: <Cpu className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Integração antes da ferramenta',
      desc: 'Mais softwares não resolvem um processo desorganizado. Desenhamos a solução completa antes de escolher as ferramentas.',
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Dados para orientar decisões',
      desc: 'Usamos indicadores reais para entender o que funciona e decidir onde investir o próximo esforço.',
    },
    {
      icon: <Zap className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Automação com contexto',
      desc: 'Automatizamos o que faz sentido automatizar — com regras de negócio claras e supervisão contínua.',
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Evolução contínua',
      desc: 'Diagnóstico, implementação, resultado e ajuste — em ciclo. Não existe "pronto", só melhoria contínua.',
    },
  ]

  return (
    <>
      <Hero
        eyebrow="Institucional"
        title="Fazemos o digital trabalhar a favor do seu negócio."
        description="A N8FLOW combina tecnologia, marketing digital e Inteligência Artificial para estruturar a presença, a captação e os processos de atendimento de empresas de diferentes segmentos."
        variant="editorial"
      />

      {/* Princípios de Atuação */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="brand" size="md" className="mb-3">
            Nossos Fundamentos
          </Badge>
          <h2 className="display-readable font-display text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Princípios que orientam nossa atuação
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-xs sm:p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] transition-transform group-hover:scale-105">
                {p.icon}
              </div>
              <h3 className="display-readable font-display mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--violet-700)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Dados Corporativos Oficiais */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(110_68_255/0.1)] text-[var(--violet-700)]">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="display-readable font-display text-2xl font-bold text-[var(--text-primary)]">
                Identificação Empresarial
              </h2>
            </div>
            <div className="grid gap-6 border-t border-[var(--border-subtle)] pt-6 sm:grid-cols-3">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  Razão Social:
                </span>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {siteConfig.legalName}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  CNPJ:
                </span>
                <p className="font-mono text-sm font-medium text-[var(--text-primary)]">
                  {siteConfig.cnpj}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  Domínio Oficial:
                </span>
                <p className="font-mono text-sm font-medium text-[var(--text-primary)]">
                  {siteConfig.domain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Quer saber o que a N8FLOW pode fazer pelo seu negócio?"
        description="Converse com a N8FLOW e descubra o ponto de partida ideal para a sua empresa."
        primaryAction={{
          label: 'Falar com a N8FLOW',
          intent: 'lead-form',
        }}
      />
    </>
  )
}
