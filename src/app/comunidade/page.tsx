import type { Metadata } from 'next'
import { Layers, Sparkles, BookOpen, Users } from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PricingCard } from '@/components/marketing/pricing-card'
import { FaqSection } from '@/components/marketing/faq-section'
import { CtaSection } from '@/components/marketing/cta-section'

export const metadata: Metadata = buildMetadata({
  title: 'Comunidade N8FLOW | Growth, IA e Automação Contínua',
  description:
    'Ambiente exclusivo de networking, templates e acompanhamento contínuo para profissionais que querem transformar processos e tecnologia em vendas reais.',
  pathname: '/comunidade',
})

export default function CommunityPage() {
  const deliverables = [
    {
      icon: <Users className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Networking & Troca Qualificada',
      desc: 'Conexão direta com corretores, gestores e operadores de Growth que estão aplicando processos no dia a dia.',
    },
    {
      icon: <Layers className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Biblioteca de Templates e Fluxos',
      desc: 'Workflows de n8n prontos para importação, modelos de funis de CRM e prompts de IA testados para o mercado imobiliário.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[var(--action-primary)]" />,
      title: 'Encontros e Aulas Periódicas',
      desc: 'Sessões online de tira-dúvidas, análise de operações reais e atualização contínua sobre ferramentas e estratégias.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[var(--violet-400)]" />,
      title: 'Suporte Técnico e Prático',
      desc: 'Canal direto para destravar dúvidas de configuração, integrações de APIs e otimização de campanhas.',
    },
  ]

  const communityFaqs = [
    {
      id: 'faq-1',
      title: 'Para quem é a Comunidade N8FLOW?',
      content:
        'A comunidade é desenhada para corretores autônomos, donos de imobiliárias e gestores comerciais que já participaram dos nossos eventos ou querem evoluir sua operação de forma contínua.',
    },
    {
      id: 'faq-2',
      title: 'Como funciona a assinatura e o acesso?',
      content:
        'O acesso é mensal (R$ 597/mês), sem fidelidade obrigatória. Você pode cancelar sua renovação a qualquer momento diretamente pelo portal.',
    },
    {
      id: 'faq-3',
      title: 'Preciso saber programar para aproveitar os templates?',
      content:
        'Não. Todos os fluxos de n8n e configurações de CRM são disponibilizados com tutoriais passo a passo e suporte nos encontros práticos.',
    },
  ]

  return (
    <>
      <Hero
        eyebrow="Comunidade N8FLOW"
        title="Evolua com acompanhamento, troca e aplicação contínua."
        description="A Comunidade N8FLOW conecta profissionais que querem transformar aprendizado em rotina, com conhecimento técnico, networking e suporte prático."
        primaryAction={{
          label: 'Quero fazer parte',
          href: '#planos',
        }}
        variant="landing"
      />

      {/* Entregáveis */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            O Que Você Recebe
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Um ambiente para aprender, aplicar e evoluir.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, idx) => (
            <Card key={idx} variant="surface" padding="lg" className="flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Card de Preço / Inscrição */}
      <Section id="planos">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Adesão
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Invista na evolução da sua operação de vendas.
          </h2>
        </div>

        <PricingCard
          name="Membro Comunidade"
          price={597}
          period="/mês"
          description="Acesso completo à comunidade, encontros ao vivo, suporte prático e repositório de templates."
          features={[
            'Acesso ao grupo exclusivo de membros',
            'Encontros periódicos online com especialistas',
            'Biblioteca completa de templates de n8n e CRM',
            'Suporte a dúvidas de implementação e ferramentas',
            'Descontos exclusivos em eventos presenciais',
          ]}
          cta={{
            label: 'Quero fazer parte da Comunidade',
            href: '/contato',
          }}
          disclaimer="Pagamento recorrente mensal. Cancele quando quiser."
          featured
        />
      </Section>

      {/* FAQ */}
      <FaqSection items={communityFaqs} />

      {/* CTA Final */}
      <CtaSection
        title="Dúvidas sobre o formato da comunidade?"
        description="Fale diretamente com nossa equipe para entender se a comunidade é o momento certo para você."
        primaryAction={{
          label: 'Falar com especialista',
          href: '/contato',
        }}
      />
    </>
  )
}
