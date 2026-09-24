# 🚀 Learn TECH

A Learn TECH tem como objetivo acelerar a jornada para aperfeiçoar os resultados.
Com uma experiência de usuário impecável, vamos construir um ECOSSISTEMA de (T)ecnologia, (E)nsino, (C)omputação e (H)umano para treinamento de APRENDIZADO.

🔗 **Em produção:** https://learn-tech-pied.vercel.app/

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

1. **`src/constants/programsData.js`** — o catálogo e o conteúdo dos programas já publicados no projeto.
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
| [lucide-react](https://lucide.dev/) · [react-icons](https://react-icons.github.io/react-icons/) | — | ícones |

---

## 🧱 Arquitetura de conteúdo

O conteúdo é **dado, não componente**. Nenhum programa tem arquivo `.jsx` próprio: um único renderizador lê o objeto do programa e monta a página.

```
src/constants/programsData.js     ← a fonte única do catálogo e do conteúdo
        │
        ├── Detail.jsx            ← página de apresentação do programa
        └── EnrollPrograms.jsx    ← página do treinamento
                └── Description.jsx
                        └── TabContent.jsx       ← uma aba por módulo
                                └── ModuleRenderer.jsx   ← renderiza qualquer módulo
```

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

**33 programas no catálogo. 3 com conteúdo publicado.**

| # | Programa | Categoria | Módulos | Passos | Questões |
| --- | --- | --- | --- | --- | --- |
| 1 | Desenvolver uma Landing Page Moderna | Web | 6 | 21 | 18 |
| 101 | React: Componentes, Estado e a Primeira Aplicação | Frontend | 4 | 13 | 12 |
| 801 | Programar com IA sem Perder o Aprendizado | IA | 4 | 13 | 12 |

Os outros 30 são cards de catálogo sem módulos. **Meta: um programa novo por categoria, por dia.**

### 📌 Pendências conhecidas

- [ ] Os 30 programas sem conteúdo precisam de um estado "em breve" — hoje a página de treinamento fica sem módulos publicados.
- [ ] `lessons` e `duration` ainda são valores escritos à mão. Devem derivar da soma dos passos, como o `lessonsCount` já deriva.
- [ ] `categoriesData.js` (seção Categorias da Home) lista 11 categorias — sem IA, e com Comunicação, Gestão e Tecnologia, que não têm nenhum programa. A lista de Programas tem 9, com IA. As duas precisam concordar.
- [ ] Arquivos órfãos a remover: `src/pages/account/sigin/SignIn.jsx`, `src/pages/account/signup/SignUp.jsx`, `src/components/reviews/ReviewsCard.jsx`, `src/constants/testimonialData.js`.
- [ ] O vídeo de demonstração do programa 1 tem 47 MB — pesado para carregamento no navegador.

---

## 👨‍💻 Workflow

- `main`: manter em produção
- `developer`: tratar testes e merge
- `v1-original`: versão inicial
- `v2-conteudos-0`: adição dos conteúdos do projeto
- `v2-conteudos-1`: versão estável com estrutura definida
- `v2-conteudos-2`: versão de organização de tarefas
- `v2-conteudos-2-1-home`: versão de desenvolvimento da seção home
- `v2-conteudos-2-2-hospedar`: versão de configuração da hospedagem
- `v2-conteudos-2-3-programs`: versão de desenvolvimento da seção programs
- `v2-conteudos-3-mvp`: versão de desenvolvimento de detalhes importantes

---

## 🚀 VERSÃO 2

### 📷 Preview da versão em produção

<details>
<summary>Ver as telas</summary>

![Home](./.github/versao-2/1-home-1.jpg)
![Home](./.github/versao-2/1-home-2.jpg)
![Home](./.github/versao-2/1-home-3.jpg)
![Home](./.github/versao-2/1-home-4.jpg)
![Home](./.github/versao-2/1-home-5.jpg)
![Home](./.github/versao-2/1-home-6.jpg)
![Home](./.github/versao-2/1-home-7.jpg)
![Programas](./.github/versao-2/2-programas-1.jpg)
![Programas](./.github/versao-2/2-programas-2.jpg)
![Programas](./.github/versao-2/2-programas-3.jpg)
![Programas](./.github/versao-2/2-programas-4.jpg)
![Recursos](./.github/versao-2/3-recursos-1.jpg)
![Recursos](./.github/versao-2/3-recursos-2.jpg)
![Sobre](./.github/versao-2/4-sobre-1.jpg)
![Contato](./.github/versao-2/5-contato-1.jpg)

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

#### 📷 Preview da versão 1

<details>
<summary>Ver as telas</summary>

![Home](./.github/original/1-home.jpg)
![Home](./.github/original/2-home.jpg)
![Home](./.github/original/3-home.jpg)
![Home](./.github/original/4-home.jpg)
![Home](./.github/original/5-home.jpg)
![Programas](./.github/original/6-programas.jpg)
![Programas](./.github/original/7-programas.jpg)
![Sign In](./.github/original/8-signin.jpg)

</details>

#### 🔗 Referências da versão 1

- G-Tech Official — *How to Create an Online LMS Education Website using React Js and Tailwind CSS*: https://www.youtube.com/watch?v=tiwu5UHCUhQ
- Template inicial: https://github.com/gtech-official08/lmssys-starter-template
- Vídeo demo: https://www.youtube.com/watch?v=C9Kj594dRxU
- Imagens: [Pixabay](https://pixabay.com/)

---

### 🚀 Por: [@douglasabnovato](https://github.com/douglasabnovato)