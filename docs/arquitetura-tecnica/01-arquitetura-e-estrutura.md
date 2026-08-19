# 1. Arquitetura e estrutura

## 1.1 Visão lógica

```text
Visitante
  │
  ▼
Next.js na Vercel
  ├── páginas e conteúdo (Server Components)
  ├── ilhas interativas (Client Components)
  ├── Route Handlers / Server Actions
  ├── validação, rate limit e idempotência
  └── adapters server-side
          │
          ├── n8n ── Bolten CRM ── WhatsApp Oficial
          ├── gateway de pagamento (pendente)
          ├── analytics
          └── error tracking
```

O navegador não acessa n8n, Bolten ou gateway com credenciais privadas. O Next.js atua como fronteira confiável: valida, normaliza, aplica controles e encaminha eventos.

## 1.2 Princípios

- **Server-first:** Server Components por padrão; JavaScript cliente somente quando há interação real.
- **Static-first:** conteúdo institucional e editorial pré-renderizado quando possível.
- **BFF mínimo:** a camada Next.js protege contratos e segredos, sem replicar lógica operacional do n8n/CRM.
- **Integrações substituíveis:** gateway, conteúdo e observabilidade atrás de interfaces.
- **Progressive enhancement:** leitura e navegação não dependem de animação; formulários mantêm feedback robusto.
- **Falha explícita:** nunca confirmar inscrição, lead ou pagamento antes da resposta confiável correspondente.
- **Sem conteúdo inventado:** módulos sem dados reais são omitidos ou marcados apenas em ambiente de preview.

## 1.3 Estrutura recomendada

```text
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── eventos/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── comunidade/page.tsx
│   │   ├── servicos/[slug]/page.tsx
│   │   ├── cases/[slug]/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── sobre/page.tsx
│   │   └── contato/page.tsx
│   ├── api/
│   │   ├── leads/evento/route.ts
│   │   ├── leads/diagnostico/route.ts
│   │   ├── contato/route.ts
│   │   └── webhooks/pagamentos/route.ts
│   ├── layout.tsx
│   ├── error.tsx
│   ├── global-error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   └── marketing/
├── content/
│   ├── blog/
│   ├── cases/
│   ├── eventos/
│   ├── pages/
│   └── servicos/
├── server/
│   ├── integrations/
│   │   ├── n8n/
│   │   ├── payments/
│   │   └── observability/
│   ├── rate-limit/
│   └── idempotency/
├── lib/
│   ├── analytics/
│   ├── content/
│   ├── env/
│   ├── seo/
│   ├── validation/
│   └── utils/
├── config/
├── styles/
│   ├── globals.css
│   └── tokens.css
└── types/
tests/
├── unit/
├── integration/
├── e2e/
└── accessibility/
```

Pastas podem ser ajustadas à versão instalada do framework, mas as fronteiras `app`, `content`, `components`, `server` e `lib` devem permanecer claras.

## 1.4 Server e Client Components

Server Components: páginas, layouts, leitura de conteúdo, SEO, cards estáticos e composição de seções. Client Components: campos controlados quando necessários, menus, dialogs, accordions, tabs, toasts, tracking de interação e animações funcionais.

Mover o menor limite possível para `'use client'`. Não importar módulos de `server/` em componentes cliente. Adotar proteção de importação server-only nos adapters e validadores de ambiente.

## 1.5 Convenções

- arquivos: `kebab-case.ts`; componentes exportados em `PascalCase`;
- funções/variáveis: `camelCase`; tipos: `PascalCase`;
- schemas: `eventLeadSchema`; tipo inferido: `EventLeadInput`;
- eventos de domínio: passado ou fato (`lead.submitted`, `payment.confirmed`);
- variáveis públicas somente com prefixo exigido pelo framework; demais são server-only;
- imports por alias `@/`; evitar barrels que criem ciclos ou escondam fronteiras.

## 1.6 Dependências

Escolher versões estáveis e compatíveis no momento do scaffold, fixadas no lockfile. Dependências candidatas devem provar necessidade. Categorias previstas: schema validation, formulários, componentes headless acessíveis, testes, MDX e observabilidade. Não adotar biblioteca apenas para uma função trivial.

## 1.7 ADR

ADR obrigatório para: troca de CMS/fonte de conteúdo, fornecedor de pagamento, banco persistente, autenticação de área restrita, mudança de host, alteração da fronteira n8n/Bolten ou adoção de nova biblioteca estrutural.

