# Como evoluir o learn-tech

Guia curto para mudar o site com segurança. O conteúdo novo (programas, artigos, áreas, categorias) **não nasce aqui**: ele entra pela API, em `learntech-content` (veja `../learntech-content/docs/COMO-EVOLUIR.md`).

## 1. O que é
- SPA em React 19, Vite e Tailwind 4, publicada na Vercel (`learn-tech-pied.vercel.app`) a partir da `main`.
- Os dados vêm da API `learntech-content` (`/v1/learn-tech/...`). Sem API, o site usa a cópia de reserva gerada.

## 2. Onde fica cada coisa
| Pasta ou arquivo | Papel |
|---|---|
| `src/services/api.js` | Camada de rede: `buscarRecurso`, `useApi`, `usePagina`, `useContagens`. **Não importa dados** (manter assim, ou o chunk inicial volta a crescer) |
| `src/services/conteudo.js` | Catálogo e programas (`useProgramas`, `usePrograma`, `statusDoPrograma`), com a reserva local |
| `src/services/hidratar.js` | Troca nomes de ícones (`"FaCode"`) pelos componentes de `constants/icones.js` |
| `src/components/common/Seo.jsx` | Título, descrição e canonical por rota (use em toda página nova) |
| `src/components/common/ConteudoIndisponivel.jsx` | Tela quando a API falha e não há reserva |
| `src/pages/` | Uma pasta por rota (`App.jsx` lista as rotas) |
| `src/constants/blogData.js`, `areasData.js`, `programasCatalogo.js`, `categoriesData.js` | **Gerados** pela API (`npm run copias` em `learntech-content`). Não edite à mão |
| `src/constants/programsData.js`, `quizData.js` | Reserva manual antiga, só para os programas 1, 101 e 801 |
| `vercel.json` | Reescrita da SPA e cabeçalhos de segurança |

## 3. Quando chegar conteúdo novo
1. O conteúdo entra em `learntech-content/content/learn-tech/...` e passa no `npm run validar` de lá.
2. Lá, `npm run copias` atualiza os arquivos gerados deste repositório, e `npm run sitemaps` atualiza `public/sitemap.xml`.
3. Aqui: `npm run lint && npm test && npm run build`, depois commit só das cópias ("conteudo: cópia ...").

## 4. Quando mudar o site
- **Página nova:** pasta em `src/pages/`, rota `lazy()` em `App.jsx`, `<Seo>` com título e descrição, um único `<h1>`.
- **Campo novo da API:** primeiro no schema da API (`learntech-content/src/schemas/learn-tech.ts`), depois a leitura aqui. Exemplo: o `status` do card, lido em `statusDoPrograma`.
- **Textos:** sempre em português do Brasil; botões e ícones com `aria-label`.
- **Imagens fora da dobra:** `loading="lazy" decoding="async"`. Embed do YouTube só por `youtube-nocookie.com`.
- **Ícones:** prefira `react-icons/io` ou `react-icons/hi` no que entra em toda página (Navbar, Footer). Um ícone de `react-icons/fa` no Navbar puxa o pacote inteiro para a carga inicial.

## 5. Comandos
| Comando | Para quê |
|---|---|
| `npm run dev` | Servidor local (sem `.env.local`, testa a reserva) |
| `npm run lint` | ESLint (obrigatório na CI) |
| `npm test` | Vitest (30 testes em 05/11/2026) |
| `npm run build` | Build. Confira o tamanho de `dist/assets/index-*.js` (284 kB em 05/11/2026; meta ≤ 300 kB) |
| `npm run preview` | Serve o build para conferir no navegador |

## 6. Estabilidade: antes de dar por pronto
- [ ] Lint, testes e build verdes; chunk inicial ≤ 300 kB.
- [ ] No `npm run preview`, a página mexida tem título próprio e um `<h1>`.
- [ ] CI verde na branch; feature → `developer-mvp-2026` → `main` (`../learntech-content/docs/processo/fluxo-git.md`).
- [ ] Deploy da Vercel em "Production" com o commit da `main`.
- [ ] `npm run e2e` em `learntech-content` sem falha nos testes do learn-tech.

## 7. Documentos
- `Readme.md`: visão geral. `docs/README.md`: engenharia.
- `docs/claudeia/`: histórico datado, com o diagnóstico de MVP e o relatório de 03/11/2026 (`diagnostico-mvp-2026-11-03.md` e `06-mvp-2026-11-03.md`).
- `docs/ESTADO-DO-PROJETO.md`: o que fizemos, como está hoje e o que queremos fazer, com as issues em ordem.
- Próximos passos: issues com a label `proximos-passos`.
