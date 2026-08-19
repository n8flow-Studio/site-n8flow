# 6. Formulários e acessibilidade

## 6.1 Padrão de formulário

Ordem: contexto → campos essenciais → campos condicionais → consentimento → ação → feedback. Uma coluna no mobile; duas somente para campos naturalmente relacionados no desktop. Marcar opcionais explicitamente; não depender de asterisco sem legenda.

Evento — campos confirmados: nome, e-mail, WhatsApp e CRECI. Campos UTM, landing page e ID do evento são técnicos e invisíveis. Diagnóstico — os documentos sugerem nome, empresa, e-mail, WhatsApp, cargo, cidade, segmento e desafio; qualificação final permanece **pendente**.

## 6.2 Validação

- validar no servidor e usar validação cliente para feedback rápido;
- mostrar erro após blur ou submissão, não punir durante digitação inicial;
- mensagem específica, próxima ao campo e associada por ID;
- no submit inválido, focar/resumir o primeiro erro sem apagar valores válidos;
- formatos não devem impedir colar; normalizar telefone no servidor;
- loading impede reenvio; timeout oferece nova tentativa;
- sucesso confirma o que ocorreu e o próximo passo real.

Estados do Field: default, hover, focus, filled, disabled, readonly, loading quando aplicável, success somente quando útil, error. Não usar verde para todo campo válido durante preenchimento.

## 6.3 Acessibilidade — requisitos

Meta: WCAG 2.2 AA.

- contraste: 4.5:1 para texto normal, 3:1 para texto grande e componentes essenciais;
- alvo mínimo: 24×24 CSS px segundo WCAG, com padrão do DS de 44×44 px para controles principais;
- foco visível e não oculto por conteúdo sticky;
- ordem DOM acompanha ordem visual;
- landmarks, heading hierarchy e um H1 por página;
- skip link para conteúdo principal;
- teclado completo, sem armadilhas salvo modal com escape/restauração;
- labels, nomes acessíveis, mensagens e instruções programaticamente associados;
- mídia com alternativa; captions/transcrição quando aplicável;
- zoom 200% e reflow a 320 CSS px sem perda funcional;
- idioma `pt-BR`; datas e moedas legíveis por tecnologia assistiva;
- `prefers-reduced-motion` respeitado.

## 6.4 Cor e dados

Status combina texto/ícone/padrão com cor. Gráficos devem ter legenda, rótulos e alternativa tabular quando necessários. Verde e roxo não devem ser presumidos contrastantes com texto branco: testar a combinação; no verde de marca, preferir texto quase preto.

## 6.5 Privacidade e segurança de UX

Não coletar campos sem finalidade definida. Consentimento não deve ser pré-marcado. Mensagens não revelam detalhes internos de webhook/CRM. Credenciais e endpoints privados ficam server-side. Política de privacidade e termos permanecem pendentes até conteúdo jurídico válido.

## 6.6 Testes mínimos

Teclado, NVDA ou VoiceOver em fluxos críticos, axe automatizado, contraste, zoom 200%, reflow 320 px, redução de movimento e estados de erro. Automação não substitui teste manual.

