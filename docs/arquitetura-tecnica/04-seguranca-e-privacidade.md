# 4. Segurança e privacidade

## 4.1 Modelo de ameaça resumido

Ativos: PII de leads, credenciais, integridade de eventos/pagamentos, disponibilidade dos formulários e reputação do domínio. Ameaças principais: spam/bots, injeção, replay de webhook, vazamento em logs/analytics, falsificação de pagamento, abuso de endpoint e dependência comprometida.

## 4.2 Controles obrigatórios

- validação e limites no servidor, mesmo com validação cliente;
- allowlist de campos; descartar propriedades inesperadas;
- rate limit por chave composta e proteção anti-bot progressiva;
- limite de corpo e timeout;
- segredo apenas server-side e por ambiente;
- assinatura de webhooks e comparação constant-time;
- idempotência para submissões e callbacks;
- escaping por padrão; não usar HTML não confiável sem sanitização;
- redirects e URLs externas em allowlist;
- headers de segurança e HTTPS;
- logs com redaction de PII e segredos;
- atualizações e auditoria de dependências no CI.

Honeypot silencioso pode ser primeira camada. CAPTCHA/Turnstile deve ser ativado quando abuso justificar, considerando privacidade e acessibilidade.

## 4.3 Headers

Definir Content-Security-Policy por allowlist real, começando restrita e adicionando analytics/gateway aprovados. Incluir proteção contra framing, MIME sniffing, referrer policy e permissions policy mínima. Não copiar CSP genérica que quebre Next.js ou autorize curingas amplos.

## 4.4 Segredos e ambiente

Validar env no boot/build. Exemplos de nomes — valores nunca documentados:

```text
APP_URL
N8N_WEBHOOK_URL
N8N_WEBHOOK_SECRET
PAYMENT_PROVIDER
PAYMENT_API_KEY
PAYMENT_WEBHOOK_SECRET
SENTRY_DSN
NEXT_PUBLIC_GTM_ID
```

Somente valores intencionalmente públicos recebem prefixo público. `.env.example` contém chaves vazias e comentários; `.env*` real fica ignorado. Rotacionar segredo em vazamento e separar preview/produção.

## 4.5 LGPD e minimização

Coletar somente dados com finalidade definida; informar finalidade e base legal conforme orientação jurídica. Consentimento, quando aplicável, não vem pré-marcado. Definir retenção, acesso, correção e exclusão junto à operação. Política de privacidade e termos permanecem pendentes e são requisito de go-live.

Evitar PII em logs, ferramentas de sessão, replay, URLs e analytics. Se session replay for adotado, mascarar formulários e bloquear captura de campos sensíveis por padrão.

## 4.6 Pagamentos

Não manipular dados brutos de cartão. Preferir checkout/tokenização do provider. Nunca confiar em preço vindo do navegador: produto e valor são resolvidos server-side por identificador permitido. Confirmar evento do webhook com API do gateway quando o risco exigir.

## 4.7 Resposta a incidente

Antes do lançamento, definir responsável, canal, severidades, procedimento de contenção, rotação, comunicação e preservação de evidências. Erro apresentado ao visitante deve conter `requestId`, não stack trace.

