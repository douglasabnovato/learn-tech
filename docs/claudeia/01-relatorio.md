# learn-tech — Relatório de revisão independente

> Revisão de 27/10/2026, branch `feature/claudeia-2026-10-27` (partiu da `main`).
> Método: leitura estática do código e da configuração. **Nenhum comando de build, lint, teste ou git foi executado** (regra da revisão). Tudo que depende de execução está marcado como "não verificado".
> Convenções: **inferido · confirmar** = deduzido do README/código, precisa do dono. **estimativa** = sem medição direta.

## 1. Visão geral

| Item | Situação | Evidência |
| --- | --- | --- |
| Tipo | SPA de conteúdo educacional (LXP/curadoria), sem backend próprio | `src/App.jsx`, `Readme.md:27` |
| Objetivo | Organizar conteúdo técnico público em trilhas ordenadas, com prática e quiz, acesso aberto (OFF-only) — **inferido · confirmar** | `Readme.md:21-29` |
| Stack | React 19, Vite 6, Tailwind 4, React Router 7, Vitest 4, JavaScript (sem TypeScript) | `package.json` |
| Dependências | 8 de produção, 13 de desenvolvimento | `package.json` (contado) |
| Hospedagem | Vercel, rewrite de SPA para `/index.html` | `vercel.json` |
| Conteúdo | API `learntech-content` (Cloudflare) via `VITE_API_URL`, com fallback para dados locais em `src/constants/` | `src/services/conteudo.js:6-34` |
| Identificação de acesso | Script único do ecossistema (`/sdk/identificacao.js`) injetado na carga; pede nome e e-mail uma vez por navegador. **É regra de negócio (medição de acesso)** | `src/services/identificacao.js`, `src/main.jsx:7`, README do `learntech-content` |
| Variáveis de ambiente | `VITE_API_URL` (só o nome; `.env.example` existe) | `.env.example` |
| Rotas | 15 rotas + fallback `*` (16 `path=` contados; o README fala em 18), todas com `lazy()` | `src/App.jsx:121-151` |
| Catálogo | 33 programas, 3 com conteúdo (`moduleContents`/`enrollDetails`/`quiz`) | contagem em `src/constants/programsData.js` |
| CI | Não existia antes desta revisão | `.github/` só tinha `versao-2/` |

### Tamanho medido (sem `node_modules`, `dist`, `.git`)

| Tipo | Arquivos em `src/` | Linhas |
| --- | --- | --- |
| `.jsx` | 47 | 5.132 |
| `.js` | 18 (+2 configs na raiz) | 4.588 (src + `vite.config.js` + `eslint.config.js`) |
| `.css` | 1 | 26 |
| `index.html` | 1 | 21 |
| Imagens (`webp`, `avif`, `jpg`, `png`, `svg`) | 22 | — |

| Maior arquivo | Linhas | Tamanho |
| --- | --- | --- |
| `src/constants/programsData.js` | 2.702 | 127.301 bytes |
| `src/pages/falaae/FalaAe.jsx` | 379 | — |
| `src/constants/quizData.js` | 371 | — |

| Bundle (último `dist/` local, de 07/10/2026 — **pode estar desatualizado**) | Bytes (sem gzip) |
| --- | --- |
| `dist/assets/index-DY2xzvNy.js` (chunk principal) | 464.830 |
| `dist/assets/index-CJztHRpO.css` | 87.072 |
| Maior imagem: `page-top-bg-*.webp` | 143.242 |
| Arquivos em `dist/assets/` | 30 |

O chunk principal contém o catálogo inteiro (o título "Landing Page Moderna" aparece dentro dele). Cadeia: `main.jsx` → `identificacao.js` → `conteudo.js` → `programsData.js`; e também `Navbar.jsx` → `conteudo.js`.

---

## 2. Avaliação por área

### 2.1 Objetivo — nota 7/10

| Pontos fortes | Falhas |
| --- | --- |
| README explica a estratégia OFF/ON, a decisão OFF-only de set/2026 e o contrato de dados | Mensagem "sem cadastro" (`index.html:13`, `Hero.jsx:36`, `Detail.jsx:297`) convive com a identificação por nome e e-mail do SDK. A Política de Privacidade (`privacyData.js:18`) já explica que "não é cadastro", mas o visitante vê um pedido de dados logo após ler "sem cadastro" |
| Política de Privacidade descreve o que a plataforma realmente faz | README desatualizado em pontos: vídeo de 47 MB (hoje é embed do YouTube, `programsData.js:5`), seção "Workflow" cita `developer-mvp`/`feature/dev-content` (as branches reais são `developer-mvp-2026`/`feature/contents`), não cita `src/services/` nem a API |
| Pendências conhecidas listadas no README | README afirma que progresso de módulos fica no `localStorage` (`Readme.md:27`, `:435`); o código não grava (ver 2.2) |

### 2.2 Eficiência de produto digital — nota 4/10

| # | Achado | Evidência | Gravidade |
| --- | --- | --- | --- |
| P1 | 30 de 33 programas levam, pelo botão "Acessar", a uma página de treinamento que fica para sempre em "Carregando conteúdo..." (sem `enrollDetails`, o componente retorna cedo) | `Description.jsx:13-14`, `Detail.jsx:311-317` | Alta |
| P2 | Formulário "Fala aê" simula envio: mostra sucesso e descarta a mensagem. A Política de Privacidade indica esse formulário como canal para exercer direitos LGPD (pedir exclusão) | `FalaAe.jsx:78-84`, `privacyData.js:20,37` | Alta (produto + conformidade) |
| P3 | Progresso dos módulos não persiste (só `useState`); ao recarregar volta a 0%. A página do programa promete "Seu progresso fica salvo neste navegador" | `EnrollPrograms.jsx:21-25`, `Detail.jsx:306`, `ModuleRenderer.jsx` (`feitos` em `useState`) | Média |
| P4 | Link "Veja Todos" da seção Blog aponta para `/blogs`, rota inexistente (cai no 404) | `Blog.jsx:17`, `App.jsx` | Média |
| P5 | Clique em módulo na lista lateral e "avançar ao próximo módulo" não trocavam a aba exibida (o `Tabs` ignorava `activeIndex`/`onChange`) | `Tabs.jsx` (antes), `TabContent.jsx:39`, `EnrollPrograms.jsx:28-33` | Média — **corrigido neste lote** |
| P6 | Categorias da Home (11) e do catálogo (9) divergem | `Readme.md` pendências; `categoriesData.js` | Baixa |
| P7 | `lessons` e `duration` digitados à mão | `Readme.md` pendências | Baixa |

Fluxo principal (inferido · confirmar): Home → Programas (busca/filtro) → Apresentação → Acessar → módulos com checklist + quiz. Funciona de ponta a ponta só para os programas 1, 101 e 801.

### 2.3 Performance de software — nota 5/10

| Pontos fortes | Falhas |
| --- | --- |
| Todas as páginas com `React.lazy` (`App.jsx:8-107`) | Chunk principal de ~465 KB sem gzip, carregando o catálogo completo (127 KB de fonte) em toda página |
| Imagens em uso já em `webp` | Fonte Inter via `@import` dentro do CSS (`index.css:2`): cadeia HTML → CSS → Google Fonts → fonte, bloqueia renderização |
| `conteudo.js` tem timeout de 5 s, cache em memória e deduplicação de requisições | `rollup-plugin-visualizer` gera `dist/stats.html`, publicado junto no deploy (expõe a composição do bundle; inofensivo, mas desnecessário) |
| Vídeo virou embed do YouTube (sem mp4 de 47 MB no bundle) | Assets órfãos no repositório (~1,5 MB, medido com `du`): `src/pages/home/hero/assets/*.JPG` (880 KB), `src/assets/setups/*.avif` (416 KB), `src/pages/error/imgs/` (188 KB), `src/assets/logo/logo192.png` — não entram no bundle, só pesam no Git |
| | Sem cabeçalhos de cache explícitos no `vercel.json` (a Vercel já aplica cache imutável a `/assets/` por padrão — **estimativa**, confirmar) |

### 2.4 UX design — nota 6/10

| Pontos fortes | Falhas |
| --- | --- |
| Identidade visual consistente (gradiente indigo/sky/purple), layout responsivo com breakpoints `sm`/`md` em todas as páginas | Botões de abrir/fechar menu móvel sem `aria-label` (só ícone) — `Navbar.jsx:65,91` |
| Todas as `<img>` têm `alt` (10 ocorrências verificadas) | Aba ativa sem destaque: classes `border-in-500 text-in-500 bg-in-500/10` não existem no Tailwind (provável `indigo`) — `Tabs.jsx`. Também `mt-` incompleto e `grid-colds-1` (`Blog.jsx:25`) |
| `lang="pt-BR"` e meta description já presentes (`index.html:2,11-14`) | Vários `<h1>` na mesma página (Quiz e itens da lista de módulos usam `h1`) — hierarquia de títulos confusa para leitor de tela |
| Estados de carregamento com `role="status"` em Detalhe e Treinamento | Classes `animate-in fade-in` sem plugin instalado: animação não acontece (sem efeito visual negativo) |
| | Só tema claro (nenhuma classe `dark:`; `theme_color` branco no manifest). Não é defeito, é escopo — registrado |
| | Sem Open Graph/Twitter Card: compartilhamento em rede social sai sem imagem/título próprio |

### 2.5 Engenharia — nota 5/10

| Pontos fortes | Falhas |
| --- | --- |
| Arquitetura orientada a dados simples e clara; programa novo = objeto novo | Sem CI até esta revisão |
| Teste de contrato de dados (`dados.test.js`, 191 linhas) cobre ids, módulos, títulos, contagens, ícones e quiz | `package-lock.json` está no `.gitignore`: builds não reprodutíveis (versões `^` flutuam entre máquina, CI e Vercel) |
| Camada de serviço com fallback local (site funciona sem a API) | Lint provavelmente falha (**não verificado**): 35 arquivos com `import React` sem uso e a config não tem `varsIgnorePattern`; `settings.react.version` = `'18.3'` com React 19 (`eslint.config.js:20`) |
| `localStorage` do quiz já protegido com try/catch | Sem TypeScript; `prop-types` só em parte dos componentes |
| Lazy loading de rotas | Duplicação: dois mapas de ícones (`ModuleRenderer.jsx` e `constants/icones.js`) e a lista repetida em `dados.test.js` |
| | Código órfão: `pages/account/*`, `ReviewsCard.jsx`, `testimonialData.js`, `VideoPlayerMP4.jsx` |
| | Comentário desatualizado em `conteudo.js:83` ("vídeo local 47 MB") |
| | Segurança: nenhum segredo no código; o SDK é carregado de `VITE_API_URL` sem SRI — aceitável por ser domínio próprio, mas vale CSP no `vercel.json` (proposta) |

---

## 3. Falhas em ordem de gravidade

### Engenharia (pode executar sem mudar o produto)

| Ordem | Falha | Situação |
| --- | --- | --- |
| E1 | Sem CI | **Executado**: `.github/workflows/ci.yml` |
| E2 | `Tabs` ignorava `activeIndex`/`onChange` (P5) | **Executado** |
| E3 | `package-lock.json` ignorado no Git | Proposta (L2-01) |
| E4 | Lint provavelmente quebrado | Proposta (L2-02), depende de rodar `npm run lint` |
| E5 | Catálogo inteiro no chunk principal | Proposta (L3-01) |
| E6 | Quiz aceitava qualquer formato vindo do `localStorage` (risco de quebra com dado antigo/editado) | **Executado** |
| E7 | Visualizer tentaria abrir navegador em CI | **Executado** |
| E8 | Fonte via `@import` no CSS | Proposta (L2-04) |
| E9 | Código e assets órfãos | Proposta (L2-05) — exige apagar arquivos, fora desta revisão |
| E10 | README desatualizado | Proposta (L2-06) |

### Decisão de produto (não executar sem aprovação)

| Ordem | Falha | Opções de aperfeiçoamento |
| --- | --- | --- |
| D1 | "Acessar" em programa sem conteúdo leva a carregamento infinito (P1) | Estado "em breve" na página de treinamento e/ou trocar o CTA nos 30 programas sem conteúdo |
| D2 | "Fala aê" não envia nada (P2) — também é o canal LGPD citado na Política | Ligar o formulário a um destino real (ex.: endpoint na API `learntech-content`, que já tem Worker + D1, ou serviço de formulário) |
| D3 | Progresso de módulo não persiste, mas é prometido (P3) | Gravar progresso no `localStorage` com a mesma chave por programa (`progresso:<id>`), como o quiz |
| D4 | "Sem cadastro" × identificação por nome/e-mail | Manter a identificação (regra de negócio de medição de acesso) e ajustar a redação, ex.: "sem cadastro e sem senha — pedimos só nome e e-mail uma vez" |
| D5 | Link `/blogs` quebrado (P4) | Criar a página de listagem ou apontar para uma rota existente |
| D6 | Aba ativa sem cor de destaque | Corrigir classe para `indigo` (muda aparência — aprovar) |
| D7 | Categorias divergentes Home × catálogo | Unificar a fonte |
| D8 | Sem Open Graph | Adicionar `og:title`/`og:description`/`og:image` com textos já existentes |
