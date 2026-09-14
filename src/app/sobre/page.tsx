import type { Metadata } from 'next'
import { Cpu, BarChart2, Zap, RefreshCw } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
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
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Princípios que orientam nossa atuação
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p, idx) => (
            <Card key={idx} variant="surface" padding="lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                {p.icon}
              </div>
              <h3 className="font-display mb-2 text-xl font-bold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Dados Corporativos Oficiais */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Card variant="featured" padding="lg">
            <h2 className="font-display mb-4 text-2xl font-bold text-[var(--text-primary)]">
              Identificação Empresarial
            </h2>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">Razão Social:</strong>{' '}
                {siteConfig.legalName}
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">CNPJ:</strong> {siteConfig.cnpj}
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Domínio Oficial:</strong>{' '}
                {siteConfig.domain}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <CtaSection
        title="Quer saber o que a N8FLOW pode fazer pelo seu negócio?"
        description="Agende um diagnóstico gratuito e descubra o ponto de partida ideal para a sua empresa."
        primaryAction={{
          label: 'Diagnóstico gratuito',
          href: '/contato',
        }}
      />
    </>
  )
}
