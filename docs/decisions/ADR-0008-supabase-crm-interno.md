# ADR-0008 — Supabase e CRM interno de leads

**Status:** aprovada para persistência, CRM próprio e regras de acesso; detalhes pendentes abaixo não estão aprovados  
**Data:** 2026-09-07  
**Responsável pela aprovação:** Pedro, em conversa sobre o projeto

## Contexto

A prioridade é colocar o site em produção com captação persistente e acompanhamento
dos contatos. O responsável aprovou Supabase e solicitou uma área administrativa
própria. Bolten White Label será SaaS oferecido aos clientes; não será contratado
para a operação interna nem integrado ao site. Não se trata de integração adiada.

## Decisão aprovada

- Supabase/PostgreSQL será a fonte de verdade dos leads do site.
- O site terá CRM interno restrito para consulta e acompanhamento desses leads.
- Na primeira fase, apenas Pedro e seu sócio terão contas individuais. Ambos serão
  administradores com visão de todos os leads, independentemente do responsável.
- Responsabilidade pelo atendimento e autorização de acesso são conceitos distintos.
- Futuros usuários comerciais terão acesso restrito aos leads atribuídos a eles.
  Gestão completa da equipe fica para outra fase.
- Não haverá cadastro público de usuários do painel.
- O fluxo de captação não dependerá de Bolten, WhatsApp ou n8n. O adapter n8n atual
  é legado a substituir, não requisito de lançamento nem fallback automático.
- Next.js/App Router, React, TypeScript, Tailwind, Vercel e identidade light-first
  permanecem. Conteúdo editorial continua no Git atrás de ContentRepository
  (ADR-0001); Supabase não é uma migração do CMS.

## Limites de autoridade e pendências

A aprovação de Supabase para dados não escolhe automaticamente o provedor de
autenticação. Supabase Auth é uma proposta técnica para avaliação, não decisão
confirmada. Antes da implementação do login, aprovar provedor, método de entrada,
recuperação, expiração/revogação e MFA. Não criar autenticação artesanal.

Etapas do funil, notas, histórico, próxima ação, filtros e regras de atribuição
são detalhamento proposto para validação. A entrada como “Sem responsável” é a
proposta inicial, visível somente a administradores; não atribuir automaticamente
a um sócio. Não criar regras comerciais ou campos adicionais por inferência.

## Arquitetura e segurança exigidas

Captação: formulário → API Next.js → validação/antiabuso → adapter de persistência
→ transação PostgreSQL → confirmação após commit.

Administração: usuário autenticado → autorização no servidor → repository de leads
→ banco com RLS e privilégios mínimos. Nenhum visitante pode consultar leads.
Cada operação deve verificar identidade ativa, papel e escopo do registro; filtros
da interface, middleware e robots não substituem autorização.

Idempotência deve ser persistente, atômica e vinculada ao conteúdo normalizado.
Mesma chave e conteúdo retornam o mesmo resultado; mesma chave com conteúdo
diferente deve ser rejeitada. Concorrência e timeout não podem duplicar registros.
Não deduplicar pessoas apenas por e-mail, pois podem enviar solicitações legítimas.

Segredos ficam no servidor. Chave administrativa que ignore RLS não deve ser usada
nas leituras/mutações comuns do painel como substituto da autorização por usuário.
O mecanismo concreto de conexão/identidade e as políticas SQL serão especificados
e testados junto à decisão de autenticação, antes de expor o painel.

## Alternativas consideradas

- Bolten interno: descartado por decisão empresarial explícita.
- CRM completo/multitenant: fora do escopo; este painel é interno da N8FLOW.
- Apenas memória/mock: não atende persistência nem operação produtiva.
- Apenas painel do Supabase: não atende ao pedido de área administrativa própria.

## Consequências e migração

Criar schema/migrações versionadas, adapter, controles persistentes, testes e
configuração separada por ambiente. Depois, implementar acesso e painel em etapas.
Configuração externa e migrações em produção exigem autorização própria; esta ADR
não provisiona conta, plano ou credenciais. Não há importação de dados autorizada.

Rollback deve preservar registros: migrações compatíveis, backup e restauração
testados antes de produção. Não voltar para mock ou n8n silenciosamente. Se não
for possível garantir a gravação, informar indisponibilidade sem confirmar aceite.

## Documentos substituídos e referências

## Detalhamento de implementação — 2026-09-07

Fase A usa RPC HTTPS server-side sem SDK adicional. Tabelas em schema privado,
sem acesso direto anônimo/autenticado/service_role; somente RPCs de ingestão
restritas ao service_role. Secret key exclusivamente na ingestão. O painel não
usará esse cliente privilegiado. Autenticação continua pendente.

Duplicidade é controlada por chave única e comparação exata do payload JSONB
normalizado, sem fingerprint colidível. Recibo acompanha o lead; nenhuma exclusão
automática de leads foi definida. Retenção precisa ser aprovada antes de aplicar
a migração em produção. Rate limit preserva 5 tentativas/10 minutos em PostgreSQL,
com HMAC de IP e limpeza apenas de contadores expirados. Não foi contratado serviço.

Ver [configuração, limites e testes pendentes](../../supabase/README.md).
Implementação local não equivale à ativação ou validação em banco real.

### Referências e precedência

Substitui as premissas n8n → Bolten → WhatsApp para leads internos no PRD, UX e
arquitetura v1.0. ADR-0007 permanece válido para posicionamento; sua preservação
das integrações é superada apenas nesse ponto. ADR-0001 e ADR-0006 permanecem.

- Decisões explícitas de Pedro na conversa, consolidadas em 2026-09-07.
- [Especificação do CRM interno](../arquitetura-tecnica/08-crm-interno-e-acessos.md).
