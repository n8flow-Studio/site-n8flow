# 2. Conteúdo, dados e cache

## 2.1 Fonte de conteúdo v1

**Decisão técnica:** começar com Markdown/MDX versionado no Git. Motivos: fluxo centrado em agentes, review por diff, deploy reproduzível e ausência atual de requisito confirmado para edição sem deploy.

A aplicação deve acessar conteúdo por interface, não por `fs` espalhado:

```ts
export interface ContentRepository {
  listEvents(filter?: EventFilter): Promise<EventSummary[]>;
  getEvent(slug: string): Promise<Event | null>;
  listArticles(filter?: ArticleFilter): Promise<ArticleSummary[]>;
  getArticle(slug: string): Promise<Article | null>;
  listCases(): Promise<CaseSummary[]>;
  getCase(slug: string): Promise<CaseStudy | null>;
}
```

Isso permite migrar para CMS headless sem reescrever páginas. CMS só deve ser adotado se houver editor não técnico, publicação frequente, preview editorial ou workflow de aprovação que justifique operação adicional.

## 2.2 Modelos mínimos

### Evento

`id`, `slug`, `title`, `summary`, `status`, `startsAt`, `endsAt?`, `timezone`, `venue`, `address`, `price?`, `currency`, `capacity?`, `image?`, `seo`, `body`. Status público confirmado: `published | open | sold_out | closed`; `draft` nunca aparece em produção.

### Artigo

`slug`, `title`, `description`, `publishedAt`, `updatedAt?`, `author`, `category`, `tags`, `readingTime?`, `image?`, `relatedServices?`, `seo`, `body`.

### Case

`slug`, `title`, `summary`, `services`, `challenge`, `approach`, `results?`, `metrics?`, `testimonial?`, `publishedAt`, `seo`, `body`. Resultados e prova são opcionais e somente reais.

### Serviço

`slug`, `title`, `summary`, `problems`, `outcomes`, `capabilities`, `process?`, `faq?`, `seo`, `body`. Ferramentas não devem dominar título ou proposta.

## 2.3 Schemas e validação editorial

Todo frontmatter passa por schema no build. Falta de campo obrigatório deve falhar CI com caminho e campo. Datas em ISO 8601; timezone explícito; moeda `BRL`; slugs únicos, estáveis e lowercase. Links internos inválidos e assets ausentes devem falhar verificação.

## 2.4 Persistência operacional

O repositório de conteúdo não é banco de leads nem fonte de verdade de pagamento. Leads pertencem ao fluxo n8n/Bolten; pagamentos, ao gateway. Se idempotência, auditoria ou fila exigirem persistência adicional, escolher armazenamento por ADR após medir requisitos.

## 2.5 Cache e renderização

- Home, serviços, sobre e páginas legais: estáticas por deploy enquanto Git for fonte.
- Blog, cases e eventos: `generateStaticParams` quando volume permitir; página dinâmica com cache controlado se migrar para CMS.
- Dados sensíveis, status de checkout e callbacks: nunca cache público.
- Revalidation on-demand só após CMS e webhook autenticado.
- `notFound()` para slug inexistente/não publicado.

Não cachear falhas como sucesso. Conteúdo temporal de evento deve considerar `America/Sao_Paulo` na apresentação e ISO/UTC no transporte.

## 2.6 Assets

Assets editoriais ficam em diretório previsível ou CDN do CMS futuro. Imagens requerem dimensões, alt e autoria/licença quando aplicável. Usar otimização do framework, `sizes` e preload somente para imagem LCP. SVG não confiável não deve ser injetado como HTML.

