# ADR-0009 — Design editorial contrastado

Data: 2026-09-14. Status: direção solicitada explicitamente pelo responsável; execução visual sujeita à revisão.

## Contexto e limite

O responsável rejeitou a predominância de branco e forneceu o site C2G como referência. A orientação mais recente limita esta tarefa ao design system: preservar integralmente copy, metadados, rotas, ofertas e integrações. A seção de sócios previamente solicitada contém somente título, nomes e cargos fornecidos pelo responsável; foto e biografia ficam reservadas, sem conteúdo inventado.

## Decisão

- Evoluir a direção visual da ADR-0006 para composição editorial com contraste entre fundos escuros, off-white e lilás. Não alterar produto ou arquitetura.
- Preservar a logo, verde `#00F5A0` e roxo `#6E44FF`.
- Usar Anton para display condensado e Inter no corpo, via `next/font`, sem redistribuir Sundry/Codec Pro do arquivo de referência sem licença demonstrada.
- Usar ilustrações vetoriais, lâminas e ondas CSS decorativas; sem importar scripts, retratos, clientes ou resultados da referência.
- Manter formulários e painel em tema claro. Animações finitas, sem esconder a headline no primeiro paint, sem scroll hijacking e com redução de movimento.
- Preservar o conteúdo atual mesmo quando divergir de documentos comerciais anteriores: esta tarefa não autoriza revisão de copy.

## Consequências

Esta decisão substitui apenas a predominância light-first e a tipografia de display dos documentos anteriores. Não substitui os demais requisitos de acessibilidade, SEO, captação e segurança. Não implica ganho medido de performance: reavaliar no ambiente publicado depois do deploy autorizado.

Referência técnica e instruções para fotos/bios: `docs/design-system/09-referencia-c2g.md`.
