# Captação Supabase — fase A

Implementação local do ADR-0008; sem projeto remoto provisionado ou migração aplicada.
Não ativar em produção antes dos testes SQL, concorrência, privacidade e configuração.

## Configuração

1. Criar/selecionar projeto **isolado de homologação**, com plano e região aprovados.
2. Revisar e aplicar `migrations/202609070001_lead_capture.sql` no SQL Editor como
   owner. Não expor `n8flow_private` na Data API.
3. Executar `tests/lead_capture.sql` no mesmo sandbox; os fixtures sofrem rollback.
4. Configurar no ambiente do site: `SUPABASE_URL` (origem HTTPS),
   `SUPABASE_SECRET_KEY` (secret key `sb_secret_`, nunca publishable),
   `LEAD_RATE_LIMIT_SECRET` (segredo aleatório de 32+ caracteres) e
   `NEXT_PUBLIC_SITE_URL` (origem exata deste ambiente). Não enviar segredos por chat
   nem colocar em Git. Habilitar com `LEAD_CAPTURE_ENABLED=true` somente após QA.
5. Testar envio, recibo, falha e retry. Ausência de configuração mantém 503, sem mock
   e sem encaminhamento n8n/Bolten. O frontend precisa de JavaScript; sem ele não
   envia dados e mostra orientação. POST nativo não suportado retorna 415 sem PII na URL.

## Modelo e limites

Schema privado com `leads` (JSON normalizado, IDs, chave de idempotência e data) e
contadores transitórios. RLS habilitado; sem grants para visitante ou usuário
autenticado. Só as duas funções RPC podem ser executadas por `service_role`, sem
acesso direto desse papel ao schema privado. A secret key continua sensível e
privilegiada no projeto: mantê-la apenas na ingestão, nunca no futuro painel.

Não existem perfis, estágios, responsável ou login nesta migração. Isso evita
congelar autenticação e regras comerciais ainda pendentes. A consulta provisória
é pelo SQL Editor do proprietário do projeto; não é o painel administrativo pedido.

Idempotência usa chave única e comparação exata de JSONB normalizado, equivalente
à vinculação de conteúdo sem colisão de fingerprint. Não há dedupe por e-mail.
O recibo fica junto ao lead e não expira separadamente; retenção/exclusão dos leads
precisa de definição antes de aplicar em produção. Não há rotina de purge de leads.
Counters expiram em 10 minutos e são removidos na próxima chamada. Limite inicial
preservado: 5 tentativas/10 minutos; retornos de duplicata também contam.
IP é HMAC no servidor, nunca persistido cru. Vercel usa `x-vercel-forwarded-for`;
fora da Vercel todos compartilham a chave local, sem confiar em headers manipuláveis.
Testar topologia real do proxy antes de lançar.

UTMs normalizadas e caminho público permitido ficam em sessionStorage por aba,
com primeira entrada preservada. Query completa nunca é armazenada. Essa atribuição
deve constar da revisão de privacidade; não há pixel/provider externo adicionado.

## Concorrência obrigatória antes de go-live

Em sandbox, disparar pelo menos duas chamadas simultâneas de captura com a mesma
chave e payload e IDs diferentes, em conexões diferentes. Exigir uma linha e o
mesmo recibo; repetir com payload diferente e exigir conflito. Simular timeout após
commit e repetir com a mesma chave. Os testes unitários de HTTP não provam esse
comportamento do PostgreSQL. O teste SQL sequencial também não substitui esse ensaio.

## Deploy e rollback

Migração aditiva e aplicação separados. Backup/restauração, região, retenção e
contas precisam estar definidos. Desativar captação por configuração em incidente;
não apagar schema/tabelas nem restaurar mock/n8n. Rollback de aplicação não pode
perder leads já gravados. Não aplicar este script em outro projeto por inferência.

## Fontes técnicas consultadas

- [Funções e permissões Supabase](https://supabase.com/docs/guides/database/functions).
- [Secret keys](https://supabase.com/docs/guides/getting-started/api-keys).
- [Headers Vercel](https://vercel.com/docs/headers/request-headers).
