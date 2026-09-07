# 8. CRM interno, persistência e acessos

**Atualização:** 2026-09-07. Captação implementada localmente; banco real e CRM ainda pendentes.
**Autoridade:** [ADR-0008](../decisions/ADR-0008-supabase-crm-interno.md).

## 8.1 Escopo e autorização

| Identidade                            | Consulta              | Acompanhamento                 | Responsáveis e acesso                                 |
| ------------------------------------- | --------------------- | ------------------------------ | ----------------------------------------------------- |
| Visitante/anônimo                     | Nenhum lead           | Somente envio público validado | Nenhum                                                |
| Pedro e sócio, administradores ativos | Todos os leads        | Todos os leads                 | Atribuição administrativa; provisionamento controlado |
| Comercial, fase futura                | Apenas leads próprios | Apenas leads próprios          | Sem autoelevação ou reatribuição para ampliar acesso  |
| Usuário sem perfil ativo              | Nenhum                | Nenhum                         | Nenhum                                                |

Não basta estar autenticado. A autorização deve ser verificada em toda leitura,
mutação, listagem, contagem e acesso por ID. Notas/histórico herdam o escopo do lead.
Na primeira versão, não criar usuários comerciais reais nem tela completa de equipe.
Exclusão e exportação em massa não fazem parte do escopo aprovado.

## 8.2 Fronteiras técnicas

- `app`: páginas públicas, painel privado e handlers/actions finos.
- `server`: serviço de captação, autorização e repository operacional.
- Adapter Supabase: acesso ao PostgreSQL, sem imports no cliente.
- `ContentRepository`: conteúdo editorial separado; permanece conforme ADR-0001.
- Autenticação: provedor e método pendentes; Supabase Auth é candidato recomendado,
  não selecionado silenciosamente pela aprovação do armazenamento.

O layout público atual inclui Header/Footer na raiz; separar a composição privada
sem alterar URLs públicas ao construir o painel. Não cachear dados pessoais em
cache público/estático, payload compartilhado entre sessões ou analytics. Rotas
privadas devem estar fora do sitemap e usar noindex, além da proteção de acesso.

## 8.3 Modelo lógico proposto — não é schema SQL implementado

- **Lead:** dados do formulário atual (nome, empresa, e-mail, telefone, interesse,
  mensagem), atribuição permitida, ID e timestamps gerados no servidor.
- **Responsável:** referência a usuário interno; nulidade inicial proposta para
  fila “Sem responsável”, acessível somente aos administradores.
- **Identidade/perfil:** usuário do provedor aprovado, papel e estado ativo sob
  controle administrativo; o cliente não escolhe papel ou responsável no cadastro.
- **Idempotência:** chave única, fingerprint do payload normalizado e resultado
  vinculados à gravação atômica. Definir prazo de retenção antes da migração.
- **Acompanhamento proposto:** etapa, notas, próxima ação e histórico com autor e
  data. Campos, transições e política de alteração/exclusão ainda serão validados.

Não persistir honeypot nem URL/query completa indiscriminadamente. Usar allowlist
de atribuição, limites e finalidade definida. Falhas de dados opcionais de campanha
não devem impedir o envio válido dos dados de contato.

## 8.4 Contrato de gravação e resiliência

Preservar a rota de diagnóstico e envelope seguro existentes quando possível.
Sucesso significa gravação confirmada, não apenas chamada iniciada ou mock aceito.
Duplicata idempotente retorna confirmação do mesmo registro; conflito de payload
com a mesma chave retorna erro seguro. Tratar timeout com resultado incerto por
reenvio idempotente, sem exigir nova chave a cada tentativa.

Limitar corpo durante leitura, validar tipo de conteúdo/origem/schema e normalizar
telefone. Impedir submissão GET com PII sem JavaScript. Manter valores em falhas e
timeout cliente. Antiabuso deve funcionar entre instâncias; implementação concreta
do rate limit ainda deve ser especificada, sem contratar outro serviço por inferência.

## 8.5 Segurança e operação

- RLS e grants com negação por padrão; anônimo sem leitura/escrita direta nas tabelas.
- Identidade confiável no servidor e no banco; não confiar em papel vindo do formulário.
- Privilégio de ingestão limitado e separado do acesso dos usuários do painel.
- Sessão expirada/revogada e usuário desativado perdem acesso. Mutação exige proteção
  de origem/CSRF adequada ao mecanismo de autenticação escolhido.
- Nenhum segredo, corpo do lead ou notas nos logs; usar requestId e resultado técnico.
- Separar ambientes e dados; testes somente com dados sintéticos.
- Definir região/plano, retenção, backup/restauração, responsáveis por incidentes e
  política de privacidade antes do go-live. Não presumir recursos de um plano gratuito.

## 8.6 Critérios de aceite

- [ ] Envio válido grava e pode ser consultado pelos dois administradores.
- [ ] Concorrência/retry não duplicam; chave com outro payload não confirma lead anterior.
- [ ] Falha de persistência não apresenta sucesso; mock não é usado em produção.
- [ ] Visitante e usuário sem perfil não leem dados por UI, API ou acesso direto ao banco.
- [ ] Ambos os administradores veem todos, inclusive os atribuídos ao outro.
- [ ] Política futura de responsável é testada com identidades sintéticas: comercial
      não acessa lead alheio nem notas, contagens ou mutações associadas.
- [ ] Usuário não pode elevar papel ou alterar escopo por payload manipulado.
- [ ] Login, logout, expiração, revogação e recuperação testados após escolha do provedor.
- [ ] Teclado, foco, mobile, estados vazios e erros revisados no painel.
- [ ] Migrações, rollback sem perda de dados, observabilidade e privacidade verificados.

## 8.7 Pendências para a próxima fase

Código de ingestão e migração inicial: [guia Supabase](../../supabase/README.md).
Não há aplicação em banco real, login, acesso administrativo ou perfis nesta etapa.
Os módulos n8n/memória legados permanecem no repositório com seus testes, mas a rota
pública já não os utiliza. Remoção definitiva pode ocorrer em limpeza posterior.

Captação pode ser desenvolvida antes do login. Aprovar provedor/método de autenticação
antes do painel; confirmar e-mails das duas contas por canal adequado, sem senhas
no repositório. Validar etapas comerciais e funções de acompanhamento antes de
implementá-las. Não há integração futura com Bolten no roadmap deste site.
