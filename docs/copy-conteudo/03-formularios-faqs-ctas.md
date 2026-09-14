# 3. Formulários, FAQs e CTAs

## Direção vigente — revisado 2026-09-14

ADR-0007 prevalece sobre FAQs/CTAs históricos de nicho, Eventos e Comunidade abaixo.
ADR-0008 define Supabase e CRM interno: confirmação significa gravação persistente,
não envio ao Bolten, automação de WhatsApp ou promessa de resposta imediata.
Bolten é oferta para clientes; não publicar benefícios, planos ou integração ao
site sem copy aprovada. Textos legais precisam refletir os destinatários reais.

O termo **"Growth"** foi removido de toda a copy pública conforme decisão de 2026-09-14.
CTA principal em todo o site: **Diagnóstico gratuito** (→ /contato).

## Formulários

Microcopy funcional: legenda de obrigatórios, orientação para habilitar JavaScript e aviso
de que uma tentativa anterior pode ter sido recebida antes de iniciar envio com dados diferentes.
Sem promessa de prazo. Esses estados exigem validação de layout/negócio antes de go-live.

Labels: Nome completo; E-mail; WhatsApp com DDD; Empresa; Cargo; Cidade; Segmento; Qual é o principal desafio da sua empresa?; Como podemos ajudar? Placeholder não substitui label. Campos de diagnóstico dependem de aprovação comercial.

Diagnóstico publicado: Nome completo, Empresa, E-mail profissional
e WhatsApp/Telefone são obrigatórios; Objetivo do contato possui as opções
Diagnóstico comercial, Parcerias e Assunto institucional; Mensagem/contexto é
opcional. Expansões de qualificação continuam dependentes de aprovação comercial.

Validação:

- obrigatório: Informe {{fieldLabel}}.
- e-mail: Digite um e-mail válido.
- telefone: Digite um WhatsApp válido com DDD.
- geral: Revise os campos destacados e tente novamente.
- consentimento: definir somente após revisão jurídica.

Processamento: Enviando...; Continuando...; Enviando solicitação...; Sua solicitação já está sendo processada.

Sucesso:

- diagnóstico: Solicitação recebida. Informaremos o próximo passo pelos canais fornecidos.
- contato: Mensagem recebida. Informaremos o próximo passo pelos canais fornecidos.

Não prometer prazo de resposta sem SLA.

Erros:

- indisponível: Não foi possível enviar agora. Seus dados foram mantidos para uma nova tentativa.
- timeout: O envio demorou mais que o esperado. Tente novamente.
- limite: Muitas tentativas em pouco tempo. Aguarde alguns minutos.
- inesperado: Algo não funcionou como esperado. Tente novamente. Código: {{requestId}}.

404: Esta página não foi encontrada. CTA: Voltar para a Home.

## FAQs

O que é a N8FLOW? Uma empresa de tecnologia e marketing digital que identifica o que o seu negócio precisa e implementa as soluções corretas — do Google ao processo de atendimento.

É uma agência? A proposta vai além da execução isolada. Integramos presença digital, captação, CRM, automação e Inteligência Artificial conforme a necessidade do negócio.

Para quem trabalha? Para empresas de diferentes segmentos que querem estruturar sua presença digital e seus processos de captação e atendimento.

O que é o diagnóstico gratuito? Uma conversa inicial onde entendemos sua situação, seus desafios e o que faz sentido implementar — antes de qualquer proposta.

O diagnóstico é mesmo gratuito? Sim. É a primeira etapa do nosso processo, sem custo e sem compromisso.

Permanecem pendentes: cancelamento, reembolso, prazo de projetos, suporte e garantias formais.

## CTAs

Principal (em todo o site): **Diagnóstico gratuito** → /contato

Por página:
- Home primário: Diagnóstico gratuito
- Home secundário: Ver o que fazemos
- Serviços primário: Diagnóstico gratuito
- Serviços secundário: Ver como trabalhamos
- Método primário: Diagnóstico gratuito
- Método secundário: Ver nossas soluções
- Sobre: Diagnóstico gratuito
- Contato: Solicitar diagnóstico gratuito
- Detalhe de serviço: Diagnóstico gratuito
- Conteúdo: Ler artigo
- Cases: Ver case
- Secundários: Ver o que fazemos; Ver como trabalhamos; Ver nossas soluções; Tentar novamente

Falar pelo WhatsApp somente com canal público confirmado. Não usar "Saiba mais" como CTA primário quando houver ação concreta.
