# CLAUDE.md: learn-tech

SPA em React 19, Vite e Tailwind 4, publicada na Vercel (`learn-tech-pied.vercel.app`). Ensina: programas com módulos e quiz, artigos e áreas. Os dados vêm da API `learntech-content`, a pasta irmã deste repositório. Tudo em português do Brasil.

## Antes de qualquer tarefa
1. `docs/ESTADO-DO-PROJETO.md`: o que foi feito e as issues em ordem.
2. `docs/COMO-EVOLUIR.md`: estrutura do site, arquivos gerados e checklist de estabilidade.
3. Para conteúdo novo: `../learntech-content/docs/contratos/learn-tech.md` (o contrato deste site) e `../learntech-content/docs/processo/agentes.md` (o fluxo).

## Regras que não mudam
- **Conteúdo novo entra pela API, nunca por este repositório.** O produtor do learn-tech grava em `learntech-content/content/`, e as cópias chegam aqui por `npm run copias`.
- **Arquivos gerados, não edite à mão:** `src/constants/blogData.js`, `areasData.js`, `programasCatalogo.js` e `categoriesData.js`; `public/sitemap.xml`.
- `src/services/api.js` não importa dados: é o que mantém o chunk inicial pequeno.
- Toda página nova usa `Seo.jsx` e tem um `<h1>` só.
- **Privacidade:** nenhum dado pessoal de terceiro, nome de cliente ou link interno de ex-empregador. O Claude não lê nem cadastra segredos.

## Git
- Branch do dia `feature/tasks-DD-MM-AAAA`, criada da `main`. Depois: push, CI verde e `developer-mvp-2026` por `--ff-only`.
- **O Claude para na `developer-mvp-2026`.** A `main` é produção: quem leva a `developer-mvp-2026` para a `main` é o autor (09/11/2026).
- A `main` é protegida: check `verificar` obrigatório e sem force push. Nunca commit direto na `main`.
- Comentários e issues no GitHub terminam com `<sub>por douglas ciborgue</sub>`.

## Comandos
| Comando | Para quê |
|---|---|
| `npm test` | Vitest |
| `npm run lint` | ESLint (zero problemas, obrigatório na CI) |
| `npm run build` | build de produção; o chunk inicial fica abaixo de 300 kB |
| `npm run e2e` (em `learntech-content`) | fluxos e acessibilidade deste site contra a produção |
