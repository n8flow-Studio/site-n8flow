import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Bot,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Layers,
  Cpu,
} from 'lucide-react'
import { buildMetadata } from '@/lib/seo/metadata'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/marketing/section'
import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ServiceCard } from '@/components/marketing/service-card'
import { EventCard } from '@/components/marketing/event-card'
import { CtaSection } from '@/components/marketing/cta-section'
import { contentRepository } from '@/lib/content/repository'

export const metadata: Metadata = buildMetadata({
  title: 'N8FLOW — Engenharia de Growth e Tecnologia',
  description:
    'Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações conectadas e orientadas a crescimento.',
  pathname: '/',
})

export default async function HomePage() {
  const events = await contentRepository.listEvents({ limit: 1 })
  const nextEvent = events[0]
  const articles = await contentRepository.listArticles({ limit: 2 })

  const serviceIcons = [
    <Globe key="web" className="h-6 w-6" />,
    <Bot key="ai" className="h-6 w-6" />,
    <Users key="crm" className="h-6 w-6" />,
    <BarChart3 key="data" className="h-6 w-6" />,
  ]

  const services = await contentRepository.listServices()

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        eyebrow="Assessoria de Growth Marketing e Tecnologia"
        title={
          <>
            Construa uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-400)] to-[var(--violet-400)]">máquina de vendas</span> conectada ao seu negócio.
          </>
        }
        description="A N8FLOW integra estratégia, dados, automação, IA, CRM e processos comerciais para transformar ações isoladas em uma operação orientada a crescimento."
        primaryAction={{
          label: 'Participar do próximo evento',
          href: '/eventos',
        }}
        secondaryAction={{
          label: 'Conhecer as soluções',
          href: '/servicos',
        }}
      />

      {/* 2. O PROBLEMA */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="warning" size="md" className="mb-4">
            O Desafio da Operação
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Mais ferramentas não resolvem uma operação desconectada.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Leads sem acompanhamento, atendimento manual lento, CRM subutilizado e dados fragmentados impedem que marketing e vendas trabalhem como um único sistema.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card variant="surface" padding="md">
            <div className="text-sm font-bold text-[var(--status-error)] mb-2 flex items-center gap-2">
              <span>✕</span> Atendimento Lento
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Leads quentes esfriam aguardando horas por uma resposta manual no WhatsApp, perdendo a janela de maior intenção de compra.
            </p>
          </Card>

          <Card variant="surface" padding="md">
            <div className="text-sm font-bold text-[var(--status-error)] mb-2 flex items-center gap-2">
              <span>✕</span> CRM Desatualizado
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Vendedores anotam contatos em cadernos ou conversas pessoais, deixando a diretoria sem visibilidade do pipeline real.
            </p>
          </Card>

          <Card variant="surface" padding="md" className="sm:col-span-2 lg:col-span-1">
            <div className="text-sm font-bold text-[var(--status-error)] mb-2 flex items-center gap-2">
              <span>✕</span> Tráfego sem Rastreio
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Investimentos contínuos em anúncios sem saber com precisão quais canais e campanhas geram contratos assinados.
            </p>
          </Card>
        </div>
      </Section>

      {/* 3. TESE & MÉTODO */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="brand" size="md" className="mb-4">
            Metodologia N8FLOW
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Growth acontece quando estratégia, tecnologia e vendas operam juntas.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg">
            Não acreditamos em soluções mágicas ou ferramentas isoladas. Atuamos em três camadas complementares para construir resultados previsíveis:
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card variant="interactive" padding="lg" className="border-t-2 border-t-[var(--action-primary)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(0_245_160/0.1)] text-[var(--action-primary)]">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--action-primary)]">Nível 1</span>
            <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)]">Educação</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Imersões e eventos presenciais com conteúdo prático e aplicável para destravar a visão de processos, automação e IA.
            </p>
          </Card>

          <Card variant="interactive" padding="lg" className="border-t-2 border-t-[var(--violet-400)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(110_68_255/0.15)] text-[var(--violet-400)]">
              <Layers className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--violet-400)]">Nível 2</span>
            <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)]">Comunidade</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Acompanhamento contínuo, troca de experiências, suporte prático, encontros periódicos e biblioteca de templates validados.
            </p>
          </Card>

          <Card variant="interactive" padding="lg" className="border-t-2 border-t-[var(--action-primary)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(0_245_160/0.1)] text-[var(--action-primary)]">
              <Cpu className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--action-primary)]">Nível 3</span>
            <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)]">Assessoria & Tecnologia</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Diagnóstico aprofundado, implementação técnica de CRM, agentes inteligentes de IA, páginas de conversão e tráfego pago.
            </p>
          </Card>
        </div>
      </Section>

      {/* 4. SOLUÇÕES */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Badge variant="brand" size="md" className="mb-4">
              Soluções Conectadas
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Soluções conectadas ao resultado da sua operação.
            </h2>
            <p className="mt-3 text-base text-[var(--text-secondary)] sm:text-lg">
              Tecnologia aplicada como meio para potencializar vendas e eliminar desperdícios.
            </p>
          </div>
          <Link
            href="/servicos"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--action-primary)] hover:underline"
          >
            Ver todas as soluções <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((srv, idx) => (
            <ServiceCard
              key={srv.slug}
              slug={srv.slug}
              title={srv.title}
              description={srv.summary}
              outcomes={srv.outcomes}
              icon={serviceIcons[idx % serviceIcons.length]}
            />
          ))}
        </div>
      </Section>

      {/* 5. PRÓXIMO EVENTO */}
      {nextEvent && (
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge variant="brand" size="md" className="mb-3">
                Encontro Presencial
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Comece pelo próximo evento N8FLOW.
              </h2>
              <p className="mt-3 text-base text-[var(--text-secondary)]">
                Aprenda a estruturar sua máquina de vendas em um encontro prático e imersivo.
              </p>
            </div>

            <EventCard
              id={nextEvent.id}
              slug={nextEvent.slug}
              title={nextEvent.title}
              summary={nextEvent.summary}
              status={nextEvent.status}
              startsAt={nextEvent.startsAt}
              venue={nextEvent.venue}
              address={nextEvent.address}
              price={nextEvent.price}
              capacity={nextEvent.capacity}
              featured
            />
          </div>
        </Section>
      )}

      {/* 6. COMUNIDADE N8FLOW */}
      <Section className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="brandViolet" size="md" className="mb-4">
                Comunidade N8FLOW
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Evolua com acompanhamento, troca e aplicação contínua.
              </h2>
              <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg leading-relaxed">
                A Comunidade N8FLOW conecta corretores, gestores e empresários que querem transformar aprendizado em rotina, com networking qualificado, suporte e templates.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)] shrink-0" />
                  <span>Networking direto com outros profissionais do setor</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)] shrink-0" />
                  <span>Biblioteca de automações, prompts de IA e funis validados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--action-primary)] shrink-0" />
                  <span>Encontros online e suporte prático para implementação</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/comunidade"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-secondary)] px-8 font-semibold text-white shadow-[var(--shadow-md)] transition-all hover:bg-[var(--action-secondary-hover)]"
                >
                  Conhecer a Comunidade
                </Link>
              </div>
            </div>

            <Card variant="featured" padding="lg" className="bg-[var(--bg-surface)]">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--action-primary)]">
                  Plano Mensal
                </span>
                <span className="text-xs text-[var(--text-muted)]">Acesso Contínuo</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[var(--text-secondary)]">R$</span>
                <span className="font-display text-5xl font-bold text-[var(--text-primary)]">597</span>
                <span className="text-sm text-[var(--text-muted)]">/mês</span>
              </div>
              <p className="mt-4 text-xs text-[var(--text-secondary)] leading-relaxed">
                Ambiente focado em execução prática, sem excesso de teoria. Vagas liberadas em lotes por turma.
              </p>
              <div className="mt-8">
                <Link
                  href="/comunidade"
                  className="flex h-11 w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--action-primary)] text-sm font-semibold text-[var(--text-inverse)] hover:bg-[var(--action-primary-hover)]"
                >
                  Quero fazer parte
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. BLOG & ARTIGOS */}
      {articles.length > 0 && (
        <Section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge variant="brand" size="md" className="mb-3">
                Conhecimento Aplicado
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Artigos e conteúdos estratégicos.
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--action-primary)] hover:underline"
            >
              Ver todos os artigos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((art) => (
              <Card key={art.slug} variant="interactive" padding="lg" className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="neutral" size="sm">
                    {art.category}
                  </Badge>
                  {art.readingTime && (
                    <span className="text-xs text-[var(--text-muted)]">
                      {art.readingTime} min de leitura
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--action-primary)] transition-colors">
                  {art.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {art.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">{art.author}</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-semibold text-[var(--action-primary)] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* 8. CTA FINAL */}
      <CtaSection
        title="Pronto para estruturar a máquina de vendas do seu negócio?"
        description="Fale com nossos especialistas para entender como integrar dados, automação, CRM e tráfego à sua operação comercial."
        primaryAction={{
          label: 'Participar do próximo evento',
          href: '/eventos',
        }}
        secondaryAction={{
          label: 'Solicitar diagnóstico B2B',
          href: '/servicos',
        }}
      />
    </>
  )
}
