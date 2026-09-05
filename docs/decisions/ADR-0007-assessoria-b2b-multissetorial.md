# ADR-0007 — Assessoria de Growth Marketing B2B multissetorial

**Status:** aprovada  
**Data:** 2026-09-01  
**Responsáveis:** equipe N8FLOW

## Contexto

O produto inicial organizava a jornada pública em Educação/Eventos → Comunidade →
Assessoria, com prioridade para profissionais e empresas do mercado imobiliário.
Após revisão do modelo de negócio, a equipe decidiu não construir uma comunidade
neste momento e não limitar a assessoria a um único setor.

## Forças e restrições

- A N8FLOW permanece uma Assessoria de Growth Marketing B2B.
- O site deve converter empresas para diagnóstico comercial.
- Tecnologia, mídia, CRM, automação e IA são capacidades integradas, não ofertas
  desconectadas.
- A comunicação não pode prometer resultados, prazos, preços ou formatos de
  remuneração ainda não aprovados.
- A arquitetura técnica, a identidade light-first e o conceito Engineering Growth
  devem ser preservados.

## Alternativas consideradas

| Alternativa                                             | Motivo de descarte                                                                |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Manter comunidade como página futura no funil principal | Manteria uma oferta sem viabilidade operacional atual e diluiria a conversão B2B. |
| Limitar a atuação ao mercado imobiliário                | Reduziria o mercado endereçável sem uma necessidade operacional aprovada.         |
| Apresentar serviços como catálogo técnico               | Reforçaria percepção de agência/fábrica de software e fragmentaria a proposta.    |

## Decisão

1. Posicionar a N8FLOW como Assessoria de Growth Marketing B2B multissetorial.
2. Adotar diagnóstico comercial como conversão principal do site.
3. Suspender Comunidade e Eventos como pilares públicos e removê-los da navegação.
4. Preservar `/servicos` como hub comercial, organizado por impacto na operação.
5. Estruturar o método em Diagnosticar → Priorizar → Implementar → Medir → Otimizar.
6. Definir o público por maturidade operacional, não por segmento econômico.
7. Manter cases e métricas condicionados a evidências e autorização.

## Consequências

- Home, navegação, SEO, sitemap e CTAs passam a priorizar assessoria e diagnóstico.
- `/comunidade` e `/eventos` deixam de ser destinos públicos de aquisição.
- Referências imobiliárias são removidas da comunicação global e podem retornar
  apenas em cases ou conteúdos específicos comprovados.
- As capacidades são agrupadas em estratégia, aquisição, conversão,
  relacionamento e dados/automação.
- Integrações e arquitetura técnica permanecem inalteradas.

## Migração ou rollback

As rotas suspensas permanecem recuperáveis no histórico Git. Uma futura oferta de
comunidade ou eventos exige nova decisão empresarial, conteúdo aprovado e revisão
de UX, SEO, integrações e operação.

## Referências

- Decisão explícita dos responsáveis em 2026-09-01.
- `docs/product/prd.md`
- `docs/ux/ux-arquitetura-informacao.md`
- `docs/copy-conteudo/`
- `docs/arquitetura-tecnica/07-roadmap-aceite-e-pendencias.md`
