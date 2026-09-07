# 5. SEO, analytics e observabilidade

## Atualização — operação de leads em 2026-09-07

Pelo ADR-0008, monitorar gravação/latência/erros do Supabase e acesso ao CRM, não
n8n/Bolten. Logs técnicos sem dados de contato ou notas. O painel não terá pixels
de marketing/session replay por herança do site público. Retirar rotas privadas do
sitemap, usar noindex e impedir cache público; robots não é controle de acesso.
Provedor de analytics/error tracking permanece pendente. Eventos de pagamento e
comunidade descritos abaixo são condicionais, fora do lançamento atual.

## 5.1 SEO técnico

- Metadata API por página, title template e description real;
- canonical absoluto com `https://n8flow.com.br`;
- `sitemap.ts` somente com URLs publicadas/canônicas;
- `robots.ts`, bloqueando preview e ambientes não produtivos;
- Open Graph/Twitter com asset oficial quando disponível;
- headings semânticos, links descritivos e breadcrumbs;
- schemas Organization, Event, Article, BreadcrumbList e outros apenas quando verdadeiros;
- 404 real para slug ausente e redirect permanente somente quando necessário.

Preview deployments devem usar `noindex` e não ser canônicos. Conteúdo duplicado por parâmetros não cria novas URLs indexáveis.

## 5.2 Performance

Metas de campo recomendadas nos percentis definidos pelos Core Web Vitals vigentes: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Complementos internos: orçamento inicial de JavaScript cliente por página, fontes limitadas, imagem LCP prioritária e terceiros carregados com estratégia explícita.

Medir antes de adicionar animação, chat, pixels ou widgets. Terceiros devem possuir dono, finalidade e impacto conhecido. Server Components e renderização estática são padrão de performance, não garantia suficiente.

## 5.3 Analytics

Camada única em `lib/analytics`, com função tipada e sem dependência direta espalhada:

```ts
type AnalyticsEvent =
  | { name: 'click_event_cta'; eventId: string; location: string }
  | { name: 'submit_diagnosis'; formId: string }
  | { name: 'purchase'; transactionId: string; value: number; currency: 'BRL' };

export function track(event: AnalyticsEvent): void;
```

Separar evento de UI de evento confirmado no servidor. Definir nomes, propriedades, consentimento, deduplicação e QA antes do go-live. Nenhuma PII.

## 5.4 Error tracking e logs

**Decisão técnica:** preparar adapter de observabilidade; **recomendação:** Sentry antes da produção, após validação de plano e privacidade. Capturar exceções de cliente/servidor, releases e sourcemaps protegidos. Não enviar payloads de formulários.

Logs estruturados devem conter timestamp, level, environment, service, route, requestId, duration, outcome e errorCode; excluir corpo, tokens e PII. `console.log` ad hoc não é observabilidade de produção.

## 5.5 Alertas e SLOs iniciais

Indicadores: disponibilidade das páginas críticas, taxa de sucesso dos formulários, latência/erro do n8n, criação de checkout, processamento de webhook e Core Web Vitals. SLOs numéricos devem ser definidos após baseline e volume; não inventar compromisso operacional.

Alertas devem ser acionáveis: falha sustentada de formulário, aumento de 5xx, webhook inválido/repetido e degradação relevante. Definir destinatário antes do go-live.

## 5.6 Saúde e diagnóstico

Não criar health endpoint que revele segredos. Se necessário, expor apenas saúde sintética e proteger detalhes. Integrações externas são monitoradas por transações sintéticas ou métricas internas, sem efetuar cobrança real em produção.
