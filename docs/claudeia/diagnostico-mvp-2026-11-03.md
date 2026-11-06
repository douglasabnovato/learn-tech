# learn-tech: diagnóstico para o MVP finalizado

Data: 03/11/2026. Branch local: `feature/tasks-03-11-2026` (último commit `82e5737`, "lint zerado"). Fiz só leitura. Rodei `npx eslint .`, `npx vitest run`, `npm run build`, `git log`, `gh issue list` e três `curl` no site e na API publicados.

## 0. Resumo das medições

| Verificação | Resultado |
|---|---|
| `npx eslint .` | 0 problemas |
| `npx vitest run` | 4 arquivos, 24 testes, todos passam (6,3 s). Todos são testes de dados e de regra; não há teste de componente |
| `npm run build` | Passa em 1 min 56 s. Chunk principal `index-*.js` com **496,5 kB (160,6 kB gzip)**. `blogData-*.js` com 255 kB (92 kB gzip). CSS com 87,8 kB |
| Site publicado | `/` responde 200 em 0,84 s. Cabeçalhos `X-Frame-Options`, `Referrer-Policy` e HSTS presentes. Sem `Content-Security-Policy` |
| Rota inexistente | `/rota-que-nao-existe` responde **200** (soft 404 da reescrita SPA em `vercel.json:2`) |
| API | `GET /v1/saude` → `{"status":"ok"}` |
| Issues abertas | 39. Quase todas são de conteúdo, eventos ou de outros projetos (Volta Express, MedTrem, ByteClass, Projeto Açaí). Só #11 (catálogo dinâmico), #12 (páginas de erro) e #120 (atualizações para produção) são de engenharia deste site |

Composição do chunk principal (tamanho renderizado antes da minificação, de `dist/stats.html`): react-dom 654 kB, **`programsData.js` 127 kB**, react-router 85 kB, **react-icons 80 kB**, **`programasCatalogo.js` 40 kB**, react 21 kB, **`quizData.js` 16 kB**. Os itens em negrito, que são dados, entram na carga inicial porque `Navbar.jsx:6` importa `usePagina` de `services/conteudo.js`, e esse arquivo importa estaticamente `programsData`, `programasCatalogo` e `ICONES` (`src/services/conteudo.js:3-5`). Toda página, inclusive `/privacy`, baixa o catálogo inteiro.

---

## 1. Produto

**Proposta de valor.** O site organiza conteúdo técnico gratuito que já existe na internet em trilhas com ordem, comentário, prática e quiz, com acesso livre e sem conta (`index.html:12`, `Hero.jsx:33-37`).

**Público.** Quem está entrando em tecnologia: estudante, pessoa em transição de carreira, dev júnior. Em segundo lugar, profissionais de marketing e CRM do varejo (categoria `marketing-crm` e vários artigos).

**Jornadas principais e estado**

| Jornada | Caminho | Pronto | Lacuna para o MVP |
|---|---|---|---|
| Descobrir programa | `/` → `/programs` → `/program/:category/:id` | Busca, filtro por categoria, "ver mais", contador (`pages/programs/Programs.jsx`) | Placeholder em inglês (`:49`) e banner "Programs" (`:41`). A busca não ignora acentos ("logica" não acha "Lógica"). Filtro e busca não ficam na URL, então não dá para compartilhar o resultado. `:category` é ignorado em `Detail.jsx:11-13`, então qualquer categoria abre o programa (URLs duplicadas) |
| Estudar módulo | `/program/:category/:id/enroll` | Abas por módulo, passos marcáveis, avanço automático, barra de progresso (`EnrollPrograms.jsx:21-53`) | O progresso (`completedModuleIndex`) e os passos marcados (`ModuleRenderer.jsx:57`) ficam só em `useState` e **somem ao recarregar**. Só o quiz persiste |
| Fazer quiz | aba do quiz em Enroll | Respostas e histórico em `localStorage` com leitura tolerante (`Quiz.jsx:8-36`) | Sem resumo final por módulo nem ligação com o progresso |
| Ler artigo | `/blogs` → `/blog/:id` | 45 artigos, relacionados por tag, data em pt-BR (`BlogOne.jsx:20-33`) | `blogData` tem 255 kB num chunk só. Sem título nem descrição por artigo (todo artigo compartilha `<title>Learn TECH</title>`). Um artigo que só existe na API mostra `NotFound` até a API responder (`BlogOne.jsx:16`) |
| Falar com a equipe | `/falaae` | Formulário em 4 etapas, envio para `POST /v1/mensagens`, erros tipados (`services/mensagens.js`) | `<label>` sem `htmlFor` (`FalaAe.jsx:310`, `:324`). A página 404 manda "entrar em contato com a equipe de sucesso do cliente" e não tem link para `/falaae` (`not-found.jsx:16-18`) |

**Catálogo.** A API tem 49 programas, todos com módulos (4 a 6) e quiz (8 a 18 questões). Áreas: 6 (front, back, fullstack, comportamentais, diferenciais, marketing-tech). A cópia local `programsData.js` tem 33 programas, e **só 3 têm `moduleContents`** (ids 1, 101, 801).

**Risco de produto mais sério.** Se a API falhar ou demorar mais de 5 s (`conteudo.js:8`), 46 dos 49 programas aparecem como "Aprenda" no card. O status vira `lancado` porque `comMidiaLocal` vê `modulesCount > 0` (`conteudo.js:98-103`, `:126`). Quem clica cai em `NotFound` (`usePrograma`, `conteudo.js:134-138`). A reserva local promete um conteúdo que não consegue entregar. Além disso, as imagens da cópia gerada apontam para `learntech-content...workers.dev/media/...`, então a reserva depende do mesmo host para as capas.

**Métricas de sucesso do MVP**
- Técnicas: Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO nas rotas `/`, `/programs`, `/program/web/1`, `/program/web/1/enroll` e `/blog/:id`; chunk inicial ≤ 250 kB (≤ 90 kB gzip); 0 violações graves do axe; CI verde com lint, teste e build.
- De produto (dá para medir pelo `POST /v1/acessos` que já existe, por página): visitas a `/program/*/enroll` sobre visitas a `/program/*` (conversão de descoberta para estudo); quizzes concluídos por programa; mensagens no Fala aê por semana; artigos lidos por sessão; páginas 404 servidas.

---

## 2. Engenharia

### Arquitetura
SPA com React 19, Vite 6, React Router 7 e Tailwind 4. Todas as páginas usam `lazy()` (`App.jsx:8-112`). Os dados seguem o padrão "API primeiro, reserva local": `useApi` começa com o dado local, troca pelo da API quando ele chega, usa cache em memória, junta requisições iguais e tem tempo limite de 5 s (`services/conteudo.js:11-77`). A identificação é um script externo da API, injetado em `main.jsx` (`services/identificacao.js`). O design é bom e simples.

Problemas:
- `<main>` envolve `Navbar` e `Footer` (`App.jsx:115`). Faltam os marcos `<header>`, `<nav>` e `<footer>`, e não há link "pular para o conteúdo".
- Um `<h1>` por página não existe: `LearnTechTitle.jsx:18` renderiza um `<h1>`, e ele aparece duas vezes no Navbar e no Footer. Há outros `<h1>` em `BlogCard.jsx:16`, `QuickAccess.jsx:18` e `:50`, `Quiz.jsx:144` e `:155` e `VideoGrid.jsx:29`.
- `<title>` e meta descrição são iguais em todas as rotas (`index.html:14`). Não há `document.title` em lugar nenhum.

### Reserva da API
- Funciona para listas e páginas. Não funciona para programa completo (ver Produto).
- `useApi` desliga o aviso de dependências do hook (`conteudo.js:75`). Se `adaptar` ou `local` mudarem com o mesmo `caminho`, o efeito não roda de novo. Hoje não é um bug, mas é uma armadilha.
- Não há retentativa nem indicação de que o site está em modo reserva.

### Testes
- `dados.test.js`, `categorias.test.js` e `programasCatalogo.test.js` protegem o contrato dos dados. `conteudo.test.js` cobre só `statusDoPrograma`.
- Não há teste de componente, porque faltam `@testing-library/react` e `jsdom`.
- Não há teste de `buscarRecurso`/`useApi` com `fetch` simulado (tempo limite, erro e reserva), nem de `mensagens.js` (400, 503, abort).
- Não há e2e neste repositório. O e2e e o Lighthouse ficam pendentes na API (ESTADO.md, "Falta para o critério estável e público").

### CI (`.github/workflows/ci.yml`)
- Roda teste, build e lint em Node 22 e é check obrigatório (ruleset).
- `package-lock.json` está no `.gitignore` (`.gitignore:10`), o que obriga a usar `npm install` sem lock. Os builds não são reproduzíveis: uma dependência `^` pode quebrar a `main` sem nenhum commit. Isso já está registrado como PEN-04 em `docs/claudeia/03-registro.md`.
- Não há verificação de tamanho de bundle, `npm audit` nem `format:check` na CI.

### Acessibilidade (achados verificáveis)
1. Os botões de menu e de fechar do mobile não têm `aria-label`, `aria-expanded` nem `aria-controls` (`Navbar.jsx:64-70`, `:90-96`).
2. `Tabs.jsx` não tem `role="tablist"`, `role="tab"` nem `aria-selected`. Usa `focus:outline-none`, que tira o foco visível (`:32`). Usa classes que não existem no Tailwind 4: `border-in-500 text-in-500 bg-in-500/10` (`:34`) e `mt-` (`:43`). **A aba ativa não tem destaque visual.**
3. `VideoPlayer.jsx`: os controles só aparecem com o mouse (`opacity-0 group-hover:opacity-100`, `:153`) e ficam invisíveis no foco do teclado. Os botões de play, mudo e tela cheia não têm nome acessível (`:168`, `:177`, `:202`). O volume (`:186`) não tem rótulo. A barra de progresso é uma `div` clicável sem teclado (`:154-156`). O vídeo não tem `<track>` de legenda.
4. O carrossel do Hero troca de imagem a cada 5 s sem botão de pausa (`Hero.jsx:13-19`), o que fere o critério WCAG 2.2.2. O alt diz "new TECH" (`:66`).
5. O formulário do Fala aê tem rótulos não associados (`FalaAe.jsx:310`, `:324`) e usa `focus:outline-none` em vários campos (8 ocorrências no `src`, 0 de `focus-visible`).
6. Texto em gradiente com `text-transparent` em todos os `<h1>` e no item ativo do Navbar (`Navbar.jsx:112`). O contraste precisa ser medido no axe.
7. `VideoModal.jsx` fecha com Esc, mas não prende o foco nem o devolve ao botão que abriu.

### SEO
- Pronto: `robots.txt`, `sitemap.xml` com 107 URLs (45 artigos e programas), Open Graph e canonical.
- Lacunas:
  - O canonical é fixo na home para todas as rotas (`index.html:15`), o que diz ao Google que toda página é a home. **É o item de SEO mais grave.**
  - Título e descrição são iguais em todas as rotas.
  - A rota inexistente responde 200.
  - `site.webmanifest` diz "Learn Tech Ecosystem" com `theme_color #ffffff`, e `index.html:16` usa `#075985`.
  - Não há JSON-LD (`Course`, `Article`).
  - Como é SPA sem prerender, o conteúdo depende de JS para ser indexado.

### Performance
- Chunk inicial de 496 kB, explicado acima. Meta: separar dados da camada de rede.
- `blogData` (255 kB) é carregado inteiro por `/blogs` e pelo bloco "Top Artigos" da home (`pages/home/blog/Blog.jsx`).
- A fonte Inter entra por `@import` de CSS (`index.css:2`), o que bloqueia a renderização. O fallback é `serif` (`index.css:8`).
- Nenhuma `<img>` usa `loading="lazy"`, `width`/`height` ou `decoding` (0 ocorrências). Isso causa CLS e baixa imagens fora da tela.
- `lucide-react` entra só por um ícone (`ScrollToTop.jsx:2`), e o `react-icons` já tem o equivalente.

### Segurança
- Pronto: `nosniff`, `DENY`, `Referrer-Policy`, `Permissions-Policy` (`vercel.json`) e HSTS (Vercel). Sem `dangerouslySetInnerHTML`. Links externos com `rel` onde há `target="_blank"` (conferir `About.jsx:135`, `Aprender.jsx:94`, `Career.jsx:135`, `Detail.jsx:248`, `Recursos.jsx:222`, `BlogOne.jsx:187`: o lint desliga `react/jsx-no-target-blank` em `eslint.config.js:30`).
- Lacunas:
  - Falta CSP. Ela precisa permitir a API, o YouTube, o Google Fonts, `img.youtube.com`, pixabay e o script `/sdk/identificacao.js`.
  - O embed usa `youtube.com` em vez de `youtube-nocookie.com` (`VideoModal.jsx:23`). Isso pesa na privacidade, ainda mais porque a página de privacidade promete coleta mínima.
  - `.env.local` não está no `.gitignore`. O Vite ignora por padrão, e não há segredo no `VITE_`, então o risco é baixo.

### Textos em inglês na interface e erros de texto
- `pages/programs/Programs.jsx:49` `placeholder="Search programs..."` → "Buscar programas..."
- `pages/programs/Programs.jsx:41` `pageTitle={"Programs"}` → "Programas"
- `components/logo/LearnTechTitle.jsx:17` `alt="Logo"` → `alt=""` (é decorativo, o nome vem ao lado) ou "learnTECH"
- `pages/home/hero/Hero.jsx:66` alt "Desenvolvedora new TECH" → "Pessoa desenvolvedora estudando, imagem N de 4"
- `pages/home/blog/Blog.jsx:13` "Top Artigos", `Category.jsx:15` "Top Categorias", `home/programs/Programs.jsx:23` "Top Projetos": anglicismo; sugestão "Artigos em destaque"
- `pages/error/not-found.jsx:14` "Página NÃO ENCONTRADA" (caixa alta e emoji em `:16`)
- `site.webmanifest` "Learn Tech Ecosystem"; `package.json:2` `"name": "Learn Tech"` (nome npm inválido, com espaço e maiúsculas)
- Comentários e handlers em inglês (`Navbar.jsx` "Get the current location"): não aparecem para o usuário, prioridade baixa.

### Dívidas e riscos
- **Documentação desatualizada:**
  - `docs/README.md:39` diz que `vercel.json` só tem a reescrita, mas hoje tem cabeçalhos.
  - `docs/README.md:45` lista OG, sitemap e cabeçalhos como pendentes, mas já estão prontos.
  - `docs/README.md:23` diz que `programsData` e `categoriesData` estão defasados, mas hoje existe `programasCatalogo.js` gerado.
  - `Readme.md:243-273` aponta arquivos órfãos e um MP4 de 47 MB que **já não existem**.
  - `Readme.md:329-349` diz "33 programas, 3 com conteúdo", mas a API tem 49, todos com conteúdo.
- **Imagens órfãs:** `src/pages/home/hero/assets/dev-4..7.JPG` (≈ 890 kB), `src/pages/error/imgs/*.jpg` (185 kB) e `src/components/logo/assets/logo192.png`, sem nenhum import.
- **Classes Tailwind inválidas:** `in-500`/`mt-` (`Tabs.jsx`), `text-txl` (`Detail.jsx:37`) e `w-first` (`Hero.jsx:45`, `:55`).
- `eslint.config.js:22` declara React `18.3`, mas o projeto usa React 19.
- Há dois `Programs.jsx` (página e seção da home), o que confunde.
- Há dependência de um autor só, e o processo é muito documental (ver seção 6).

---

## 3. Conteúdo: 5 ideias de alto valor

| # | Ideia | Por quê | Destino na API |
|---|---|---|---|
| 1 | **Programa "Primeiro projeto no GitHub: Git, README e portfólio publicado"** (4 módulos: Git local, GitHub e PR, README que vende, GitHub Pages ou Vercel) | É a ponte entre os programas de código e a career (vagas). Fecha a jornada estudar → mostrar → candidatar. As issues #37 e #36 pedem isso | `learn-tech/programas/605` (Projetos, faixa 601-700) |
| 2 | **Programa "Acessibilidade web na prática"** (semântica, teclado, contraste, ARIA mínimo, teste com axe) | Não há programa de a11y no catálogo. Usa o próprio site como laboratório, com os achados da seção 2 | `learn-tech/programas/107` (Frontend) |
| 3 | **Artigo "Do zero ao primeiro deploy: Vite, Vercel e variáveis de ambiente"** | Explica o próprio stack do ecossistema. Tem alta busca orgânica. Liga aos programas 101 e 1 | `learn-tech/paginas/blog` (item `primeiro-deploy-vite-vercel`) |
| 4 | **Área "Dados e IA aplicada"** (SQL, planilhas, prompts, avaliação de resposta) | Hoje há só 1 programa de IA (801) e não existe área para dados. É a área de maior demanda de quem faz transição | `learn-tech/areas` (nova área `dados-ia`) e programas `802`, `406` |
| 5 | **Artigo + página "Trilhas por objetivo"**: "Quero minha 1ª vaga de front", "Quero migrar de marketing para CRM tech", "Quero freelas" (sequência de 4 a 6 programas e artigos existentes) | Resolve a descoberta: 49 programas soltos viram 3 jornadas guiadas. Não exige conteúdo novo, só curadoria | `learn-tech/paginas/trilhas` (página nova) e `learn-tech/paginas/blog` (item `trilhas-por-objetivo`) |

---

## 4. Plano de ação executável hoje (em ordem de prioridade)

Todas as tarefas cabem neste repositório e não precisam de segredo. Depois de cada uma, rode `npm run lint && npm test && npm run build`.

### T1. Tirar os dados da carga inicial (code splitting da camada de dados)
- **Objetivo:** fazer o Navbar e as páginas institucionais pararem de baixar `programsData`, `programasCatalogo`, `quizData` e `ICONES`.
- **Arquivos:**
  - criar `src/services/api.js` com `API_URL`, `buscarRecurso`, `resolverMidia`, `useApi`, `usePagina` e `useContagens`, sem importar nada de `constants/`;
  - deixar em `src/services/conteudo.js` só `hidratar`, `CATALOGO_LOCAL`, `useProgramas`, `usePrograma` e `statusDoPrograma`, reexportando os de `api.js`;
  - `Navbar.jsx:6`, `services/mensagens.js:2`, `services/identificacao.js:2` passam a importar de `./api`.
- **Detalhe:** `hidratar` precisa de `ICONES`. Recebe-o por injeção (`usePagina(nome, local, adaptar)`) ou move-se `icones` para um chunk que só as páginas que exibem ícones importam.
- **Pronto quando:** o `npm run build` mostra `index-*.js` com ≤ 300 kB (≤ 100 kB gzip); `dist/stats.html` não mostra `programsData.js` nem `programasCatalogo.js` no chunk `index`; `/privacy` não baixa o chunk do catálogo (aba Rede); os 24 testes passam.
- **Risco:** médio. A ordem de inicialização do cache compartilhado muda, e há o risco de dependência circular entre `api.js` e `conteudo.js`. Mitigação: `api.js` não importa `conteudo.js`.

### T2. Reserva honesta: só mostrar "Aprenda" quando há conteúdo disponível
- **Objetivo:** fazer a reserva local parar de levar para `NotFound`.
- **Arquivos:** `src/services/conteudo.js:98-138`, `src/pages/detail/Detail.jsx:25-33`, `src/pages/enroll/EnrollPrograms.jsx:38-46`.
- **Como:**
  - na reserva (`CATALOGO_LOCAL`), o status vem de `moduleContents` local, e não de `modulesCount`;
  - quando a API falhar e o programa não existir localmente, Detail e Enroll mostram o estado "Conteúdo indisponível agora", com botão "Tentar de novo" e link para `/programs`, em vez de `NotFound`;
  - `usePrograma` cai para o card de `programasCatalogo` quando não há `programsData`, para o Detail mostrar ao menos título e descrição.
- **Pronto quando:**
  - com `VITE_API_URL` vazio (`npm run dev` sem `.env.local`), `/program/carreira-soft-skills/1001` mostra título, descrição e o aviso, e não "Página NÃO ENCONTRADA";
  - o card desse programa mostra "Em breve" em vez de "Aprenda";
  - existe teste novo em `conteudo.test.js` para o status da reserva.
- **Risco:** baixo. Com a API no ar, nada muda.

### T3. Textos da interface em português e rótulos acessíveis
- **Objetivo:** tirar o inglês e os anglicismos da UI e dar nome acessível aos controles.
- **Arquivos e mudanças:**
  - `pages/programs/Programs.jsx:41` e `:49`: "Programas" e "Buscar programas...";
  - `components/logo/LearnTechTitle.jsx:17-18`: `alt=""` e `<h1>` → `<span>`;
  - `Hero.jsx:66`: alt corrigido;
  - `Navbar.jsx:64-70` e `:90-96`: `aria-label="Abrir menu"`/`"Fechar menu"`, `aria-expanded={isOpen}` e `aria-controls`;
  - `VideoPlayer.jsx:168`, `:177`, `:186`, `:202`: `aria-label` em português, mais `group-focus-within:opacity-100` em `:153`;
  - `FalaAe.jsx:310` e `:324`: `htmlFor` e `id`, mais `autoComplete="name"`/`"email"`;
  - `public/site.webmanifest`: `name: "learnTECH"` e `theme_color: "#075985"`.
- **Pronto quando:**
  - `grep -rn "Search programs\|pageTitle={\"Programs\"}" src` não retorna nada;
  - cada página tem exatamente um `<h1>` (conferir com `document.querySelectorAll('h1').length` em `/`, `/programs`, `/blog/:id` e `/program/web/1`);
  - o axe DevTools não mostra "button-name" nem "label".
- **Risco:** baixo. Trocar o `<h1>` do logo por `<span>` pode mudar a aparência; manter as mesmas classes.

### T4. Abas acessíveis e com destaque visível
- **Objetivo:** consertar as classes inexistentes e a semântica de `Tabs.jsx`.
- **Arquivos:** `src/components/tabs/Tabs.jsx:27-48`.
- **Como:**
  - `role="tablist"`/`"tab"`/`"tabpanel"`, `aria-selected`, `aria-controls`, `id`;
  - setas ←/→ para navegar;
  - `border-in-500 text-in-500 bg-in-500/10` → `border-sky-600 text-sky-700 bg-sky-600/10`;
  - `mt-` → `mt-4`;
  - `focus:outline-none` → `focus-visible:ring-2 focus-visible:ring-sky-500`.
  - De quebra, corrigir `text-txl` (`Detail.jsx:37`) e `w-first` (`Hero.jsx:45`, `:55`).
- **Pronto quando:**
  - em `/program/web/1/enroll`, a aba ativa tem cor diferente das outras;
  - Tab chega à lista e as setas trocam de aba;
  - o leitor de tela anuncia "aba, selecionada, 1 de 6";
  - `grep -rn "in-500\|\"mt-\"\|text-txl\|w-first" src` não retorna nada.
- **Risco:** baixo. Mexe no modo controlado corrigido em 27/10 (`03-registro.md`); conferir os roteiros T-07 e T-08 de `05-testes-manuais.md`.

### T5. Testes de componente com Testing Library
- **Objetivo:** ter a primeira rede de segurança de UI.
- **Arquivos:**
  - `package.json` (devDeps `@testing-library/react`, `@testing-library/user-event`, `jsdom`);
  - `vite.config.js` (`test.environment: "jsdom"` só para `*.test.jsx`, ou `// @vitest-environment jsdom` no arquivo);
  - novos `src/components/tabs/Tabs.test.jsx`, `src/pages/programs/Programs.test.jsx` (busca filtra; "Nenhum programa encontrado"; select por categoria), `src/pages/enroll/quiz/Quiz.test.jsx` (responde, persiste em `localStorage`, `localStorage` corrompido não quebra) e `src/services/api.test.js` (`fetch` simulado: sucesso, 500, tempo limite → reserva).
- **Pronto quando:** `npx vitest run` tem ≥ 8 arquivos e ≥ 40 testes verdes, e a CI continua verde sem mudança no `ci.yml`.
- **Risco:** baixo. Como não há lockfile, as versões novas entram sem trava (ver T8).

### T6. Título, descrição e canonical por rota, e 404 de verdade
- **Objetivo:** consertar o SEO de SPA sem trocar de framework.
- **Arquivos:**
  - novo `src/components/common/Seo.jsx`. React 19 eleva `<title>`, `<meta>` e `<link>` renderizados em qualquer componente para o `<head>`, então não precisa de biblioteca;
  - usar em `Programs.jsx`, `Detail.jsx`, `EnrollPrograms.jsx`, `BlogOne.jsx`, `Blogs.jsx`, `not-found.jsx` e nas páginas institucionais;
  - remover o canonical fixo de `index.html:15`;
  - em `not-found.jsx`, adicionar `<meta name="robots" content="noindex">`, link para `/falaae` e para `/programs`, tirar a caixa alta e o emoji;
  - em `Detail.jsx`, quando `:category` diferir de `program.categoryFilter`, fazer `<Navigate replace>` para a URL correta.
- **Pronto quando:**
  - em `/blog/<id>`, `document.title` é o título do artigo e `link[rel=canonical]` aponta para a própria URL;
  - `/program/qualquer/1` redireciona para `/program/web/1`;
  - `/rota-que-nao-existe` tem `noindex`.
- **Risco:** baixo. O 200 do servidor continua; um 404 real exigiria função na Vercel e fica para depois.

### T7. Imagens e fonte mais leves
- **Objetivo:** reduzir LCP e CLS e limpar o repositório.
- **Arquivos:**
  - `loading="lazy" decoding="async"` e `width`/`height` em `ProgramsCard.jsx:30`, `BlogCard.jsx:9`, `BlogOne.jsx:168` e `:214`, `VideoGrid.jsx:48`;
  - o Hero continua *eager*, com `fetchpriority="high"` na primeira imagem;
  - trocar o `@import` da fonte (`index.css:2`) por `<link rel="preconnect">` e `<link rel="stylesheet">` no `index.html`, e o fallback `serif` por `system-ui, sans-serif`;
  - apagar as imagens órfãs `src/pages/home/hero/assets/*.JPG`, `src/pages/error/imgs/*.jpg` e `src/components/logo/assets/logo192.png`, depois de confirmar com `grep` que não há import;
  - trocar `ChevronUp` do `lucide-react` (`ScrollToTop.jsx:2`) por `FaChevronUp` e remover a dependência;
  - `youtube.com/embed` → `youtube-nocookie.com/embed` (`VideoModal.jsx:23`).
- **Pronto quando:** o build passa; `grep -rn "lucide-react" src package.json` está vazio; o Lighthouse mobile em `/programs` não aponta "Defer offscreen images" nem "Eliminate render-blocking resources" para a fonte.
- **Risco:** baixo. Apagar imagens órfãs é a parte irreversível; está no Git.

### T8. Lockfile, verificação de bundle na CI e documentação atualizada
- **Objetivo:** ter builds reproduzíveis e documentos que dizem a verdade.
- **Arquivos:**
  - `.gitignore:10`: tirar `package-lock.json` e versionar o lock (decisão PEN-04);
  - `ci.yml`: `npm ci`, mais um passo que falha se `dist/assets/index-*.js` passar de 320 kB (`find dist/assets -name 'index-*.js' -size +320k | grep . && exit 1 || true`);
  - `docs/README.md:23`, `:39` e `:45`: atualizar;
  - `Readme.md:243-273` e `:329-349`: remover as pendências resolvidas, atualizar para 49 programas com conteúdo e citar o `programasCatalogo.js` gerado;
  - `package.json:2`: `"name": "learn-tech"`;
  - `eslint.config.js:22`: React `19.0`.
- **Pronto quando:** a CI usa `npm ci` e passa; uma alteração que reimporte `programsData` no Navbar faz a CI falhar; `grep -n "47 MB\|SignIn\|testimonialData" Readme.md` está vazio.
- **Risco:** médio. O lock gerado no Windows com `legacy-peer-deps` pode divergir no Linux; gerar o lock com o mesmo `.npmrc` e conferir a primeira execução da CI.

---

## 5. Issues propostas

### Issue A. Separar a camada de rede dos dados locais para reduzir o bundle inicial
- **Contexto:** `Navbar.jsx:6` importa `services/conteudo.js`, que importa estaticamente `programsData` (127 kB), `programasCatalogo` (40 kB) e os ícones (80 kB). Por isso o chunk inicial tem 496 kB (160 kB gzip) em qualquer rota. Separar `api.js` de `conteudo.js` tira os dados da carga inicial.
- **Critérios:**
  - [ ] `index-*.js` ≤ 300 kB no `npm run build`;
  - [ ] `dist/stats.html` sem `programsData.js` no chunk `index`;
  - [ ] `/privacy` não baixa o chunk do catálogo;
  - [ ] CI com limite de tamanho do chunk principal.
- **Labels:** `performance`, `engenharia`, `mvp`

### Issue B. Reserva local honesta para programas sem conteúdo offline
- **Contexto:** sem API, 46 dos 49 programas aparecem como "Aprenda" e levam a `NotFound`, porque a reserva só tem conteúdo de 3 programas (1, 101, 801). O status precisa refletir o que está disponível de verdade, e a falha precisa ter uma tela própria.
- **Critérios:**
  - [ ] com `VITE_API_URL` vazio, os cards sem `moduleContents` local mostram "Em breve";
  - [ ] Detail e Enroll mostram "Conteúdo indisponível agora" com "Tentar de novo";
  - [ ] teste em `conteudo.test.js` cobrindo o status da reserva;
  - [ ] roteiro manual atualizado em `docs/claudeia/05-testes-manuais.md`.
- **Labels:** `bug`, `produto`, `mvp`

### Issue C. Acessibilidade: abas, player, menu, formulário e títulos
- **Contexto:** o axe e a revisão manual apontam abas sem semântica e com classe de cor inexistente (`Tabs.jsx:34`), player com controles só no hover e sem nome (`VideoPlayer.jsx:153-205`), menu mobile sem `aria-expanded`, rótulos soltos no Fala aê e vários `<h1>` por página. O MVP precisa de Lighthouse de Acessibilidade ≥ 90.
- **Critérios:**
  - [ ] 0 violações *serious* ou *critical* no axe em `/`, `/programs`, `/program/web/1/enroll` e `/falaae`;
  - [ ] exatamente um `<h1>` por rota;
  - [ ] navegação completa por teclado no player e nas abas, com foco visível;
  - [ ] carrossel do Hero com pausa ou sem troca automática com `prefers-reduced-motion`.
- **Labels:** `acessibilidade`, `mvp`, `good first issue`

### Issue D. SEO por rota: título, descrição, canonical e 404
- **Contexto:** todas as rotas compartilham título, descrição e um canonical que aponta para a home (`index.html:14-15`), então o Google pode tratar os 45 artigos e 49 programas como duplicatas da home. A rota inexistente responde 200, e `:category` não é validado.
- **Critérios:**
  - [ ] `document.title` e canonical próprios em `/blog/:id` e `/program/:category/:id`;
  - [ ] categoria errada redireciona para a URL canônica;
  - [ ] página 404 com `noindex` e links para `/programs` e `/falaae`;
  - [ ] JSON-LD `Article` nos artigos e `Course` nos programas, validado no Rich Results Test.
- **Labels:** `seo`, `mvp`

### Issue E. Testes de componente e de serviço (Testing Library + fetch simulado)
- **Contexto:** os 24 testes atuais cobrem só o contrato dos dados e uma função. Nenhum componente nem a lógica de rede (tempo limite, erro e reserva) tem teste, então regressões como a das abas (27/10) só aparecem no manual.
- **Critérios:**
  - [ ] `jsdom` e Testing Library configurados;
  - [ ] testes de `Tabs`, `Programs` (busca e filtro), `Quiz` (persistência e `localStorage` corrompido) e `mensagens.js` (400, 503, abort);
  - [ ] testes de `useApi` com sucesso, 500 e tempo limite;
  - [ ] ≥ 40 testes verdes na CI.
- **Labels:** `testes`, `engenharia`, `mvp`

### Issue F. Progresso do estudo persistente e retomada de onde parou
- **Contexto:** os módulos concluídos (`EnrollPrograms.jsx:22`) e os passos marcados (`ModuleRenderer.jsx:57`) se perdem ao recarregar; só o quiz persiste. Para o público sem conta, o `localStorage` é a forma de "continuar de onde parei".
- **Critérios:**
  - [ ] progresso e passos gravados em `progresso:<id>` com a mesma leitura tolerante do Quiz;
  - [ ] ao reabrir o programa, abre no último módulo ativo;
  - [ ] card na home "Continue estudando" com o último programa;
  - [ ] botão "Recomeçar programa" que limpa o progresso, com teste.
- **Labels:** `produto`, `feature`, `mvp`

---

## 6. Melhorias do processo de trabalho

1. **Separar o backlog do site do resto.** Das 39 issues abertas, só 3 são de engenharia deste repositório (#11, #12, #120). As outras são de conteúdo, eventos e outros projetos (Volta Express, MedTrem, Projeto Açaí). Sugestões:
   - mover as de conteúdo para `learntech-content` e as de outros projetos para os repositórios deles;
   - criar labels `mvp`, `engenharia`, `conteudo`, `acessibilidade`, `seo`, `performance`;
   - usar um milestone "MVP learn-tech" com as issues A a F.
2. **Definição de pronto no template de PR** (`.github/pull_request_template.md`): lint, testes e build verdes; Lighthouse da rota mexida anexado; nenhum texto em inglês na UI; docs atualizados quando mudar comportamento. Hoje os documentos ficam defasados em dias (seção 2, "Dívidas").
3. **Versionar o `package-lock.json`** e usar `npm ci`. Sem isso, a CI obrigatória pode ficar vermelha sem nenhum commit, e o "estável" do MVP não se sustenta.
4. **Guarda-corpos automáticos em vez de revisão documental:**
   - limite de bundle na CI;
   - `eslint-plugin-jsx-a11y` (pega `label-has-associated-control` e `heading-has-content`);
   - um teste que falha se aparecer texto em inglês conhecido (`Search`, `Programs`) em `src/pages`.
   Muitas pendências desta análise teriam sido pegas sozinhas.
5. **Branches mais curtas e com uma intenção só.** Há 10 branches locais `feature/tasks-DD-MM-2026*`, com commits que juntam conteúdo, CI, SEO e docs (`1fa7b6b`). Uma branch por issue, com squash e mensagem convencional, facilita a reversão e a leitura do `git log`.
6. **Um só lugar para o estado do site.** Hoje o estado está espalhado entre `Readme.md` (507 linhas), `docs/README.md`, `docs/claudeia/01..05` e `learntech-content/docs/processo/ESTADO.md`. Sugestões:
   - `Readme.md` curto (o que é, como rodar, link para docs);
   - `docs/README.md` como fonte de engenharia;
   - histórico de execução datado em `docs/claudeia/`, sem repetir números que mudam (contagem de programas, arquivos órfãos).
7. **Teste manual guiado ao fim de cada lote:** rodar `docs/claudeia/05-testes-manuais.md` no site publicado e registrar o resultado na issue. A pendência PEN-05 ("conferir a versão publicada") está aberta desde 27/10.
