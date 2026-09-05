# N8FLOW — Design System v1.0

> Fonte de verdade visual e de interface para o site `n8flow.com.br`.

**Status:** proposta para implementação e validação  
**Stack-alvo:** Next.js + TypeScript + Tailwind CSS  
**Direção:** Engineering Growth · light-first
**Atualizado em:** 2026-08-18

## Como usar

Este Design System foi escrito para leitura humana e por agentes de IA no Antigravity IDE. Antes de implementar uma interface, o agente deve:

1. consultar os fundamentos e tokens;
2. reutilizar um componente existente antes de criar uma variação;
3. implementar todos os estados definidos;
4. validar responsividade, teclado, contraste e `prefers-reduced-motion`;
5. registrar decisões novas conforme [governança](./08-governanca-e-qa.md).

Palavras normativas: **DEVE** indica requisito; **NÃO DEVE**, proibição; **PODE**, opção contextual.

## Status das decisões

- **Confirmada:** sustentada pelo PRD, pela Especificação de UX ou por decisão explícita do projeto.
- **Recomendada DS:** proposta nova deste Design System; deve ser validada visualmente antes de ser congelada.
- **Pendente:** depende de conteúdo, operação ou decisão empresarial ainda não definida.

## Decisões confirmadas

| Decisão        | Valor                                                           |
| -------------- | --------------------------------------------------------------- |
| Logo           | ativo existente; este repositório não redefine seu desenho      |
| Cores de marca | `#00F5A0` e `#6E44FF`                                           |
| Direção visual | Engineering Growth                                              |
| Abordagem      | light-first                                                     |
| Domínio        | `n8flow.com.br`                                                 |
| Stack          | Next.js + TypeScript + Tailwind CSS                             |
| UX             | foco visível, teclado, labels, contraste e redução de movimento |

## Recomendações centrais do DS

- Space Grotesk para display/títulos e Inter para corpo/interface.
- Neutros claros editoriais, verde para ação/conversão e roxo para inteligência/tecnologia.
- Escala espacial de 4 px, container máximo de 1280 px e grid responsivo de 4/8/12 colunas.
- Radius moderado, bordas sutis, elevação curta e glows restritos a elementos de destaque.
- Componentes acessíveis e semânticos; primitivas headless são permitidas quando preservam a API definida.

## Mapa dos documentos

1. [Fundamentos visuais](./01-fundamentos-visuais.md)
2. [Tokens e temas](./02-tokens-e-temas.md)
3. [Layout e responsividade](./03-layout-e-responsividade.md)
4. [Componentes de interface](./04-componentes-ui.md)
5. [Componentes de marketing](./05-componentes-marketing.md)
6. [Formulários e acessibilidade](./06-formularios-e-acessibilidade.md)
7. [Padrões de página](./07-padroes-de-pagina.md)
8. [Governança, Do/Don't e QA](./08-governanca-e-qa.md)

## Fontes

- `sources/PRD — Site Institucional N8FLOW TECNOLOGIA.md` (somente leitura)
- `sources/N8FLOW-Especificacao-UX-Arquitetura-Informacao-v1.0.docx` (somente leitura)

Em caso de conflito: decisão explícita mais recente do projeto → UX/IA → PRD → recomendação deste DS.
