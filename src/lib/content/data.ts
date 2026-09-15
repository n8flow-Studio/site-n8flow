import type { Article, CaseStudy, Event, Service } from '@/types/content'

const sharedProcess = [
  {
    label: 'Diagnosticar',
    description: 'Compreender contexto, objetivos, operação atual e gargalos prioritários.',
  },
  {
    label: 'Implementar',
    description:
      'Executar as iniciativas aprovadas com responsáveis, escopo e mensuração definidos.',
  },
  {
    label: 'Medir e otimizar',
    description: 'Acompanhar indicadores, registrar aprendizados e ajustar continuamente.',
  },
] as const

export const initialServices: Service[] = [
  {
    slug: 'presenca-digital-e-posicionamento',
    title: 'Presença Digital e Posicionamento',
    summary:
      'Sua empresa encontrada por quem está procurando: perfil no Google, site, landing page e estratégia integrada para atrair clientes qualificados.',
    problems: [
      'Negócio invisível nas buscas do Google',
      'Concorrentes aparecem antes de você nas pesquisas locais',
      'Sem estratégia digital clara para atrair o cliente certo',
    ],
    outcomes: [
      'Perfil do Google Meu Negócio otimizado e ativo',
      'Presença digital organizada e consistente',
      'Clientes chegando pelo caminho certo, não por acaso',
    ],
    capabilities: [
      'Criação e otimização de Google Meu Negócio',
      'Sites institucionais e landing pages que convertem',
      'Estratégia de palavras-chave para buscas locais e orgânicas',
      'Integração entre presença digital e processo de captação',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Presença Digital e Google Meu Negócio | N8FLOW',
      description:
        'Apareça no Google, otimize sua presença local e atraia clientes que estão procurando pelo que você oferece.',
    },
    body: 'Presença digital começa por ser encontrado. Estruturamos seu perfil no Google, seu site e a estratégia para aparecer diante de quem já está procurando.',
  },
  {
    slug: 'aquisicao-e-midia',
    title: 'Tráfego Pago e Captação de Clientes',
    summary:
      'Campanhas no Google e nas redes sociais para atrair clientes qualificados — com estratégia, acompanhamento e mensuração real dos resultados.',
    problems: [
      'Investindo em anúncios sem saber se está funcionando',
      'Leads que chegam, mas não têm o perfil certo para comprar',
      'Campanhas rodando sem estratégia ou acompanhamento',
    ],
    outcomes: [
      'Clientes qualificados chegando de forma previsível',
      'Investimento em mídia com retorno mensurável',
      'Campanhas ajustadas continuamente conforme os dados',
    ],
    capabilities: [
      'Gestão de tráfego pago no Google Ads e Meta Ads',
      'Planejamento de campanhas e definição de público-alvo',
      'Integração entre anúncios, páginas e CRM',
      'Acompanhamento de resultados e otimização contínua',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Tráfego Pago e Captação de Clientes | N8FLOW',
      description:
        'Campanhas no Google e redes sociais para atrair clientes qualificados com estratégia, gestão e resultado mensurável.',
    },
    body: 'Aquisição eficiente começa pelo alinhamento entre mercado, oferta, mensagem, canal e operação comercial.',
  },
  {
    slug: 'conversao-e-experiencia',
    title: 'Sites, Landing Pages e Integrações',
    summary:
      'Sites institucionais, landing pages e integrações com WhatsApp e CRM para transformar visitantes em contatos qualificados.',
    problems: [
      'Site que não converte ou não aparece no Google',
      'Formulários que chegam em lugar nenhum',
      'Nenhuma integração entre o site e o processo de vendas',
    ],
    outcomes: [
      'Site ou landing page que captura contatos qualificados',
      'Integração entre formulário, WhatsApp e CRM',
      'Jornada digital conectada ao processo de atendimento',
    ],
    capabilities: [
      'Desenvolvimento de sites institucionais responsivos',
      'Landing pages de alta conversão',
      'Integração com WhatsApp Oficial (API)',
      'Conexão entre formulários, CRM e ferramentas de comunicação',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Sites, Landing Pages e Integrações | N8FLOW',
      description:
        'Sites e landing pages que convertem, com integração ao WhatsApp e CRM para acompanhar cada contato gerado.',
    },
    body: 'Conversão é consequência de uma jornada clara, conectada à capacidade de atendimento e ao processo comercial.',
  },
  {
    slug: 'crm-e-relacionamento',
    title: 'CRM e Acompanhamento de Clientes',
    summary:
      'Organize seus contatos, acompanhe cada oportunidade e mantenha o histórico de relacionamento — sem deixar nenhum cliente sem resposta.',
    problems: [
      'Contatos espalhados em WhatsApp, planilhas e e-mails',
      'Sem visibilidade de quem já respondeu ou está esperando',
      'Oportunidades perdidas por falta de acompanhamento',
    ],
    outcomes: [
      'Todos os contatos organizados e acompanhados em um só lugar',
      'Processo de vendas com etapas claras e responsáveis definidos',
      'Menos clientes perdidos, mais negócios fechados',
    ],
    capabilities: [
      'Implementação e configuração de CRM',
      'WhatsApp Oficial integrado ao processo de atendimento',
      'Definição de etapas e fluxo do processo comercial',
      'Regras de acompanhamento e notificação automatizada',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'CRM e Gestão de Clientes | N8FLOW',
      description:
        'Organize, acompanhe e não perca nenhum contato com CRM integrado ao WhatsApp e ao processo de atendimento.',
    },
    body: 'CRM gera valor quando representa o processo real e é utilizado para orientar o próximo passo da operação.',
  },
  {
    slug: 'dados-automacao-e-ia',
    title: 'Automação de Processos e Inteligência Artificial',
    summary:
      'Automatize atendimento, agendamento e processos internos — e implemente soluções com Inteligência Artificial adaptadas à realidade da sua empresa.',
    problems: [
      'Tarefas repetitivas consumindo tempo da equipe',
      'Atendimento lento ou inconsistente por ser feito manualmente',
      'Processos internos que ainda dependem de ação manual',
    ],
    outcomes: [
      'Atendimento automatizado com qualidade e contexto',
      'Processos internos rodando sem intervenção manual',
      'Mais tempo disponível para o que realmente importa',
    ],
    capabilities: [
      'Automação de atendimento via WhatsApp com IA',
      'Automação de agendamento e processos internos',
      'Desenvolvimento de agentes de Inteligência Artificial',
      'Integrações entre sistemas, ferramentas e dados',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Automação e Inteligência Artificial | N8FLOW',
      description:
        'Automatize atendimento, processos internos e desenvolva soluções com IA adaptadas ao que a sua empresa precisa.',
    },
    body: 'Tecnologia funciona como infraestrutura da estratégia, não como substituta do processo ou da decisão.',
  },
]

// Ofertas de evento e comunidade estão suspensas pelo ADR-0007.
export const initialEvents: Event[] = []

// Publicação editorial depende de autoria, data e fontes aprovadas.
export const initialArticles: Article[] = []

// Cases permanecem vazios até existirem provas e autorizações reais.
export const initialCases: CaseStudy[] = []
