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
  title: 'Sobre a N8FLOW | Assessoria de Growth e Tecnologia',
  description:
    'Conheça o posicionamento e os princípios da N8FLOW: integrando dados, automação, IA e processos comerciais para construir máquinas de vendas.',
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
      desc: 'Eliminamos achismos e métricas de vaidade. Rastreabilidade precisa da origem do lead até o contrato assinado.',
    },
    {
      icon: <Zap className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Automação com contexto',
      desc: 'Automatizamos rotinas repetitivas para que o time comercial concentre esforço onde a interação humana gera maior valor.',
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Evolução contínua',
      desc: 'Uma máquina de vendas não é um projeto estático; é uma infraestrutura viva que deve ser monitorada e otimizada constantemente.',
    },
  ]

  return (
    <>
      <Hero
        eyebrow="Institucional"
        title="Growth, tecnologia e vendas trabalhando como um único sistema."
        description="A N8FLOW é uma Assessoria de Growth Marketing e Tecnologia criada para estruturar operações completas de aquisição, relacionamento e conversão."
        variant="editorial"
      />

      {/* Princípios de Atuação */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Nossos Fundamentos
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Princípios que guiam nossa engenharia
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p, idx) => (
            <Card key={idx} variant="surface" padding="lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {p.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Dados Corporativos Oficiais */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Card variant="featured" padding="lg">
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
              Identificação Empresarial
            </h2>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">Razão Social:</strong> {siteConfig.legalName}
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">CNPJ:</strong> {siteConfig.cnpj}
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Domínio Oficial:</strong> {siteConfig.domain}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <CtaSection
        title="Quer conversar sobre a sua operação?"
        description="Fale diretamente com os consultores da N8FLOW e entenda como podemos apoiar o crescimento da sua empresa."
        primaryAction={{
          label: 'Falar com a N8FLOW',
          href: '/contato',
        }}
      />
    </>
  )
}
