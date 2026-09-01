# PRD — Site Institucional N8FLOW TECNOLOGIA

**Product Requirements Document**

**Versão:** 1.0  
**Status:** Especificação inicial  
**Produto:** Site Institucional N8FLOW TECNOLOGIA  
**Stack-alvo:** Next.js + TypeScript + Tailwind CSS + Vercel  
**Integrações principais:** n8n, CRM, Gateway de Pagamento, WhatsApp API, Analytics  
**Documento-base:** N8FLOW TECNOLOGIA — Documento de Estruturação e Conceito

---

## Atualização estratégica aprovada — 2026-09-01

O [ADR-0007](../decisions/ADR-0007-assessoria-b2b-multissetorial.md) substitui as
premissas deste documento relacionadas a público imobiliário, Comunidade como
recorrência, Eventos como entrada principal e ao funil Educação → Comunidade →
Assessoria.

A direção vigente é:

- Assessoria de Growth Marketing B2B multissetorial;
- diagnóstico comercial como conversão principal;
- público qualificado por maturidade operacional, não por setor;
- estratégia, aquisição, conversão, CRM, dados, automação e IA como capacidades
  integradas;
- Comunidade e Eventos suspensos como pilares públicos;
- método: Diagnosticar → Priorizar → Implementar → Medir → Otimizar;
- cases, métricas, preços e promessas publicados somente com comprovação e
  aprovação.

As especificações históricas abaixo permanecem como registro da versão 1.0, mas
não devem orientar novas implementações quando conflitarem com o ADR-0007.

---

# 1. Visão do Produto

O site institucional da **N8FLOW TECNOLOGIA** será uma plataforma digital de posicionamento, aquisição e conversão de leads.

O site não deverá funcionar como um simples catálogo institucional de serviços. Seu papel é representar digitalmente o modelo de negócio da N8FLOW e conduzir o visitante por uma jornada de maturação:

**Educação → Comunidade → Assessoria e Tecnologia**

Esse modelo acompanha o funil de Growth definido pela empresa, no qual eventos presenciais funcionam como porta de entrada, a comunidade representa a etapa de retenção e relacionamento e os serviços de assessoria e tecnologia representam a oferta de maior valor agregado.

A N8FLOW se posiciona como uma **Assessoria de Growth Marketing**, e não como uma agência tradicional ou uma simples fábrica de software. Sua proposta combina educação, tecnologia, Inteligência Artificial, automação e processos de vendas.

O site deverá, portanto, comunicar simultaneamente:

- autoridade em Growth;
- domínio tecnológico;
- capacidade de implementação;
- orientação a resultados;
- capacidade de automação;
- integração entre marketing, vendas, dados e tecnologia;
- existência de uma jornada de relacionamento com o cliente.

---

# 2. Contexto Estratégico

## 2.1 Posicionamento

A N8FLOW pretende ocupar o espaço de **Assessoria de Growth Marketing**, transcendendo a percepção tradicional de agência de marketing ou empresa de desenvolvimento.

O conceito central é construir uma **“máquina de vendas”** para o cliente por meio da combinação de:

- Engenharia de Growth;
- automação inteligente;
- Inteligência Artificial;
- CRM;
- relacionamento;
- tráfego;
- dados;
- processos de vendas;
- infraestrutura digital.

A proposta única de valor definida no documento-base é:

> “Mais que tecnologia. Construímos a máquina de vendas do seu negócio através de Engenharia de Growth, automação inteligente e gestão de relacionamento.”

---

# 3. Objetivos do Produto

## 3.1 Objetivo principal

Construir um site capaz de:

1. comunicar claramente o posicionamento da N8FLOW;
2. gerar autoridade;
3. apresentar o ecossistema de soluções;
4. gerar inscrições para eventos;
5. converter usuários em membros da comunidade;
6. gerar leads qualificados para serviços high ticket;
7. servir como infraestrutura de aquisição para campanhas;
8. gerar tráfego orgânico por meio de conteúdo;
9. demonstrar, na própria experiência, a capacidade tecnológica e de Growth da N8FLOW.

---

# 4. Objetivos de Negócio

O site deverá apoiar três níveis de monetização.

## 4.1 Entrada

### Evento presencial

- Frequência: quinzenal ou mensal;
- Capacidade: 40 pessoas;
- Ticket: R$ 97,00;
- Função: aquisição e ativação.

O evento aborda temas como:

- presença digital;
- Inteligência Artificial;
- CRM;
- agentes de IA;
- captação de leads;
- tráfego pago;
- aquisição orgânica.

## 4.2 Recorrência

### Comunidade N8FLOW

- Modelo: comunidade online;
- Ticket: R$ 597/mês;
- Público: participantes dos eventos e profissionais que buscam acompanhamento contínuo;
- Função: retenção e receita recorrente.

## 4.3 High Ticket

### Assessoria e Tecnologia

- Ticket: R$ 10.000+;
- Modelo: projetos e mentorias;
- Público: imobiliárias e incorporadoras;
- Função: maximização de receita e geração de cases/referrals.

---

# 5. Público-Alvo

## 5.1 Público inicial

O mercado inicialmente priorizado é o **mercado imobiliário**, incluindo:

- corretores;
- imobiliárias;
- incorporadoras.

O documento diferencia implicitamente necessidades individuais e empresariais.

## 5.2 Perfil 1 — Corretor

Principais necessidades previstas:

- melhorar presença digital;
- captar leads;
- utilizar IA no dia a dia;
- estruturar CRM;
- automatizar atendimento;
- aprender estratégias de Growth;
- desenvolver networking;
- obter acompanhamento contínuo.

Principal jornada:

**Evento → Comunidade**

## 5.3 Perfil 2 — Imobiliária / Incorporadora

Principais necessidades previstas:

- estruturar aquisição;
- melhorar processos comerciais;
- automatizar atendimento;
- implantar CRM;
- utilizar agentes de IA;
- melhorar tracking;
- reduzir desperdícios de mídia;
- aumentar eficiência comercial;
- integrar marketing e vendas.

Principal jornada:

**Conteúdo / Evento / Indicação → Diagnóstico → Assessoria**

---

# 6. Proposta de Valor

O site deverá comunicar que a N8FLOW não entrega ferramentas isoladas.

O valor está na construção de um ecossistema integrado.

Modelo conceitual:

```text
Marketing
    +
Dados
    +
Tecnologia
    +
Automação
    +
IA
    +
CRM
    +
Processos Comerciais
    =
Máquina de Vendas
```

A comunicação deve evitar posicionar a empresa simplesmente como:

- agência de tráfego;
- desenvolvedora de sites;
- empresa de automação;
- empresa de software;
- consultoria genérica.

Esses elementos devem ser apresentados como componentes de uma solução maior de Growth.

---

# 7. Modelo do Funil

O site deverá representar visualmente o modelo:

```text
                    N8FLOW
                       │
                       ▼
              EDUCAÇÃO / EVENTO
                  R$ 97
                       │
                       ▼
                 COMUNIDADE
                 R$ 597/mês
                       │
                       ▼
          ASSESSORIA + TECNOLOGIA
                    R$ 10k+
```

O usuário não precisa necessariamente passar por todas as etapas, mas o site deve tornar essa progressão compreensível.

---

# 8. Objetivos dos Usuários

## Visitante frio

Deve conseguir compreender:

- quem é a N8FLOW;
- qual problema ela resolve;
- para quem trabalha;
- como funciona o método;
- qual o próximo passo.

## Visitante interessado em aprendizado

Deve conseguir:

- conhecer o evento;
- visualizar data e local;
- compreender benefícios;
- realizar inscrição/pagamento.

## Membro potencial

Deve conseguir:

- entender a proposta da comunidade;
- conhecer benefícios;
- visualizar entregáveis;
- assinar.

## Empresa interessada

Deve conseguir:

- entender as soluções;
- avaliar competência técnica;
- conhecer o método de trabalho;
- solicitar diagnóstico.

## Usuário interessado em conteúdo

Deve conseguir:

- encontrar artigos;
- navegar por temas;
- compartilhar conteúdo;
- acessar conteúdos relacionados.

---

# 9. Arquitetura de Informação

A arquitetura inicial recomendada é:

```text
/
├── /eventos
│   └── /eventos/[slug]
│
├── /comunidade
│
├── /servicos
│   ├── /servicos/sites-e-landing-pages
│   ├── /servicos/automacao-e-ia
│   ├── /servicos/crm-e-agentes
│   └── /servicos/trafego-e-dados
│
├── /cases
│   └── /cases/[slug]
│
├── /blog
│   └── /blog/[slug]
│
├── /sobre
│
├── /contato
│
├── /privacidade
│
└── /termos
```

As páginas individuais de serviços, cases e eventos ficam preparadas para crescimento do site.

A publicação efetiva de cada página deverá ser validada antes do lançamento.

---

# 10. Página Home

## 10.1 Objetivo

A Home deverá:

- estabelecer posicionamento;
- apresentar a metodologia;
- gerar autoridade;
- apresentar o ecossistema;
- direcionar para o evento;
- oferecer caminhos para comunidade e assessoria.

O documento-base define a Home como principal ponto de conversão para o evento presencial.

---

## 10.2 Hero

### Objetivo

Comunicar imediatamente:

1. o que a N8FLOW faz;
2. para quem;
3. qual transformação oferece;
4. qual próximo passo.

### Elementos

- headline;
- subheadline;
- CTA primário;
- CTA secundário;
- elemento visual;
- possível prova ou indicador de autoridade.

### CTA primário

**Participar do próximo evento**

### CTA secundário

**Conhecer a N8FLOW**

A copy definitiva deverá ser desenvolvida em documento específico de Copy/Conteúdo.

---

# 11. Seção — O Problema

Objetivo: gerar identificação.

Deverá abordar problemas relacionados a:

- leads sem processo;
- atendimento manual;
- falta de organização;
- ausência de CRM;
- baixa utilização de IA;
- desperdício de tráfego;
- ausência de acompanhamento;
- desconexão entre marketing e vendas.

Essa seção deve conduzir à conclusão de que simplesmente contratar ferramentas não resolve o problema.

---

# 12. Seção — O Método N8FLOW

Apresentar o modelo:

```text
1. Educação
2. Comunidade
3. Assessoria
```

### Educação

Conhecimento e capacitação.

### Comunidade

Acompanhamento, networking e aplicação.

### Assessoria

Implementação personalizada e tecnologia.

Essa estrutura corresponde ao funil de Growth descrito no documento-base.

---

# 13. Seção — Ecossistema de Soluções

O documento define três grandes grupos:

## Infraestrutura & Conversão

- sites corporativos;
- landing pages;
- experiência digital;
- conversão.

## Automação & IA

- automações;
- n8n;
- agentes de IA;
- atendimento;
- WhatsApp.

## Dados & Tráfego

- gestão de tráfego;
- tracking;
- API de Conversões;
- análise orientada a dados.

O detalhamento técnico deverá ser apresentado na página `/servicos`.

---

# 14. Seção — Evento

A Home deverá possuir uma chamada para o próximo evento.

Elementos:

- nome;
- data;
- horário;
- local;
- quantidade de vagas;
- preço;
- principais benefícios;
- CTA.

O documento-base define capacidade de 40 pessoas e ticket de R$ 97.

---

# 15. Página `/eventos`

## Objetivo

Funcionar como catálogo e ponto central dos eventos.

### Componentes

- evento em destaque;
- próximos eventos;
- eventos anteriores;
- informações;
- CTA.

---

# 16. Página `/eventos/[slug]`

Cada evento deverá possuir uma landing page própria.

## Estrutura

```text
Hero
↓
Problema
↓
O que será aprendido
↓
Para quem é
↓
Agenda / conteúdo
↓
Palestrante(s)
↓
Local
↓
Data e horário
↓
Vagas
↓
Preço
↓
FAQ
↓
CTA / Checkout
```

---

# 17. Formulário de Evento

Campos mínimos definidos no documento:

- nome;
- e-mail;
- WhatsApp;
- CRECI.

Campos complementares recomendados para tracking:

- origem;
- mídia;
- campanha;
- termo;
- conteúdo;
- landing page;
- identificador do evento.

Esses campos devem ser tratados como dados técnicos de atribuição e não necessariamente exibidos ao usuário.

---

# 18. Jornada de Inscrição

Fluxo esperado:

```text
Visitante
   ↓
Landing do evento
   ↓
Formulário
   ↓
Validação
   ↓
Checkout / pagamento
   ↓
Confirmação
   ↓
CRM
   ↓
WhatsApp
```

---

# 19. Automação do Evento

O fluxo descrito no documento-base deverá ser suportado:

```text
Next.js
   ↓
Webhook
   ↓
n8n
   ↓
Tratamento
   ↓
Gateway
   ↓
CRM
   ↓
WhatsApp
```

O n8n deverá:

1. receber o webhook;
2. tratar os dados;
3. verificar situação do pagamento;
4. criar/atualizar contato;
5. adicionar tags;
6. atribuir ao funil;
7. enviar comunicação via WhatsApp.

O documento especifica tags como:

```text
Lead_Evento_DataX
Confirmado_Evento_DataX
```

---

# 20. Página `/comunidade`

## Objetivo

Converter usuários em assinantes da comunidade N8FLOW.

O documento define:

- mensalidade de R$ 597;
- networking;
- estratégias contínuas;
- templates;
- suporte prático;
- aulas;
- encontros online.

---

# 21. Estrutura da Página Comunidade

```text
Hero
↓
Problema do profissional isolado
↓
O que é a comunidade
↓
Benefícios
↓
O que está incluído
↓
Como funciona
↓
Para quem é
↓
Depoimentos
↓
FAQ
↓
Preço
↓
CTA de assinatura
```

Depoimentos devem ser adicionados somente quando existirem.

---

# 22. Página `/servicos`

## Objetivo

Captar leads qualificados para projetos de R$ 10.000+.

A abordagem deve ser B2B, direcionada principalmente a:

- imobiliárias;
- incorporadoras.

O documento define como serviços:

- sites;
- landing pages;
- automações n8n;
- CRM com agentes de IA;
- WhatsApp;
- tráfego;
- tracking;
- API de Conversões.

---

# 23. Estrutura da Página Serviços

```text
Hero B2B
↓
Problema
↓
Como a N8FLOW atua
↓
Ecossistema de soluções
↓
Serviços
↓
Tecnologias
↓
Método
↓
Cases
↓
FAQ
↓
Formulário de diagnóstico
```

---

# 24. Método de Trabalho

O documento-base determina:

- auditoria;
- setup;
- acompanhamento.

A página deverá transformar isso em uma jornada visual:

```text
01 — Diagnóstico
       ↓
02 — Estratégia
       ↓
03 — Implementação
       ↓
04 — Integração
       ↓
05 — Acompanhamento
       ↓
06 — Otimização
```

As etapas 02 a 06 deverão ser consideradas **estrutura proposta para validação**, pois o documento-base explicita apenas auditoria, setup e acompanhamento.

---

# 25. Página Individual de Serviço

Quando necessário, cada serviço poderá ter página própria.

Exemplo:

```text
/servicos/automacao-e-ia
```

Estrutura:

- problema;
- solução;
- funcionamento;
- aplicações;
- tecnologias;
- processo;
- resultados/cases;
- FAQ;
- CTA.

---

# 26. Página `/cases`

## Objetivo

Construir prova social e autoridade.

Cada case deverá apresentar, quando houver dados reais:

- contexto;
- problema;
- solução;
- implementação;
- tecnologias;
- processo;
- resultado;
- métricas;
- depoimento.

Não deverão ser inventados números, resultados ou depoimentos.

---

# 27. Página `/blog`

## Objetivo

Aquisição orgânica e autoridade.

O documento define conteúdos relacionados a:

- redução de CPL;
- pixel;
- API de Conversões;
- automação de atendimento;
- Growth;
- tecnologia.

---

# 28. Estrutura do Blog

Cada artigo deverá possuir:

- título;
- descrição;
- imagem;
- autor;
- data;
- categoria;
- tempo de leitura;
- conteúdo;
- artigos relacionados;
- CTA;
- compartilhamento.

---

# 29. SEO

O site deverá possuir:

## Técnico

- metadata por página;
- canonical;
- sitemap.xml;
- robots.txt;
- Open Graph;
- Twitter/X metadata;
- URLs amigáveis;
- headings semânticos;
- alt text;
- Schema.org.

## Estrutura

Blog organizado por temas.

Possíveis clusters:

```text
Growth Marketing
Automação
Inteligência Artificial
CRM
Tráfego
Dados
Marketing Imobiliário
```

A definição final dos clusters deverá ser validada com a estratégia de conteúdo.

---

# 30. Dados Estruturados

Avaliar implementação de:

- Organization;
- LocalBusiness, se aplicável;
- Article;
- BreadcrumbList;
- Event;
- FAQPage;
- Product/Service, quando semanticamente adequado.

O tipo de schema deverá ser escolhido conforme o conteúdo efetivamente publicado.

---

# 31. Analytics

O site deverá possuir infraestrutura para:

- Google Analytics 4;
- Google Tag Manager;
- Meta Pixel;
- Vercel Analytics;
- Vercel Speed Insights;
- tracking de conversões.

A utilização da Conversions API é coerente com os serviços que a própria N8FLOW oferece.

---

# 32. Eventos de Analytics

Eventos mínimos:

```text
page_view
view_event
click_event_cta
start_event_registration
submit_lead
begin_checkout
purchase
click_whatsapp
view_community
click_community_cta
view_services
submit_diagnosis
view_case
```

A taxonomia final deverá ser documentada antes da implementação.

---

# 33. Atribuição

O sistema deverá preservar parâmetros de campanha quando possível:

```text
utm_source
utm_medium
utm_campaign
utm_term
utm_content
```

Esses dados deverão acompanhar o lead até o webhook/n8n.

---

# 34. Formulário de Diagnóstico

Campos mínimos sugeridos:

- nome;
- empresa;
- e-mail;
- WhatsApp;
- cargo;
- cidade;
- segmento;
- tamanho da operação;
- principal desafio;
- investimento atual em marketing;
- mensagem.

Campos finais deverão ser definidos antes da implementação.

---

# 35. Arquitetura Técnica

## Stack

```text
Next.js
TypeScript
React
Tailwind CSS
Vercel
n8n
CRM
Gateway de pagamento
WhatsApp API
```

O documento-base também identifica React, Next.js e Tailwind como stack de frontend e Node.js/n8n para automações.

---

# 36. Next.js

Utilizar:

- App Router;
- Server Components por padrão;
- Client Components somente quando necessários;
- metadata API;
- `sitemap.ts`;
- `robots.ts`;
- otimização de imagens;
- geração estática quando apropriado;
- revalidation quando conteúdo dinâmico exigir.

---

# 37. Estrutura de Projeto

Estrutura inicial recomendada:

```text
src/
├── app/
│   ├── (marketing)/
│   ├── api/
│   ├── blog/
│   ├── eventos/
│   ├── servicos/
│   ├── comunidade/
│   ├── cases/
│   ├── sobre/
│   ├── contato/
│   ├── privacidade/
│   ├── termos/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   ├── sections/
│   ├── marketing/
│   └── blog/
│
├── lib/
│   ├── analytics/
│   ├── seo/
│   ├── integrations/
│   ├── validations/
│   └── utils/
│
├── content/
├── config/
└── styles/
```

---

# 38. Componentização

Componentes deverão ser divididos entre:

## UI

Componentes genéricos:

- Button;
- Input;
- Select;
- Card;
- Badge;
- Modal;
- Accordion;
- Container;
- Typography.

## Marketing

Componentes específicos:

- Hero;
- CTA;
- ServiceCard;
- EventCard;
- CaseCard;
- Testimonial;
- Pricing;
- FAQ;
- LeadForm.

## Layout

- Header;
- Footer;
- MobileNavigation;
- Breadcrumb.

---

# 39. Estado e Interatividade

O site deve privilegiar Server Components.

Client Components serão utilizados para:

- formulários;
- menus;
- modais;
- sliders;
- animações interativas;
- tracking dependente de interação;
- componentes que exijam estado.

Evitar transformar seções puramente informativas em Client Components.

---

# 40. Integração n8n

A integração deverá ser feita por webhook.

Fluxo:

```text
Browser
   ↓
Next.js
   ↓
Validação
   ↓
Webhook n8n
```

O frontend não deverá armazenar credenciais do n8n.

Variáveis sensíveis deverão permanecer no ambiente server-side.

---

# 41. API Layer

Quando necessário, utilizar Route Handlers do Next.js:

```text
POST /api/leads/evento
POST /api/leads/diagnostico
POST /api/contact
```

Esses endpoints poderão:

- validar payload;
- normalizar dados;
- aplicar rate limiting;
- executar tracking;
- encaminhar para n8n.

---

# 42. Validação

Utilizar schema de validação no backend.

Requisitos:

- campos obrigatórios;
- formato de e-mail;
- telefone;
- tamanho máximo;
- sanitização;
- mensagens de erro;
- proteção contra payloads inválidos.

Biblioteca específica: **a definir**.

---

# 43. Segurança

Requisitos:

- nenhuma credencial no frontend;
- HTTPS;
- validação server-side;
- proteção de endpoints;
- rate limiting;
- proteção contra spam;
- CAPTCHA/Turnstile, se necessário;
- headers de segurança;
- tratamento seguro de webhooks.

---

# 44. LGPD

O site deverá considerar:

- política de privacidade;
- termos;
- consentimento quando necessário;
- finalidade de coleta;
- tratamento de dados;
- compartilhamento com ferramentas externas;
- mecanismos de contato relacionados aos direitos do titular.

A implementação jurídica definitiva deverá ser validada pela N8FLOW e/ou assessoria jurídica.

---

# 45. Performance

Meta:

- excelente Core Web Vitals;
- carregamento rápido;
- imagens otimizadas;
- fontes otimizadas;
- JavaScript reduzido;
- lazy loading;
- Server Components;
- uso adequado de cache.

O site deverá ser desenvolvido priorizando performance desde a arquitetura, e não como etapa posterior.

---

# 46. Responsividade

Breakpoints deverão contemplar:

- mobile;
- tablet;
- desktop;
- telas grandes.

A experiência mobile deverá ser tratada como prioridade, especialmente considerando tráfego oriundo de:

- Instagram;
- WhatsApp;
- anúncios;
- QR Codes;
- campanhas.

---

# 47. Acessibilidade

Requisitos:

- navegação por teclado;
- foco visível;
- contraste adequado;
- labels;
- semântica HTML;
- ARIA somente quando necessária;
- textos alternativos;
- hierarquia de headings;
- formulários acessíveis.

Meta recomendada: conformidade WCAG 2.2 AA, quando tecnicamente aplicável.

---

# 48. Design System

O Design System será especificado em documento separado.

Deverá contemplar:

- cores;
- tipografia;
- escala de espaçamento;
- grid;
- bordas;
- sombras;
- radius;
- botões;
- inputs;
- cards;
- ícones;
- estados;
- animações.

A identidade visual definitiva não está especificada no documento-base e, portanto, deverá ser definida posteriormente.

---

# 49. Direção Visual

O visual deve transmitir:

- tecnologia;
- inteligência;
- crescimento;
- precisão;
- estratégia;
- confiança;
- sofisticação B2B.

Evitar uma estética que faça a N8FLOW parecer apenas:

- agência de social media;
- empresa genérica de TI;
- startup SaaS;
- infoproduto.

A direção visual definitiva deverá ser objeto de especificação própria.

---

# 50. Microinterações

Podem ser utilizadas para reforçar:

- tecnologia;
- fluxo;
- conexão;
- automação;
- crescimento.

Exemplos:

- entrada suave de elementos;
- linhas de conexão;
- indicadores de fluxo;
- animações de cards;
- feedback de formulário.

Animações não devem prejudicar:

- performance;
- acessibilidade;
- legibilidade;
- conversão.

---

# 51. Header

Desktop:

```text
Logo
Soluções
Comunidade
Eventos
Cases
Conteúdos
[CTA]
```

Mobile:

```text
Logo
Menu
```

A arquitetura definitiva de navegação deverá ser validada após o desenvolvimento da IA.

---

# 52. Footer

Deverá conter:

- logo;
- posicionamento;
- navegação;
- serviços;
- comunidade;
- eventos;
- contato;
- redes sociais;
- informações legais;
- privacidade;
- termos;
- copyright.

Dados empresariais específicos: **a definir**.

---

# 53. Conversão

Toda página comercial deverá possuir CTA claro.

Exemplos:

### Evento

**Quero participar**

### Comunidade

**Quero fazer parte da comunidade**

### Serviços

**Quero solicitar um diagnóstico**

### Conteúdo

**Conhecer a N8FLOW**

Não utilizar múltiplos CTAs concorrentes com o mesmo peso visual.

---

# 54. Estados dos Formulários

Todo formulário deverá possuir:

### Default

Formulário pronto para preenchimento.

### Loading

Indicação visual de processamento.

### Success

Mensagem clara de confirmação.

### Error

Mensagem compreensível e orientação para correção.

### Network error

Possibilidade de tentar novamente.

---

# 55. Estado de Evento

O sistema deverá contemplar:

```text
DRAFT
↓
PUBLISHED
↓
OPEN
↓
SOLD_OUT
↓
CLOSED
```

A implementação desse modelo deverá ser confirmada quando a arquitetura de dados for definida.

---

# 56. Conteúdo Dinâmico

Os seguintes conteúdos devem ser preparados para crescimento:

- eventos;
- artigos;
- cases;
- serviços.

Cada entidade deverá possuir slug.

Exemplo:

```text
/eventos/growth-para-corretores
/blog/como-reduzir-cpl-no-mercado-imobiliario
/cases/imobiliaria-x
/servicos/automacao-e-ia
```

---

# 57. CMS

O documento-base não especifica um CMS.

Portanto:

**Status: a definir.**

Para MVP, é possível utilizar conteúdo versionado junto ao código, especialmente para:

- páginas;
- blog;
- cases;
- eventos.

Caso a equipe necessite editar conteúdo sem deploy, deverá ser avaliado CMS headless.

---

# 58. Banco de Dados

O documento-base não exige banco de dados para o site institucional.

Recomendação inicial:

**não utilizar banco de dados apenas para conteúdo institucional.**

O CRM deverá continuar sendo a fonte de verdade para leads, caso essa arquitetura seja confirmada.

---

# 59. Vercel

O deployment será realizado na Vercel.

Requisitos:

- projeto conectado ao Git;
- preview deployments;
- production deployment;
- variáveis de ambiente;
- domínio customizado;
- HTTPS;
- observabilidade;
- logs.

---

# 60. Ambientes

Deverão existir pelo menos:

```text
Development
Preview
Production
```

Fluxo:

```text
feature/*
   ↓
Pull Request
   ↓
Preview Vercel
   ↓
QA
   ↓
main
   ↓
Production
```

---

# 61. Variáveis de Ambiente

Exemplos:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_META_PIXEL_ID

N8N_WEBHOOK_URL
N8N_WEBHOOK_SECRET

CRM_API_KEY
PAYMENT_API_KEY

NEXT_PUBLIC_VERCEL_ANALYTICS
```

Os nomes definitivos deverão ser definidos na especificação técnica.

Segredos jamais deverão utilizar prefixo `NEXT_PUBLIC_`.

---

# 62. Observabilidade

Deverá existir monitoramento de:

- erros;
- performance;
- falhas de formulário;
- falhas de webhook;
- erros de integração;
- Core Web Vitals.

Ferramenta específica para error tracking: **a definir**.

---

# 63. SEO Técnico

Checklist:

- [ ] title exclusivo;
- [ ] meta description;
- [ ] canonical;
- [ ] Open Graph;
- [ ] sitemap;
- [ ] robots;
- [ ] headings;
- [ ] URLs semânticas;
- [ ] imagens otimizadas;
- [ ] alt text;
- [ ] structured data;
- [ ] breadcrumbs quando necessário;
- [ ] páginas indexáveis somente quando desejado.

---

# 64. Indexação

Não deverão ser indexadas páginas técnicas ou privadas.

Exemplos:

```text
/api/*
/checkout/*
/admin/*
```

Caso existam.

---

# 65. Estratégia de Conteúdo

O blog deverá atuar como mecanismo de aquisição.

A estratégia deverá conectar:

```text
Problema pesquisado
       ↓
Conteúdo
       ↓
Autoridade
       ↓
CTA
       ↓
Evento / Comunidade / Diagnóstico
```

---

# 66. Cases como Ativo Comercial

Cases deverão funcionar como ponte entre conteúdo e venda.

Estrutura:

```text
Problema
↓
Diagnóstico
↓
Estratégia
↓
Implementação
↓
Resultado
↓
CTA
```

Somente resultados comprovados deverão ser publicados.

---

# 67. Requisitos Funcionais

## RF01 — Home

O sistema deve disponibilizar a Home institucional.

## RF02 — Eventos

O sistema deve permitir apresentação do evento atual.

## RF03 — Landing de evento

O sistema deve disponibilizar páginas específicas para eventos.

## RF04 — Cadastro

O usuário deve poder cadastrar-se para um evento.

## RF05 — Integração

O cadastro deve poder ser enviado ao n8n.

## RF06 — Comunidade

O sistema deve apresentar a oferta da comunidade.

## RF07 — Serviços

O sistema deve apresentar os serviços da N8FLOW.

## RF08 — Diagnóstico

O usuário deve poder solicitar contato para diagnóstico.

## RF09 — Blog

O sistema deve disponibilizar artigos.

## RF10 — Cases

O sistema deve disponibilizar cases quando houver conteúdo.

## RF11 — SEO

Todas as páginas públicas devem possuir configuração SEO adequada.

## RF12 — Analytics

Eventos de conversão devem ser mensuráveis.

## RF13 — Responsividade

Todas as páginas devem funcionar em dispositivos móveis.

## RF14 — Acessibilidade

Componentes devem seguir boas práticas de acessibilidade.

---

# 68. Requisitos Não Funcionais

## RNF01 — Performance

O site deve priorizar excelente desempenho.

## RNF02 — Segurança

Informações sensíveis devem permanecer no servidor.

## RNF03 — Escalabilidade

A arquitetura deve permitir inclusão de novos eventos, artigos, cases e serviços.

## RNF04 — Manutenibilidade

Código modular e componentizado.

## RNF05 — SEO

Conteúdo deve ser rastreável e semanticamente estruturado.

## RNF06 — Responsividade

Experiência consistente em diferentes tamanhos de tela.

## RNF07 — Observabilidade

Falhas relevantes devem ser detectáveis.

---

# 69. Critérios de Aceite — Home

A Home será considerada concluída quando:

- [ ] posicionamento da N8FLOW estiver claro;
- [ ] proposta de valor estiver clara;
- [ ] método estiver explicado;
- [ ] soluções estiverem apresentadas;
- [ ] evento estiver destacado;
- [ ] CTAs funcionarem;
- [ ] mobile estiver validado;
- [ ] SEO estiver configurado;
- [ ] analytics estiver funcionando;
- [ ] performance estiver validada.

---

# 70. Critérios de Aceite — Evento

- [ ] evento possui página própria;
- [ ] informações estão corretas;
- [ ] formulário funciona;
- [ ] validação funciona;
- [ ] pagamento está integrado, quando aplicável;
- [ ] lead chega ao n8n;
- [ ] tracking é registrado;
- [ ] confirmação funciona;
- [ ] experiência mobile está validada.

---

# 71. Critérios de Aceite — Comunidade

- [ ] proposta está clara;
- [ ] benefícios estão claros;
- [ ] entregáveis estão apresentados;
- [ ] preço está correto;
- [ ] CTA funciona;
- [ ] checkout/assinatura está integrado, quando aplicável.

---

# 72. Critérios de Aceite — Serviços

- [ ] posicionamento B2B está claro;
- [ ] serviços estão organizados;
- [ ] capacidade técnica está demonstrada;
- [ ] processo está explicado;
- [ ] cases são apresentados quando disponíveis;
- [ ] formulário de diagnóstico funciona;
- [ ] lead chega ao CRM/n8n.

---

# 73. Critérios de Aceite — Blog

- [ ] artigos possuem URLs próprias;
- [ ] metadata é configurada;
- [ ] imagens possuem otimização;
- [ ] artigos relacionados funcionam;
- [ ] sitemap inclui artigos;
- [ ] conteúdo é indexável.

---

# 74. Critérios de Aceite — Performance

O projeto deverá ser submetido a testes utilizando ferramentas de auditoria de performance.

Deverão ser avaliados:

- LCP;
- CLS;
- INP;
- peso de JavaScript;
- tamanho de imagens;
- carregamento de fontes;
- cache;
- renderização.

Metas numéricas específicas deverão ser definidas na etapa de especificação técnica/performance.

---

# 75. Critérios de Aceite — Segurança

- [ ] secrets fora do frontend;
- [ ] endpoints protegidos;
- [ ] validação server-side;
- [ ] proteção contra spam;
- [ ] HTTPS;
- [ ] headers apropriados;
- [ ] webhooks protegidos.

---

# 76. Critérios de Aceite — LGPD

- [ ] política de privacidade publicada;
- [ ] finalidade de coleta definida;
- [ ] consentimentos implementados quando necessários;
- [ ] terceiros/integradores identificados;
- [ ] fluxo de dados documentado.

---

# 77. Métricas do Produto

O site deverá permitir acompanhamento de:

## Aquisição

- sessões;
- usuários;
- origem;
- campanhas;
- páginas de entrada.

## Engajamento

- tempo de interação;
- scroll;
- páginas por sessão;
- visualização de serviços;
- visualização de eventos.

## Conversão

- leads;
- inscrições;
- checkout iniciado;
- compras;
- comunidade;
- diagnósticos.

## Negócio

- CAC;
- CPL;
- taxa de conversão;
- receita por canal;
- ROAS;
- taxa de conversão evento → comunidade;
- taxa de conversão comunidade → assessoria.

As métricas financeiras finais deverão ser definidas de acordo com a operação real.

---

# 78. Funil Mensurável

A implementação deverá permitir medir:

```text
VISITANTE
   ↓
CTA
   ↓
EVENTO
   ↓
PAGAMENTO
   ↓
PARTICIPAÇÃO
   ↓
COMUNIDADE
   ↓
ASSESSORIA
```

Isso transforma o site em uma infraestrutura mensurável de Growth, e não apenas em uma presença institucional.

---

# 79. Requisitos de Conteúdo

Antes da implementação final, deverão existir:

- copy da Home;
- copy da Comunidade;
- copy dos Serviços;
- copy do Evento;
- textos institucionais;
- FAQs;
- política de privacidade;
- termos;
- dados de contato;
- informações empresariais.

---

# 80. Conteúdos ainda não definidos

O documento-base não fornece:

- identidade visual;
- logo final;
- paleta;
- tipografia;
- tom de voz detalhado;
- endereço;
- telefone;
- e-mail;
- redes sociais;
- dados empresariais;
- nomes de palestrantes;
- datas de eventos;
- gateway específico;
- CRM definitivo;
- provedor WhatsApp;
- CMS;
- ferramenta de error tracking.

Esses itens devem permanecer como **pendências de definição**, não como decisões técnicas inventadas.

---

# 81. Dependências Externas

O projeto depende de:

- CRM;
- n8n;
- gateway de pagamento;
- WhatsApp API;
- domínio;
- contas de Analytics;
- Meta;
- eventual CMS;
- conteúdo;
- identidade visual.

---

# 82. Riscos

## Risco 1 — Posicionamento excessivamente amplo

A N8FLOW pode parecer uma empresa que oferece muitos serviços sem uma especialidade clara.

**Mitigação:** comunicar o conceito de máquina de vendas e apresentar tecnologia como meio.

## Risco 2 — Confusão entre públicos

Corretor e empresa possuem necessidades diferentes.

**Mitigação:** criar caminhos distintos de conversão.

## Risco 3 — Dependência de integrações

Falhas no n8n, CRM ou gateway podem impactar conversões.

**Mitigação:** camada de API e tratamento de erros.

## Risco 4 — Ausência de prova social

Cases e depoimentos ainda podem não existir.

**Mitigação:** não inventar resultados; construir autoridade por conteúdo, metodologia e demonstrações técnicas.

## Risco 5 — Excesso de tecnologia

Mostrar stack demais pode afastar o público não técnico.

**Mitigação:** comunicar primeiro o resultado de negócio e depois a tecnologia.

---

# 83. Princípios de Produto

O desenvolvimento deverá seguir estes princípios:

### 1. Negócio antes da tecnologia

A tecnologia existe para viabilizar a estratégia.

### 2. Resultado antes da ferramenta

Não vender “n8n”, “React” ou “IA” isoladamente.

### 3. Clareza antes de complexidade

O visitante precisa entender a proposta rapidamente.

### 4. Conversão sem sacrificar autoridade

O site deve vender sem parecer uma landing page agressiva.

### 5. Mensuração desde o início

Toda conversão importante deve ser rastreável.

### 6. Mobile first

Grande parte do tráfego esperado poderá vir de dispositivos móveis.

### 7. Arquitetura preparada para crescimento

Novos eventos, serviços, artigos e cases devem poder ser adicionados sem refatoração estrutural significativa.

---

# 84. Escopo MVP

A primeira versão recomendada contém:

```text
Home
Comunidade
Serviços
Eventos
Página do evento atual
Cases
Blog
Sobre
Contato
Privacidade
Termos
```

Além de:

- formulário de evento;
- integração n8n;
- integração de pagamento, se disponível;
- tracking;
- SEO;
- analytics;
- responsividade;
- performance;
- Vercel.

---

# 85. Pós-MVP

Possíveis evoluções:

- área do membro;
- portal da comunidade;
- dashboard;
- biblioteca de templates;
- automação avançada;
- personalização de conteúdo;
- CRM integrado diretamente;
- múltiplos eventos;
- sistema de inscrição completo;
- segmentação avançada;
- experimentação A/B;
- personalização por origem de campanha.

Esses itens não fazem parte do MVP.

---

# 86. Roadmap de Desenvolvimento

## Fase 1 — Estratégia

- validar PRD;
- validar ICP;
- validar posicionamento;
- validar arquitetura.

## Fase 2 — UX

- sitemap;
- wireframes;
- jornada;
- arquitetura de conversão.

## Fase 3 — UI

- identidade;
- Design System;
- componentes;
- páginas.

## Fase 4 — Conteúdo

- copy;
- SEO;
- blog;
- cases.

## Fase 5 — Engenharia

- Next.js;
- componentes;
- formulários;
- APIs;
- integrações.

## Fase 6 — Analytics

- GA4;
- GTM;
- Meta;
- eventos;
- conversões.

## Fase 7 — QA

- funcional;
- responsivo;
- acessibilidade;
- performance;
- SEO;
- segurança.

## Fase 8 — Deploy

- Vercel;
- domínio;
- DNS;
- produção;
- monitoramento.

---

# 87. Definition of Done

O site somente será considerado pronto quando:

- [ ] todas as páginas MVP estiverem implementadas;
- [ ] conteúdo estiver revisado;
- [ ] CTAs estiverem funcionando;
- [ ] formulários estiverem funcionando;
- [ ] n8n estiver integrado;
- [ ] pagamentos estiverem integrados quando aplicável;
- [ ] CRM estiver recebendo os leads;
- [ ] tracking estiver validado;
- [ ] SEO técnico estiver implementado;
- [ ] sitemap estiver funcionando;
- [ ] robots estiver funcionando;
- [ ] Open Graph estiver funcionando;
- [ ] mobile estiver validado;
- [ ] acessibilidade tiver sido auditada;
- [ ] performance tiver sido auditada;
- [ ] segurança tiver sido revisada;
- [ ] LGPD estiver documentada;
- [ ] ambiente de produção estiver configurado;
- [ ] domínio estiver funcionando;
- [ ] monitoramento estiver ativo.

---

# 88. Decisões Pendentes

As seguintes decisões deverão ser tomadas antes da implementação final:

| Tema                          | Status    |
| ----------------------------- | --------- |
| Identidade visual             | A definir |
| Logo final                    | A definir |
| Paleta                        | A definir |
| Tipografia                    | A definir |
| Tom de voz                    | A definir |
| Data do primeiro evento       | A definir |
| Local do evento               | A definir |
| Gateway de pagamento          | A definir |
| CRM                           | A definir |
| WhatsApp API                  | A definir |
| CMS                           | A definir |
| Error tracking                | A definir |
| Domínio definitivo            | A definir |
| Dados empresariais            | A definir |
| Política de preços definitiva | A definir |
| Copy final                    | A definir |
| Cases                         | A definir |
| Depoimentos                   | A definir |

---

# 89. Resumo da Arquitetura do Produto

O produto pode ser resumido da seguinte maneira:

```text
                         N8FLOW
                            │
              ┌─────────────┴─────────────┐
              │                           │
         AQUISIÇÃO                    AUTORIDADE
              │                           │
          Eventos                       Blog
              │                        Cases
              │                           │
              └─────────────┬─────────────┘
                            │
                            ▼
                       COMUNIDADE
                            │
                            ▼
                     ASSESSORIA B2B
                            │
                            ▼
                  PROJETOS HIGH TICKET
```

E tecnicamente:

```text
                       VISITANTE
                           │
                           ▼
                     Next.js / Vercel
                           │
              ┌────────────┼────────────┐
              │            │            │
           Analytics     Forms        Content
              │            │            │
              │            ▼            │
              │       API Next.js       │
              │            │            │
              │            ▼            │
              │           n8n           │
              │            │            │
              │      ┌─────┼─────┐      │
              │      ▼     ▼     ▼      │
              │    CRM   Pagamento WhatsApp
              │
              └──────────────► Growth Data
```

---

# 90. Visão Final do Produto

O site da N8FLOW deve ser concebido como o **primeiro exemplo prático daquilo que a empresa vende**.

A empresa afirma trabalhar com Growth, automação, IA, CRM, dados, tráfego e tecnologia. O site precisa demonstrar essas capacidades por meio de:

- experiência de conversão;
- captura estruturada de leads;
- tracking;
- automação;
- integração com CRM;
- comunicação;
- conteúdo;
- SEO;
- performance;
- mensuração.

O resultado esperado não é apenas:

> “um site bonito da N8FLOW”.

O produto final deve ser:

> **uma infraestrutura digital de aquisição, qualificação e conversão que materializa o conceito de máquina de vendas da N8FLOW.**

Esse princípio deverá orientar as próximas especificações e todas as decisões de UX, UI, arquitetura e desenvolvimento.
