# 4. Componentes de interface

## 4.1 Contrato comum

Todo componente deve:

- aceitar `className` sem quebrar estilos essenciais;
- encaminhar `ref` quando aplicável;
- preservar atributos HTML/ARIA;
- expor variantes tipadas, sem booleans combinatórios ambíguos;
- cobrir default, hover, focus-visible, active, disabled e, quando aplicável, loading/success/error;
- ter teste de teclado e nome acessível.

Nomes: PascalCase para componente, camelCase para props, `data-state` para estado, variantes `primary | secondary | outline | ghost | destructive` e tamanhos `sm | md | lg`.

## 4.2 Button

API sugerida: `variant`, `size`, `loading`, `loadingText`, `leadingIcon`, `trailingIcon`, `asChild`.

- `primary`: fundo verde, texto quase preto; CTA dominante.
- `secondary`: fundo roxo, texto branco; ação relevante alternativa.
- `outline`: superfície transparente + borda; alternativa visível.
- `ghost`: baixa ênfase.
- `destructive`: apenas ação destrutiva, nunca CTA comercial.
- loading mantém largura, exibe spinner e `aria-busy`; disabled não recebe clique.

## 4.3 IconButton

Quadrado 44×44 px padrão, ícone 20 px, sempre com `aria-label` ou texto visível. Tooltip complementa, mas não substitui rótulo. Mesmas variantes de Button, exceto uso de CTA primário isolado sem explicação.

## 4.4 Link

Links inline devem ser sublinhados ou ter affordance persistente; hover não pode ser o único indicador. `ExternalLink` informa nova aba no nome acessível. Links que parecem botões usam Button com `asChild`; ações não devem ser `<a>`.

## 4.5 Input, Textarea e Select

Alturas 44/52 px; Textarea mínimo 120 px e resize vertical. Estrutura: label → descrição opcional → controle → erro/ajuda. Placeholder não substitui label. Focus ring externo; erro com borda, ícone e mensagem vinculada por `aria-describedby`. Select nativo é preferível; custom exige teclado, typeahead e leitura por leitor de tela.

## 4.6 Checkbox, Radio e Switch

- Checkbox: escolhas independentes; área clicável inclui label.
- Radio: uma escolha em grupo com `fieldset`/`legend`.
- Switch: mudança imediata de configuração, não aceite legal nem submissão.
- Estados: unchecked/checked/indeterminate quando aplicável, hover, focus, disabled, invalid.

## 4.7 Badge

Variantes `neutral`, `brand`, `success`, `warning`, `error`, `info`; tamanho compacto; texto curto. Status precisa de texto, não somente cor. Badge não é botão salvo quando implementado explicitamente como filtro interativo.

## 4.8 Card

Variantes `surface`, `outline`, `interactive`, `featured`. Padding 20–32 px, radius 16–24 px. Card clicável deve ter um único alvo principal e foco claro; não aninhar links conflitantes. Estrutura recomendada: eyebrow, título, descrição, metadata, ação.

## 4.9 Alert

Variantes info/success/warning/error com ícone, título opcional e corpo. Usar `role="alert"` apenas para mensagem urgente dinâmica; conteúdo informativo estático não precisa live region. Pode ter ação de recuperação e dismiss com rótulo.

## 4.10 Accordion

Trigger é botão, com `aria-expanded` e relação com painel. Chevron gira; conteúdo continua compreensível sem animação. Permitir um ou múltiplos painéis conforme contexto. FAQ deve permitir deep link quando útil.

## 4.11 Modal/Dialog

Usar para tarefa curta ou decisão focada, nunca para conteúdo longo que merece página. Deve prender foco, fechar por Escape (salvo etapa crítica explicitada), bloquear fundo, restaurar foco e ter título acessível. Ações: primária à direita no desktop e primeiro foco lógico; no mobile, empilhar sem inverter ordem semântica.

## 4.12 Toast

Confirma ações assíncronas sem substituir erro junto ao campo. Duração sugerida: 5 s; mensagens críticas persistem até ação. Pausar no hover/foco, permitir dismiss e usar live region adequada. Máximo visual recomendado: três.

## 4.13 Tooltip

Somente informação complementar curta. Abre por hover e foco, fecha por Escape, não contém controles interativos e não é necessário para entender ação. Delay 400–600 ms; sem delay ao mover entre itens próximos.

## 4.14 Tabs

Usar para visões pares do mesmo contexto, não para esconder etapas sequenciais. Implementar padrão ARIA tabs, setas para navegação, seleção claramente indicada e URL/state persistente quando conteúdo for linkável.

## 4.15 Breadcrumb

Usar em profundidade real (artigo, case, evento, serviço individual). `<nav aria-label="Breadcrumb">`, lista ordenada, página atual com `aria-current="page"`; colapsar níveis intermediários no mobile sem remover contexto.

## 4.16 Header

Logo, Soluções, Comunidade, Eventos, Cases, Conteúdos e CTA contextual. CTA confirmado: evento quando aberto; diagnóstico em serviços. Header não deve ter navegação multinível profunda. Estado sticky, item atual e foco devem ser distinguíveis.

## 4.17 Mobile Nav

Painel/overlay simples com mesma hierarquia do desktop e CTA persistente contextual. Botão anuncia estado expandido; foco é contido; swipe não é obrigatório; fechar após navegação.

## 4.18 Footer

Resumo de posicionamento, navegação, soluções, eventos, comunidade, conteúdo, contato, redes, dados empresariais e legais. Conteúdos ainda não fornecidos devem permanecer como slots/pendências, não texto inventado. Links legais só são publicados com documentos válidos.

