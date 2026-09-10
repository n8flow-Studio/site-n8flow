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
  title: 'Sobre a N8FLOW | Assessoria de Growth Marketing B2B',
  description:
    'Conheça a abordagem da N8FLOW para conectar estratégia, aquisição, conversão, dados e vendas em empresas de diferentes setores.',
  pathname: '/sobre',
})

export default function AboutPage() {
  const principles = [
    {
      icon: <Cpu className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Integração antes da ferramenta',
      desc: 'Mais softwares não resolvem uma operação desalinhada. Desenhamos a arquitetura de ponta a ponta antes de escolher as tecnologias.',
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Dados para orientar decisões',
      desc: 'Buscamos indicadores que ajudem a compreender a jornada, avaliar hipóteses e orientar prioridades.',
    },
    {
      icon: <Zap className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Automação com contexto',
      desc: 'Aplicamos automação em rotinas delimitadas, com regras de negócio, supervisão e tratamento de falhas.',
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Evolução contínua',
      desc: 'Growth é tratado como um ciclo de diagnóstico, implementação, mensuração e aprendizado.',
    },
  ]

  return (
    <>
      <Hero
        eyebrow="Institucional"
        title="Assessoria de Growth para empresas que precisam conectar estratégia e execução."
        description="A N8FLOW atua com negócios de diferentes setores, combinando capacidades conforme o contexto, a maturidade e o desafio comercial de cada operação."
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
        title="Quer entender onde concentrar o próximo ciclo de Growth?"
        description="Compartilhe o contexto da sua operação para avaliarmos a aderência da assessoria."
        primaryAction={{
          label: 'Solicitar diagnóstico',
          href: '/contato',
        }}
      />
    </>
  )
}
