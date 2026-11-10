# Estado do projeto: learn-tech

**Atualizado em 10/11/2026.** A régua dos 12 critérios está em [`MVP.md`](MVP.md). Este arquivo responde a três perguntas: onde o projeto está, o que já fizemos e o que queremos fazer. Para trazer conteúdo novo ou mudar o site, siga [`COMO-EVOLUIR.md`](COMO-EVOLUIR.md).

## Onde está

| Item | Situação |
|---|---|
| Produção | `https://learn-tech-pied.vercel.app/` (Vercel, deploy a cada push na `main`) |
| Repositório | `main` protegida (check `verificar` obrigatório, sem force push). Fluxo: `feature/tasks-DD-MM-AAAA` → `developer-mvp-2026` → `main`, só fast-forward |
| CI | Lint (0 problemas), 41 testes (Vitest) e build |
| Conteúdo | 49 programas na API, todos com módulos e quiz; 46 artigos; reserva local gerada pela API (`npm run copias` no learntech-content) |
| Desempenho | Chunk inicial de 284 kB (era 496 kB); o catálogo vai num chunk só das páginas de programas |
| Acessibilidade | Produção (axe, 10/11): contraste e `svg-img-alt` na home e no programa. Na integração, axe local com 0 violações serious em `/`, `/programs`, `/program/web/1/enroll` e `/falaae` (#130, relatório em `docs/claudeia/07-acessibilidade-2026-11-10.md`) |

## O que fizemos

| Período | Entregas |
|---|---|
| 27 e 28/10 | Status dos programas derivado dos módulos quando os dados vêm da API; ajustes de estrutura |
| 31/10 | Cópias da API, áreas e posts relacionados |
| 01/11 | Cópia do blog com os artigos novos |
| 03/11 | Catálogo e categorias vindos da API, SEO, cabeçalhos de segurança, lint de 70 para 0 e obrigatório na CI, actions em v5, 5 artigos novos e sitemap |
| 05/11, MVP | Camada de rede separada dos dados; reserva honesta ("Conteúdo indisponível agora" com "Tentar de novo"); textos em português e um `<h1>` por página; abas acessíveis por teclado; SEO por rota com o React 19; imagens com `lazy`, `youtube-nocookie`; card de IA |
| 05/11, estabilidade | e2e contra a produção passando; `COMO-EVOLUIR.md`; README com os números reais |
| 06/11 | Este documento, README com o estado e issues novas (#133 e #134) |
| 09/11 | Galeria de fotos no programa e no artigo, com ampliação acessível |
| 10/11 | Página `/conheca` com prévia própria do link (#137, na `main`). Na integração: carrossel com pausa e modal de vídeo com foco preso (#130), 8 imagens sem uso removidas (#133), busca sem acento e recorte na URL (#134), home sem rolagem horizontal (#139); `MVP.md` |

Detalhes: `docs/claudeia/diagnostico-mvp-2026-11-03.md` e `docs/claudeia/06-mvp-2026-11-03.md`.

## O que queremos fazer

Todas as issues têm o label `proximos-passos` e pelo menos três critérios de entrega. A ordem é a sugerida.

| Ordem | Issue | O quê | Tipo |
|---|---|---|---|
| 1 | [#127](https://github.com/douglasabnovato/learn-tech/issues/127) | Versionar o `package-lock.json` e usar `npm ci` na CI | engenharia, decisão do autor |
| 2 | [#130](https://github.com/douglasabnovato/learn-tech/issues/130) | Acessibilidade: carrossel, modal de vídeo e axe sem violações graves | acessibilidade |
| 3 | [#133](https://github.com/douglasabnovato/learn-tech/issues/133) | Remover as 8 imagens sem referência em `src/` | engenharia |
| 4 | [#128](https://github.com/douglasabnovato/learn-tech/issues/128) | Testes de componente com Testing Library (depende da #127) | testes |
| 5 | [#131](https://github.com/douglasabnovato/learn-tech/issues/131) | JSON-LD de artigos e programas e 404 de verdade | SEO |
| 6 | [#134](https://github.com/douglasabnovato/learn-tech/issues/134) | Busca sem acento e recorte de `/programs` na URL | produto |
| 7 | [#129](https://github.com/douglasabnovato/learn-tech/issues/129) | Progresso do estudo persistente e "Continue estudando" | produto |
| 8 | [#132](https://github.com/douglasabnovato/learn-tech/issues/132) | Página "Trilhas por objetivo" | produto, conteúdo |

As outras issues abertas (eventos, oportunidades, modelos e controles) são **material de conteúdo**. Elas não mudam o código deste site: entram pela API, pelo processo de remessa do `learntech-content`.

## Decisões que dependem do autor
- Versionar o lockfile (#127). É o que destrava os testes de componente (#128).
- Modal de identificação obrigatório ou opcional (learntech-content #5).

## Como manter este arquivo
Ao fim de cada rodada: acrescente uma linha em "O que fizemos", atualize "Onde está" com os números de `npx vitest run` e `npm run build`, e troque as issues fechadas por novas em "O que queremos fazer". A visão do ecossistema fica em `learntech-content/docs/ESTADO-DO-PROJETO.md`.
