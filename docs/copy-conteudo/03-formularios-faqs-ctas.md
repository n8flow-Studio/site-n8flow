# 3. Formulários, FAQs e CTAs

## Direção vigente — revisado 2026-09-14

ADR-0007 prevalece sobre FAQs/CTAs históricos de nicho, Eventos e Comunidade abaixo.
ADR-0008 define Supabase e CRM interno: confirmação significa gravação persistente,
não envio ao Bolten, automação de WhatsApp ou promessa de resposta imediata.
Bolten é oferta para clientes; não publicar benefícios, planos ou integração ao
site sem copy aprovada. Textos legais precisam refletir os destinatários reais.

O termo **"Growth"** foi removido de toda a copy pública conforme decisão de 2026-09-14.
Conversão principal em todo o site: conversa inicial para diagnóstico comercial em formulário modal global, sem mudança de página. O rótulo global é **Falar com a N8FLOW**; CTAs de página descrevem o próximo passo conforme o contexto. “Diagnóstico gratuito” permanece como explicação da oferta, não como rótulo repetido de botão.

## Formulários

Microcopy funcional: legenda de obrigatórios, orientação para habilitar JavaScript e aviso
de que uma tentativa anterior pode ter sido recebida antes de iniciar envio com dados diferentes.
Sem promessa de prazo. Esses estados exigem validação de layout/negócio antes de go-live.

Labels: Nome completo; E-mail; WhatsApp com DDD; Empresa; Cargo; Cidade; Segmento; Qual é o principal desafio da sua empresa?; Como podemos ajudar? Placeholder não substitui label. Campos de diagnóstico dependem de aprovação comercial.

Diagnóstico publicado: Nome completo, Empresa, E-mail profissional
e WhatsApp/Telefone são obrigatórios; Objetivo do contato possui as opções
Avaliar minha operação, Parcerias e Assunto institucional; Mensagem/contexto é
opcional. O valor técnico `diagnostico` permanece estável para persistência e analytics.
Expansões de qualificação continuam dependentes de aprovação comercial.

Validação:

- obrigatório: Informe {{fieldLabel}}.
- e-mail: Digite um e-mail válido.
- telefone: Digite um WhatsApp válido com DDD.
- geral: Revise os campos destacados e tente novamente.
- consentimento: definir somente após revisão jurídica.

Processamento: Enviando...; Continuando...; Enviando para análise...; Sua solicitação já está sendo processada.

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

Global persistente: **Falar com a N8FLOW** → abre o formulário global

Por página:

- Home primário: Entender meu próximo passo
- Home final: Conversar sobre meu negócio
- Home secundário: Ver o que fazemos
- Serviços primário: Encontrar a solução certa
- Serviços final: Conversar sobre meu negócio
- Serviços secundário: Ver como trabalhamos
- Método primário: Aplicar este método ao meu negócio
- Método final: Conversar sobre minha operação
- Método secundário: Ver nossas soluções
- Sobre: Falar com a N8FLOW
- Formulário global: Enviar para análise
- Detalhe de serviço no Hero: Avaliar esta solução
- Detalhe de serviço ao final: Conversar sobre esta solução
- Conteúdo individual: Conhecer nossas soluções; Ver outros conteúdos
- Cases sem publicação: Ver soluções; Ver método
- Cases: Conversar sobre minha operação
- Detalhe de case: Avaliar minha operação
- Cases: Ver case
- Secundários: Ver o que fazemos; Ver como trabalhamos; Ver nossas soluções; Tentar novamente

“Diagnóstico gratuito” pode aparecer em apoio, FAQ e explicação da conversa inicial. Não usar “Agendar” sem calendário, “Receber diagnóstico” sem entrega automática ou chamadas que sugiram garantia e repetição de resultados.

Falar pelo WhatsApp somente com canal público confirmado. Não usar "Saiba mais" como CTA primário quando houver ação concreta.
