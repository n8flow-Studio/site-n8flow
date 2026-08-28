import type { Event, Service, Article, CaseStudy } from '@/types/content'

// ---------------------------------------------------------------------------
// 1. Serviços N8FLOW — 4 pilares confirmados
// Referência: docs/copy-conteudo/02-paginas.md §Serviços
// ---------------------------------------------------------------------------
export const initialServices: Service[] = [
  {
    slug: 'sites-e-landing-pages',
    title: 'Sites e Landing Pages',
    summary:
      'Estruturas digitais focadas em clareza, alta velocidade e conversão qualificada de leads.',
    problems: [
      'Páginas lentas que perdem visitantes antes do carregamento',
      'Layouts genéricos sem clareza de proposta de valor',
      'Falta de rastreamento e eventos de conversão precisos',
    ],
    outcomes: [
      'Experiência digital orientada à clareza e à conversão',
      'Posicionamento coerente com a proposta de valor',
      'Mensuração dos principais comportamentos do visitante',
    ],
    capabilities: [
      'Desenvolvimento em Next.js com foco em Core Web Vitals',
      'Arquitetura de conversão orientada a UX e copy estratégica',
      'Setup avançado de Google Tag Manager, GA4 e Meta Pixel',
      'Formulários integrados diretamente ao CRM e automações',
    ],
    process: [
      {
        label: 'Auditoria e Estratégia',
        description: 'Mapeamento de público, objetivo de conversão e arquitetura de informação.',
      },
      {
        label: 'Design e Engenharia',
        description:
          'Construção da interface no Design System N8FLOW com performance e acessibilidade.',
      },
      {
        label: 'Integração e Publicação',
        description: 'Conexão com CRM, testes de disparo de eventos e deploy na Vercel.',
      },
    ],
    faq: [
      {
        question: 'Qual é o diferencial das landing pages da N8FLOW?',
        answer:
          'Não criamos páginas isoladas. Cada página é concebida como parte de uma máquina de vendas, conectada a automações, CRM e métricas de conversão.',
      },
      {
        question: 'Como funciona o tempo de carregamento?',
        answer:
          'Construímos com Next.js e React, controlando scripts e ativos para priorizar Core Web Vitals e experiência de uso.',
      },
    ],
    seo: {
      title: 'Sites e Landing Pages de Alta Conversão | N8FLOW',
      description:
        'Desenvolvemos experiências digitais de alta performance e conversão conectadas à sua operação de vendas.',
    },
    body: 'A experiência digital é a porta de entrada da sua máquina de vendas...',
  },
  {
    slug: 'automacao-e-ia',
    title: 'Automação e IA',
    summary:
      'Conecte rotinas, atendimento e dados para reduzir tarefas manuais e preservar contexto.',
    problems: [
      'Demora para responder leads gerados em campanhas',
      'Perda de tempo da equipe em tarefas operacionais repetitivas',
      'Falhas manuais na passagem de bastão entre marketing e vendas',
    ],
    outcomes: [
      'Atendimento e qualificação apoiados por automação',
      'Redução de tarefas operacionais repetitivas',
      'Fluxo de dados confiável entre plataformas sem retrabalho',
    ],
    capabilities: [
      'Orquestração de fluxos complexos utilizando n8n',
      'Agentes de IA para triagem e qualificação inicial',
      'Automações de WhatsApp Oficial para acompanhamento',
      'Sincronização bidirecional entre ferramentas e bancos de dados',
    ],
    process: [
      {
        label: 'Mapeamento de Processos',
        description: 'Identificação de rotinas manuais, gargalos e regras de negócio da operação.',
      },
      {
        label: 'Construção de Workflows',
        description: 'Desenvolvimento e testes de cenários no n8n com tratamento seguro de erros.',
      },
      {
        label: 'Monitoramento Contínuo',
        description: 'Acompanhamento de logs de execução e aprimoramento contínuo dos fluxos.',
      },
    ],
    faq: [
      {
        question: 'A automação substitui a equipe comercial humana?',
        answer:
          'Não. A automação qualifica, organiza e entrega o lead pronto para o corretor ou vendedor atuar no momento certo.',
      },
    ],
    seo: {
      title: 'Automação de Processos e Inteligência Artificial | N8FLOW',
      description:
        'Automatize tarefas repetitivas e integre inteligência aos seus processos de atendimento e vendas.',
    },
    body: 'A velocidade de contato define a taxa de fechamento...',
  },
  {
    slug: 'crm-e-agentes',
    title: 'CRM e Agentes',
    summary:
      'Organize a jornada de cada cliente com funis estruturados, WhatsApp integrado e agentes autônomos.',
    problems: [
      'Leads esquecidos no WhatsApp pessoal sem registro no CRM',
      'Falta de visibilidade da diretoria sobre o pipeline real',
      'Processo comercial despadronizado entre os corretores',
    ],
    outcomes: [
      'Contatos registrados e organizados em funis claros',
      'Controle centralizado de conversas e métricas de atendimento',
      'Acompanhamento automático pós-visita e régua de nutrição',
    ],
    capabilities: [
      'Implementação e personalização de CRM (Bolten White Label)',
      'Integração de WhatsApp API Oficial multiatendimento',
      'Criação de réguas de relacionamento e reengajamento de base',
      'Painéis de produtividade e taxas de conversão por etapa',
    ],
    process: [
      {
        label: 'Definição de Funis',
        description: 'Estruturação das etapas comerciais de acordo com a jornada real de compra.',
      },
      {
        label: 'Parametrização do CRM',
        description: 'Configuração de campos, permissões, canais e integrações com o WhatsApp.',
      },
      {
        label: 'Treinamento e Acompanhamento',
        description: 'Capacitação da equipe e acompanhamento da adesão ao processo.',
      },
    ],
    faq: [
      {
        question: 'Como funciona o WhatsApp Oficial no CRM?',
        answer:
          'A proposta é centralizar mensagens via WhatsApp Oficial, com múltiplos atendentes e histórico associado ao relacionamento no CRM.',
      },
    ],
    seo: {
      title: 'Estruturação de CRM e Agentes Comerciais | N8FLOW',
      description:
        'Implementamos e integramos CRM e WhatsApp para organizar a gestão e o acompanhamento de vendas da sua empresa.',
    },
    body: 'Sem processo no CRM, o dinheiro investido em mídia é desperdiçado...',
  },
  {
    slug: 'trafego-e-dados',
    title: 'Tráfego e Dados',
    summary:
      'Aquisição orientada a dados reais para gerar demanda qualificada e retorno mensurável.',
    problems: [
      'Gasto em mídia paga sem saber quais canais geram vendas reais',
      'Leads desqualificados que sobrecarregam o time comercial',
      'Decisões tomadas com base em achismos e métricas de vaidade',
    ],
    outcomes: [
      'Otimização de campanhas orientada por CPL e CAC',
      'Alinhamento estreito entre público anunciado e produto ofertado',
      'Dashboards claros para tomada de decisão estratégica',
    ],
    capabilities: [
      'Gestão de campanhas no Meta Ads e Google Ads',
      'Segmentação avançada e estratégias de aquisição local',
      'Rastreamento Server-Side e integração com dados do CRM',
      'Auditoria de funil de conversão e atribuição de vendas',
    ],
    process: [
      {
        label: 'Diagnóstico de Mercado',
        description: 'Análise de concorrência, persona ideal e histórico de campanhas.',
      },
      {
        label: 'Setup de Tracking',
        description:
          'Configuração da infraestrutura de dados para melhorar consistência e leitura das métricas.',
      },
      {
        label: 'Execução e Otimização',
        description: 'Gestão contínua com ajustes semanais baseados no retorno real das vendas.',
      },
    ],
    faq: [
      {
        question: 'Qual é o investimento mínimo em mídia?',
        answer:
          'O orçamento é dimensionado de acordo com a meta de receita e a capacidade de atendimento da sua operação.',
      },
    ],
    seo: {
      title: 'Tráfego Pago e Engenharia de Dados | N8FLOW',
      description:
        'Gestão de mídia de performance orientada a dados reais e geração contínua de demanda qualificada.',
    },
    body: 'Tráfego sem infraestrutura de conversão é apenas custo...',
  },
]

// ---------------------------------------------------------------------------
// 2. Eventos N8FLOW — Dados base confirmados no PRD
// ---------------------------------------------------------------------------
export const initialEvents: Event[] = [
  {
    id: 'evento-imobiliario-seahub-01',
    slug: 'growth-ia-mercado-imobiliario',
    title: 'Growth, IA e Automação para o Mercado Imobiliário',
    summary:
      'Imersão presencial prática para corretores, imobiliárias e gestores que querem estruturar sua máquina de vendas e acelerar o atendimento com IA.',
    // Data e disponibilidade ainda não foram confirmadas; rascunhos não são publicados.
    status: 'draft',
    startsAt: 'Próxima edição presencial (Vagas Limitadas)',
    venue: 'Seahub Sebrae',
    address: 'Av. Lima e Silva, 76 – Lagoa Nova, Natal/RN',
    price: 97,
    currency: 'BRL',
    capacity: 40,
    timezone: 'America/Sao_Paulo',
    seo: {
      title: 'Imersão Growth e IA para Mercado Imobiliário | N8FLOW',
      description:
        'Aprenda a conectar automação, IA, CRM e captação de clientes no mercado imobiliário em encontro presencial exclusivo no Seahub Sebrae.',
    },
    body: `
### Sobre o Encontro Presencial

O mercado imobiliário mudou. Corretores e imobiliárias que continuam dependendo de planilhas desorganizadas, atendimento manual demorado e indicações aleatórias estão perdendo espaço para operações estruturadas.

Neste encontro presencial para apenas **40 participantes**, vamos demonstrar na prática como montar a engrenagem completa da sua máquina de vendas:

1. **Captação Conectada:** Como gerar oportunidades qualificadas todos os dias.
2. **Atendimento Imediato com IA:** Como triar e responder contatos em segundos no WhatsApp.
3. **Gestão sem Perdas:** Como manter o pipeline organizado no CRM sem deixar nenhum lead esquecido.
    `,
  },
]

// ---------------------------------------------------------------------------
// 3. Artigos de Blog Iniciais
// ---------------------------------------------------------------------------
export const initialArticles: Article[] = [
  {
    slug: 'por-que-ferramentas-isoladas-nao-resolvem-sua-operacao',
    title: 'Por que contratar mais ferramentas não resolve uma operação desconectada',
    description:
      'Entenda por que assinar múltiplos softwares sem uma arquitetura unificada de dados e processos apenas aumenta o custo e a complexidade.',
    publishedAt: '2026-08-20',
    author: 'Engenharia N8FLOW',
    category: 'Engenharia de Growth',
    tags: ['Growth', 'Processos', 'Tecnologia'],
    readingTime: 5,
    relatedServices: ['sites-e-landing-pages', 'automacao-e-ia'],
    seo: {
      title: 'Por que mais ferramentas não resolvem sua operação | N8FLOW',
      description:
        'O erro comum de empilhar softwares sem integração e como estruturar uma máquina de vendas eficiente.',
    },
    body: `
Muitas empresas acreditam que para vender mais basta assinar um novo CRM, contratar uma ferramenta de automação e investir mais em anúncios.

No entanto, quando essas soluções não se comunicam, o resultado é:
- Leads perdidos entre a landing page e a caixa de entrada
- Corretores sem contexto do histórico do cliente
- Relatórios conflitantes que não mostram de onde veio o faturamento

O segredo de operações que escalam não está na quantidade de ferramentas, mas no **grau de integração entre estratégia, tecnologia e time comercial**.
    `,
  },
  {
    slug: 'como-ia-e-automacao-reduzem-tempo-de-primeiro-contato',
    title: 'O impacto de responder leads em menos de 2 minutos com IA',
    description:
      'Estudos e dados práticos sobre como a velocidade e o contexto no primeiro contato multiplicam as chances de fechamento no mercado imobiliário.',
    publishedAt: '2026-08-22',
    author: 'Engenharia N8FLOW',
    category: 'Automação & IA',
    tags: ['IA', 'WhatsApp', 'Atendimento'],
    readingTime: 4,
    relatedServices: ['automacao-e-ia', 'crm-e-agentes'],
    seo: {
      title: 'Como a IA no primeiro contato multiplica conversões | N8FLOW',
      description:
        'Descubra como o atendimento automatizado inteligente reduz atrito e qualifica leads instantaneamente.',
    },
    body: `
No mercado imobiliário e em vendas de alto ticket, o lead que entra em contato está pesquisando ativamente. Cada minuto de espera reduz drasticamente a chance de agendamento de visita.

Com agentes de IA integrados à API Oficial do WhatsApp:
- O cliente recebe resposta personalizada em segundos
- Dúvidas preliminares são esclarecidas com base no inventário real
- O corretor recebe o lead com perfil qualificado e pronto para o fechamento
    `,
  },
]

// ---------------------------------------------------------------------------
// 4. Cases Iniciais — vazio respeitando a governança (sem prova forjada)
// ---------------------------------------------------------------------------
export const initialCases: CaseStudy[] = []
