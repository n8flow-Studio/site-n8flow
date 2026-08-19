# 8. Governança, Do/Don't e QA

## 8.1 Organização sugerida

```text
src/
├── app/
├── components/
│   ├── ui/          # primitivas genéricas
│   ├── layout/      # Header, Nav, Footer, Breadcrumb
│   ├── forms/       # Field e formulários compostos
│   └── marketing/   # Hero, cards e seções
├── styles/
│   ├── globals.css
│   └── tokens.css
├── lib/
│   ├── cn.ts
│   └── validations/
└── config/
```

Server Components por padrão. Usar Client Components apenas para estado, formulário, menu, modal, tracking interativo ou animação necessária. Não converter uma seção informativa inteira por causa de um único controle.

## 8.2 Implementação por agentes

Antes de alterar UI:

1. localizar componente e token existentes;
2. identificar status da regra (confirmada/recomendada/pendente);
3. manter API tipada e semântica HTML;
4. cobrir estados e responsividade;
5. executar testes visuais, funcionais e acessíveis;
6. atualizar docs quando houver decisão persistente.

O agente NÃO DEVE inventar copy, data de evento, palestrante, case, cliente, métrica, depoimento, regra comercial, contato, rede social ou política legal.

## 8.3 Do / Don't

| Do | Don't |
|---|---|
| usar verde para ação/conversão | usar verde em grandes massas sem testar conforto/contraste |
| usar roxo como inteligência/tecnologia | fazer todo elemento competir com glow roxo |
| falar de resultado antes da ferramenta | liderar a página com lista de tecnologias |
| manter uma ação dominante | dar o mesmo peso a três CTAs |
| usar respiro e grid | preencher toda área com cards |
| mostrar estados com texto/ícone/cor | depender somente da cor |
| omitir prova inexistente | preencher layout com números fictícios |
| reutilizar tokens semânticos | espalhar hex e valores arbitrários |
| respeitar movimento reduzido | usar parallax/autoplay obrigatório |
| preservar conteúdo do formulário após erro | limpar campos ou permitir submit duplicado |

## 8.4 Critérios de aceite do Design System

- [ ] Decisões confirmadas e recomendações estão identificadas.
- [ ] Não há conteúdo empresarial inventado.
- [ ] Tokens cobrem cor, tipografia, spacing, sizing, radius, borda, sombra e motion.
- [ ] Componentes consomem tokens semânticos, não cores primitivas diretamente.
- [ ] Todos os componentes solicitados possuem contrato e estados.
- [ ] Layout responde em mobile, tablet e desktop sem perda de hierarquia.
- [ ] Tema dark é completo; tema light, se ativado, também é completo.
- [ ] Formulários preservam dados, previnem duplicidade e comunicam sucesso/erro.
- [ ] Teclado, foco, nomes acessíveis e redução de movimento estão cobertos.
- [ ] Logo não é alterada nem usada fora das regras provisórias.

## 8.5 Checklist por componente

- [ ] HTML semântico e API TypeScript documentada.
- [ ] Default, hover, focus-visible, active e disabled.
- [ ] Loading, success e error quando aplicáveis.
- [ ] Conteúdo curto, longo, vazio e internacionalização básica.
- [ ] 320, 375, 768, 1024, 1280 e 1536 px.
- [ ] Teclado e leitor de tela.
- [ ] Contraste e alvo de toque.
- [ ] Movimento reduzido.
- [ ] Sem layout shift evitável.
- [ ] Teste unitário/interação e visual.

## 8.6 Checklist de implementação do site

- [ ] Fontes via `next/font` sem bloquear renderização.
- [ ] `tokens.css` e mapeamento Tailwind únicos.
- [ ] Header, mobile nav, footer e skip link.
- [ ] Rotas e padrões de página coerentes com UX/IA.
- [ ] Metadata, canonical, sitemap, robots e dados estruturados válidos.
- [ ] Imagens otimizadas e alt text.
- [ ] Web Vitals monitorados; evitar JS decorativo excessivo.
- [ ] Validação client/server e integração server-side.
- [ ] Analytics sem duplicar eventos nem capturar dados sensíveis.
- [ ] QA de checkout, CRM e WhatsApp com estados de falha.
- [ ] Revisão de conteúdo, privacidade e termos antes do go-live.

## 8.7 Pendências para congelamento v1.0

- validação visual final de Space Grotesk + Inter;
- arquivos/variantes e área de proteção oficial da logo;
- decisão sobre suporte público a tema claro;
- copy e tom de voz finais;
- conteúdo real de cases e depoimentos;
- oferta/regras da comunidade e diagnóstico;
- gateway, CMS, contatos, redes e documentos legais.

Mudanças em decisões confirmadas exigem registro de decisão (ADR) com contexto, alternativa, impacto e data. Ajustes de implementação que não mudam o contrato podem ser documentados no pull request.

