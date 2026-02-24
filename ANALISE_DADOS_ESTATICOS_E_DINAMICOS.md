# 📊 Análise: Dados Estáticos vs Dinâmicos no Sistema de Cursos

## 🎯 Contexto
O sistema atual tem informações distribuídas em 3 locais:
1. **programsData.js** - Dados dinâmicos dos programas
2. **Componentes** (Detail.jsx, Description.jsx, Módulos) - Dados ESTÁTICOS codeados em JSX
3. **quizData.js** - Perguntas do quiz (estáticas, mas isoladas)

---

## 📋 PARTE 1: O QUE ESTÁ DINÂMICO NO programsData.js

### ✅ Rota: `/program/web/1` (Detail.jsx)

**Dados já dinâmicos:**
```javascript
id: 1                           // ✅ Dinâmico (lido via useParams)
title: "Desenvolver uma LP..."  // ✅ Dinâmico
image: Image1                   // ✅ Dinâmico
rating: "4.5"                   // ✅ Dinâmico
lessons: "12 Lições"            // ✅ Dinâmico
students: "11 Alunos"           // ✅ Dinâmico
duration: "10hr e 30min"        // ✅ Dinâmico
price: "R$100.89"               // ✅ Dinâmico
level: "Iniciante"              // ✅ Dinâmico
description: "..."              // ✅ Dinâmico
letslearn: [...]                // ✅ Dinâmico
curriculum: "..."               // ✅ Dinâmico
about: "..."                    // ✅ Dinâmico
materials: [...]                // ✅ Dinâmico
modules: [...]                  // ✅ Dinâmico
```

**Status:** 100% Pronto ✅

---

### ✅ Rota: `/program/web/1/enroll` (EnrollPrograms.jsx)

**Dados já dinâmicos:**
```javascript
modules: [                       // ✅ Dinâmico (renderizado em TabContent)
  {
    id: 0,
    title: "Setup e Arquitetura",
    lessonsCount: 5,
    component: "ModuleZero"
  },
  // ... até módulo 5
]
```

**Status:** Parcialmente Pronto (estrutura existe, mas conteúdo dos módulos está estático)

---

## 🔴 PARTE 2: O QUE ESTÁ ESTÁTICO (Precisa Migrar)

### 1️⃣ **Description.jsx - TODA SEÇÃO "O que você vai aprender"**

**Localização:** Lines 62-207  
**Conteúdo estático:**
```jsx
<p className="text-sm text-neutral-600 font-normal bg-neutral-200/60...">
  Desenvolvimento Web                    // 🔴 ESTÁTICO (hardcoded)
</p>

<h1 className="text-2xl text-neutral-800 font-semibold">
  Um ótimo lugar para mergulhar...      // 🔴 ESTÁTICO (hardcoded)
</h1>

{/* Parágrafo 1, 2, 3 - TODOS ESTÁTICOS */}

{/* Seção "Módulo 0: Setup e Arquitetura" */}
{/* Seção "Módulo 1: Estrutura Semântica" */}
// ... até Módulo 5 - TODOS COM CONTEÚDO ESTÁTICO
```

**Impacto:** Impossível reutilizar para outros programas  
**Solução:** Mover para `programsData.js` em array chamado `enrollDetails`

---

### 2️⃣ **Módulos (ModuleZero.jsx até ModuleFive.jsx) - CONTEÚDO COMPLETO**

**Localização:** `/src/pages/enroll/tabContent/Module*.jsx`  
**Conteúdo estático por módulo:**

```jsx
// ModuleZero.jsx
<h1>Setup e Arquitetura (O Início)</h1>
<h2>Configuração do Ambiente e Validação "Hello World"...</h2>
<p>Ter um setup bem configurado...</p>
{/* Seção 1: Passo a Passo */}
{/* Seção 2: Fundamentos */}
{/* Seção 3: Arquitetura */}
{/* Botão ao final */}

// ModuleOne.jsx - Estrutura Semântica
// ModuleTwo.jsx - CSS Avançado
// ModuleThree.jsx - JavaScript
// ModuleFour.jsx - Projeto Prático
// ModuleFive.jsx - Deployment
```

**Tipo de conteúdo:**
- Títulos de módulos
- Subtítulos descritivos
- Parágrafos explicativos
- Listas de tópicos
- Seções numeradas
- Botão de próximo módulo

**Impacto:** CRÍTICO - Impossível criar novos cursos sem duplicar código  
**Solução:** Mover para `programsData.js` em array `moduleContents`

---

### 3️⃣ **quizData.js - 18 QUESTÕES ESTÁTICAS**

**Localização:** `/src/constants/quizData.js`  
**Total:** 318 linhas, 18 questões estruturadas por módulo

**Tipo de conteúdo:**
```javascript
{
  id: 1,
  question: "Qual extensão do VS Code...",
  options: [
    { text: "Live Server", isCorrect: true },
    { text: "Prettier", isCorrect: false },
    // ... 2 mais opções
  ]
}
```

**Organização atual:**
- Módulo 0: Questões 1-3
- Módulo 1: Questões 4-6
- Módulo 2: Questões 7-9
- Módulo 3: Questões 10-12
- Módulo 4: Questões 13-15
- Módulo 5: Questões 16-18

**Impacto:** Arquivo separado dificulta reutilização por programa  
**Solução:** Mover para `programsData.js` em array `quiz` dentro de cada programa

---

## 📊 TABELA RESUMIDA: O QUE ESTÁ ONDE

| Componente | Dados | Status | Localização |
|-----------|-------|--------|-------------|
| Detail.jsx | Program info | ✅ Dinâmico | programsData.js |
| Description.jsx | Intro + módulos overview | 🔴 Estático | Hardcoded em JSX |
| ModuleZero.jsx | Conteúdo do módulo 0 | 🔴 Estático | Hardcoded em JSX |
| ModuleOne.jsx | Conteúdo do módulo 1 | 🔴 Estático | Hardcoded em JSX |
| ModuleTwo.jsx | Conteúdo do módulo 2 | 🔴 Estático | Hardcoded em JSX |
| ModuleThree.jsx | Conteúdo do módulo 3 | 🔴 Estático | Hardcoded em JSX |
| ModuleFour.jsx | Conteúdo do módulo 4 | 🔴 Estático | Hardcoded em JSX |
| ModuleFive.jsx | Conteúdo do módulo 5 | 🔴 Estático | Hardcoded em JSX |
| Quiz.jsx | 18 questões | 🟡 Separado | quizData.js |

---

## 🎯 ESTRUTURA ESPERADA NO programsData.js

```javascript
{
  id: 1,
  // ... dados existentes ...
  
  // NOVO: Informações da página de inscrição (Description.jsx)
  enrollDetails: {
    categoryBadge: "Desenvolvimento Web",
    mainTitle: "Um ótimo lugar para mergulhar...",
    introductionParagraphs: [
      "Uma aplicação web é um sistema...",
      "O sucesso de um produto digital...",
      "Nesta jornada, você aprenderá..."
    ],
    courseAboutTitle: "Construa sua base sólida na Web",
    courseAboutDescription: "Este bootcamp foi projetado para ser...",
    transitionText: "Explore detalhadamente o que preparamos..."
  },

  // NOVO: Conteúdo de cada módulo (ModuleX.jsx)
  moduleContents: [
    {
      id: 0,
      title: "Setup e Arquitetura",
      shortDescription: "Configuração do Ambiente e Validação 'Hello World'",
      introductionText: "Ter um setup bem configurado...",
      sections: [
        {
          title: "Passo a Passo do Setup Profissional",
          subsections: [
            {
              number: 1,
              title: "Organização de Diretórios",
              guidance: "No seu Windows Explorer, crie...",
              tips: ["Dica 1", "Dica 2"]
            }
          ]
        }
      ],
      closingText: "Com o seu ambiente validado...",
      nextButtonText: "Ir para Módulo 1: Estrutura Semântica"
    },
    // ... módulos 1-5 com mesmo padrão
  ],

  // NOVO: Quiz associado ao programa
  quiz: [
    {
      id: 1,
      moduleId: 0,  // Associa ao módulo 0
      question: "Qual extensão do VS Code...",
      options: [
        { text: "Live Server", isCorrect: true },
        // ...
      ]
    },
    // ... questões 2-18
  ]
}
```

---

## 🔄 FLUXO DE COMO OS DADOS PRECISAM ESTAR

```
Rota: /program/web/1
    ↓
Detail.jsx lê `programsData[0]`
    ├─ String data (title, description, etc.) ✅ Já existe
    └─ Arrays (letslearn, materials, modules) ✅ Já existe
    
Rota: /program/web/1/enroll
    ↓
EnrollPrograms.jsx
    ├─ Description.jsx
    │   └─ Precisa de `program.enrollDetails` 🔴 PRECISA MIGRAR
    │
    ├─ TabContent.jsx
    │   └─ ModuleX.jsx (0-5)
    │       └─ Precisa de `program.moduleContents[X]` 🔴 PRECISA MIGRAR
    │
    └─ Quiz.jsx
        └─ Precisa de `program.quiz` 🔴 PRECISA MIGRAR
```

---

## 📈 IMPACTO DA REFATORAÇÃO

### Antes (Atual):
- ❌ Impossible reutilizar Description.jsx para outro programa
- ❌ Impossible gerar 6 novos módulos sem copiar/colar código
- ❌ Impossible associar quiz diferente por programa
- ❌ Cada novo curso = 6 novos arquivos de módulos

### Depois (Proposto):
- ✅ Qualquer programa pode ter Description dinâmica
- ✅ Qualquer programa pode ter seus 6 módulos
- ✅ Cada programa tem seu próprio quiz
- ✅ Cada novo curso = apenas dados em programsData.js

---

## 🚀 PRÓXIMOS PASSOS

Consulte o arquivo `PLANO_REFATORACAO_DETALHADO.md` para o plano passo-a-passo completo.
