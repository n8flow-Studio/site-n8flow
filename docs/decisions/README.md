# Registros de decisão arquitetural (ADRs)

Nomenclatura: `ADR-NNNN-titulo-em-kebab-case.md`.

## Decisões vigentes

- [ADR-0001 — conteúdo no Git/MDX](./ADR-0001-content-source-mdx.md).
- [ADR-0006 — light-first](./ADR-0006-light-first-visual-direction.md).
- [ADR-0007 — assessoria B2B multissetorial](./ADR-0007-assessoria-b2b-multissetorial.md).
- [ADR-0008 — Supabase e CRM interno](./ADR-0008-supabase-crm-interno.md).

ADR-0008 substitui a antiga previsão ADR-0005 de persistência operacional; não há
ADR-0005 criado. Autenticação exige decisão complementar antes da implementação.

### Modelo de registro

```md
# ADR-NNNN — Título

**Status:** proposta | aprovada | substituída | rejeitada
**Data:** AAAA-MM-DD
**Responsáveis:**

## Contexto
## Forças e restrições
## Alternativas consideradas
## Decisão
## Consequências
## Migração ou rollback
## Referências
```

ADRs iniciais previstos: fonte de conteúdo/MDX, gateway, observabilidade, anti-bot e persistência operacional se necessária.
