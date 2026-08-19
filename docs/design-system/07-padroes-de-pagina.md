# 7. Padrões de página

As ordens abaixo são **confirmadas pela UX/IA**, com composição visual recomendada pelo DS. Módulos sem conteúdo real devem ser omitidos.

## Home

Header → Hero → Problema → Tese N8FLOW → Método (Educação, Comunidade, Assessoria) → Soluções → Próximo evento → Cases/prova, quando existirem → Conteúdo → CTA final → Footer.

CTA primário: “Participar do próximo evento” enquanto houver evento aberto. Secundário: soluções. Hero em duas colunas no desktop e uma no mobile.

## Eventos

Hero curto → evento em destaque → próximos → anteriores, quando existirem → CTA. EventCard adapta estado. Página individual: Hero transacional → público → aprendizados → problemas → agenda → palestrantes, se confirmados → local → vagas → FAQ → formulário/checkout → CTA final.

## Comunidade

Hero → problema do profissional isolado → definição → benefícios → inclusões → funcionamento → público → depoimentos reais → preço vigente → FAQ → assinatura. Oferta e regras continuam pendentes; Pricing não deve inferi-las.

## Serviços

Hero B2B → problema → tese/máquina de vendas → ecossistema → serviços → método → tecnologias como prova → cases reais → FAQ → diagnóstico. CTA primário: solicitar diagnóstico. Serviço individual: problema → solução → aplicações → entregas → integrações → processo → case → FAQ → diagnóstico.

## Cases

Hub de provas → filtros somente se volume justificar → cards. Detalhe: contexto → problema → diagnóstico → estratégia → implementação → resultados/métricas comprovados → depoimento autorizado → CTA.

## Blog

Destaque → temas/categorias validados → lista → CTA contextual. Artigo: breadcrumb → título/metadados → conteúdo → relacionados → CTA contextual → compartilhamento. Linha de leitura máxima 720 px. Busca só quando volume justificar.

## Sobre e Contato

Sobre: origem/visão confirmadas → posicionamento → princípios → competências → tecnologia → CTA; não duplicar Home nem inventar história. Contato: contexto → formulário → canais confirmados → dados empresariais → legais. Canais/redes ausentes permanecem slots não publicados.

## Estados de página

- `loading`: preservar estrutura para evitar layout shift;
- `not-found`: explicar, oferecer navegação e busca quando existir;
- `empty`: não mascarar ausência com dados fictícios;
- `integration-error`: mensagem humana, retry seguro e persistência dos dados preenchidos;
- `success`: confirmação específica e próximo passo.

## SEO visual/estrutural

Hierarquia de headings não segue tamanho visual. Breadcrumb em páginas profundas. Imagens recebem dimensões. CTA contextual não deve prejudicar leitura. Organization, Event, Article, BreadcrumbList e outros schemas só quando semanticamente verdadeiros e com dados publicados.

