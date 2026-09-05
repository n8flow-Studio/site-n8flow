# 5. Componentes de marketing

## 5.1 Contrato

Seções de marketing recebem conteúdo por props/CMS, não embutem copy empresarial definitiva e não inventam prova. Cada seção deve expor heading semântico, CTA dominante, alinhamento e tema de superfície.

## 5.2 Hero

Campos: `eyebrow?`, `title`, `description`, `primaryAction`, `secondaryAction?`, `proof?`, `visual?`. Variantes `home`, `landing`, `editorial`, `b2b`. Mobile: texto primeiro, CTA primário visível sem rolagem excessiva. Não usar vídeo autoplay obrigatório.

## 5.3 CTA Section

Título curto, apoio e uma ação primária; secundária opcional. Variantes `band`, `card`, `split`. Não repetir dois botões com mesma ênfase. O CTA global vigente é diagnóstico comercial; ações alternativas só aparecem quando correspondem a conteúdo público aprovado.

## 5.4 ServiceCard

Problema/resultado antes de tecnologia. Campos: `icon`, `title`, `description`, `capabilities?`, `href`, `ctaLabel`. A taxonomia deve expressar impacto na operação — estratégia, aquisição, conversão, relacionamento e dados/automação — e não um catálogo de ferramentas. Hover pode destacar fluxo/borda; card inteiro não deve conflitar com links internos.

## 5.5 EventCard

Campos: `title`, `date`, `time`, `venue`, `price?`, `capacity?`, `status`, `href`, `image?`. Status: rascunho (não render público), publicado, aberto, esgotado, encerrado. Data usa `<time>`. CTA muda conforme estado; “esgotado” não promete checkout.

## 5.6 CaseCard

Campos somente comprovados: `title`, `client?`, `sector?`, `challenge`, `resultSummary?`, `metrics?`, `services`, `href`. Se não houver métrica real, omitir o bloco; nunca preencher com exemplo visual que pareça fato.

## 5.7 Testimonial

Campos: citação autorizada, nome, função, organização e imagem opcional. **Pendente até existirem depoimentos reais.** Não usar avatar sintético ou atribuição incompleta como prova.

## 5.8 Pricing

Campos: `name`, `price`, `period?`, `description`, `features`, `cta`, `disclaimer?`, `featured?`. Destacar apenas uma opção. Preço, recorrência, impostos e regras precisam corresponder à oferta vigente; não deduzir condições comerciais.

## 5.9 FAQ

Lista de perguntas/respostas via Accordion. Respostas curtas e factuais; não prometer política ainda indefinida. Schema FAQ apenas quando permitido e coerente com conteúdo visível.

## 5.10 LeadForm

Componente composto por Field, consentimento quando necessário, feedback e proteção contra duplicidade. Variantes `event`, `diagnosis`, `contact`. Campos finais de qualificação do diagnóstico continuam pendentes. Deve preservar UTM em campos técnicos não intrusivos e nunca expor segredo de integração.

## 5.11 Estados de marketing

- loading: skeleton com dimensões estáveis, sem shimmer em movimento reduzido;
- empty: explicação honesta e próximo passo aplicável;
- error: ação de tentar novamente e canal alternativo somente se confirmado;
- success: confirmar resultado e próximo passo;
- conteúdo ausente: omitir módulo em vez de preencher com alegação fictícia.
