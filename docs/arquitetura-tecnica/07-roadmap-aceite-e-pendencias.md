# 7. Roadmap, aceite e pendências

## Atualização vigente — 2026-09-07

Este roadmap é orientado pelo ADR-0008. Bolten não será integrado ao site; n8n e
WhatsApp não bloqueiam lançamento. As listas v1.0 abaixo são referência histórica
quando conflitarem com esta atualização. Status comprovado está no
[relatório de implementação](../status/2026-09-07-implementacao.md).

### Próxima fase A — captação persistente

**Avanço local em 2026-09-07:** adapter Supabase/RPC, migração de ingestão,
validação, falha segura, limites de corpo, timeout e atribuição implementados.
Build/typecheck recuperados pela regeneração oficial de tipos do Next.js.
Ainda pendentes: aplicar/testar SQL e concorrência em sandbox, configurar ambiente,
aprovar retenção/privacidade e validar fluxo real. Não marcar fase concluída nem
ativar em produção somente com testes HTTP simulados. Ver `supabase/README.md`.

Implementar migração/schema Supabase, adapter server-side, idempotência atômica e
antiabuso entre instâncias. Corrigir submissão sem JavaScript, limites de corpo,
timeout, telefone e atribuição. Substituir seleção n8n/mock em produção por
persistência configurada com falha segura. Testar concorrência e indisponibilidade.

Aceite: lead salvo uma vez, sucesso somente após commit, nenhuma exposição pública
dos registros e consulta operacional validada com dados sintéticos.

### Próxima fase B — acesso administrativo

Primeiro aprovar provedor/método de autenticação e registrar decisão complementar.
Implementar duas contas individuais, sem cadastro público, autorização server-side
e RLS. Ambos os sócios veem todos os leads; preparar e testar restrição por
responsável para futuros comerciais, sem desenvolver gestão completa da equipe.

Aceite: login/logout/revogação e bloqueio de acesso indevido testados no servidor e
no banco. Apenas ocultar navegação não atende o requisito.

### Próxima fase C — consulta e acompanhamento

Entregar lista paginada e detalhe privado. Validar antes de implementar filtros,
etapas comerciais, notas, histórico, próxima ação e atribuição. Proposta inicial
“Sem responsável” não deve ser tratada como regra aprovada por inferência.

### Próxima fase D — lançamento e operação

Resolver quality gates, conteúdo condicionado, privacidade, SEO/preview,
acessibilidade e performance. Configurar ambientes, backup/restauração e alertas;
executar smoke test autorizado em produção. Deploy e migrações externas exigem
autorização, não estão executados por atualização documental.

### Fora do escopo atual

Integração Bolten, WhatsApp automatizado, CRM multitenant, pagamentos, contratos e
gestão completa da equipe. O SaaS white-label é oferta separada para clientes.

### Pendências reais de lançamento

- Projeto/plano/região Supabase e configuração segura por ambiente.
- Persistência, migrações e controles ainda não implementados.
- Autenticação e contas dos dois administradores para liberar o painel.
- Definição comercial das funções de acompanhamento antes de implementá-las.
- Política de privacidade, retenção, exclusão e responsáveis operacionais.
- QA técnico/visual e configuração de produção verificados.
- Analytics/consentimento dependem de decisão; não inserir terceiros automaticamente.

Assets oficiais já existem em `public/brand`; não são mais uma pendência de entrega
de arquivos. MDX continua requerido pelo ADR-0001, mas o repository atual é em
memória. A lacuna deve ser resolvida antes de publicar conteúdo editorial dinâmico.

## 7.1 Referência histórica v1.0 — não é fila de execução vigente

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

Layout, navegação, Home, serviços, método, blog, cases, sobre/contato; conteúdo provisório explicitamente marcado apenas em preview. Comunidade e Eventos estão suspensos pelo ADR-0007.

### Fase 2 — conversão (registro histórico, substituído pelas fases A–C)

Formulários, validação, antiabuso, n8n sandbox, Bolten, estados de falha e analytics tipado.

**Implementado parcialmente em 2026-09-06:** formulário de diagnóstico, validação
cliente/servidor, endpoint, honeypot, controles best-effort de rate limit e
idempotência, adapter mock, adapter n8n configurável, estados de interface e
contrato tipado de analytics. O adapter n8n deverá ser substituído por persistência
Supabase; não ativar Bolten. Analytics externo depende de IDs e consentimento.

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
- [ ] Supabase persiste leads com idempotência atômica e autorização testada.
- [ ] Painel permite acesso global aos dois administradores; restrição futura por responsável testada.
- [ ] PII ausente de logs, URLs e analytics.
- [ ] SEO, OG, canonical, robots e sitemap válidos.
- [ ] Core Web Vitals monitorados e terceiros controlados.
- [ ] Teclado, foco, contraste, reflow e reduced motion aprovados.
- [ ] Unit, integration e E2E críticos passam no CI.
- [ ] Preview é noindex e produção usa domínio canônico.
- [ ] Rollback e responsáveis por alertas estão definidos.

## 7.4 Pendências bloqueadoras por etapa

| Pendência                              | Bloqueia fundação | Bloqueia integração |          Bloqueia go-live          |
| -------------------------------------- | :---------------: | :-----------------: | :--------------------------------: |
| arquivos finais da logo (já presentes)  |        não        |         não         |                não                 |
| copy/conteúdo aprovado                 |        não        |         não         |                sim                 |
| configuração e persistência Supabase    |        não        |         sim         |                sim                 |
| autenticação e autorização do painel    |        não        |        painel       |       sim para liberar painel      |
| gateway e regras comerciais            |        não        |      pagamento      |   sim, se checkout no lançamento   |
| eventual retorno de comunidade/eventos |        não        |   nova integração   |         sim, se publicados         |
| campos finais do diagnóstico           |        não        |   formulário real   |                sim                 |
| contatos e redes                       |        não        |         não         | sim para publicação correspondente |
| privacidade, termos e consentimento    |        não        |      produção       |                sim                 |
| IDs/consentimento de analytics         |        não        |      analytics      |                sim                 |
| owner de incidentes/alertas            |        não        |         não         |                sim                 |

## 7.5 ADRs iniciais

Criar quando a decisão ocorrer:

- `ADR-0001-content-source-mdx.md` — confirmar ou substituir MDX;
- `ADR-0002-payment-gateway.md` — fornecedor e checkout;
- `ADR-0003-observability.md` — Sentry/plano/configuração;
- `ADR-0004-antibot.md` — limiar e fornecedor;
- Persistência operacional decidida pelo `ADR-0008-supabase-crm-interno.md`; não criar ADR-0005 duplicado.

## 7.6 Checklist antes do scaffold

- [ ] confirmar repositório e estratégia de branches;
- [ ] escolher gerenciador de pacotes e fixá-lo;
- [ ] selecionar versões estáveis compatíveis;
- [ ] definir Node/runtime suportado;
- [ ] configurar Vercel e domínio apenas com autorização;
- [ ] criar `.env.example`, CI e proteção contra segredos;
- [ ] transformar tokens do Design System em `tokens.css`;
- [ ] registrar qualquer desvio por ADR.
