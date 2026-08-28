# ADR-0001 — Fonte de conteúdo: Markdown/MDX no Git

**Status:** aprovada  
**Data:** 2026-08-27  
**Responsáveis:** equipe N8FLOW

## Contexto

O site institucional precisa de uma fonte de conteúdo para eventos, artigos, cases e serviços. O escopo inicial é operado principalmente por agentes de IA no Antigravity IDE, com revisão por pull request. Não existe ainda requisito confirmado de edição de conteúdo sem deploy por um editor não técnico.

## Forças e restrições

- Fluxo de desenvolvimento centrado em agentes com revisão por diff (pull request).
- Deploy reproduzível a partir do lockfile sem dependência de serviço externo.
- Ausência de editor não técnico identificado no escopo MVP.
- Necessidade de validação editorial no build (frontmatter obrigatório, slugs únicos).
- Necessidade de migração futura para CMS headless sem reescrever as páginas.

## Alternativas consideradas

| Alternativa | Motivo de descarte |
|---|---|
| CMS headless (Sanity, Contentful, Hygraph) | Sem requisito confirmado de edição sem deploy; operação extra; custo. |
| Banco de dados (Postgres, SQLite) | Complexidade desproporcional; sem necessidade de persistência operacional para conteúdo editorial. |
| CMS Git-based (Decap, Keystatic) | Adiciona interface sem necessidade imediata; pode ser adotado por ADR futuro se surgir editor não técnico. |

## Decisão

Usar **Markdown/MDX versionado no Git** como fonte de conteúdo da versão 1.

A aplicação acessa conteúdo exclusivamente por meio da interface `ContentRepository` definida em `src/lib/content/repository.ts`. A implementação concreta (`MdxContentRepository`) usa o sistema de arquivos em build-time. Toda mudança de implementação concreta (ex.: migrar para CMS) exige apenas trocar o adapter, sem alterar as páginas.

Todo frontmatter é validado por schema Zod no build. Falha de validação interrompe o CI com mensagem de campo e caminho.

## Consequências

- **Positivas:** fluxo simples, reproduzível, sem dependência externa, validação forte em build.
- **Negativas:** publicar conteúdo exige commit + deploy; não há interface visual de edição.
- **Neutras:** CMS headless permanece como opção futura via ADR de substituição.

## Migração ou rollback

Se surgir necessidade de edição sem deploy: criar `ADR-0001a-cms-headless.md` com fornecedor escolhido, implementar novo adapter `CmsContentRepository` respeitando a interface `ContentRepository`, remover `MdxContentRepository` da produção e manter o schema de validação.

## Referências

- `docs/arquitetura-tecnica/02-conteudo-dados-e-cache.md` — seções 2.1 e 2.2
- `docs/arquitetura-tecnica/07-roadmap-aceite-e-pendencias.md` — seção 7.5
- `docs/arquitetura-tecnica/README.md` — decisão "Conteúdo inicial"
