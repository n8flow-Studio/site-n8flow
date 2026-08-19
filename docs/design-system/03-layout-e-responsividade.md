# 3. Layout e responsividade

## 3.1 Breakpoints

**Recomendação DS.** Projetar mobile-first e validar nos limites, não apenas em aparelhos populares.

| Nome | Início | Uso típico |
|---|---:|---|
| base | 0 | celulares |
| `sm` | 640 px | celulares largos |
| `md` | 768 px | tablet |
| `lg` | 1024 px | navegação desktop |
| `xl` | 1280 px | desktop largo |
| `2xl` | 1536 px | telas amplas sem alargar texto |

## 3.2 Container e grid

- container padrão: `width: 100%`, máximo 1280 px;
- padding lateral: 20 px base, 32 px em `md`, 48 px em `xl`;
- grid: 4 colunas mobile, 8 tablet, 12 desktop;
- gutter: 16/24/32 px respectivamente;
- conteúdo editorial: máximo 720 px;
- seção: 64–80 px vertical mobile; 96–128 px desktop;
- hero pode usar 80–112 px mobile e 128–176 px desktop, considerando header.

```tsx
<section className="py-16 md:py-24 xl:py-32">
  <div className="mx-auto w-full max-w-content px-5 md:px-8 xl:px-12">...</div>
</section>
```

## 3.3 Composição

- Mobile: fluxo vertical, CTA cedo, formulários e cards em uma coluna.
- Tablet: duas colunas quando melhorarem comparação; nunca apenas para preencher espaço.
- Desktop: assimetria controlada, whitespace e grid; não aumentar densidade indiscriminadamente.
- Cards podem usar 1/2/3 colunas. Quatro colunas só para conteúdo curto e comparável.
- Carrossel somente quando a sequência tiver valor; oferecer controles e alternativa sem gesto.

## 3.4 Header e viewport

Header recomendado: 64 px mobile e 72–80 px desktop. Se sticky, usar fundo opaco suficiente, `backdrop-blur` moderado e reservar espaço para não cobrir âncoras (`scroll-margin-top`). Mobile nav deve prender foco, bloquear scroll de fundo e restaurar foco ao fechar.

## 3.5 Regras de conteúdo

- Não truncar títulos essenciais.
- Evitar órfãs visuais: título de seção deve permanecer com o primeiro conteúdo.
- Tabelas não cabíveis viram cards ou recebem scroll horizontal identificado.
- CTAs lado a lado em desktop passam a empilhados em telas estreitas; CTA primário vem primeiro.
- Elementos decorativos podem ser reduzidos/omitidos no mobile para preservar performance.

## 3.6 Z-index

`base 0`, `raised 10`, `sticky 20`, `dropdown 30`, `overlay 40`, `modal 50`, `toast 60`, `tooltip 70`. Não usar valores arbitrários fora da escala sem ADR.

