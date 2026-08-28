/**
 * Configurações centrais do site.
 *
 * Dados confirmados: nome, domínio, empresa, CNPJ.
 * Dados pendentes: redes sociais, e-mail, telefone — não inventar.
 *
 * Referências:
 *   docs/ux/ux-arquitetura-informacao.md §35 — Decisões congeladas
 *   docs/copy-conteudo/02-paginas.md — Contato
 */

export const siteConfig = {
  // Dados confirmados
  name: 'N8FLOW',
  fullName: 'N8FLOW TECNOLOGIA',
  legalName: 'N8FLOW TECNOLOGIA CONSULTORIA EM TI LTDA',
  cnpj: '68.352.519/0001-72',
  url: 'https://n8flow.com.br',
  domain: 'n8flow.com.br',

  // Posicionamento confirmado (PRD §2.1, Copy §1)
  tagline: 'Engenharia de Growth e Tecnologia',
  description:
    'Integramos estratégia, dados, automação, IA, CRM e vendas para estruturar operações conectadas e orientadas a crescimento.',

  // Evento — dados base confirmados (UX §35, Copy §2)
  event: {
    venue: 'Seahub Sebrae',
    address: 'Av. Lima e Silva, 76 – Lagoa Nova',
    capacity: 40,
    basePrice: 97, // BRL
    currency: 'BRL',
  },

  // Comunidade — ticket-base confirmado; oferta e regras PENDENTES
  community: {
    basePrice: 597, // BRL/mês — confirmar oferta antes de publicar
    currency: 'BRL',
  },

  // Dados PENDENTES — não preencher sem fonte confirmada
  // email: undefined,
  // phone: undefined,
  // social: undefined,

  // Navegação principal (UX §6.1)
  navigation: [
    { label: 'Soluções', href: '/servicos' },
    { label: 'Comunidade', href: '/comunidade' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Cases', href: '/cases' },
    { label: 'Conteúdos', href: '/blog' },
  ],

  // Links legais — só publicar com documentos jurídicos válidos (PENDENTE)
  legalLinks: [
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Termos', href: '/termos' },
  ],
} as const

export type SiteConfig = typeof siteConfig
