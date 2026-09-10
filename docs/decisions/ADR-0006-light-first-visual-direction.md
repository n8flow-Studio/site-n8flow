# ADR-0006 — Direção visual light-first

**Status:** aprovada  
**Data:** 2026-08-28  
**Responsáveis:** equipe N8FLOW

## Contexto

A primeira implementação pública adotou dark-first, glows, gradientes, pills e grids repetitivos de cards. A direção aprovada posteriormente reposiciona a presença digital como uma identidade institucional B2B de tecnologia, editorial, sofisticada e assimétrica.

## Decisão

Adotar light-first como tema principal. A linguagem Engineering Growth será expressa por diagramas, linhas, dados, conexões e arquitetura. `#00F5A0` e `#6E44FF` permanecem assinaturas pontuais. Gradientes, glows, pills e cards repetitivos deixam de ser recursos estruturais.

## Consequências

- Tokens semânticos passam a usar superfícies claras como padrão.
- Componentes mantêm acessibilidade, responsividade e redução de movimento.
- A mudança é visual; App Router, Server Components, conteúdo e integrações não mudam.
- Tema escuro futuro deverá ser completo e aprovado, não uma inversão automática.

## Migração ou rollback

O commit anterior à reformulação permanece como referência visual. Rollback pode restaurar tokens e composições sem alterar contratos técnicos ou conteúdo.

## Referências

- Decisão explícita do responsável em 2026-08-27.
- `docs/design-system/README.md`
- `docs/ux/ux-arquitetura-informacao.md`
