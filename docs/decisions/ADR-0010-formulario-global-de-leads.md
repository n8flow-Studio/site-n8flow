# ADR-0010 — Formulário global de leads

**Status:** aprovada e implementada  
**Data:** 2026-09-14  
**Responsável pela aprovação:** Pedro, em conversa sobre o projeto

## Contexto

Os CTAs comerciais levavam o visitante para `/contato`, interrompendo a leitura da
página atual. O responsável solicitou que todos os CTAs de conversão abram o mesmo
formulário em sobreposição, inspirado no comportamento da referência C2G, e que a
página pública de contato seja removida.

## Decisão

- CTAs comerciais abrem um `dialog` modal global sem navegação de rota.
- A rota pública `/contato` e sua entrada no sitemap são removidas.
- CTAs editoriais ou de exploração continuam navegando para suas páginas de destino.
- O formulário único mantém o contrato de `POST /api/leads/diagnostico`, validação
  compartilhada, antiabuso, idempotência e persistência Supabase definidos no
  ADR-0008.
- A atribuição registra a página na qual a sessão começou; `/contato` continua aceito
  apenas como valor histórico de clientes anteriores, mas não é o fallback vigente.
- O formulário é carregado sob demanda para limitar o custo de JavaScript inicial.
- O modal usa o elemento nativo `dialog`, foco contido pelo navegador, fechamento por
  `Escape`, retorno de foco ao disparador, bloqueio de rolagem e redução de movimento.

## Consequências

O conteúdo institucional continua pré-renderizado e navegável sem depender do modal.
A captação requer JavaScript, assim como a validação e submissão já existentes. Não há
nova integração externa, biblioteca estrutural ou alteração no banco. A futura camada
de CRM deve consumir os leads persistidos pelo adapter server-side, sem integrar o
frontend diretamente ao banco ou a um fornecedor.

Links externos antigos para `/contato` passam a receber 404. Antes de campanhas futuras,
usar uma URL pública de conteúdo e abrir o formulário pelo CTA dessa página.
