# 📋 PLANO FOCADO: Description.jsx + Módulos 0-5 (Program ID: 1)

## 🎯 Objetivo
Migrar dados estáticos de Description.jsx e Módulos (0-5) para `programsData.js` de forma incremental, testando cada etapa.

---

## 📑 ÍNDICE
1. [ETAPA 1: Extrair dados de Description.jsx](#etapa-1-extrair-dados-de-descriptionjsx)
2. [ETAPA 2: Estruturar enrollDetails em programsData.js](#etapa-2-estruturar-enrolldetails-em-programsdatajsx)
3. [ETAPA 3: Extrair conteúdo dos Módulos 0-5](#etapa-3-extrair-conteúdo-dos-módulos-0-5)
4. [ETAPA 4: Estruturar moduleContents em programsData.js](#etapa-4-estruturar-modulecontents-em-programsdatajsx)
5. [ETAPA 5: Refatorar Description.jsx para dinâmico](#etapa-5-refatorar-descriptionjsx-para-dinâmico)
6. [ETAPA 6: Refatorar TabContent + criar ModuleRenderer](#etapa-6-refatorar-tabcontent--criar-modulerenderer)
7. [ETAPA 7: Testes Completos](#etapa-7-testes-completos)

---

## ETAPA 1: Extrair dados de Description.jsx

### O que precisa ser extraído?

**Arquivo:** `src/pages/enroll/Description.jsx`

#### 1.1 - BADGE/CATEGORIA (Linha 8)
```jsx
<p className="text-sm text-neutral-600 font-normal bg-neutral-200/60 border border-neutral-100 rounded-full w-fit px-3 py-1">
  Desenvolvimento Web
</p>
```
**Dados a extrair:**
- `categoryBadge: "Desenvolvimento Web"`

---

#### 1.2 - TÍTULO PRINCIPAL (Linhas 10-13)
```jsx
<h1 className="text-2xl text-neutral-800 font-semibold">
  Um ótimo lugar para mergulhar em novos recursos de aprendizagem,
  livros e cursos.
</h1>
```
**Dados a extrair:**
- `mainTitle: "Um ótimo lugar para mergulhar em novos recursos de aprendizagem, livros e cursos."`

---

#### 1.3 - PARÁGRAFOS INTRODUTÓRIOS (Linhas 15-47)

**Parágrafo 1** (Linhas 15-27):
```jsx
<p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
  Uma <span className="font-bold">aplicação web</span> é um sistema
  interativo acessível pelo navegador, construído sobre o tripé
  fundamental do frontend. O <span className="font-bold">HTML</span>{" "}
  atua como o esqueleto, definindo a estrutura e o significado do
  conteúdo; o <span className="font-bold">CSS</span> é a camada estética
  que dita o estilo, as cores e o layout; enquanto o{" "}
  <span className="font-bold">JavaScript</span> provê a inteligência e o
  comportamento, permitindo que a página responda às ações do usuário em
  tempo real.
</p>
```

**Dados a extrair:**
```javascript
{
  title: "O Core da Aplicação Web",
  text: "Uma aplicação web é um sistema interativo acessível pelo navegador, construído sobre o tripé fundamental do frontend. O HTML atua como o esqueleto, definindo a estrutura e o significado do conteúdo; o CSS é a camada estética que dita o estilo, as cores e o layout; enquanto o JavaScript provê a inteligência e o comportamento, permitindo que a página responda às ações do usuário em tempo real."
}
```

**Parágrafo 2** (Linhas 29-41):
```jsx
<p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
  O sucesso de um produto digital reside na harmonia entre forma e
  função. Através do{" "}
  <span className="font-bold">UX (User Experience)</span>, projetamos
  cada interação com o objetivo de tornar a jornada do usuário intuitiva
  e eficiente. Aliado a isso, a{" "}
  <span className="font-bold">responsividade</span> garante que essa
  experiência seja preservada em qualquer tela, adaptando o design de
  forma inteligente desde smartphones até monitores de alta resolução,
  eliminando barreiras de acesso.
</p>
```

**Dados a extrair:**
```javascript
{
  title: "UX e Responsividade",
  text: "O sucesso de um produto digital reside na harmonia entre forma e função. Através do UX (User Experience), projetamos cada interação com o objetivo de tornar a jornada do usuário intuitiva e eficiente. Aliado a isso, a responsividade garante que essa experiência seja preservada em qualquer tela, adaptando o design de forma inteligente desde smartphones até monitores de alta resolução, eliminando barreiras de acesso."
}
```

**Parágrafo 3** (Linhas 43-47):
```jsx
<p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
  Nesta jornada, você aprenderá a construir uma landing page
  profissional do zero, unindo estas tecnologias em um{" "}
  <span className="font-bold">setup de desenvolvimento</span> otimizado.
  O foco não é apenas escrever código, mas compreender como entregar uma
  aplicação moderna, produtiva e pronta para os desafios reais do
  mercado de tecnologia.
</p>
```

**Dados a extrair:**
```javascript
{
  title: "O Objetivo deste Curso",
  text: "Nesta jornada, você aprenderá a construir uma landing page profissional do zero, unindo estas tecnologias em um setup de desenvolvimento otimizado. O foco não é apenas escrever código, mas compreender como entregar uma aplicação moderna, produtiva e pronta para os desafios reais do mercado de tecnologia."
}
```

---

#### 1.4 - SEÇÃO "Construa sua base sólida na Web" (Linhas 52-60)
```jsx
<h2 className="text-xl font-bold text-neutral-800 tracking-tight">
  Construa sua base sólida na Web
</h2>
<p className="text-sm font-normal text-neutral-600 leading-relaxed text-justify">
  Este bootcamp foi projetado para ser o seu primeiro grande passo
  no mercado de tecnologia. Mais do que um curso, é uma imersão
  prática que transforma iniciantes em desenvolvedores capazes de
  arquitetar, estilizar e dar vida a aplicações modernas. Através de
  uma metodologia direta ao ponto, você dominará as ferramentas que
  as maiores empresas utilizam para criar produtos digitais de alto
  impacto.
</p>
```

**Dados a extrair:**
```javascript
{
  courseAboutTitle: "Construa sua base sólida na Web",
  courseAboutDescription: "Este bootcamp foi projetado para ser o seu primeiro grande passo no mercado de tecnologia. Mais do que um curso, é uma imersão prática que transforma iniciantes em desenvolvedores capazes de arquitetar, estilizar e dar vida a aplicações modernas. Através de uma metodologia direta ao ponto, você dominará as ferramentas que as maiores empresas utilizam para criar produtos digitais de alto impacto."
}
```

---

#### 1.5 - SEÇÃO "O que você vai aprender" (Linhas 64-206)

Esta é a MAIOR seção. Contém 6 Módulos com subsections.

**ESTRUTURA:**
```
Seção: "O que você vai aprender" (titulo)
├── Módulo 0: Setup e Arquitetura
│   ├── Setup de Produtividade: "Configuração do VS Code..."
│   ├── Análise de Requisitos: "Entender o objetivo..."
│   ├── ...
├── Módulo 1: Estrutura Semântica
│   ├── Hierarquia de Conteúdo: "Tags semânticas..."
│   ├── Acessibilidade: "atributos ARIA..."
│   ├── ...
├── ... até Módulo 5
```

**EXTRAÇÃO POR MÓDULO:**

Vou extrair o padrão exato de cada módulo:

**Módulo 0** (Linhas 67-84):
```jsx
<h4 className="text-base font-bold text-neutral-800">
  Módulo 0: Setup e Arquitetura (O Início)
</h4>
<ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
  <li>
    <span className="font-semibold text-neutral-700">
      Setup de Produtividade:
    </span>{" "}
    Configuração do VS Code, extensões essenciais e estrutura de
    pastas profissional.
  </li>
  <li>
    <span className="font-semibold text-neutral-700">
      Análise de Requisitos:
    </span>{" "}
    Entender o objetivo da conversão (ex: landing pages de
    conversão).
  </li>
</ul>
```

**Dados a extrair:**
```javascript
{
  moduleId: 0,
  title: "Módulo 0: Setup e Arquitetura (O Início)",
  items: [
    {
      label: "Setup de Produtividade",
      description: "Configuração do VS Code, extensões essenciais e estrutura de pastas profissional."
    },
    {
      label: "Análise de Requisitos",
      description: "Entender o objetivo da conversão (ex: landing pages de conversão)."
    }
  ]
}
```

**Módulo 1** (Linhas 86-110):
```jsx
<h4 className="text-base font-bold text-neutral-800">
  Módulo 1: Estrutura Semântica (HTML5)
</h4>
<ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
  <li>
    <span className="font-semibold text-neutral-700">
      Hierarquia de Conteúdo:
    </span>{" "}
    Tags semânticas (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;).
  </li>
  {/* ... mais items ... */}
</ul>
```

**Dados a extrair:** Seguir mesmo padrão

**PADRÃO PARA TODOS OS MÓDULOS (0-5):**
```javascript
moduleOverviews: [
  {
    moduleId: 0,
    title: "Módulo 0: Setup e Arquitetura (O Início)",
    items: [
      { label: "...", description: "..." },
      { label: "...", description: "..." }
    ]
  },
  {
    moduleId: 1,
    title: "Módulo 1: Estrutura Semântica (HTML5)",
    items: [...]
  },
  // ... módulos 2-5
]
```

---

#### 1.6 - TEXTO DE TRANSIÇÃO (Linhas 239-246)
```jsx
<p className="text-base text-neutral-600 font-normal leading-relaxed">
  Explore detalhadamente o que preparamos para sua formação nas seções
  abaixo. Você terá orientações com uma{" "}
  <span className="font-bold">visão geral</span> completa do projeto,
  como acessar todos os <span className="font-bold">recursos</span>{" "}
  técnicos e arquivos de apoio necessários, e poderá conferir as{" "}
  <span className="font-bold">avaliações</span> de quem já transformou
  sua carreira através deste conteúdo.
</p>
```

**Dados a extrair:**
```javascript
{
  transitionText: "Explore detalhadamente o que preparamos para sua formação nas seções abaixo. Você terá orientações com uma visão geral completa do projeto, como acessar todos os recursos técnicos e arquivos de apoio necessários, e poderá conferir as avaliações de quem já transformou sua carreira através deste conteúdo."
}
```

---

### RESUMO - 1.7: O que extrair de Description.jsx

```javascript
enrollDetails: {
  categoryBadge: "Desenvolvimento Web",
  mainTitle: "Um ótimo lugar para mergulhar em novos recursos de aprendizagem, livros e cursos.",
  
  introductionParagraphs: [
    {
      title: "O Core da Aplicação Web",
      text: "Uma aplicação web é um sistema..."
    },
    {
      title: "UX e Responsividade",
      text: "O sucesso de um produto digital..."
    },
    {
      title: "O Objetivo deste Curso",
      text: "Nesta jornada, você aprenderá..."
    }
  ],
  
  courseAboutTitle: "Construa sua base sólida na Web",
  courseAboutDescription: "Este bootcamp foi projetado para ser...",
  
  moduleOverviews: [
    {
      moduleId: 0,
      title: "Módulo 0: Setup e Arquitetura (O Início)",
      items: [
        { label: "Setup de Produtividade", description: "..." },
        { label: "Análise de Requisitos", description: "..." }
      ]
    },
    // ... módulos 1-5
  ],
  
  transitionText: "Explore detalhadamente o que preparamos..."
}
```

---

## ETAPA 2: Estruturar enrollDetails em programsData.js

### O que fazer?

**Arquivo:** `src/constants/programsData.js`  
**Localização:** Adicionar ao objeto do programa id:1

### 2.1 - Localizar o programa id:1

```javascript
const programsData = [
  {
    id: 1,
    image: Image1,
    category: "Web",
    // ... outros dados ...
    modules: [
      { id: 0, title: "Setup e Arquitetura", ... },
      // ... módulos
    ]
    // ADICIONAR enrollDetails AQUI (após modules)
  },
  ...
]
```

### 2.2 - Adicionar enrollDetails

Após a propriedade `modules`, adicionar:

```javascript
enrollDetails: {
  categoryBadge: "Desenvolvimento Web",
  mainTitle: "Um ótimo lugar para mergulhar em novos recursos de aprendizagem, livros e cursos.",
  
  introductionParagraphs: [
    {
      title: "O Core da Aplicação Web",
      text: "Uma aplicação web é um sistema interativo acessível pelo navegador, construído sobre o tripé fundamental do frontend. O HTML atua como o esqueleto, definindo a estrutura e o significado do conteúdo; o CSS é a camada estética que dita o estilo, as cores e o layout; enquanto o JavaScript provê a inteligência e o comportamento, permitindo que a página responda às ações do usuário em tempo real."
    },
    {
      title: "UX e Responsividade",
      text: "O sucesso de um produto digital reside na harmonia entre forma e função. Através do UX (User Experience), projetamos cada interação com o objetivo de tornar a jornada do usuário intuitiva e eficiente. Aliado a isso, a responsividade garante que essa experiência seja preservada em qualquer tela, adaptando o design de forma inteligente desde smartphones até monitores de alta resolução, eliminando barreiras de acesso."
    },
    {
      title: "O Objetivo deste Curso",
      text: "Nesta jornada, você aprenderá a construir uma landing page profissional do zero, unindo estas tecnologias em um setup de desenvolvimento otimizado. O foco não é apenas escrever código, mas compreender como entregar uma aplicação moderna, produtiva e pronta para os desafios reais do mercado de tecnologia."
    }
  ],
  
  courseAboutTitle: "Construa sua base sólida na Web",
  courseAboutDescription: "Este bootcamp foi projetado para ser o seu primeiro grande passo no mercado de tecnologia. Mais do que um curso, é uma imersão prática que transforma iniciantes em desenvolvedores capazes de arquitetar, estilizar e dar vida a aplicações modernas. Através de uma metodologia direta ao ponto, você dominará as ferramentas que as maiores empresas utilizam para criar produtos digitais de alto impacto.",
  
  moduleOverviews: [
    {
      moduleId: 0,
      title: "Módulo 0: Setup e Arquitetura (O Início)",
      items: [
        { label: "Setup de Produtividade", description: "Configuração do VS Code, extensões essenciais e estrutura de pastas profissional." },
        { label: "Análise de Requisitos", description: "Entender o objetivo da conversão (ex: landing pages de conversão)." }
      ]
    },
    {
      moduleId: 1,
      title: "Módulo 1: Estrutura Semântica (HTML5)",
      items: [
        { label: "Hierarquia de Conteúdo", description: "Tags semânticas (<header>, <nav>, <main>, <footer>)." },
        { label: "Acessibilidade", description: "atributos ARIA e boas práticas de semanticidade para usuários com deficiências." }
      ]
    },
    {
      moduleId: 2,
      title: "Módulo 2: Estilização com CSS (Layouts Modernos)",
      items: [
        { label: "Flexbox e Grid", description: "Domide layouts flexíveis e responsivos com CSS moderno." },
        { label: "Design System", description: "Tokens de design, variáveis CSS e componentes reutilizáveis." }
      ]
    },
    {
      moduleId: 3,
      title: "Módulo 3: JavaScript e Interatividade",
      items: [
        { label: "DOM e Eventos", description: "Manipulação do DOM e tratamento de eventos de usuário." },
        { label: "Validação de Formulários", description: "Validação client-side com feedback ao usuário." }
      ]
    },
    {
      moduleId: 4,
      title: "Módulo 4: Projeto Prático e Deploy",
      items: [
        { label: "GitHub e Versionamento", description: "Usar Git/GitHub para versionamento do projeto." },
        { label: "Deploy em Produção", description: "Publicar projeto em plataformas como Vercel ou Netlify." }
      ]
    },
    {
      moduleId: 5,
      title: "Módulo 5: QA, Testes e Otimização",
      items: [
        { label: "Testes Manuais", description: "Verificação de links, formulários e comportamento." },
        { label: "Cross-Browser Testing", description: "Testar em múltiplos navegadores." }
      ]
    }
  ],
  
  transitionText: "Explore detalhadamente o que preparamos para sua formação nas seções abaixo. Você terá orientações com uma visão geral completa do projeto, como acessar todos os recursos técnicos e arquivos de apoio necessários, e poderá conferir as avaliações de quem já transformou sua carreira através deste conteúdo."
}
```

---

## ETAPA 3: Extrair conteúdo dos Módulos 0-5

### O que precisa ser extraído?

**Padrão por módulo:** Cada módulo tem estrutura similar

**Arquivo** → **Dados a extrair:**
- `ModuleZero.jsx` → Seções, títulos, descrições, passo-a-passo
- `ModuleOne.jsx` → Mesmo padrão
- `ModuleTwo.jsx` → Mesmo padrão
- `ModuleThree.jsx` → Mesmo padrão
- `ModuleFour.jsx` → Mesmo padrão
- `ModuleFive.jsx` → Mesmo padrão

### ESTRUTURA POR MÓDULO

Cada módulo segue este padrão (usar ModuleZero.jsx como referência):

```javascript
{
  id: 0,                                // ID do módulo (0-5)
  title: "Setup e Arquitetura",         // Título do módulo
  shortDescription: "Configuração do Ambiente...",  // Subtítulo
  introductionText: "Ter um setup bem configurado...",  // Intro
  
  sections: [
    {
      title: "🚀 Passo a Passo do Setup Profissional",
      subsections: [
        {
          number: 1,
          title: "Organização de Diretórios (Windows Explorer)",
          guidance: "No seu Windows Explorer, crie uma pasta raiz...",
          tips: ["💡 Dica de Ouro: Use sempre...", "Evite espaços..."]
        },
        {
          number: 2,
          title: "Preparação do Editor (Visual Studio Code)",
          guidance: "Abra o VS Code e vá em 'File > Open Folder'...",
          tips: []
        }
        // ... mais passos
      ]
    }
    // ... mais seções
  ],
  
  closingText: "Com o seu ambiente validado...",
  nextButtonText: "Ir para Módulo 1: Estrutura Semântica"
}
```

### 3.1 - MÓDULO 0: Setup e Arquitetura

**Extração de ModuleZero.jsx:**

```javascript
{
  id: 0,
  title: "Setup e Arquitetura",
  shortDescription: "Configuração do Ambiente e Validação 'Hello World': Da preparação da máquina à primeira visualização em tempo real",
  
  introductionText: "Ter um setup bem configurado não é apenas uma questão de estética, mas de eficiência técnica. Ao alinhar o editor de código (VS Code), o navegador (Chrome) e a organização de arquivos, você reduz o atrito entre a ideia e a execução. O objetivo deste módulo é garantir que sua 'oficina' esteja funcionando perfeitamente, permitindo que você visualize suas criações instantaneamente através da extensão Live Server.",
  
  sections: [
    {
      title: "🚀 Passo a Passo do Setup Profissional",
      subsections: [
        {
          number: 1,
          title: "Organização de Diretórios (Windows Explorer)",
          guidance: "No seu Windows Explorer, crie uma pasta raiz chamada learnTECH em um local seguro. Para este teste inicial, crie uma subpasta chamada hello-world.",
          tips: ["💡 Dica de Ouro: Use sempre o padrão kebab-case (ex: meu-primeiro-projeto).", "Evite espaços para prevenir erros de link."]
        },
        {
          number: 2,
          title: "Preparação do Editor (Visual Studio Code)",
          guidance: "Abra o VS Code e vá em 'File > Open Folder' selecionando a pasta criada. No menu de Extensões, instale o Live Server (de Ritwick Dey) e o Prettier.",
          tips: []
        },
        // ... passos 3-5
      ]
    }
  ],
  
  closingText: "Com o seu ambiente validado e o primeiro sinal de vida da sua aplicação no navegador, você acaba de cruzar a fronteira entre um entusiasta e um desenvolvedor em formação. Este setup será o seu porto seguro durante todo o bootcamp, garantindo que cada linha de código escrita seja visualizada e refinada em tempo real. Agora que a fundação está sólida, estamos prontos para subir o nível: no próximo módulo, deixaremos o 'Hello World' para trás para darmos início à arquitetura real da nossa landing page.",
  
  nextButtonText: "Ir para Módulo 1: Estrutura Semântica"
}
```

### 3.2 a 3.6 - MÓDULOS 1-5

Seguir o MESMO PADRÃO de extração para cada arquivo:
- ModuleOne.jsx → Módulo 1 data
- ModuleTwo.jsx → Módulo 2 data
- ModuleThree.jsx → Módulo 3 data
- ModuleFour.jsx → Módulo 4 data
- ModuleFive.jsx → Módulo 5 data

**Estrutura esperada:**
```javascript
[
  { id: 0, title: "...", sections: [...] },  // ModuleZero
  { id: 1, title: "...", sections: [...] },  // ModuleOne
  { id: 2, title: "...", sections: [...] },  // ModuleTwo
  { id: 3, title: "...", sections: [...] },  // ModuleThree
  { id: 4, title: "...", sections: [...] },  // ModuleFour
  { id: 5, title: "...", sections: [...] },  // ModuleFive
]
```

---

## ETAPA 4: Estruturar moduleContents em programsData.js

### O que fazer?

**Arquivo:** `src/constants/programsData.js`  
**Localização:** Adicionar ao objeto do programa id:1, após `enrollDetails`

### 4.1 - Adicionar moduleContents

```javascript
{
  id: 1,
  // ... dados existentes ...
  enrollDetails: { ... },  // já adicionado
  
  moduleContents: [
    // MÓDULO 0 (extraído de ModuleZero.jsx)
    {
      id: 0,
      title: "Setup e Arquitetura",
      shortDescription: "Configuração do Ambiente...",
      introductionText: "Ter um setup bem configurado...",
      sections: [
        {
          title: "🚀 Passo a Passo do Setup Profissional",
          subsections: [...]
        }
      ],
      closingText: "Com o seu ambiente validado...",
      nextButtonText: "Ir para Módulo 1: Estrutura Semântica"
    },
    
    // MÓDULO 1 (extraído de ModuleOne.jsx)
    {
      id: 1,
      title: "Estrutura Semântica",
      shortDescription: "...",
      introductionText: "...",
      sections: [...],
      closingText: "...",
      nextButtonText: "Ir para Módulo 2: Estilização"
    },
    
    // ... MÓDULOS 2-5 com mesmo padrão
  ]
}
```

---

## ETAPA 5: Refatorar Description.jsx para dinâmico

### O que fazer?

**Arquivo:** `src/pages/enroll/Description.jsx`

### 5.1 - Receber program como prop

```jsx
export const Description = ({ 
  program, 
  onCompleteModule, 
  completedModuleIndex 
}) => {
  // Destruturar dados
  const {
    categoryBadge,
    mainTitle,
    introductionParagraphs,
    courseAboutTitle,
    courseAboutDescription,
    moduleOverviews,
    transitionText
  } = program.enrollDetails;

  return (
    // renderizar dinamicamente
  );
}
```

### 5.2 - Renderizar categoryBadge dinamicamente

```jsx
{/* Antes - Hardcoded */}
<p>Desenvolvimento Web</p>

{/* Depois - Dinâmico */}
<p>{categoryBadge}</p>
```

### 5.3 - Renderizar mainTitle dinamicamente

```jsx
{/* Antes */}
<h1>Um ótimo lugar para mergulhar...</h1>

{/* Depois */}
<h1>{mainTitle}</h1>
```

### 5.4 - Renderizar introductionParagraphs com map

```jsx
{/* Antes - 3 parágrafos hardcoded */}
<p>Uma aplicação web é...</p>
<p>O sucesso de um produto...</p>
<p>Nesta jornada...</p>

{/* Depois - Map */}
{introductionParagraphs.map((para) => (
  <p key={para.title} className="text-base text-neutral-600...">
    {para.text}
  </p>
))}
```

### 5.5 - Renderizar courseAboutTitle e courseAboutDescription

```jsx
{/* Antes */}
<h2>Construa sua base sólida na Web</h2>
<p>Este bootcamp foi projetado...</p>

{/* Depois */}
<h2>{courseAboutTitle}</h2>
<p>{courseAboutDescription}</p>
```

### 5.6 - Renderizar moduleOverviews com map

```jsx
{/* Antes - 6 módulos hardcoded */}
<h4>Módulo 0: Setup e Arquitetura</h4>
<ul>
  <li><strong>Setup de Produtividade:</strong> Configuração...</li>
  <li><strong>Análise de Requisitos:</strong> Entender...</li>
</ul>
{/* ... hardcoded para módulos 1-5 */}

{/* Depois - Map */}
{moduleOverviews.map((module) => (
  <div key={module.moduleId} className="space-y-2">
    <h4 className="text-base font-bold">{module.title}</h4>
    <ul className="list-disc list-inside...">
      {module.items.map((item) => (
        <li key={item.label} className="text-sm text-neutral-600">
          <span className="font-semibold">{item.label}:</span> {item.description}
        </li>
      ))}
    </ul>
  </div>
))}
```

### 5.7 - Renderizar transitionText

```jsx
{/* Antes */}
<p>Explore detalhadamente o que preparamos...</p>

{/* Depois */}
<p>{transitionText}</p>
```

### 5.8 - Atualizar chamada em EnrollPrograms.jsx

```jsx
{/* Antes */}
<Description 
  onCompleteModule={handleCompleteModule}
  completedModuleIndex={completedModuleIndex}
/>

{/* Depois */}
<Description 
  program={program}
  onCompleteModule={handleCompleteModule}
  completedModuleIndex={completedModuleIndex}
/>
```

---

## ETAPA 6: Refatorar TabContent + criar ModuleRenderer

### O que fazer?

#### 6.1 - Criar novo componente ModuleRenderer.jsx

**Arquivo:** `src/pages/enroll/tabContent/ModuleRenderer.jsx`

```jsx
export const ModuleRenderer = ({ moduleData, onComplete }) => {
  const {
    id,
    title,
    shortDescription,
    introductionText,
    sections,
    closingText,
    nextButtonText
  } = moduleData;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-2xl pt-6 font-bold text-neutral-800">
          {title}
        </h1>
        <h2 className="text-lg font-medium text-neutral-500">
          {shortDescription}
        </h2>
        <p className="text-base font-normal text-neutral-600">{introductionText}</p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xl text-neutral-800 font-bold">{section.title}</h3>
            <div className="grid gap-8">
              {section.subsections?.map((sub, sidx) => (
                <div key={sidx} className="space-y-2 border-l-2 border-neutral-200 pl-4">
                  <h4 className="text-base font-bold text-neutral-800">
                    {sub.number}. {sub.title}
                  </h4>
                  <p className="text-sm text-neutral-600">{sub.guidance}</p>
                  {sub.tips && sub.tips.length > 0 && (
                    <ul className="space-y-1">
                      {sub.tips.map((tip, tidx) => (
                        <li key={tidx} className="text-xs text-neutral-500 italic">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="pt-6">
        <p className="text-base text-neutral-600">{closingText}</p>
      </div>

      {/* Button */}
      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
        <h3 className="text-xl font-bold text-white">✅ Módulo Completo!</h3>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto">{closingText}</p>
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};
```

#### 6.2 - Refatorar TabContent.jsx

**Arquivo:** `src/pages/enroll/tabContent/TabContent.jsx`

```jsx
import { Tabs } from "../../../components/tabs/Tabs";
import { ModuleRenderer } from "./ModuleRenderer";

export const TabContent = ({
  program,
  onCompleteModule,
  completedModuleIndex
}) => {
  // Mapear módulos dinamicamente
  const tabs = program.modules.map((module, index) => ({
    id: `modulo-${module.id}`,
    title: module.title,
    content: (
      <ModuleRenderer
        moduleData={program.moduleContents[index]}
        onComplete={() => onCompleteModule(index)}
      />
    )
  }));

  return (
    <div className="w-full">
      <Tabs tabs={tabs} />
    </div>
  );
};
```

#### 6.3 - Deletar imports antigos de TabContent.jsx

```jsx
{/* DELETAR ESSAS LINHAS */}
import { ModuleZero } from "./ModuleZero";
import { ModuleOne } from "./ModuleOne";
import { ModuleTwo } from "./ModuleTwo";
import { ModuleThree } from "./ModuleThree";
import { ModuleFour } from "./ModuleFour";
import { ModuleFive } from "./ModuleFive";
```

#### 6.4 - Atualizar Description.jsx para passar program

```jsx
{/* Description.jsx */}
<TabContent
  program={program}
  onCompleteModule={onCompleteModule}
  completedModuleIndex={completedModuleIndex}
/>
```

---

## ETAPA 7: Testes Completos

### 7.1 - Testar Rota `/program/web/1`

```
✅ Carregar programa id:1
✅ Title, image, description aparecem
✅ "Acessar" button funciona
```

### 7.2 - Testar Rota `/program/web/1/enroll`

```
✅ Page top banner mostra título
✅ Description.jsx renderiza:
   - categoryBadge: "Desenvolvimento Web" ✅
   - mainTitle renderizado ✅
   - 3 parágrafos renderizados ✅
   - courseAboutTitle + Description ✅
   - moduleOverviews para 6 módulos ✅
   - transitionText ✅

✅ TabContent renderiza 6 abas dinamicamente ✅
✅ Cada aba mostra ModuleRenderer com conteúdo correto ✅

✅ Progresso funciona (0% → 16.67% → ... → 100%) ✅
✅ Botões "Próximo Módulo" funcionam ✅
✅ localStorage salva respostas ✅
```

### 7.3 - Testar Responsividade

```
✅ Desktop (1920px)
✅ Tablet (768px)
✅ Mobile (375px)
```

### 7.4 - Verificar Console / Erros

```
✅ Nenhum erro de undefined
✅ Nenhum aviso no console
✅ Todas as props sendo passadas corretamente
```

---

## 📊 RESUMO DO PLANO

| Etapa | O que fazer | Arquivo | Status |
|-------|-----------|---------|--------|
| 1 | Extrair dados de Description.jsx | Description.jsx | 📋 Planejado |
| 2 | Estruturar enrollDetails em programsData.js | programsData.js | 📋 Planejado |
| 3 | Extrair conteúdo dos Módulos 0-5 | ModuleX.jsx | 📋 Planejado |
| 4 | Estruturar moduleContents em programsData.js | programsData.js | 📋 Planejado |
| 5 | Refatorar Description.jsx para dinâmico | Description.jsx | 📋 Planejado |
| 6 | Refatorar TabContent + criar ModuleRenderer | TabContent.jsx + ModuleRenderer.jsx | 📋 Planejado |
| 7 | Testes completos | todas | 📋 Planejado |

---

## 🚀 PRÓXIMO PASSO

Quer que eu comece pela **ETAPA 1** exatamente como descrito?

Vou:
1. Extrair toda o conteúdo de Description.jsx linha por linha
2. Listar exatamente qual texto vai para qual campo
3. Você confirma
4. Passamos para ETAPA 2 (adicionar em programsData.js)

**Confirma?**
