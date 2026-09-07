# Entrega local — captação Supabase (2026-09-07)

Continuação do relatório de auditoria, não substituição do registro histórico.

## Implementado

- O Next.js regenerou `.next/dev/types/routes.d.ts` ao iniciar dev. Typecheck e
  build voltaram a passar sem excluir arquivos ou relaxar configuração. A origem
  do trecho duplicado anterior não foi determinada; não alegar correção de bug
  do framework nem prevenção definitiva de recorrência.
- Rota de diagnóstico usa adapter Supabase server-side, sem fallback mock/n8n.
- Migração SQL aditiva preparada: schema privado, RLS, funções restritas,
  comparação atômica de chave/payload e contador por HMAC de IP entre instâncias.
- Ativação explícita e validação de configuração; sem segredos versionados.
- Limites de leitura, origem/tipo de conteúdo, timeout, telefone e atribuição.
- Formulário com POST seguro, botão desabilitado antes da hidratação, aviso sem JS,
  timeout, preservação de valores, retry com mesma chave e aviso ao trocar payload.
- Validação da resposta de persistência, foco de sucesso e contraste do botão.
- Primeira origem por aba em sessionStorage, sem query completa; revisão de
  privacidade ainda necessária.

## Verificação e limites

Build, TypeScript e ESLint passaram. Testes existentes preservados e novos testes
de handler, adapter e configuração acrescentados. O guia Supabase contém teste SQL
sequencial e ensaio de concorrência obrigatório antes de go-live.

No browser local, verificadas apresentação desktop/mobile e indisponibilidade com
valores preservados. Não foi testado sucesso contra banco real nem feita auditoria
completa de acessibilidade. Título duplicado da página Contato permanece pendente.

PostgreSQL/psql não encontrados localmente; Docker sem daemon ativo. Nenhuma
migração aplicada ou conta/projeto externo criado. Testes HTTP simulados não
comprovam execução SQL, RLS ou concorrência real. Captação permanece desativada por
padrão. Sem deploy, commit ou push.

## Para continuar

1. Disponibilizar banco Supabase de homologação ou PostgreSQL local e autorizar
   aplicação/testes; configurar credenciais somente no ambiente apropriado.
2. Aprovar retenção, privacidade, região/plano e operação antes de produção.
3. Aprovar provedor e método de autenticação antes de implementar o painel.
4. Validar etapas/regras comerciais antes do acompanhamento.

Autenticação, painel, usuários e permissões por responsável **não foram implementados**.
As alterações documentais do turno anterior continuam preservadas e não staged.
