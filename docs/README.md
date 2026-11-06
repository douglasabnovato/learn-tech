# learn-tech: documentação de engenharia

Site de programas de formação e artigos do ecossistema learnTECH. Publicado no Vercel (`https://learn-tech-pied.vercel.app`).

## Stack
- React 19, Vite 6, React Router 7 e Tailwind CSS 4 (plugin `@tailwindcss/vite`).
- JavaScript com `prop-types` (sem TypeScript). Ícones: só `react-icons` (o `lucide-react` saiu em 03/11/2026).
- Qualidade: ESLint (`eslint.config.js`, React 19) e Vitest (`src/constants/*.test.js` e `src/services/conteudo.test.js`; testes de dados e de regra, sem jsdom).

## Como rodar do zero
```bash
cp .env.example .env.local      # VITE_API_URL aponta para a API learntech-content
npm install
npm run dev                     # desenvolvimento
npm test && npm run lint && npm run build
```
Sem `VITE_API_URL`, o site usa só os dados locais e não pede identificação. O `npm run build` gera `dist/stats.html` com a composição dos chunks.

## De onde vêm os dados
- A fonte é a API **learntech-content** (`/v1/...`). São três módulos em `src/services/`:
  - `api.js`: camada de rede, sem importar nada de `constants/`. Expõe `API_URL`, `buscarRecurso`, `useApi(caminho, reserva, adaptar)`, `usePagina(nome, reserva, adaptar)`, `useContagens` e `criarHidratar`. `useApi` devolve também `erro` (a API falhou e o dado é a reserva) e `tentarDeNovo`;
  - `hidratar.js`: `hidratar`, o adaptador com o registro de ícones (`constants/icones.js`). Página cujo conteúdo cita ícone por nome passa `hidratar` como terceiro argumento de `usePagina`/`useApi`;
  - `conteudo.js`: programas (`useProgramas`, `usePrograma`, `CATALOGO_LOCAL`, `statusDoPrograma`, `statusDaReserva`). Importa `programsData` e `programasCatalogo`, então só as páginas de programas o carregam.
- Essa divisão mantém o catálogo e os ícones fora da carga inicial: o Navbar e as páginas institucionais importam só `api.js`. Não importe `conteudo.js` nem `constants/programsData` em componente que aparece em toda página (Navbar, Footer, ScrollToTop).
- **Cópias de reserva** em `src/constants/`:
  - `blogData.js`, `areasData.js`, `categoriesData.js` e `programasCatalogo.js` são geradas pelo `npm run copias` da API (`learntech-content/scripts/exportar-copias.mjs`). Não edite à mão;
  - `programsData.js` é a cópia manual com conteúdo completo (`moduleContents`) só dos programas 1, 101 e 801; o resto da reserva vem dos cards de `programasCatalogo.js`.
- **Reserva honesta:** sem API, só mostra "Aprenda" o programa com aulas locais (`statusDaReserva`); os outros cards mostram "Em breve". Detail e Enroll mostram "Conteúdo indisponível agora", com "Tentar de novo", quando a API falha e as aulas não estão na cópia local.
- Recursos consumidos:
  - `index.json`;
  - `learn-tech/programas.json` e `learn-tech/programas/<id>.json` (a API publica 49 programas, todos com módulos e quiz);
  - `learn-tech/areas.json`;
  - `learn-tech/paginas/<nome>.json` (blog, categorias, sobre, faq...).

## Estrutura
- `src/pages/`: páginas por rota (home, programas, blog, categorias, Fala aê).
- `src/components/`: componentes compartilhados. Em `common/`: `Seo.jsx` (título, descrição e canonical por rota), `ConteudoIndisponivel.jsx` e `ScrollToTop.jsx`.
- `src/services/`: acesso à API, identificação sem login e mensagens.
- `src/constants/`: cópias de reserva e dados fixos de interface.

## SEO
- Cada página renderiza `<Seo titulo descricao caminho />`. O React 19 eleva `<title>`, `<meta>` e `<link>` para o `<head>`; não há biblioteca.
- O `index.html` não tem canonical nem meta descrição fixos (seriam iguais em todas as rotas); guarda só um `<title>` de reserva e as tags Open Graph.
- A página 404 tem `noindex`. O servidor ainda responde 200 para rota inexistente (reescrita da SPA); um 404 real exige função no Vercel.
- `/program/<categoria-errada>/<id>` redireciona para a categoria certa.

## Deploy e CI
- **Deploy:** push na `main` publica no Vercel. O `vercel.json` tem a reescrita de SPA para `index.html` e os cabeçalhos de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **CI:** `.github/workflows/ci.yml` roda `npm test`, `npm run build` e `npm run lint` nas branches `main`, `developer-mvp-2026` e `feature/**`.

## Decisões
- **API-first com reserva local:** ADR 5 em `learntech-content/docs/DECISOES.md`.
- **Gradientes das áreas:** são visuais do site, por isso ficam no código (`CategoriesAll.jsx`). Área nova pede um gradiente novo; sem ele, vale o gradiente de `front`.

## Pendências de engenharia
O backlog fica em `learntech-content/docs/engenharia/backlog.md`. Para este site:
- testes de componente (Testing Library + jsdom) e de ponta a ponta;
- `package-lock.json` versionado e `npm ci` na CI, mais um limite de tamanho do chunk `index-*.js` (decisão PEN-04, do autor);
- métricas de Lighthouse e axe; Content-Security-Policy;
- progresso do estudo persistente; JSON-LD (`Course`, `Article`).
