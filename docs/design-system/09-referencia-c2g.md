# Referência C2G e adaptação visual N8FLOW

## Origem e análise

Arquivo fornecido: `agenciac2g.com.br.zip`, 9.094.010 bytes. Referência pública: https://agenciac2g.com.br/.

O pacote é uma captura de um site WordPress/Elementor, não um design system isolado. Inventário: 40 CSS, 21 HTML, 3 JS, 3 JSON, 1 PHP, 17 PNG, 7 SVG, 48 WebP, 4 WOFF2 e 4 entradas sem extensão. As folhas de estilo e documentos contêm também widgets e embeds externos; suas fontes e cores não devem ser confundidas com a identidade principal. O conteúdo foi inspecionado como dados, sem executar os scripts do pacote.

| Grupo                         | Observação                                                                                                                   | Adaptação                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `post-8.css`, `post-6793.css` | Tokens globais, home, Codec Pro regular/bold, Sundry Condensed Heavy; Montserrat também declarado                            | Anton 400 no display; Inter no corpo/interface. Fontes do pacote não copiadas                    |
| `local-6793-frontend-*`       | Regras desktop, laptop, tablet e mobile; breakpoints 1366, 1024, 767                                                         | Grid responsivo existente, sem copiar CSS gerado do Elementor                                    |
| Paleta principal              | Burgundys `#0D0106`, `#14020A`, `#1C030D`, creme `#F7F4ED`, lilás `#AB77FF`, rosa/laranja                                    | Ink `#100E18`, painel `#1B1729`, papel `#F5F2EC`, lilás `#E8E0FC`; marcas verde/roxo preservadas |
| Tipografia                    | Display pesado, condensado, caixa alta; corpo geométrico, escalas responsivas                                                | Headline fluida 44–76px; títulos 28–52px; Inter no corpo 16px/1,75 no Hero                       |
| Motion customizado            | `c2g-onda`, `c2g-persiana`, `c2g-reveal`, `c2g-slat-in`; delays escalonados e loops                                          | Lâminas com onda finita de 2,4s + atraso de até 805ms; SVG e CSS, sem nova biblioteca            |
| Componentes                   | Hero, apresentação, serviços, cases, sócios, avaliações, conteúdo, contato; cartões com retrato lateral e faixas segmentadas | Preservar seções e copy N8FLOW; adaptar cartões dos sócios e tratamento gráfico                  |
| Widgets e scripts             | Elementor, estilos Swiper/Lenis, lazy loading e embeds de avaliações/redes sociais                                           | Não importar: desnecessários ao escopo e potencialmente custosos                                 |
| Imagens/fontes binárias       | Retratos, clientes, imagens editoriais, variações responsivas, quatro fontes WOFF2                                           | Não reutilizar identidade/conteúdo de terceiros. Fotos N8FLOW pendentes                          |

Não foi feita uma reprodução pixel a pixel ou auditoria visual individual de cada imagem duplicada/embed. A adaptação toma como referência os estilos e a estrutura principal, e não resultados comerciais, textos ou pessoas do outro site.

## Implementação e manutenção

Tokens de marketing em `src/styles/tokens.css`, regras em `src/styles/marketing.css`. Tema escuro contextual em Hero, soluções e sócios; alternância de papel/lilás nas demais áreas. Formulários, navegação e painel mantêm seus fluxos.

Anton permanece como display condensado, inclusive com os pesos fortes definidos nos componentes. Em subtítulos editoriais e títulos funcionais longos, a classe `display-readable` abre somente tracking e entrelinha (`0.012em`/`1.2`); headlines de Hero preservam a composição compacta própria.

`BrandSlats` é decorativo (`aria-hidden`), renderizado no servidor e não acrescenta dependência JavaScript. Respeita `prefers-reduced-motion`; não há animação infinita ou atraso de visibilidade do texto.

### Fotos e bios dos sócios

Foto 02 de Pedro aprovada e inserida em `public/brand/team/pedro-nascimento.png`, preservando o arquivo original e as cores. `next/image` entrega versões otimizadas com carregamento lazy; o enquadramento responsivo prioriza o rosto. A foto de Wedson e ambas as biografias continuam pendentes.

Em `src/components/marketing/founders.tsx`, preencher futuramente `photo: { src, alt }` e `bio` no registro de cada sócio. Salvar retratos autorizados em `public/brand/team/`, preferencialmente WebP em proporção vertical. Por exemplo, o arquivo `public/brand/team/wedson-santos.webp` será referenciado por `/brand/team/wedson-santos.webp`.

Enquanto não fornecidos, a área de imagem apresenta apenas um contorno decorativo e a área de bio fica vazia, conforme pedido explícito. Nenhuma imagem quebrada, fotografia de terceiros, texto fictício ou promessa comercial deve ser publicada. A imagem futura usa `next/image`, tamanho reservado e carregamento lazy padrão.

## QA

Preservar conteúdo existente. Validar desktop/mobile, quebra de títulos, contraste nos fundos, navegação por teclado, formulário e redução de motion. Medições locais não substituem GTmetrix em produção; não atribuir uma nova nota sem medição.

### Verificação desta entrega

- Build de produção e typecheck concluídos; lint sem erros, com dois warnings preexistentes de imports `Card` não utilizados em cases e serviço individual.
- 61 testes passaram, incluindo os dois novos de sócios. Dois testes de `repository.test.ts` falham por expectativas de slug/título anteriores à copy atual; os arquivos de conteúdo e esses testes não foram alterados nesta tarefa.
- Comparação via AST: os 82 textos/atributos não visuais da Home permanecem idênticos ao HEAD inicial. A nova seção usa somente os dados aprovados.
- Inspeção visual desktop e mobile; sem overflow horizontal nas larguras testadas de 390px e 320px; menu abre e fecha com Escape. Contato inspecionado sem enviar leads.
- Identificado link antigo de estratégia no footer (`/servicos/estrategia-e-gestao-de-growth`), enquanto a rota atual é `/servicos/presenca-digital-e-posicionamento`. Mantido para não ampliar o escopo visual; corrigir em tarefa específica.
- Sem nova medição GTmetrix e sem commit, push ou deploy.
