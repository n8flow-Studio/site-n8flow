# 6. Testes, CI/CD e ambientes

## 6.1 Pirâmide de testes

- **Unitários:** schemas, normalizadores, SEO, adapters e funções puras.
- **Componentes:** estados, acessibilidade e interações críticas.
- **Integração:** Route Handlers com n8n/gateway simulados; assinaturas e idempotência.
- **E2E:** jornadas Home→Evento, inscrição, diagnóstico, navegação mobile e erros.
- **Visual:** componentes e páginas-chave nos breakpoints do Design System.
- **Acessibilidade:** análise automática + teclado/leitor de tela manual.

Não testar implementação interna quando comportamento público é suficiente. Mocks devem respeitar contratos reais versionados.

## 6.2 Casos críticos

1. formulário válido chega ao adapter uma vez;
2. inválido não chama integração e preserva valores;
3. timeout permite retry seguro;
4. dupla submissão não duplica lead;
5. webhook inválido é rejeitado;
6. webhook repetido não duplica pagamento/ação;
7. retorno do checkout não declara pagamento sem confirmação;
8. evento esgotado/encerrado não oferece inscrição incorreta;
9. páginas draft não aparecem em sitemap/produção;
10. analytics não contém PII nem duplica purchase.

## 6.3 Quality gates

Cada pull request deve executar: instalação bloqueada pelo lockfile, typecheck, lint, formatação/check, testes unitários e integração, build de produção, validação de conteúdo/links e acessibilidade automatizada relevante. E2E e regressão visual rodam em PRs de UI ou sempre, conforme custo.

Merge proibido com build quebrado, teste crítico falhando, segredo detectado, vulnerabilidade crítica aplicável ou regressão acessível grave.

## 6.4 Ambientes

| Ambiente | Uso | Dados/integrações |
|---|---|---|
| local | desenvolvimento | mocks ou sandbox |
| preview | revisão por PR | sandbox; noindex |
| production | público | credenciais e providers produtivos |

Nunca usar contatos reais ou efetuar cobranças reais em testes. Variáveis e webhooks são separados por ambiente. Conteúdo draft pode aparecer em preview com indicação inequívoca.

## 6.5 Deploy

Vercel gera preview por PR e produção a partir da branch protegida definida. Deploy precisa ser reproduzível, com lockfile e runtime declarado. Migrações futuras devem ser backward-compatible e separadas do deploy quando houver persistência.

Rollback: redeploy da versão saudável anterior; integração/configuração incompatível exige procedimento coordenado. Feature flags podem proteger integrações incompletas, com default seguro.

## 6.6 Definition of Done

Código, testes, documentação e observabilidade atualizados; estados e responsividade revisados; acessibilidade validada; conteúdo não inventado; secrets ausentes do diff; preview aprovado; critérios de aceite rastreáveis.

