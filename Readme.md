# 🚀 Learn TECH

A Learn TECH  como objetivo acelerar a jornada para aperfeiçoar os resultados.
Com uma experiência de usuário, vamos construir um ECOSSISTEMA de (T)ecnologia, (E)nsino, (C)omputação e (H)umano para treinamento de APRENDIZADO.
Hoje temos uma API com quatro projetos com temas específicos: bootcamps, tools, career, lerntech.

🔗 **Em produção:** https://learn-tech-pied.vercel.app/

E a partir dela, temos career, tools, bootcamps. São projetos com temas específicos que complementam o ecossistema.

## 📂 Plataforma de Aprendizado

- Um LMS (Learning Management System) é um Sistema de Gestão de Aprendizagem.
- Ele serve para:
    - Hospedar e organizar cursos online (aulas em vídeo, textos, PDFs, quizzes).
    - Gerenciar usuários (alunos, professores, administradores).
    - Acompanhar progresso e desempenho dos alunos.
    - Emitir certificados após conclusão de cursos ou trilhas.
    - Facilitar interações (fóruns, comentários, avaliações).
- Exemplos famosos: Moodle, Udemy, Coursera, Hotmart.

### 📂 Estratégia do Projeto

Para permitir acesso para todos que quiserem aprender tecnologia, a plataforma apresenta um conteúdo público da internet de forma organizada, ordenada e selecionada.

#### 🚀 OFF — o que está sendo construído hoje

Curadoria e ordenação de conteúdos da internet conforme os critérios adotados pelo Coordenador do nosso ECOSSISTEMA.

**Decisão de set/2026: a plataforma é OFF-only.** Não há autenticação, sessão, login, cadastro ou conta de usuário. Todo o conteúdo é aberto. O progresso de módulos e o histórico de quiz ficam no `localStorage` do navegador do próprio visitante.

#### 🚀 ON — planejado, ainda não iniciado

Jornada profissional e conteúdos originais personalizados para a prestação de consultoria, desenvolvimento de produtos e serviços. Exigirá conta de usuário, e por isso está fora do escopo atual.

### 📚 Fontes de conteúdo

Os treinamentos são produzidos a partir de duas fontes:

1. **A API learntech-content** — o catálogo e o conteúdo dos programas e artigos. Este site guarda uma cópia de reserva em `src/constants/` (`programasCatalogo.js` e `blogData.js` são gerados pela API; `programsData.js` tem o conteúdo completo de 3 programas).
2. **Arquivos originais de cursos, treinamentos e anotações** — material próprio, que vira texto, depois roteiro de aula, depois programa.

---

## ▶️ Como rodar

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# checar o padrão de código
npm run lint

# rodar os testes do contrato de dados
npm test
```

O projeto sobe em `http://localhost:3000`.

### 🛠️ Stack

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| [React](https://react.dev/) | 19 | interface |
| [Vite](https://vitejs.dev/) | 6 | build e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | estilo |
| [React Router](https://reactrouter.com/) | 7 | rotas |
| [Vitest](https://vitest.dev/) | 4 | testes |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | ícones |

---

# 📁 Estrutura de Pastas — Learn TECH

> Atualizada em 03/11/2026. `.git`, `node_modules` e `dist` estão omitidos por serem gerados.
> A documentação de engenharia (camada de dados, SEO, deploy) fica em `docs/README.md`.

## 🌳 Árvore

```text
learn-tech/
│
├── .github/
│   ├── workflows/ci.yml              # teste, build e lint
│   └── versao-2/                     # telas da Versão 2
│
├── public/                           # servido na raiz: favicons, site.webmanifest, robots.txt, sitemap.xml, og-image.png
│
├── src/
│   ├── assets/                       # imagens importadas pelo código (devs/, setups/, originals/, programs/)
│   │
│   ├── components/
│   │   ├── blog/BlogCard.jsx
│   │   ├── breadcrumb/Breadcrumb.jsx
│   │   ├── category/CategoryCard.jsx
│   │   ├── common/
│   │   │   ├── ConteudoIndisponivel.jsx  # aviso "Conteúdo indisponível agora" + "Tentar de novo"
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── Seo.jsx                   # título, descrição e canonical por rota
│   │   ├── footer/Footer.jsx
│   │   ├── logo/LearnTechTitle.jsx
│   │   ├── nav/Navbar.jsx
│   │   ├── pageTop/PageTopBanner.jsx
│   │   ├── player/VideoPlayer.jsx
│   │   ├── programs/ProgramsCard.jsx
│   │   ├── stats/StatsCard.jsx
│   │   ├── tabs/Tabs.jsx                 # abas acessíveis (tablist, setas)
│   │   └── videoGrid/VideoGrid.jsx, VideoModal.jsx
│   │
│   ├── constants/                    # cópias de reserva e dados fixos de interface
│   │   ├── blogData.js, areasData.js, categoriesData.js, programasCatalogo.js   # GERADOS pela API (não editar)
│   │   ├── programsData.js           # cópia manual com conteúdo completo dos programas 1, 101 e 801
│   │   ├── quizData.js               # quiz do programa 1
│   │   ├── icones.js                 # registro dos ícones citados por nome no conteúdo
│   │   ├── aboutData.js, aprenderData.js, careerData.js, falaaeData.js, navbarData.js,
│   │   │   premiosData.js, privacyData.js, statsData.js, termsData.js
│   │   └── dados.test.js, categorias.test.js, programasCatalogo.test.js   🧪
│   │
│   ├── services/
│   │   ├── api.js                    # rede: busca na API, tempo limite, cache, reserva
│   │   ├── hidratar.js               # adaptador com ícones
│   │   ├── conteudo.js               # programas (catálogo, programa completo, status)
│   │   ├── conteudo.test.js          🧪
│   │   ├── identificacao.js          # script de identificação sem login
│   │   └── mensagens.js              # envio do Fala aê
│   │
│   ├── pages/
│   │   ├── about/About.jsx                       → /about
│   │   ├── aprender/Aprender.jsx                 → /aprender
│   │   ├── career/Career.jsx                     → /careers
│   │   ├── detail/Detail.jsx                     → /program/:category/:id
│   │   ├── docs/Privacidade.jsx, Termos.jsx      → /privacy, /terms
│   │   ├── enroll/                               → /program/:category/:id/enroll
│   │   │   ├── EnrollPrograms.jsx, Description.jsx
│   │   │   ├── quiz/Quiz.jsx
│   │   │   └── tabContent/TabContent.jsx, ModuleRenderer.jsx
│   │   ├── error/not-found.jsx                   → *
│   │   ├── falaae/FalaAe.jsx                     → /falaae
│   │   ├── home/
│   │   │   ├── Home.jsx                          → /
│   │   │   ├── hero/Hero.jsx, stats/Stats.jsx, programs/Programs.jsx (seção da Home)
│   │   │   ├── category/Category.jsx, CategoriesAll.jsx (→ /category)
│   │   │   ├── quickaccess/QuickAccess.jsx, mentorias/ (→ /mentorias), softskills/ (→ /softskills)
│   │   │   └── blog/Blog.jsx, Blogs.jsx (→ /blogs), BlogOne.jsx (→ /blog/:id)
│   │   ├── programs/Programs.jsx                 → /programs
│   │   └── recursos/Recursos.jsx                 → /resources
│   │
│   ├── App.jsx                       # rotas (todas com lazy)
│   ├── main.jsx                      # ponto de entrada
│   └── index.css                     # import do Tailwind
│
├── docs/                             # README de engenharia e histórico em docs/claudeia/
├── eslint.config.js
├── index.html                        # lang="pt-BR", Open Graph, fonte Inter por <link>
├── package.json
├── vercel.json                       # reescrita de SPA e cabeçalhos de segurança
└── vite.config.js                    # porta 3000, svgr, tailwind, visualizer (dist/stats.html)
```

## 🧭 Como a estrutura funciona

Os dados vêm da API **learntech-content**, com reserva local em `constants/`. `services/api.js` busca e cai para a reserva se a API falhar; `pages/` consome e `components/` desenha. O Navbar e as páginas institucionais importam só `api.js`, para o catálogo de programas não entrar na carga inicial.

```text
API learntech-content  ──→  services/conteudo.js  (reserva: programsData.js + programasCatalogo.js)
        │
        ├──→ pages/programs/Programs.jsx      (catálogo, busca e filtro)
        ├──→ pages/detail/Detail.jsx          (apresentação do programa)
        └──→ pages/enroll/EnrollPrograms.jsx  (o treinamento)
                    │
                    ├──→ Description.jsx
                    │         └──→ tabContent/TabContent.jsx
                    │                   └──→ tabContent/ModuleRenderer.jsx
                    ├──→ quiz/Quiz.jsx
                    └──→ components/player/VideoPlayer.jsx
```

Um programa novo é publicado na API (`learntech-content/content/learn-tech/programas/<id>.json`); o `npm run copias` da API regenera `programasCatalogo.js`.

## ⚠️ Pontos de atenção na estrutura

**1. Imagens sem uso** (nenhum import; podem ser apagadas):

```text
src/assets/logo/logo192.png
src/components/logo/assets/logo192.png
src/pages/error/imgs/Erro-404-not-found.jpg
src/pages/error/imgs/Erro-404-under-construction.jpg
src/pages/home/hero/assets/dev-4.JPG … dev-7.JPG   (~880 KB; o Hero usa src/assets/devs/*.webp)
```

**2. Dois arquivos chamados `Programs.jsx`** — `pages/programs/Programs.jsx` (a página) e `pages/home/programs/Programs.jsx` (a seção da Home). Funciona, mas confunde na busca do editor.

---


### O que cada programa carrega

| Campo | O que é |
| --- | --- |
| `id`, `title`, `category`, `categoryFilter` | identificação e filtro no catálogo |
| `modules[]` | a lista de módulos: `id`, `title`, `lessonsCount` |
| `moduleContents[]` | o conteúdo de cada módulo: seções, passos, código, dicas, destaques, CTA |
| `enrollDetails.moduleOverviews[]` | a ementa exibida antes de entrar |
| `quiz[]` | as questões, cada uma apontando para um `moduleId` |
| `video`, `videoPoster` | opcionais |

### Regras que o renderizador assume

- O **título do módulo é o mesmo** em `modules[]`, em `moduleContents[]` e na ementa.
- `lessonsCount` é **igual ao número real de passos** do módulo — não é um número digitado à mão.
- Os passos são numerados de 1 em diante, sem pular e sem repetir.
- Os ícones são **nomes simbólicos** (`bolt`, `github`, `rocket`…) resolvidos por um mapa dentro do `ModuleRenderer.jsx`. A camada de dados não importa React.
- O progresso é calculado a partir de `modules.length`. Um programa pode ter 4 módulos, outro 6 — não há número fixo.
- Cada quiz grava em `localStorage` sob a chave do próprio programa: `quiz:<id>:respostas` e `quiz:<id>:historico`.

### 🧪 Testes

`src/constants/dados.test.js` é o contrato de dados. Ele quebra o build quando um programa fica inconsistente:

- id repetido no catálogo
- módulo listado sem conteúdo correspondente, ou conteúdo órfão sem módulo
- título divergente entre `modules[]`, `moduleContents[]` e a ementa
- `lessonsCount` diferente da contagem real de passos
- ícone que não existe no renderizador
- questão apontando para módulo inexistente, sem alternativa correta ou sem explicação
- presença de `rating` ou `students` — números que a plataforma não consegue medir

```bash
npm test
```

---

## 📚 Catálogo

**9 categorias, organizadas por faixa de id:**

| Categoria | Faixa | Filtro |
| --- | --- | --- |
| Web | 1 – 100 | `web` |
| Frontend | 101 – 200 | `frontend` |
| UX/UI | 201 – 300 | `ux-ui` |
| Backend | 301 – 400 | `backend` |
| Data Base | 401 – 500 | `data-base` |
| Produtos Digitais | 501 – 600 | `produtos-digitais` |
| Projetos | 601 – 700 | `projetos` |
| English | 701 – 800 | `english` |
| IA | 801 – 900 | `ia` |

### 🗺️ Estado atual

**A API publica 49 programas, todos com módulos (4 a 6) e quiz (8 a 18 questões).** A reserva local tem os cards dos 49 (`programasCatalogo.js`, gerado pela API) e o conteúdo completo de 3:

| # | Programa | Categoria | Módulos | Passos | Questões |
| --- | --- | --- | --- | --- | --- |
| 1 | Desenvolver uma Landing Page Moderna | Web | 6 | 21 | 18 |
| 101 | React: Componentes, Estado e a Primeira Aplicação | Frontend | 4 | 13 | 12 |
| 801 | Programar com IA sem Perder o Aprendizado | IA | 4 | 13 | 12 |

Sem a API, os outros programas aparecem como "Em breve" e a página do programa mostra "Conteúdo indisponível agora", com "Tentar de novo".

### 📌 Pendências conhecidas

- [ ] `lessons` e `duration` ainda são valores escritos à mão. Devem derivar da soma dos passos, como o `lessonsCount` já deriva.
- [ ] O progresso dos módulos e os passos marcados somem ao recarregar; só o quiz persiste no `localStorage`.
- [ ] Testes de componente (Testing Library) e lockfile versionado: ver `docs/README.md`.

---

## 👨‍💻 Workflow

- `main`: manter em produção
- `developer-mvp`: tratar testes e merge
- `feature/dev-content`: implementar funcionalidades

---

## 🚀 VERSÃO 2

### 📷 Preview da versão em produção

<details>
<summary>Ver as telas</summary>

![Home](./.github/versao-2/1-home-1.webp)
![Home](./.github/versao-2/1-home-2.webp)
![Home](./.github/versao-2/1-home-3.webp)
![Home](./.github/versao-2/1-home-4.webp)
![Home](./.github/versao-2/1-home-5.webp)
![Home](./.github/versao-2/1-home-6.webp)
![Home](./.github/versao-2/1-home-7.webp)
![Programas](./.github/versao-2/2-programas-1.webp)
![Programas](./.github/versao-2/2-programas-2.webp)
![Programas](./.github/versao-2/2-programas-3.webp)
![Programas](./.github/versao-2/2-programas-4.webp)
![Recursos](./.github/versao-2/3-recursos-1.webp)
![Recursos](./.github/versao-2/3-recursos-2.webp)
![Sobre](./.github/versao-2/4-sobre-1.webp)
![Contato](./.github/versao-2/5-contato-1.webp)

</details>

### 🗺️ Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/programs` | Programas — busca, filtro e catálogo |
| `/program/:category/:id` | Apresentação do programa |
| `/program/:category/:id/enroll` | O treinamento |
| `/category` | Todas as categorias |
| `/resources` | Recursos |
| `/about` | Learn TECH |
| `/falaae` | Fala aê |
| `/aprender` | Aprender |
| `/careers` | Carreiras |
| `/blog/:id` | Artigo |
| `/softskills` · `/mentorias` | Em construção |
| `/terms` · `/privacy` | Termos e Privacidade |
| `*` | Não encontrado |

### 🌟 HOME

- [x] Imagem de destaque em carrossel
- [x] Index: nome e favicon
- [x] `LearnTechTitle`: logo reutilizável
- [x] Navbar: Home, Programas, Recursos, Learn TECH, Fala aê
- [x] Hero: subtítulo, título, descrição e dois botões CTA
- [x] Stats: contagem de conteúdos por tecnologia — Javascript, HTML, CSS, ReactJS, Git, GitHub, NodeJS
- [x] Categorias: listagem com ícone e descrição
- [x] Projetos: um card por categoria, com hover e botão "ver todos"
- [x] Comportamentos, Prêmios e Blogs
- [x] Footer com 4 colunas e copyright com o ano corrente
- [x] Botão fixo de voltar ao topo

### 🌟 PROGRAMAS

- [x] Busca por texto no título
- [x] Filtro por categoria
- [x] Contador de resultados
- [x] Paginação incremental: 4 cards, "Ver mais" carrega +6
- [x] Resultado memorizado com `useMemo`
- [x] Organização por faixa de id (ver tabela de categorias)
- [x] Uma página de apresentação para cada card

### 🌟 O TREINAMENTO

Como funciona a página de um programa inscrito:

- **Uma aba por módulo**, montada a partir de `modules[]`.
- Dentro do módulo, **os passos são uma checklist interativa**: o visitante marca o que concluiu e a barra de progresso do módulo acompanha.
- Ao concluir o módulo, o botão do final avança o progresso geral do programa. A navegação entre abas continua livre — visitar uma aba não marca nada.
- **O progresso geral** é a razão entre módulos concluídos e o total de módulos do programa, seja ele de 4 ou de 6.
- **O quiz** é do programa, não do módulo: cada questão aponta para o módulo que responde. Ao responder, o resultado aparece com a explicação.
- **O placar final** aparece quando todas as questões foram respondidas, com percentual de acerto.
- **O histórico de tentativas** registra cada rodada com data, hora e pontuação, e permanece depois de reiniciar.
- **Tudo é gravado no `localStorage`** sob a chave do programa, e recuperado ao voltar. Como não há conta de usuário, o progresso é do navegador.
- **Vídeo e pôster** são opcionais: só aparecem no programa que os define.

### 🌟 DEMAIS PÁGINAS

- [x] **Recursos**: conteúdos atuais e futuros do projeto
- [x] **Learn TECH**: propósito do projeto
- [x] **Fala aê**: FAQ e canal de comunicação com a equipe idealizadora
- [x] **Erro**: Não encontrado e Em construção
- [x] **Hospedagem**: Vercel, com `vercel.json` para o roteamento de SPA

---

## 🚀 VERSÃO 1 — histórico

Desenvolvimento do projeto inicial, mantido aqui como registro da origem. A arquitetura descrita nesta seção foi substituída pela Versão 2.

### 📚 LearnHub — Plataforma LMS Online Responsiva

🌟 Uma plataforma de Educação Online (LMS) desenvolvida com ReactJS e TailwindCSS, moderna, responsiva e com foco em experiência do usuário.

#### 🚀 Visão Geral

Projeto inspirado em plataformas como Udemy, trazendo recursos essenciais de um Learning Management System:

- Exibição de cursos, categorias e estatísticas
- Páginas de programas e detalhes
- Player de vídeo embutido
- Sistema de quizzes
- Blog integrado
- Design 100% responsivo

Construído passo a passo para ser acessível tanto a iniciantes quanto a desenvolvedores experientes.

#### 📖 Roadmap do Desenvolvimento

- 🎬 **Intro** — apresentação do objetivo do projeto: criação de uma plataforma LMS responsiva com ReactJS + TailwindCSS.
- ⚙️ **Project Setup** — configuração inicial com Vite, TailwindCSS e demais dependências.
- 🏠 **Home Page** — estrutura inicial da página principal com navegação e seções base.
- 🌟 **Hero Section** — seção de destaque com chamada principal e banner ilustrativo.
- 📊 **Stats Section** — exibição de estatísticas em cards.
- 📂 **Category Section** — listagem de categorias de cursos.
- 📚 **Programs Section** — apresentação dos programas disponíveis em cards.
- ⚡ **Quick Access Section** — navegação rápida entre recursos importantes.
- 📝 **Blog Section** — seção de artigos com conteúdo educativo.
- 📄 **Programs Page** — página dedicada aos programas.
- 🏞️ **Page Top Banner** — componente reutilizável de banner no topo das páginas internas.
- 🧭 **Breadcrumb** — componente de navegação por caminho de páginas.
- 📑 **Details Page** — página de detalhes de cada curso.
- 📝 **Enroll Programs Page** — página de inscrição no curso.
- 🎥 **Video Player Section** — componente de player de vídeo.
- 🖊️ **Description Section** — descrição completa do curso.
- 🗂️ **Tabs Components** — abas para alternar entre seções do curso.
- 📋 **Overview Tabs** — aba de visão geral.
- 📦 **Resources Tabs** — aba de recursos adicionais.
- ⭐ **Reviews Tabs** — aba de avaliações. *Removida na Versão 2: a plataforma não exibe avaliação que não consegue medir.*
- 📈 **Course Progress** — progresso do aluno dentro do curso.
- ❓ **Quiz Section** — quizzes interativos.
- 🔑 **Sign In Page** e 🆕 **Sign Up Page** — login e registro. *Removidas na Versão 2: a plataforma é OFF-only.*
- ✅ **Final Product** — plataforma LMS completa, responsiva e funcional.

#### 🔗 Referências da versão 1

- G-Tech Official — *How to Create an Online LMS Education Website using React Js and Tailwind CSS*: https://www.youtube.com/watch?v=tiwu5UHCUhQ
- Template inicial: https://github.com/gtech-official08/lmssys-starter-template
- Vídeo demo: https://www.youtube.com/watch?v=C9Kj594dRxU
- Imagens: [Pixabay](https://pixabay.com/)

---

### 🚀 Por: [@douglasabnovato](https://github.com/douglasabnovato)