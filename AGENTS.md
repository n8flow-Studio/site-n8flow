# Instruções para agentes — Site N8FLOW

## Leitura obrigatória

Antes de planejar ou modificar código, leia nesta ordem:

1. `docs/product/prd.md`
2. `docs/ux/ux-arquitetura-informacao.md`
3. `docs/design-system/README.md` e os módulos aplicáveis
4. `docs/copy-conteudo/README.md` e os módulos aplicáveis
5. `docs/arquitetura-tecnica/README.md` e os módulos aplicáveis
6. ADRs relacionados em `docs/decisions/`

Não inicie implementação sem consultar os documentos aplicáveis.

## Hierarquia de autoridade

1. Instrução explícita mais recente do responsável.
2. ADR aprovado.
3. Arquitetura Técnica.
4. UX e Arquitetura de Informação.
5. PRD.
6. Design System.
7. Convenções existentes no código.

Se houver conflito que altere produto, arquitetura, conteúdo empresarial ou integração, pare e solicite decisão. Não escolha silenciosamente.

## Regras obrigatórias

- Use Next.js, React, TypeScript, Tailwind CSS, App Router e Vercel.
- Use Server Components por padrão; Client Components só para interatividade real.
- Siga tokens e componentes do Design System; evite valores arbitrários quando houver token.
- Mantenha integrações atrás de adapters server-side.
- Nunca exponha credenciais do n8n, Bolten, gateway ou outras integrações.
- Valide formulários no cliente e novamente no servidor.
- Preserve idempotência, observabilidade e tratamento de falhas.
- Respeite acessibilidade, responsividade, SEO e `prefers-reduced-motion`.
- Atualize testes e documentação junto com mudanças de comportamento.

## Não inventar

Não invente copy definitiva, datas, agenda, palestrantes, clientes, cases, métricas, depoimentos, preços, condições comerciais, contatos, redes sociais, políticas legais, campos pendentes, integrações ou credenciais.

Quando conteúdo não existir: use placeholder claramente identificado apenas em desenvolvimento/preview, não publique o módulo e registre a pendência.

## Decisões confirmadas

- Domínio: `n8flow.com.br`.
- Logo existente; não redesenhar.
- Cores: `#00F5A0` e `#6E44FF`.
- Engineering Growth, light-first (ADR-0006).
- Supabase/PostgreSQL para leads e CRM interno próprio (ADR-0008).
- Pedro e sócio são administradores com acesso a todos os leads; comercial futuro restrito por responsável.
- Bolten White Label é oferta SaaS para clientes, sem integração ao site ou uso como CRM interno.
- n8n/WhatsApp não são dependências da captação; autenticação do painel ainda exige decisão específica.
- Hospedagem Vercel.
- Conteúdo inicial Markdown/MDX no Git atrás de repository interface.
- Gateway pendente e obrigatoriamente abstraído por adapter.

## Processo por tarefa

1. Identifique requisitos e documentos aplicáveis.
2. Liste decisões confirmadas e pendências.
3. Inspecione componentes, tokens e padrões existentes.
4. Apresente plano curto para mudanças relevantes.
5. Implemente a menor mudança completa.
6. Execute typecheck, lint, testes, build e verificações aplicáveis.
7. Informe arquivos alterados, verificações e pendências.

## Mudanças arquiteturais

Não altere silenciosamente CMS/fonte de conteúdo, gateway, hospedagem, integrações, persistência, autenticação, analytics, error tracking ou biblioteca estrutural. Registre em `docs/decisions/ADR-NNNN-titulo.md`.

## Segurança do workspace

Nunca grave segredos. Não modifique requisitos para fazer código divergente parecer conforme. Não remova testes ou controles de qualidade para concluir uma tarefa. Preserve mudanças do usuário não relacionadas.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
