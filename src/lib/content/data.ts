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
    slug: 'estrategia-e-gestao-de-growth',
    title: 'Estratégia e Gestão de Growth',
    summary:
      'Direção estratégica, priorização e acompanhamento para transformar iniciativas dispersas em uma agenda de crescimento.',
    problems: [
      'Ações de marketing sem prioridade compartilhada',
      'Metas comerciais desconectadas da execução',
      'Decisões tomadas sem contexto ou cadência de análise',
    ],
    outcomes: [
      'Prioridades conectadas aos objetivos da operação',
      'Responsabilidades e hipóteses de trabalho explícitas',
      'Ritmo contínuo de análise, decisão e aprendizado',
    ],
    capabilities: [
      'Diagnóstico da operação de marketing e vendas',
      'Planejamento e priorização de iniciativas',
      'Definição de indicadores e rituais de acompanhamento',
      'Coordenação das frentes envolvidas no plano de Growth',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Estratégia e Gestão de Growth | N8FLOW',
      description:
        'Assessoria para diagnosticar, priorizar e acompanhar iniciativas de Growth conectadas aos objetivos comerciais da empresa.',
    },
    body: 'Estratégia de Growth exige contexto, prioridade, execução coordenada e aprendizado contínuo.',
  },
  {
    slug: 'aquisicao-e-midia',
    title: 'Aquisição e Mídia',
    summary:
      'Estratégias de geração de demanda conectadas à oferta, à capacidade comercial e à mensuração da jornada.',
    problems: [
      'Investimento em mídia sem conexão clara com oportunidades comerciais',
      'Volume de leads incompatível com perfil ou capacidade de atendimento',
      'Canais operados isoladamente da oferta e da conversão',
    ],
    outcomes: [
      'Aquisição alinhada ao público e ao objetivo comercial',
      'Canais avaliados por indicadores coerentes com a jornada',
      'Aprendizados incorporados ao planejamento de campanhas',
    ],
    capabilities: [
      'Planejamento de aquisição e mídia',
      'Estruturação de campanhas e públicos',
      'Integração entre campanhas, páginas e CRM',
      'Acompanhamento de indicadores de demanda',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Aquisição e Mídia para Growth | N8FLOW',
      description:
        'Estratégia de aquisição e mídia conectada à oferta, à conversão e à capacidade comercial da empresa.',
    },
    body: 'Aquisição eficiente começa pelo alinhamento entre mercado, oferta, mensagem, canal e operação comercial.',
  },
  {
    slug: 'conversao-e-experiencia',
    title: 'Conversão e Experiência',
    summary:
      'Jornadas, páginas e pontos de contato planejados para reduzir atrito e conduzir o público ao próximo passo.',
    problems: [
      'Proposta de valor difícil de entender',
      'Páginas e formulários desconectados da jornada comercial',
      'Experiência digital sem mensuração dos pontos de decisão',
    ],
    outcomes: [
      'Jornada digital mais clara e coerente com a oferta',
      'Pontos de conversão conectados ao processo comercial',
      'Comportamentos relevantes disponíveis para análise',
    ],
    capabilities: [
      'Arquitetura de informação e conversão',
      'Sites e landing pages responsivos e acessíveis',
      'Formulários e integrações com a operação',
      'Instrumentação dos principais eventos da jornada',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Conversão e Experiência Digital | N8FLOW',
      description:
        'Jornadas, sites e landing pages conectados à proposta de valor, ao processo comercial e à mensuração.',
    },
    body: 'Conversão é consequência de uma jornada clara, relevante e conectada à capacidade de atendimento.',
  },
  {
    slug: 'crm-e-relacionamento',
    title: 'CRM e Relacionamento',
    summary:
      'Processos e tecnologia para preservar contexto, organizar oportunidades e acompanhar a jornada comercial.',
    problems: [
      'Contatos distribuídos entre ferramentas e conversas',
      'Etapas comerciais sem definição compartilhada',
      'Oportunidades sem histórico ou próximo passo claro',
    ],
    outcomes: [
      'Jornada comercial organizada em etapas compreensíveis',
      'Contexto disponível para atendimento e acompanhamento',
      'Maior visibilidade sobre o fluxo de oportunidades',
    ],
    capabilities: [
      'Desenho de funis e processos comerciais',
      'Configuração e integração de CRM',
      'WhatsApp Oficial integrado ao relacionamento',
      'Réguas e rotinas de acompanhamento',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'CRM e Relacionamento Comercial | N8FLOW',
      description:
        'Estruture processos, CRM e relacionamento para organizar oportunidades e preservar contexto ao longo da jornada.',
    },
    body: 'CRM gera valor quando representa o processo real e é utilizado para orientar o próximo passo da operação.',
  },
  {
    slug: 'dados-automacao-e-ia',
    title: 'Dados, Automação e IA',
    summary:
      'Infraestrutura para conectar informações, reduzir trabalho repetitivo e apoiar decisões sem perder contexto operacional.',
    problems: [
      'Dados fragmentados entre canais e ferramentas',
      'Tarefas repetitivas consumindo capacidade da equipe',
      'Automação ou IA aplicadas sem regra de negócio e supervisão',
    ],
    outcomes: [
      'Fluxos de informação mais consistentes entre sistemas',
      'Rotinas repetitivas tratadas com critérios explícitos',
      'Dados mais acessíveis para análise e decisão',
    ],
    capabilities: [
      'Mapeamento e integração de dados',
      'Automações server-side com n8n',
      'Agentes de IA aplicados a tarefas delimitadas',
      'Tracking, dashboards e observabilidade de fluxos',
    ],
    process: [...sharedProcess],
    seo: {
      title: 'Dados, Automação e IA para Growth | N8FLOW',
      description:
        'Integre dados, automação e IA aos processos de marketing e vendas com contexto, mensuração e supervisão.',
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
