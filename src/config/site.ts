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

  // Posicionamento confirmado (ADR-0007, Copy §1) — revisado 2026-09-14
  tagline: 'Tecnologia e marketing para fazer seu negócio crescer',
  description:
    'Estruturamos a presença digital, a captação e os processos comerciais do seu negócio — do Google às vendas.',

  // Dados PENDENTES — não preencher sem fonte confirmada
  // email: undefined,
  // phone: undefined,
  // social: undefined,

  // Navegação principal (ADR-0007)
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Soluções', href: '/servicos' },
    { label: 'Método', href: '/metodo' },
    { label: 'Cases', href: '/cases' },
    { label: 'Conteúdos', href: '/blog' },
    { label: 'Sobre', href: '/sobre' },
  ],

  // Links legais — só publicar com documentos jurídicos válidos (PENDENTE)
  legalLinks: [
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Termos', href: '/termos' },
  ],
} as const

export type SiteConfig = typeof siteConfig
