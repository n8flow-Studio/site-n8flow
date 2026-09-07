# 3. APIs e integrações

## 3.1 Endpoints planejados

| Método | Rota                       | Finalidade                       | Auth pública           |
| ------ | -------------------------- | -------------------------------- | ---------------------- |
| POST   | `/api/leads/evento`        | captura de interessado/inscrição | controles antiabuso    |
| POST   | `/api/leads/diagnostico`   | lead B2B                         | controles antiabuso    |
| POST   | `/api/contato`             | contato geral                    | controles antiabuso    |
| POST   | `/api/webhooks/pagamentos` | callback do gateway              | assinatura obrigatória |

Criar apenas endpoints usados. Route Handlers devem retornar envelope estável, `requestId` e mensagens seguras.

```ts
type ApiSuccess<T> = { ok: true; data: T; requestId: string }
type ApiFailure = {
  ok: false
  error: { code: string; message: string; fieldErrors?: Record<string, string[]> }
  requestId: string
}
```

## 3.2 Pipeline de submissão

```text
Receber → limitar tamanho → validar origem/antiabuso → parse seguro
→ validar schema → normalizar → gerar requestId/idempotencyKey
→ encaminhar ao n8n → interpretar resposta → log sem PII
→ responder ao usuário
```

Não limpar dados válidos no cliente. Timeout e indisponibilidade retornam erro recuperável; não declarar lead criado se o n8n não confirmou aceite. Para resiliência superior, avaliar fila/outbox por ADR após definir SLA e volume.

## 3.3 Contrato com n8n

Envelope recomendado:

```json
{
  "schemaVersion": "1.0",
  "event": "lead.submitted",
  "occurredAt": "2026-08-18T12:00:00.000Z",
  "requestId": "uuid",
  "idempotencyKey": "opaque-value",
  "source": "n8flow.com.br",
  "payload": {},
  "attribution": {
    "utmSource": null,
    "utmMedium": null,
    "utmCampaign": null,
    "utmTerm": null,
    "utmContent": null,
    "landingPage": "/"
  }
}
```

Autenticar chamadas com segredo em header e, preferencialmente, HMAC + timestamp. Definir timeout curto, retry apenas para falhas transitórias e mesma idempotency key. O workflow n8n deve deduplicar, criar/atualizar contato no Bolten, aplicar tags e disparar WhatsApp somente conforme regras e consentimento válidos.

## 3.4 Payloads funcionais

Evento: nome, e-mail, WhatsApp, CRECI, `eventId` e atribuição. Diagnóstico: campos aprovados pela operação comercial; não congelar sugestões como obrigatórias antes da decisão. Contato: nome, e-mail/WhatsApp conforme formulário final, assunto e mensagem.

PII nunca entra em URL, query string de analytics ou log de aplicação. Normalização de telefone deve preservar país e ser validada no servidor.

## 3.5 Pagamentos

**Fornecedor pendente.** Implementar interface antes do provider:

```ts
export interface PaymentGateway {
  createCheckout(input: CheckoutInput): Promise<CheckoutSession>
  verifyWebhook(input: RawWebhook): Promise<VerifiedPaymentEvent>
  getPayment(id: string): Promise<PaymentStatus>
}
```

O checkout hospedado é preferível inicialmente por reduzir superfície de PCI e complexidade. A página de retorno não confirma pagamento por query string; consulta o backend ou aguarda webhook verificado. Webhooks devem verificar assinatura sobre corpo bruto, timestamp, replay e idempotência.

Estados normalizados: `pending | paid | failed | canceled | refunded | unknown`. Evento e assinatura recorrente podem ter fluxos distintos; não presumir que o mesmo produto/checkout atende ambos até validar provider.

## 3.6 Analytics

Eventos confirmados incluem `view_event`, `click_event_cta`, `start_event_registration`, `submit_lead`, `begin_checkout`, `purchase`, `view_community`, `click_community_cta`, `view_services`, `submit_diagnosis`, `view_case` e `click_whatsapp`.

`purchase` só é emitido com confirmação confiável e `transaction_id` deduplicável. Nunca enviar nome, e-mail, WhatsApp, CRECI ou mensagem. Taxonomia e consentimento devem ser finalizados antes da produção.

## 3.7 Falhas e retries

- 4xx de validação: não repetir automaticamente;
- 429: backoff e feedback ao usuário;
- 5xx/timeout: retry limitado server-side com jitter apenas se operação idempotente;
- webhook: responder conforme regra do provider; registrar tentativa e deduplicar;
- circuit breaker/fila: introduzir somente se métricas justificarem.

## 3.8 Estado de implementação do diagnóstico — 2026-09-06

O endpoint `POST /api/leads/diagnostico` implementa o envelope estável, validação
Zod compartilhada, limite de corpo, verificação de origem, honeypot, rate limit e
idempotência em memória. O adapter n8n utiliza HMAC-SHA256 sobre
`timestamp.body`, enviado em `x-n8flow-timestamp` e
`x-n8flow-signature: sha256=<hex>`.

- Em desenvolvimento e testes, a ausência de configuração seleciona um adapter
  mock que não persiste nem registra PII.
- Em produção, a ausência de `N8N_WEBHOOK_URL` ou `N8N_WEBHOOK_SECRET` retorna
  indisponibilidade e nunca confirma o lead.
- O Bolten permanece atrás do workflow n8n; não há chamada direta pelo site.
- Rate limit e idempotência atuais são best-effort por instância. Garantia
  distribuída exige persistência operacional e ADR-0005 antes de volume real.
- Analytics possui contrato tipado e evento local sem provider. IDs,
  consentimento e carregamento de terceiros permanecem pendentes.
