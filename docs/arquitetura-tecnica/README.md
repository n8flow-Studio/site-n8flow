# N8FLOW — Arquitetura Técnica v1.0

> Contrato técnico para implementação do site institucional `n8flow.com.br` por humanos e agentes de IA.

**Status:** aprovado para iniciar a fundação; integrações condicionadas às pendências  
**Stack confirmada:** Next.js + React + TypeScript + Tailwind CSS + Vercel  
**Persistência confirmada:** Supabase/PostgreSQL para leads e CRM interno próprio (ADR-0008)

**Atualizado em:** 2026-09-07

Bolten é oferta white-label para clientes, sem integração ao site. Os módulos
históricos devem ser lidos com as substituições do ADR-0008 e do módulo 8.
Arquitetura aprovada não significa implementação concluída; consultar o relatório
de status antes de iniciar trabalho. Autenticação ainda requer decisão específica.

## Objetivo

Definir limites, padrões e critérios técnicos para que o site seja uma infraestrutura de aquisição, conteúdo e conversão, sem acoplar o frontend aos sistemas operacionais. Este documento complementa o PRD, UX/IA e [Design System](../design-system/README.md).

## Classificação das decisões

- **Confirmada:** já sustentada pelos documentos do projeto ou decisão explícita.
- **Decisão técnica v1.0:** escolha desta arquitetura, reversível por ADR.
- **Pendente:** depende de decisão comercial, fornecedor, credencial ou conteúdo.

## Decisões executivas

| Tema                | Decisão                                                                   | Status                                         |
| ------------------- | ------------------------------------------------------------------------- | ---------------------------------------------- |
| Renderização        | App Router; Server Components por padrão                                  | Confirmada                                     |
| Hospedagem          | Vercel                                                                    | Confirmada                                     |
| Conteúdo inicial    | MDX/arquivos versionados no Git atrás de uma camada de repositório        | Decisão técnica v1.0                           |
| CMS headless        | adiar até existir necessidade de edição sem deploy                        | Decisão técnica v1.0                           |
| API pública do site | Route Handlers server-side, apenas para casos necessários                 | Confirmada                                     |
| Captação            | API server-side → adapter → Supabase/PostgreSQL                            | Confirmada pelo ADR-0008                        |
| CRM interno         | painel próprio; dois administradores com acesso global                    | Confirmada pelo ADR-0008                        |
| Comercial futuro    | acesso restrito por responsável                                           | Confirmada; implementação futura                |
| Autenticação        | provedor/método pendentes; sem cadastro público                            | Pendente                                       |
| Bolten/n8n/WhatsApp  | fora do fluxo interno do site                                             | Bolten é oferta para clientes                   |
| Gateway             | usar adapter; fornecedor ainda não congelado                              | Pendente                                       |
| Validação           | schemas compartilhados + revalidação no servidor                          | Decisão técnica v1.0                           |
| Observabilidade     | logs estruturados + Vercel; Sentry recomendado antes do go-live           | Decisão técnica v1.0                           |
| Tema                | light-first                                                               | Confirmada por decisão explícita em 2026-08-28 |

## Mapa

1. [Arquitetura e estrutura](./01-arquitetura-e-estrutura.md)
2. [Conteúdo, dados e cache](./02-conteudo-dados-e-cache.md)
3. [APIs e integrações](./03-apis-e-integracoes.md)
4. [Segurança e privacidade](./04-seguranca-e-privacidade.md)
5. [SEO, analytics e observabilidade](./05-seo-analytics-observabilidade.md)
6. [Testes, CI/CD e ambientes](./06-testes-cicd-e-ambientes.md)
7. [Roadmap, aceite e pendências](./07-roadmap-aceite-e-pendencias.md)
8. [CRM interno, persistência e acessos](./08-crm-interno-e-acessos.md)

Estado verificado: [auditoria de 2026-09-07](../status/2026-09-07-implementacao.md).

## Regras para agentes

1. Ler este índice e o Design System antes de gerar código.
2. Não escolher gateway, CMS, copy, oferta ou dados empresariais pendentes por inferência.
3. Não expor segredos em Client Components, bundles, logs, analytics ou HTML.
4. Preferir implementação simples e substituível; integração externa sempre atrás de interface/adapter.
5. Registrar mudança arquitetural em `docs/decisions/ADR-NNNN-titulo.md`.

## Fontes e precedência

Fontes: PRD e Especificação de UX/IA em `sources/`, mais o Design System v1.0. Em conflito: decisão explícita mais recente → Arquitetura/ADR → UX/IA → PRD → recomendação local.
