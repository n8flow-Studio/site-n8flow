# 7. Roadmap, aceite e pendências

## 7.1 O que pode começar agora

- scaffold Next.js/TypeScript/Tailwind;
- tokens, fontes e componentes do Design System;
- layout global, Header, Mobile Nav e Footer com slots aprovados;
- repositório MDX e schemas editoriais;
- templates de Home, serviços, eventos, blog e páginas institucionais;
- formulários com adapters simulados;
- SEO base, testes, CI e preview deployments;
- contrato genérico de n8n e gateway sem credenciais/provider concreto.

## 7.2 Fases

### Fase 0 — fundação

Scaffold, lockfile, aliases, env validation, tokens, testes, CI, preview, headers básicos e estrutura de conteúdo.

### Fase 1 — experiência pública

Layout, navegação, Home, serviços, eventos, comunidade, blog, cases, sobre/contato; conteúdo provisório explicitamente marcado apenas em preview.

### Fase 2 — conversão

Formulários, validação, antiabuso, n8n sandbox, Bolten, estados de falha e analytics tipado.

### Fase 3 — pagamento

ADR do gateway, adapter concreto, checkout, assinatura/webhook, idempotência e testes de sandbox.

### Fase 4 — lançamento

Copy real, assets, conteúdo, privacidade/termos, SEO, analytics/consentimento, Sentry, performance, segurança e smoke test produtivo.

## 7.3 Critérios de aceite técnico

- [ ] App Router e Server Components por padrão.
- [ ] Nenhum segredo ou módulo server-side no bundle cliente.
- [ ] Conteúdo validado no build por schemas e slugs únicos.
- [ ] Drafts ausentes de produção, sitemap e feeds públicos.
- [ ] Formulários revalidados no servidor, antiabuso e idempotentes.
- [ ] Falhas externas não apagam dados nem geram confirmação falsa.
- [ ] n8n recebe payload versionado e autenticado.
- [ ] Gateway implementa interface e webhook verificado.
- [ ] PII ausente de logs, URLs e analytics.
- [ ] SEO, OG, canonical, robots e sitemap válidos.
- [ ] Core Web Vitals monitorados e terceiros controlados.
- [ ] Teclado, foco, contraste, reflow e reduced motion aprovados.
- [ ] Unit, integration e E2E críticos passam no CI.
- [ ] Preview é noindex e produção usa domínio canônico.
- [ ] Rollback e responsáveis por alertas estão definidos.

## 7.4 Pendências bloqueadoras por etapa

| Pendência | Bloqueia fundação | Bloqueia integração | Bloqueia go-live |
|---|:---:|:---:|:---:|
| arquivos finais da logo | não | não | sim |
| copy/conteúdo aprovado | não | não | sim |
| contrato/credencial n8n e Bolten | não | sim | sim |
| gateway e regras comerciais | não | pagamento | sim, se checkout no lançamento |
| oferta da comunidade | não | assinatura | sim, se publicada |
| campos finais do diagnóstico | não | formulário real | sim |
| contatos e redes | não | não | sim para publicação correspondente |
| privacidade, termos e consentimento | não | produção | sim |
| IDs/consentimento de analytics | não | analytics | sim |
| owner de incidentes/alertas | não | não | sim |

## 7.5 ADRs iniciais

Criar quando a decisão ocorrer:

- `ADR-0001-content-source-mdx.md` — confirmar ou substituir MDX;
- `ADR-0002-payment-gateway.md` — fornecedor e checkout;
- `ADR-0003-observability.md` — Sentry/plano/configuração;
- `ADR-0004-antibot.md` — limiar e fornecedor;
- `ADR-0005-operational-persistence.md` — somente se fila/idempotência exigir banco.

## 7.6 Checklist antes do scaffold

- [ ] confirmar repositório e estratégia de branches;
- [ ] escolher gerenciador de pacotes e fixá-lo;
- [ ] selecionar versões estáveis compatíveis;
- [ ] definir Node/runtime suportado;
- [ ] configurar Vercel e domínio apenas com autorização;
- [ ] criar `.env.example`, CI e proteção contra segredos;
- [ ] transformar tokens do Design System em `tokens.css`;
- [ ] registrar qualquer desvio por ADR.

