# Status de implementação — 2026-09-07

## Escopo da verificação

Inspeção local de Git, código e documentação; execução de lint, testes, typecheck,
build e formatação. Somente documentação foi alterada nesta tarefa. Não houve
provisionamento Supabase, deploy, migração de banco, commit, push ou alteração da
implementação. Não houve nova revisão visual nem consulta ao estado de produção.

## Git na abertura da tarefa

- Branch: `develop`, sem upstream configurado visível em `git branch -vv`.
- HEAD: `2b8f916 feat: implementa fluxo de conversão do formulário de diagnóstico`.
- Remoto: `https://github.com/n8flow-Studio/site-n8flow.git`.
- Sem staged, modificados ou não rastreados na abertura.
- Commits anteriores: `a67ff71` (reposicionamento B2B), `4cc9e38` (experiência
  pública), `61508a1` (documentação inicial).
- Branch local `main` em `61508a1`, rastreando `origin/master`. Não inferir a branch
  produtiva Vercel desse estado. Sem fetch nesta auditoria; sincronização remota
  não verificada. Ao concluir, há apenas alterações documentais não staged.

## Implementação versus arquitetura-alvo

| Área        | Evidência local                                              | Situação                                             |
| ----------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| Fundação    | Next 16.3.3, React 19.2.8, TS, Tailwind 4, App Router        | Implementada; quality gates incompletos              |
| Identidade  | tokens light-first, fontes, Home editorial, assets e favicon | Implementada; sem nova auditoria visual              |
| Público     | Home, método, serviços, sobre, contato, templates blog/cases | Base implementada; conteúdo condicionado pendente    |
| Conversão   | formulário, Zod, API, mock e adapter n8n                     | Parcial e divergente do ADR-0008                     |
| Supabase    | sem dependência/configuração/adapter/migrações encontrados   | Aprovado, não implementado                           |
| CRM interno | sem rota admin, autenticação, perfis ou RLS encontrados      | Aprovado, não implementado                           |
| Conteúdo    | MemoryContentRepository; artigos sempre vazios               | MDX requerido pelo ADR-0001 ainda não implementado   |
| Analytics   | CustomEvent local em `src/lib/analytics/track.ts`            | Sem provider ou coleta externa comprovada            |
| Qualidade   | 4 arquivos de testes unitários; sem `.github`                | Sem CI versionado, integração/E2E/a11y automatizados |
| Produção    | configurações externas não inspecionadas                     | Não validada nesta tarefa                            |

## Correções prioritárias para captação real

1. `src/components/forms/diagnosis-form.tsx`: form sem method/action pode fazer GET
   com PII quando JS não estiver disponível. Não corrigido nesta tarefa documental.
2. `src/server/diagnosis/process-diagnosis.ts`: idempotência consulta somente chave
   antes de validar payload; não vincula conteúdo e não reserva operação em curso.
   Chamadas concorrentes podem entregar duas vezes. Stores são apenas em memória.
3. `src/server/integrations/diagnosis/index.ts`: produção ainda depende de variáveis
   n8n para entrega; sem configuração retorna indisponibilidade. Mock de dev não
   persiste. Não há armazenamento operacional dos leads no código atual.
4. `src/app/api/leads/diagnostico/route.ts`: corpo é lido por inteiro antes da
   conferência real de bytes; falta limitar durante leitura. Rate limit é por
   instância e usa o primeiro forwarded IP; confiança no proxy precisa ser validada.
5. Formulário sem timeout cliente; atribuição captura apenas a URL atual, podendo
   perder UTMs da entrada e armazenar query completa desnecessária. Limites de UTM
   podem bloquear envio sem feedback útil. Telefone precisa de normalização robusta.

Recomendação: resolver esses pontos junto à persistência Supabase, com testes de
concorrência, indisponibilidade e reenvio. Não investir em completar n8n/Bolten.

## Conteúdo e lançamento

- `src/app/cases/page.tsx` afirma estar consolidando/auditando primeiras operações,
  sem evidência editorial encontrada. Validar ou omitir; não tratar como fato.
- Blog/cases vazios continuam com páginas públicas. Blog não renderiza artigos
  quando houver dados; implementar fonte/templates antes de publicação editorial.
- Sem rotas de privacidade/termos; conteúdo jurídico e retenção precisam aprovação.
- Revisar composição dos títulos com template global, indexação de previews,
  sitemap condicional, contraste de botões/erros e foco após sucesso do formulário.
- `robots.ts` menciona proteção de preview externa, mas não a implementa no arquivo.
  Não foi verificado se a Vercel já fornece headers de proteção.
- Backup, alertas, runtime/branches produtivos e smoke test permanecem sem validação.

## Verificações executadas

| Verificação           | Resultado nesta tarefa                                         |
| --------------------- | -------------------------------------------------------------- |
| ESLint                | Passou, exit 0                                                 |
| Vitest                | 4 arquivos, 28 testes passaram                                 |
| TypeScript `--noEmit` | Falhou por sintaxe em `.next/dev/types/routes.d.ts`            |
| Build Next.js         | Compilou; falhou no TypeScript pelo mesmo arquivo gerado       |
| Formatação global     | Falhou; há divergências preexistentes em código e documentação |

O arquivo gerado contém trecho duplicado/malformado a partir da linha 73, fora de
comentário, e é incluído pelo tsconfig. A origem dessa corrupção não foi determinada.
Não atribuir a falha ao código Supabase (inexistente), nem declarar build saudável.
Não foi apagado/regenerado manualmente nem excluído do typecheck para esconder erro.
Uma próxima tarefa deve diagnosticar a geração e validar novamente os gates.

## Próximo desenvolvimento recomendado

1. Diagnosticar os tipos gerados e recuperar build/typecheck sem reduzir controles.
2. Implementar captação persistente Supabase e testes conforme ADR-0008.
3. Aprovar autenticação e implementar acesso dos dois administradores.
4. Entregar consulta de leads; validar funções e etapas antes do acompanhamento.
5. Concluir privacidade, conteúdo, QA e operação para lançamento autorizado.

Ver [roadmap vigente](../arquitetura-tecnica/07-roadmap-aceite-e-pendencias.md) e
[arquitetura do CRM](../arquitetura-tecnica/08-crm-interno-e-acessos.md).
