# 1. Fundamentos visuais

## 1.1 Princípios

### Engenharia antes de ornamento

**Confirmada.** A interface deve materializar integração, fluxo, dados e crescimento. Elementos gráficos devem explicar relações ou orientar a atenção; decoração não pode competir com conteúdo ou conversão.

### Resultado antes da tecnologia

**Confirmada.** A mensagem apresenta problema e resultado antes de ferramentas. Tecnologia funciona como prova de capacidade, não como argumento isolado.

### Uma ação dominante

**Confirmada.** Cada seção comercial deve ter um CTA visualmente dominante, adequado à maturidade do visitante. Evitar “Saiba mais” quando houver ação concreta.

### Densidade controlada

**Recomendada DS.** Usar contraste, respiro e agrupamento para transmitir precisão. Não preencher todas as áreas disponíveis nem depender de glassmorphism excessivo.

### Movimento com função

**Confirmada.** Motion deve indicar relação, estado ou continuidade. Deve ser discreto, performático e dispensável para compreensão.

## 1.2 Linguagem Engineering Growth

**Confirmada.** A direção combina tecnologia, engenharia, fluxo, conexão e crescimento. Recursos permitidos:

- grids técnicos de baixa opacidade;
- nós, linhas e caminhos direcionais;
- gráficos abstratos e fluxos de dados;
- recortes geométricos e assimetria controlada;
- verde ou roxo apenas em focos estratégicos, preferencialmente como linha, marcador ou superfície curta.

Evitar estética de “agência tradicional”, imagens genéricas de apertos de mão, excesso de neon, circuitos literais, robôs humanoides e dashboards fictícios apresentados como resultados reais.

## 1.3 Tipografia

**Recomendada DS; requer validação visual antes de congelar.**

| Papel           | Família       | Pesos              | Uso                              |
| --------------- | ------------- | ------------------ | -------------------------------- |
| Display         | Space Grotesk | 500, 600, 700      | hero, H1–H3, números de destaque |
| Interface/corpo | Inter         | 400, 500, 600, 700 | texto, labels, botões, tabelas   |

Fallbacks:

```css
--font-display: 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
--font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
```

Carregar via `next/font/google`, com `display: swap`, subsets necessários e variáveis CSS. Não usar mais de quatro pesos por família.

### Escala responsiva

| Token        | Mobile | Desktop | Line-height | Uso              |
| ------------ | -----: | ------: | ----------: | ---------------- |
| `display-xl` |  44 px |   72 px |   1.00–1.05 | hero principal   |
| `display-lg` |  38 px |   60 px |        1.05 | landing hero     |
| `h1`         |  36 px |   52 px |        1.08 | título de página |
| `h2`         |  30 px |   40 px |        1.15 | seção            |
| `h3`         |  24 px |   30 px |        1.20 | grupo/card       |
| `h4`         |  20 px |   24 px |        1.25 | subtítulo        |
| `body-lg`    |  18 px |   20 px |        1.60 | lead             |
| `body`       |  16 px |   16 px |        1.60 | padrão           |
| `body-sm`    |  14 px |   14 px |        1.50 | apoio            |
| `caption`    |  12 px |   12 px |        1.45 | metadado         |

Display deve usar `letter-spacing: -0.03em` a `-0.02em`; títulos, `-0.02em`; corpo, normal; labels em caixa alta somente quando curtas, com `0.08em`. Linhas de texto corrido devem ficar entre 45 e 75 caracteres.

## 1.4 Logo

**Confirmada:** a logo já existe. **Pendente:** arquivos mestres, versões oficiais e área de proteção definitiva.

Até a entrega do manual oficial:

- usar somente o arquivo mestre fornecido, sem redesenhar;
- manter proporção e orientação originais;
- recomendar área livre mínima igual à altura do símbolo ou, na falta de símbolo isolado, `0.25×` a altura da marca;
- usar versão com contraste adequado sobre cada fundo;
- não aplicar sombra, gradiente, contorno, distorção, rotação ou recoloração arbitrária;
- não posicionar sobre fotografia ruidosa sem superfície de proteção;
- não reduzir abaixo do ponto em que o nome permaneça legível; validar o mínimo com os arquivos finais.

## 1.5 Iconografia

**Recomendada DS.** Usar um único conjunto outline consistente (Lucide é candidato), `stroke-width: 1.75–2`, cantos arredondados e tamanhos 16/20/24 px. Ícones decorativos recebem `aria-hidden="true"`; ícones que carregam significado exigem rótulo acessível. Não misturar famílias nem usar emoji como ícone de produto.

## 1.6 Imagens e ilustrações

- Preferir imagens reais de eventos, equipe e contexto de trabalho quando disponíveis e autorizadas.
- Não fabricar cases, métricas, clientes, depoimentos ou eventos.
- Ilustrações podem representar fluxos e sistemas, nunca resultados empresariais não comprovados.
- Usar `next/image`, dimensões explícitas, `sizes`, formatos modernos e lazy loading fora do primeiro viewport.
- Alt text descreve função/contexto; imagem decorativa usa `alt=""`.
- Tratamento recomendado: contraste editorial, fundos claros, acentos verde/roxo e enquadramentos que preservem legibilidade.

## 1.7 Motion

| Token     | Duração | Uso                         |
| --------- | ------: | --------------------------- |
| `instant` |   80 ms | pressão/feedback imediato   |
| `fast`    |  150 ms | hover, tooltip, foco visual |
| `normal`  |  240 ms | accordion, toast, menu      |
| `slow`    |  400 ms | entrada de seção/hero       |

Easing: `standard: cubic-bezier(.2,.8,.2,1)`; `enter: cubic-bezier(0,0,.2,1)`; `exit: cubic-bezier(.4,0,1,1)`. Animações de entrada: opacidade + deslocamento máximo de 16 px, uma vez, sem bloquear interação. Em `prefers-reduced-motion: reduce`, eliminar deslocamento, parallax, autoplay e smooth scroll; manter apenas feedback instantâneo de estado.
