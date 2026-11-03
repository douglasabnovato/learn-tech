# learn-tech: documentação de engenharia

Site de programas de formação e artigos do ecossistema learnTECH. Publicado no Vercel (`https://learn-tech-pied.vercel.app`).

## Stack
- React 19, Vite 6, React Router 7 e Tailwind CSS 4 (plugin `@tailwindcss/vite`).
- JavaScript com `prop-types` (sem TypeScript). Ícones: `react-icons` e `lucide-react`.
- Qualidade: ESLint (`eslint.config.js`) e Vitest (`src/constants/dados.test.js`, `src/services/conteudo.test.js`).

## Como rodar do zero
```bash
cp .env.example .env.local      # VITE_API_URL aponta para a API learntech-content
npm install
npm run dev                     # desenvolvimento
npm test && npm run lint && npm run build
```
Sem `VITE_API_URL`, o site usa só os dados locais e não pede identificação.

## De onde vêm os dados
- A fonte é a API **learntech-content** (`/v1/...`). `src/services/conteudo.js` expõe `useApi(recurso, reserva)` e `usePagina(nome, reserva)`: buscam na API e, se ela falhar, usam a **cópia de reserva** local.
- **Cópias de reserva** em `src/constants/`:
  - `blogData.js` e `areasData.js` são geradas pelo `npm run copias` da API. Não edite à mão.
  - `programsData.js` e `categoriesData.js` são cópias manuais antigas e ficaram defasadas: os programas e as categorias novos só aparecem com a API no ar. Essa geração está pendente no backlog de engenharia da API.
- Recursos consumidos:
  - `index.json`;
  - `learn-tech/programas.json` e `learn-tech/programas/<id>.json`;
  - `learn-tech/areas.json`;
  - `learn-tech/paginas/<nome>.json` (blog, categorias, sobre, faq...).

## Estrutura
- `src/pages/`: páginas por rota (home, programas, blog, categorias, Fala aê).
- `src/components/`: componentes compartilhados.
- `src/services/`: acesso à API, identificação sem login e mensagens.
- `src/constants/`: cópias de reserva e dados fixos de interface.

## Deploy e CI
- **Deploy:** push na `main` publica no Vercel. O `vercel.json` só tem a reescrita de SPA para `index.html`.
- **CI:** `.github/workflows/ci.yml` roda `npm test`, `npm run build` e `npm run lint` nas branches `main`, `developer-mvp-2026` e `feature/**`.

## Decisões
- **API-first com reserva local:** ADR 5 em `learntech-content/docs/DECISOES.md`.
- **Gradientes das áreas:** são visuais do site, por isso ficam no código (`CategoriesAll.jsx`). Área nova pede um gradiente novo; sem ele, vale o gradiente de `front`.

## Pendências de engenharia
O backlog fica em `learntech-content/docs/engenharia/backlog.md`. Para este site: testes de componentes e de ponta a ponta, métricas de Lighthouse, acessibilidade, Open Graph e sitemap, e cabeçalhos de segurança no Vercel.
