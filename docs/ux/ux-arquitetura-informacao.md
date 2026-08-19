# Especificação de UX + Arquitetura de Informação
**Site Institucional N8FLOW TECNOLOGIA — Versão 1.0**

> Conversão validada para Markdown a partir do `.docx` de referência. Conteúdo e tabelas preservados; marcadores internos do export removidos.

Documento de especificação para orientar arquitetura de informação, jornadas, UX, navegação, hierarquia de conteúdo, CTAs e comportamento responsivo do site institucional da N8FLOW.
Base estratégica: PRD do Site Institucional N8FLOW + conceito de negócio fornecido. Decisões posteriores do projeto foram incorporadas quando já definidas pelo usuário.
# 1. Objetivo do documento
Definir como o visitante encontra, entende, navega e converte dentro do ecossistema digital da N8FLOW. O documento antecede o Design System e a implementação visual, servindo como contrato funcional de UX.
- Definir a arquitetura de informação e o sitemap.
- Definir a função de cada página e seção.
- Definir as jornadas prioritárias.
- Definir a hierarquia de navegação e CTAs.
- Definir comportamento mobile e desktop.
- Definir estados e componentes funcionais de alto nível.
- Preparar a estrutura para SEO, analytics e evolução do conteúdo.
# 2. Premissas estratégicas
A N8FLOW deve ser apresentada como Assessoria de Growth Marketing e Tecnologia para construção de máquinas de vendas, e não como um catálogo de serviços isolados.
O modelo de negócio possui três níveis: Educação/Eventos, Comunidade e Assessoria/Tecnologia. O documento-base descreve essa lógica como Educação → Comunidade → Assessoria/Serviços.
O público inicial está concentrado no mercado imobiliário, especialmente corretores, imobiliárias e incorporadoras. Os serviços B2B são direcionados principalmente a imobiliárias e incorporadoras.
# 3. Princípio central de UX
A experiência deve responder, nesta ordem, às cinco perguntas do visitante:
1. O que é a N8FLOW?
1. Que problema ela resolve?
1. Como ela resolve?
1. Isso é relevante para o meu perfil?
1. Qual é o próximo passo?
O site deve evitar obrigar o visitante a compreender toda a oferta antes de agir.
# 4. Públicos e jornadas

| Público | Necessidade principal | Entrada provável | Conversão prioritária |
| --- | --- | --- | --- |
| Corretor | Aprender, captar oportunidades, usar IA/CRM e melhorar operação | Evento / Conteúdo | Evento → Comunidade |
| Imobiliária | Estruturar aquisição, atendimento, CRM e automação | Conteúdo / Evento / Indicação | Diagnóstico |
| Incorporadora | Escalar marketing, vendas, dados e automação | Conteúdo / Indicação / Evento | Diagnóstico |
| Visitante exploratório | Entender a N8FLOW | Busca / Social / Indicação | Conteúdo / Evento |

## 4.1 Jornada A — visitante frio
Fluxo: Aquisição → Home → Entendimento do posicionamento → Identificação com problema → Método → Solução → CTA.
CTA preferencial: evento. CTA secundário: conteúdo/comunidade.
## 4.2 Jornada B — corretor
Fluxo: Conteúdo ou anúncio → Evento → Inscrição → Participação → Comunidade.
O site deve reduzir fricção e tornar o próximo evento claramente acessível.
## 4.3 Jornada C — empresa
Fluxo: Conteúdo/indicação/evento → Serviços → Prova/método → Diagnóstico → Bolten/n8n → contato comercial.
O visitante empresarial precisa perceber competência estratégica antes de receber um CTA comercial de alto compromisso.
## 4.4 Jornada D — usuário recorrente
Fluxo: Google/Social → Blog → Artigo relacionado → CTA contextual → Evento, Comunidade ou Diagnóstico.
# 5. Arquitetura de informação
Sitemap recomendado para o MVP e expansão:
- /
- /eventos
- /eventos/[slug]
- /comunidade
- /servicos
- /servicos/sites-e-landing-pages
- /servicos/automacao-e-ia
- /servicos/crm-e-agentes
- /servicos/trafego-e-dados
- /cases
- /cases/[slug]
- /blog
- /blog/[slug]
- /sobre
- /contato
- /privacidade
- /termos
Páginas individuais de serviço, cases e múltiplos eventos ficam preparadas na arquitetura, mas só devem ser publicadas quando houver conteúdo suficiente.
# 6. Hierarquia global de navegação
## 6.1 Header desktop
Logo | Soluções | Comunidade | Eventos | Cases | Conteúdos | CTA
CTA principal recomendado no header: “Participar do próximo evento” enquanto houver evento aberto. Em contexto B2B, pode alternar para “Solicitar diagnóstico” em páginas de serviços.
## 6.2 Header mobile
Logo | Menu | CTA persistente contextual.
- Menu deve abrir em painel/overlay simples.
- Itens devem manter a mesma hierarquia do desktop.
- CTA primário deve permanecer facilmente acessível.
- Evitar menus multinível profundos.
## 6.3 Footer
- Resumo de posicionamento.
- Navegação principal.
- Soluções.
- Eventos.
- Comunidade.
- Conteúdos.
- Contato.
- Redes sociais.
- Informações empresariais.
- Privacidade e Termos.
# 7. Mapa de páginas e objetivos

| Página | Objetivo | CTA principal | Público |
| --- | --- | --- | --- |
| / | Posicionamento, autoridade e distribuição do tráfego | Participar do próximo evento | Todos |
| /eventos | Apresentar eventos disponíveis | Ver evento | Corretores / profissionais |
| /eventos/[slug] | Converter inscrição | Quero participar | Participantes |
| /comunidade | Converter recorrência | Quero fazer parte | Corretores / profissionais |
| /servicos | Gerar demanda B2B | Solicitar diagnóstico | Imobiliárias / incorporadoras |
| /servicos/[slug] | Explicar solução específica | Solicitar diagnóstico | B2B |
| /cases | Prova social | Ver case | B2B |
| /cases/[slug] | Demonstrar capacidade e resultado | Falar com a N8FLOW | B2B |
| /blog | Aquisição orgânica | Ler conteúdo | Todos |
| /blog/[slug] | Educação + conversão contextual | CTA relacionado | Todos |
| /sobre | Humanizar e reforçar autoridade | Conhecer soluções | Todos |
| /contato | Canal institucional/comercial | Enviar mensagem | Todos |

# 8. Especificação UX da Home
A Home é a principal página de posicionamento e distribuição. Ela deve funcionar como narrativa, não como catálogo.
## 8.1 Seção 01 — Hero
Objetivo: responder imediatamente o que a N8FLOW faz e apresentar o próximo passo.
- Headline orientada a transformação.
- Subheadline explicando Growth + Tecnologia + máquina de vendas.
- CTA primário: Participar do próximo evento.
- CTA secundário: Conhecer as soluções.
- Elemento visual de marca/tecnologia.
- Prova curta, quando houver.
## 8.2 Seção 02 — O problema
Mostrar que leads, ferramentas e tráfego isolados não constituem uma máquina de vendas.
- Falta de processo.
- Atendimento manual.
- CRM subutilizado.
- Leads sem acompanhamento.
- Dados desconectados.
- Automação sem estratégia.
## 8.3 Seção 03 — A tese N8FLOW
Apresentar a ideia central: Growth é a integração entre estratégia, processos, tecnologia, dados, automação e vendas.
## 8.4 Seção 04 — Método
Apresentar Educação → Comunidade → Assessoria/Serviços. O conceito é derivado do documento-base.
- Educação: entrada e capacitação.
- Comunidade: acompanhamento e relacionamento.
- Assessoria: implementação e tecnologia.
## 8.5 Seção 05 — Soluções
Apresentar os quatro blocos funcionais da oferta:
- Sites & Landing Pages.
- Automação & IA.
- CRM & Agentes.
- Tráfego & Dados.
A taxonomia deve ser apresentada por problemas/resultados antes de apresentar ferramentas.
## 8.6 Seção 06 — Evento
Bloco de alta prioridade para aquisição. Deve mostrar o próximo evento com data, horário, local, preço e benefício principal.
Local definido: Seahub Sebrae, Av. Lima e Silva, 76 – Lagoa Nova.
O documento-base define evento presencial com capacidade de 40 pessoas e ticket de R$ 97.
## 8.7 Seção 07 — Cases / prova
Exibir cases somente quando existirem dados e provas reais. Não fabricar números ou depoimentos.
## 8.8 Seção 08 — Conteúdo
Exibir artigos estratégicos para aquisição orgânica e educação.
## 8.9 Seção 09 — CTA final
CTA final contextual. Preferencialmente evento em campanha de aquisição; diagnóstico quando a página estiver orientada ao B2B.
# 9. Página de Eventos
## Objetivo
Ser o hub dos eventos da N8FLOW.
## Estrutura
- Hero curto.
- Próximo evento em destaque.
- Lista de próximos eventos.
- Eventos anteriores, quando existirem.
- CTA para evento em destaque.
# 10. Página individual de evento
A página do evento é uma landing page transacional.
## Estrutura recomendada
1. Hero com nome, data, local, preço e CTA.
1. Para quem é.
1. O que o participante aprenderá.
1. Problemas que serão abordados.
1. Agenda/conteúdo.
1. Palestrantes, quando houver.
1. Local e informações práticas.
1. Vagas/capacidade.
1. FAQ.
1. Formulário/checkout.
1. CTA final.
O documento-base define os temas do evento como presença digital, IA, CRM, agentes de IA, captação de leads, tráfego pago e aquisição orgânica.
# 11. Página Comunidade
Objetivo: transformar o interesse pontual em relacionamento recorrente.
- Hero com promessa da comunidade.
- Problema do profissional sem acompanhamento.
- O que é a comunidade.
- Benefícios.
- O que está incluído.
- Como funciona.
- Para quem é.
- Provas/depoimentos, quando existirem.
- Preço.
- FAQ.
- CTA de assinatura.
O documento-base define R$ 597/mês e inclui networking, estratégias contínuas, templates, suporte prático, aulas e encontros online.
# 12. Página Serviços
Objetivo: converter empresas maduras em oportunidades comerciais.
- Hero B2B.
- Diagnóstico do problema.
- Tese: máquina de vendas.
- Ecossistema de soluções.
- Detalhamento dos serviços.
- Método de trabalho.
- Tecnologias como prova de capacidade, não como argumento isolado.
- Cases.
- FAQ.
- Formulário de diagnóstico.
O documento-base define serviços de sites, landing pages, automações n8n, CRM com agentes de IA, WhatsApp, tráfego, tracking e API de Conversões.
# 13. Páginas individuais de serviço
Cada página deve seguir uma estrutura orientada a problema → solução → aplicação → prova → CTA.
- Hero.
- Problema.
- Como a solução funciona.
- Aplicações.
- O que a N8FLOW entrega.
- Integrações/tecnologias.
- Processo.
- Case relacionado.
- FAQ.
- CTA de diagnóstico.
# 14. Cases
O case deve ser tratado como prova de competência.
- Contexto.
- Problema.
- Diagnóstico.
- Estratégia.
- Implementação.
- Resultado.
- Métricas comprovadas.
- Depoimento, quando houver.
- CTA.
# 15. Blog
O blog deve funcionar como mecanismo de aquisição e nutrição, não apenas como arquivo de notícias.
Temas previstos no documento-base incluem redução de CPL, pixel, API de Conversões, automação de atendimento, Growth e tecnologia.
- Home do blog com destaque.
- Categorias/temas.
- Busca, se a quantidade de conteúdo justificar.
- Artigos relacionados.
- CTA contextual.
- Links internos para evento, comunidade ou serviços.
# 16. Sobre
Página institucional para explicar quem está por trás da N8FLOW, visão, posicionamento e princípios. Não deve duplicar a Home.
- Origem/visão.
- Posicionamento.
- Princípios.
- Competências.
- Tecnologia.
- CTA.
# 17. Contato
Página para contatos institucionais e comerciais que não se enquadram diretamente no funil de evento ou diagnóstico.
- Formulário.
- E-mail.
- WhatsApp.
- Dados empresariais.
- Links sociais.
- Privacidade.
Empresa: N8FLOW TECNOLOGIA CONSULTORIA EM TI LTDA. CNPJ: 68.352.519/0001-72.
# 18. Sistema de CTAs

| Contexto | CTA primário | CTA secundário |
| --- | --- | --- |
| Home | Participar do próximo evento | Conhecer as soluções |
| Evento | Quero participar | Ver informações |
| Comunidade | Quero fazer parte | Conhecer benefícios |
| Serviços | Solicitar diagnóstico | Conhecer soluções |
| Case | Falar com a N8FLOW | Ver outros cases |
| Blog | CTA contextual | Conhecer a N8FLOW |
| Sobre | Conhecer soluções | Entrar em contato |

# 19. Regras de CTA
- Uma ação deve dominar visualmente cada seção.
- CTA deve corresponder ao estágio de maturidade.
- Evitar “Saiba mais” como CTA primário quando uma ação concreta for possível.
- Não usar CTA de evento em páginas onde o objetivo principal é diagnóstico, salvo como alternativa.
- Manter consistência sem impedir contextualização.
# 20. Formulário de evento — UX
Campos mínimos: nome, e-mail, WhatsApp e CRECI. O documento-base define esses dados para o evento.
- Campos de atribuição devem ser capturados sem criar fricção.
- Erros devem aparecer próximos ao campo.
- Não limpar dados válidos após erro.
- Botão deve indicar processamento.
- Sucesso deve confirmar claramente o próximo passo.
- Falha de integração deve permitir nova tentativa.
# 21. Formulário de diagnóstico — UX
- Nome.
- Empresa.
- E-mail.
- WhatsApp.
- Cargo.
- Cidade.
- Segmento.
- Principal desafio.
- Informações operacionais relevantes.
- Consentimento quando necessário.
Campos finais e critérios de qualificação ainda dependem da definição comercial.
# 22. Estados de interface

| Estado | Comportamento |
| --- | --- |
| Default | Elemento pronto para interação. |
| Hover | Feedback discreto e consistente. |
| Focus | Foco visível e acessível. |
| Loading | Feedback de processamento sem duplicar submissão. |
| Success | Confirmação + próximo passo. |
| Error | Mensagem objetiva + correção/tentativa novamente. |
| Disabled | Estado visual e sem interação. |
| Empty | Explicação e CTA quando aplicável. |

# 23. Responsividade
## Mobile
- Priorizar leitura e CTA.
- Hero vertical e curto.
- Cards em uma coluna ou carrossel somente quando necessário.
- CTAs com área de toque adequada.
- Formulários em uma coluna.
- Header compacto.
- Evitar elementos decorativos que prejudiquem performance.
## Tablet
- Usar composição intermediária.
- Permitir grids de 2 colunas quando houver ganho real.
- Manter hierarquia do desktop.
## Desktop
- Usar grid e whitespace para transmitir sofisticação.
- Seções podem utilizar composições assimétricas.
- Não transformar o desktop em excesso de informação.
# 24. Acessibilidade UX
- Contraste suficiente entre texto e fundo.
- Foco visível.
- Navegação por teclado.
- Labels explícitos em formulários.
- Headings hierárquicos.
- Alt text.
- Não depender apenas de cor para comunicar estado.
- Respeitar prefers-reduced-motion.
# 25. Direção visual preliminar
A identidade deverá partir da logo já criada e das cores #00F5A0 e #6E44FF.
Direção recomendada: “Engineering Growth” — tecnologia, engenharia, fluxo, conexão e crescimento.
- Base visual dark-first.
- Verde como energia/ação/conversão.
- Roxo como inteligência/tecnologia.
- Neutros escuros para profundidade.
- Linhas, grids, nós e fluxos como elementos gráficos.
- Motion discreto e funcional.
- Evitar aparência de agência tradicional ou startup genérica.
# 26. Tipografia preliminar
Recomendação: Space Grotesk para títulos e Inter para corpo/interface.
Esta é uma recomendação de Design System e ainda deverá ser validada visualmente antes de congelamento.
# 27. Tom de voz preliminar
Estratégico + técnico + direto + provocativo + didático.
- Falar primeiro de problema e resultado.
- Usar tecnologia como meio.
- Evitar buzzwords vazias.
- Ser seguro sem ser arrogante.
- Ser técnico sem exigir conhecimento técnico do cliente.
# 28. Conteúdo e UX
A arquitetura deve impedir que a tecnologia domine a mensagem. O usuário deve entender o resultado antes da implementação.
Exemplo de hierarquia: “Construímos sua máquina de vendas” → “como fazemos” → “quais soluções usamos” → “quais tecnologias integramos”.
# 29. SEO e arquitetura
- Cada página comercial deve possuir intenção de busca e intenção de conversão claramente definidas.
- URLs devem ser estáveis e legíveis.
- Blog deve apontar para páginas de solução.
- Cases devem apontar para serviços relacionados.
- Eventos devem possuir URLs próprias.
- Breadcrumbs devem ser usados quando a profundidade justificar.
# 30. Analytics orientado à UX
A UX deverá ser instrumentada para medir comportamento e não apenas page views.
- view_event
- click_event_cta
- start_event_registration
- submit_lead
- begin_checkout
- purchase
- view_community
- click_community_cta
- view_services
- submit_diagnosis
- view_case
- click_whatsapp
# 31. Arquitetura de conversão
O site deverá funcionar como uma matriz de caminhos, e não como um funil linear obrigatório.
- Visitante de baixa maturidade → evento.
- Visitante interessado em aprendizado → comunidade.
- Empresa madura → diagnóstico.
- Usuário de busca → conteúdo → solução.
- Usuário recorrente → CTA contextual.
# 32. Relação com o ecossistema tecnológico
O site é a camada de aquisição e experiência. O n8n atua como orquestrador. O Bolten é o CRM e camada de relacionamento. A API oficial de WhatsApp é utilizada via Bolten. O gateway será definido para suportar evento e recorrência.
Essa separação evita acoplamento desnecessário entre frontend e sistemas operacionais.
# 33. Regras para o conteúdo dinâmico
- Eventos devem permitir status: rascunho, publicado, aberto, esgotado e encerrado.
- Artigos devem possuir slug, metadata e relacionamento com soluções.
- Cases devem possuir slug e serviços relacionados.
- Serviços devem possuir slug e CTA próprio.
# 34. Critérios de aceite de UX
- Um visitante novo entende o posicionamento sem navegar por várias páginas.
- O próximo evento é facilmente encontrado.
- Um corretor identifica seu caminho de entrada.
- Uma empresa identifica o caminho para diagnóstico.
- A diferença entre comunidade e assessoria é clara.
- Cada página comercial possui um CTA dominante.
- Formulários são compreensíveis e têm feedback de estado.
- Mobile não perde a hierarquia do desktop.
- A navegação permite chegar a qualquer página pública em poucos passos.
- O conteúdo não depende de conhecimento técnico prévio.
# 35. Decisões congeladas nesta especificação

| Item | Decisão |
| --- | --- |
| Domínio | n8flow.com.br |
| Logo | Já criada |
| Cor primária | #00F5A0 |
| Cor secundária | #6E44FF |
| Evento | Seahub Sebrae |
| Endereço | Av. Lima e Silva, 76 – Lagoa Nova |
| CRM | Bolten White Label |
| WhatsApp | API Oficial via Bolten |
| Empresa | N8FLOW TECNOLOGIA CONSULTORIA EM TI LTDA |
| CNPJ | 68.352.519/0001-72 |

# 36. Pontos ainda pendentes
- Gateway definitivo.
- CMS definitivo, caso a operação exija edição fora do Git.
- Datas e calendário dos eventos.
- Palestrantes.
- Oferta e regras da comunidade.
- Copy final.
- Cases e depoimentos.
- Identidade visual final além da logo e cores.
- Tipografia após validação visual.
- Tom de voz final após validação de copy.
- Dados de contato e redes sociais.
- Regras comerciais do diagnóstico.
- Política de privacidade e termos.
# 37. Próximo documento
Com a arquitetura de informação e UX definidas, o próximo artefato recomendado é o Design System da N8FLOW.
Ele deverá transformar a direção visual em tokens e componentes implementáveis: cores, tipografia, spacing, grid, radius, sombras, botões, inputs, cards, navegação, badges, accordions, estados, motion e padrões responsivos.
Depois do Design System, a sequência recomendada é: Copy/Conteúdo → Arquitetura técnica Next.js → Especificação de componentes → Integrações → SEO → Analytics → QA → Implementação.

Documento elaborado para servir como fonte de verdade de UX e arquitetura de informação do projeto N8FLOW TECNOLOGIA.
