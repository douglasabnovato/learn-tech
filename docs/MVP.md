# MVP: learn-tech

**Nível:** N3 (produto). Proposta do Claude em 10/11/2026; o autor confirma.
**Resumo:** 5 de 12 aplicáveis atendidos
**Finalizado:** não. Falta do código: fluxo na CI, falhas com teste, desempenho no celular, axe e segurança confirmados na produção. Falta do autor: hipótese (#23) e medição de uso (#24), alertas do Dependabot e levar as integrações para a `main`.

Régua: `engenharia/arquitetura/padroes.md`. "Atende" só com comando, data e resultado.

## Problema e público
Programas de estudo em ordem, com comentário, prática e quiz, além de artigos e das áreas da tecnologia explicadas, para quem quer entrar e crescer em tecnologia (página `/conheca`).

## Critérios (10/11/2026)

| # | Critério | Situação | Evidência |
|---|---|---|---|
| 1 | Problema e público claros | Atende | Programas de estudo em ordem, com comentário, prática e quiz, além de artigos e das áreas da tecnologia explicadas, para quem quer entrar e crescer em tecnologia (página `/conheca`). |
| 2 | Hipótese a validar | Não atende | Nenhuma hipótese escrita. A aposta é do autor: [learntech-content#23](https://github.com/douglasabnovato/learntech-content/issues/23). |
| 3 | Fluxo principal completo | Parcial | `npm run e2e` no learntech-content, contra a produção, em 10/11/2026: 4 de 4 fluxos (home abre um programa, programa 1104, artigo novo, área Marketing Tech e CRM). Fora da CI ([learntech-content#10](https://github.com/douglasabnovato/learntech-content/issues/10)). |
| 4 | Escopo enxuto | Atende | Seção "Fora do MVP" abaixo, com as decisões do autor. |
| 5 | Medição de uso | Não atende | Sem painel de visitas. A API registra só as identificações (D1). Ferramenta gratuita a escolher: [learntech-content#24](https://github.com/douglasabnovato/learntech-content/issues/24). |
| 6 | Falhas tratadas | Parcial | Reserva honesta ("Conteúdo indisponível agora" com "Tentar de novo") e `src/services/conteudo.test.js` para a falha da API. Vazio e carregamento sem teste próprio conferido. |
| 7 | Desempenho aceitável | Não atende | `npm run ux:lighthouse` (móvel) contra a produção em 10/11/2026, 3 execuções. Home: 6,6 s, mediana 6,6 s, TBT 106 ms, CLS 0,13 (1 de 3 rodadas válidas); programa 1104: 4,5 / 5,6 / 3,0 s, mediana 4,5 s, TBT 1222 ms, CLS 0,0; artigo: 5,0 / 3,8 / 4,0 s, mediana 4,0 s, TBT 11 ms, CLS 0. Meta: 2,5 s. Medido antes das mudanças da integração. |
| 8 | Acessibilidade básica | Parcial | Produção, axe em 10/11/2026: `color-contrast` 38 e `svg-img-alt` 3 na home, `color-contrast` 5 no programa. Na `developer-mvp-2026`, axe local com 0 violações serious em 4 rotas, foco preso no modal e pausa no carrossel ([#130](https://github.com/douglasabnovato/learn-tech/issues/130)). Falta confirmar na produção. |
| 9 | Segurança e conformidade | Parcial | Sem `package-lock.json`, o `npm audit` não roda ([learn-tech#127](https://github.com/douglasabnovato/learn-tech/issues/127), decisão do autor). Alertas do Dependabot desligados (`gh api .../dependabot/alerts` responde 403 em 10/11/2026; ligar é do autor). Sem segredo no código. Cabeçalhos de segurança no `vercel.json`. |
| 10 | Entrega confiável | Atende | `gh api repos/douglasabnovato/learn-tech/rulesets` em 10/11/2026: ruleset "main protegida" ativo (check `verificar` obrigatório, sem force push, sem apagar a `main`). CI em todo push e PR. |
| 11 | Testes dos fluxos críticos | Atende | CI da branch `feature/tasks-10-11-2026-b` em 10/11/2026 (run 42852898603): 41 testes passando, nenhum pulado. |
| 12 | Documentação honesta | Atende | Os 8 comandos `npm run` citados existem; `copias`, `sitemaps` e `validar` são da API e o README diz para rodar lá (conferido em 10/11/2026). |

## Fora do MVP
- Domínio próprio e qualquer serviço pago: o ambiente fica gratuito (decisão do autor, 10/11/2026).
- Identificação opcional: a identificação obrigatória continua ([learntech-content#5](https://github.com/douglasabnovato/learntech-content/issues/5), não autorizada pelo autor em 10/11/2026).
- Votação de temas nos cards de programa ([learntech-content#4](https://github.com/douglasabnovato/learntech-content/issues/4), aguardando o autor).
- Progresso do estudo persistente ([#129](https://github.com/douglasabnovato/learn-tech/issues/129)) e trilhas por objetivo ([#132](https://github.com/douglasabnovato/learn-tech/issues/132)): depois do MVP.

## Histórico
- 10/11/2026: primeira tabela, depois do ciclo de acessibilidade e busca nos quatro sites.
