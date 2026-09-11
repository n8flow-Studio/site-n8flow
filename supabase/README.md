# Supabase — Dois Ambientes (ADR-0008)

Desenvolvimento local com Docker + Supabase CLI. Produção com projeto remoto.
Não ativar captação em produção antes dos testes SQL, concorrência, privacidade e configuração segura.

---

## Desenvolvimento local (Docker)

### Pré-requisitos
- Docker Desktop rodando
- `npm run db:start` (executa `supabase start` via CLI instalado como devDependency)

### Subir o banco local

```bash
npm run db:start
```

O CLI aplica automaticamente todas as migrações em `migrations/` e imprime as URLs
e chaves locais. Copie-as para seu `.env.local`:

```bash
# Saída de `supabase status` — valores de exemplo:
# API URL:       http://127.0.0.1:54321
# service_role key: eyJ...

LEAD_CAPTURE_ENABLED=true
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_SECRET_KEY=<service_role key impressa por supabase status>
LEAD_RATE_LIMIT_SECRET=<segredo aleatorio de 32+ caracteres>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Verificar e testar

```bash
npm run db:status                             # exibe URLs e chaves do banco local
# Executar tests/lead_capture.sql no SQL Editor local (Studio: http://127.0.0.1:54323)
npm run dev                                   # Next.js apontando para Supabase local
```

### Parar o banco local

```bash
npm run db:stop
```

### Recriar do zero

```bash
npm run db:reset    # apaga e recria aplicando todas as migrações
```

---

## Produção (projeto Supabase remoto)

### Linkar o projeto (uma vez por máquina)

```bash
npx supabase link --project-ref <ID-DO-PROJETO>
```

O ID está na URL do dashboard: `https://supabase.com/dashboard/project/<ID>`.

### Aplicar migrações pendentes em produção

```bash
npm run db:push
```

> [!CAUTION]
> `db:push` aplica migrações irreversíveis no banco de produção.
> Faça backup e valide em local/staging antes. Não executar sem autorização explícita.

### Variáveis de ambiente em produção (Vercel)

Configure no dashboard da Vercel — **nunca no Git**:

```
LEAD_CAPTURE_ENABLED=true
SUPABASE_URL=https://<projeto>.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
LEAD_RATE_LIMIT_SECRET=<segredo aleatorio de 32+ caracteres>
NEXT_PUBLIC_SITE_URL=https://n8flow.com.br
```

---

## Migração atual

**Arquivo:** `migrations/20260907000100_lead_capture.sql`

Schema `n8flow_private` com:
- Tabela `leads` — payload JSONB normalizado, idempotency key única, RLS habilitado
- Tabela `lead_rate_limits` — contadores transitórios por IP (HMAC)
- RPC `n8flow_capture_lead` — ingestão atômica e idempotente
- RPC `n8flow_check_lead_rate` — controle de rate limit

Apenas `service_role` pode executar as RPCs. Nenhum acesso direto ao schema privado.
Não existem perfis, autenticação ou painel nesta migração.

---

## Testes SQL

Executar `tests/lead_capture.sql` no SQL Editor (local ou sandbox isolado) após a migração.
Os fixtures são sintéticos e sofrem rollback. Qualquer exceção falha o teste.

---

## Concorrência obrigatória antes de go-live

Em sandbox, disparar pelo menos duas chamadas simultâneas com a mesma chave e payloads
diferentes em conexões distintas. Os testes unitários de HTTP não provam o comportamento
transacional do PostgreSQL. O teste SQL sequencial também não substitui esse ensaio.

---

## Rollback e segurança

- Desativar captação por configuração (`LEAD_CAPTURE_ENABLED=false`) em incidente
- Não apagar schema/tabelas nem restaurar mock/n8n
- Rollback de aplicação não pode perder leads já gravados
- `SUPABASE_SECRET_KEY` permanece exclusivamente na ingestão; nunca no painel ou cliente

---

## Fontes técnicas

- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Funções e permissões](https://supabase.com/docs/guides/database/functions)
- [Secret keys](https://supabase.com/docs/guides/getting-started/api-keys)
- [Headers Vercel](https://vercel.com/docs/headers/request-headers)
