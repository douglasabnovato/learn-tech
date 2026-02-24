# 🛠️ PLANO PASSO-A-PASSO: Migração de Dados Estáticos para programsData.js

## 📑 Índice
1. [Fase 1: Estrutura de Dados](#fase-1-estrutura-de-dados)
2. [Fase 2: Migração de Code](#fase-2-migração-de-code)
3. [Fase 3: Refatoração de Componentes](#fase-3-refatoração-de-componentes)
4. [Fase 4: Testes](#fase-4-testes)

---

## FASE 1: ESTRUTURA DE DADOS
**Objetivo:** Definir nova estrutura em programsData.js

### Passo 1.1: Estender Objeto do Programa com `enrollDetails`

**Arquivo:** `src/constants/programsData.js`  
**Ação:** Adicionar nova propriedade `enrollDetails` ao programa id:1

```javascript
{
  id: 1,
  // ... dados existentes ...
  
  enrollDetails: {
    // Seção Title (Description.jsx linha 8)
    categoryBadge: "Desenvolvimento Web",
    
    // Main Title (Description.jsx linha 10)
    mainTitle: "Um ótimo lugar para mergulhar em novos recursos de aprendizagem, livros e cursos.",
    
    // Introduction Paragraphs (Description.jsx linhas 15-45)
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
    
    // Course About Section (Description.jsx linha 52)
    courseAboutTitle: "Construa sua base sólida na Web",
    courseAboutDescription: "Este bootcamp foi projetado para ser o seu primeiro grande passo no mercado de tecnologia. Mais do que um curso, é uma imersão prática que transforma iniciantes em desenvolvedores capazes de arquitetar, estilizar e dar vida a aplicações modernas. Através de uma metodologia direta ao ponto, você dominará as ferramentas que as maiores empresas utilizam para criar produtos digitais de alto impacto.",
    
    // "What you'll learn" sections (Description.jsx linhas 56-206)
    moduleOverviews: [
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
      },
      {
        moduleId: 1,
        title: "Módulo 1: Estrutura Semântica (HTML5)",
        items: [
          {
            label: "Hierarquia de Conteúdo",
            description: "Tags semânticas (<header>, <nav>, <main>, <footer>)."
          },
          {
            label: "Acessibilidade",
            description: "atributos ARIA e boas práticas de semanticidade para usuários com deficiências."
          }
        ]
      },
      // ... módulos 2-5 com mesmo padrão
    ],
    
    // Transition text (Description.jsx linha 239)
    transitionText: "Explore detalhadamente o que preparamos para sua formação nas seções abaixo. Você terá orientações com uma visão geral completa do projeto, como acessar todos os recursos técnicos e arquivos de apoio necessários, e poderá conferir as avaliações de quem já transformou sua carreira através deste conteúdo."
  }
}
```

---

### Passo 1.2: Adicionar `moduleContents` ao Programa

**Arquivo:** `src/constants/programsData.js`  
**Ação:** Adicionar array `moduleContents` com 6 módulos completos

```javascript
{
  id: 1,
  // ... dados existentes ...
  
  moduleContents: [
    // MÓDULO 0
    {
      id: 0,
      title: "Setup e Arquitetura",
      shortDescription: "Configuração do Ambiente e Validação 'Hello World': Da preparação da máquina à primeira visualização em tempo real",
      
      introductionText: "Ter um setup bem configurado não é apenas uma questão de estética, mas de eficiência técnica. Ao alinhar o editor de código (VS Code), o navegador (Chrome) e a organização de arquivos, você reduz o atrito entre a ideia e a execução. O objetivo deste módulo é garantir que sua 'oficina' esteja funcionando perfeitamente, permitindo que você visualize suas criações instantaneamente através da extensão Live Server.",
      
      sections: [
        {
          title: "🚀 Passo a Passo do Setup Profissional",
          type: "steps",
          subsections: [
            {
              number: 1,
              title: "Organização de Diretórios (Windows Explorer)",
              guidance: "No seu Windows Explorer, crie uma pasta raiz chamada learnTECH em um local seguro. Para este teste inicial, crie uma subpasta chamada hello-world.",
              tips: ["💡 Dica de Ouro: Use sempre o padrão kebab-case (ex: meu-primeiro-projeto)", "Evite espaços para prevenir erros de link."]
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
    },
    
    // MÓDULO 1
    {
      id: 1,
      title: "Estrutura Semântica",
      shortDescription: "...",
      // ... mesmo padrão
    },
    
    // ... MÓDULOS 2-5 com mesmo padrão
  ]
}
```

---

### Passo 1.3: Migrar Quiz para programsData.js

**Arquivo:** `src/constants/programsData.js`  
**Ação:** Adicionar array `quiz` com as 18 questões (copiar de quizData.js)

```javascript
{
  id: 1,
  // ... dados existentes ...
  
  quiz: [
    {
      id: 1,
      moduleId: 0,
      difficulty: "basic",
      question: "Qual extensão do VS Code é utilizada para visualizar alterações no código em tempo real?",
      options: [
        { text: "Live Server", isCorrect: true },
        { text: "Prettier", isCorrect: false },
        { text: "ESLint", isCorrect: false },
        { text: "Docker", isCorrect: false }
      ]
    },
    // ... questões 2-18
  ]
}
```

---

## FASE 2: MIGRAÇÃO DE CODE
**Objetivo:** Mover conteúdo dos componentes para programsData.js

### Passo 2.1: Extrair Conteúdo de Description.jsx

**Arquivo:** `src/pages/enroll/Description.jsx`  
**Ação:** Documentar TODO o JSX estático

```
SEÇÃO 1 (linhas 8-10):
- categoryBadge: "Desenvolvimento Web"
- mainTitle: "Um ótimo lugar para mergulhar..."

SEÇÃO 2 (linhas 15-45):
- introductionParagraphs[0]: "Uma aplicação web é um sistema..."
- introductionParagraphs[1]: "O sucesso de um produto digital..."
- introductionParagraphs[2]: "Nesta jornada, você aprenderá..."

SEÇÃO 3 (linhas 52-56):
- courseAboutTitle: "Construa sua base sólida na Web"
- courseAboutDescription: "Este bootcamp foi projetado..."

SEÇÃO 4 (linhas 60-206):
- moduleOverviews[0-5]: Cada módulo com suas subsections descritas
```

### Passo 2.2: Extrair Conteúdo de ModuleZero.jsx

**Arquivo:** `src/pages/enroll/tabContent/ModuleZero.jsx`  
**Ação:** Converter JSX em estrutura de dados

```
EXTRAÇÃO:
- Título: "Setup e Arquitetura (O Início)"
- Subtítulo: "Configuração do Ambiente e Validação 'Hello World'..."
- introductionText: "Ter um setup bem configurado..."

SEÇÃO 1: "Passo a Passo do Setup Profissional"
  - Passo 1: Organização de Diretórios
  - Passo 2: Preparação do Editor
  - Passo 3-5: ... outros passos

SEÇÃO 2: "Fundamentos Técnicos"
  - Topicalities e itens
  
SEÇÃO 3: "Arquitetura e Boas Práticas"
  - Topicalities e itens

CLOSING: "Com o seu ambiente validado..."
BUTTON: "Ir para Módulo 1: Estrutura Semântica"
```

### Passo 2.3: Repetir para ModuleOne até ModuleFive

**Padrão a seguir para cada módulo:**
```
1. Título em português
2. Subtítulo descritivo
3. Parágrafo introdutório
4. Seções numeradas em array
5. Texto de fechamento
6. Botão "Próximo módulo"
```

### Passo 2.4: Migrar Questionário

**Arquivo:** `src/constants/quizData.js`  
**Ação:** Copiar 18 questões e adicionar `moduleId` a cada uma

```javascript
// Questões 1-3 (Módulo 0) → moduleId: 0
// Questões 4-6 (Módulo 1) → moduleId: 1
// Questões 7-9 (Módulo 2) → moduleId: 2
// Questões 10-12 (Módulo 3) → moduleId: 3
// Questões 13-15 (Módulo 4) → moduleId: 4
// Questões 16-18 (Módulo 5) → moduleId: 5
```

---

## FASE 3: REFATORAÇÃO DE COMPONENTES
**Objetivo:** Substituir JSX estático por renderização dinâmica

### Passo 3.1: Refatorar Description.jsx

**Antes:**
```jsx
<p className="text-sm...">Desenvolvimento Web</p>
<h1>Um ótimo lugar para mergulhar...</h1>
{hardcoded paragraphs}
{hardcoded module overviews}
```

**Depois:**
```jsx
export const Description = ({ 
  program,
  onCompleteModule, 
  completedModuleIndex 
}) => {
  // Destruturação de dados
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
    <div>
      <p>{categoryBadge}</p>
      <h1>{mainTitle}</h1>
      
      {/* Render paragraphs dinamicamente */}
      {introductionParagraphs.map((para) => (
        <p key={para.title}>{para.text}</p>
      ))}
      
      {/* Render module overviews dinamicamente */}
      {moduleOverviews.map((module) => (
        <div key={module.moduleId}>
          <h4>{module.title}</h4>
          <ul>
            {module.items.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <TabContent 
        program={program}
        onCompleteModule={onCompleteModule} 
        completedModuleIndex={completedModuleIndex} 
      />
    </div>
  );
};
```

**Mudanças em EnrollPrograms.jsx:**
```jsx
// Passar program para Description
<Description 
  program={program}
  onCompleteModule={handleCompleteModule}
  completedModuleIndex={completedModuleIndex}
/>
```

---

### Passo 3.2: Refatorar TabContent.jsx

**Antes:**
```jsx
import { ModuleZero } from "./ModuleZero";
import { ModuleOne } from "./ModuleOne";
// ... hard imports

const tabs = [
  { id: "modulo-0", title: "Módulo 0", content: <ModuleZero /> },
  // ...
];
```

**Depois:**
```jsx
import ModuleRenderer from "./ModuleRenderer"; // Novo componente genérico

export const TabContent = ({ 
  program,
  onCompleteModule, 
  completedModuleIndex 
}) => {
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

  return <Tabs tabs={tabs} />;
};
```

---

### Passo 3.3: Criar Componente Genérico ModuleRenderer.jsx

**Arquivo:** `src/pages/enroll/tabContent/ModuleRenderer.jsx`  
**Objetivo:** Renderizar qualquer módulo dinamicamente

```jsx
export const ModuleRenderer = ({ moduleData, onComplete }) => {
  const {
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
        <p className="text-base text-neutral-600">{introductionText}</p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">{section.title}</h3>
            <div className="grid gap-8">
              {section.subsections.map((sub, sidx) => (
                <div key={sidx} className="space-y-2">
                  <h4 className="text-base font-bold">
                    {sub.number}. {sub.title}
                  </h4>
                  <p className="text-sm">{sub.guidance}</p>
                  {sub.tips && sub.tips.length > 0 && (
                    <ul className="text-xs space-y-1">
                      {sub.tips.map((tip, tidx) => (
                        <li key={tidx} className="italic text-neutral-500">
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
      <div className="bg-neutral-900 p-8 rounded-xl text-center space-y-4">
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-white text-black font-bold rounded-lg"
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};
```

---

### Passo 3.4: Refatorar Quiz.jsx

**Antes:**
```jsx
import questions from "./../../../constants/quizData";

export const Quiz = () => {
  // usa questions global
}
```

**Depois:**
```jsx
export const Quiz = ({ program }) => {
  const questions = program.quiz;
  
  // Resto da lógica permanece igual
  // Apenas muda a origem dos dados
}
```

**Mudança em EnrollPrograms.jsx:**
```jsx
<Quiz program={program} />
```

---

### Passo 3.5: Deletar Componentes Obsoletos (OPCIONAL)

**Após refatoração completa, deletar:**
```
src/pages/enroll/tabContent/ModuleZero.jsx
src/pages/enroll/tabContent/ModuleOne.jsx
src/pages/enroll/tabContent/ModuleTwo.jsx
src/pages/enroll/tabContent/ModuleThree.jsx
src/pages/enroll/tabContent/ModuleFour.jsx
src/pages/enroll/tabContent/ModuleFive.jsx
```

---

## FASE 4: TESTES
**Objetivo:** Validar que tudo funciona dinamicamente

### Passo 4.1: Testar Programa id:1

**Verificar:**
```
✅ /program/web/1
   - Title carrega do programsData
   - Description, imagen, lessons, etc. aparecem
   
✅ /program/web/1/enroll
   - Page top banner com título correto
   - Description.jsx renderiza dados de enrollDetails
   - 6 módulos aparecem nas abas
   - Cada módulo mostra conteúdo do moduleContents
   - Quiz carrega as 18 questões corretas
   - Progresso funciona (0% → 100%)
   - Histórico de quiz save/restore funciona
```

### Passo 4.2: Adicionar Dados Minimalistas para id:2

**Ação:** Criar programa id:2 com:
- `enrollDetails` preenchido (pode ser cópia de id:1 adaptada)
- `moduleContents` para 6 módulos
- `quiz` com 18 questões diferentes

**Verificar:** tudo funciona igual para id:2

### Passo 4.3: Testar Navegação Entre Programas

```
✅ /program/web/1 → /program/web/2
   - Conteúdo muda automaticamente
   - Módulos diferentes aparecem
   - Quiz diferente carrega
   
✅ /program/web/2 → /program/web/1
   - Volta para conteúdo original
   - Progresso reseta (novo programa)
```

### Passo 4.4: Validar Responsividade

```
✅ Desktop (1920px)
✅ Tablet (768px)
✅ Mobile (375px)
```

### Passo 4.5: Verificar localStorage

```
✅ quizAnswers salva/recupera por programa
✅ quizHistory salva/recupera por programa
✅ Module progress salva/recupera por programa
```

---

## 📊 CHECKLIST FINAL

### Estrutura de Dados
- [ ] `enrollDetails` adicionado a programs[0]
- [ ] `moduleContents[0-5]` adicionado a programs[0]
- [ ] `quiz[0-17]` com `moduleId` adicionado a programs[0]

### Componentes Refatorados
- [ ] Description.jsx lê de `program.enrollDetails`
- [ ] TabContent.jsx lê de `program.modules` e `program.moduleContents`
- [ ] ModuleRenderer.jsx criado e testado
- [ ] Quiz.jsx recebe `program.quiz`

### Testes Validados
- [ ] Program id:1 funciona 100%
- [ ] Program id:2 funciona 100%
- [ ] Navegação entre programas funciona
- [ ] localStorage funciona corretamente
- [ ] Responsivo em todas as resoluções

### Limpeza (OPCIONAL)
- [ ] ModuleZero até ModuleFive deletados
- [ ] quizData.js pode ser mantido como backup

---

## 🚀 BENEFÍCIOS APÓS REFATORAÇÃO

✅ **Escalabilidade:**
- Criar novo curso = apenas adicionar dados em programsData.js
- Sem necessidade de criar 6 novos arquivos de componentes

✅ **Manutenibilidade:**
- Alterar conteúdo de módulo = alterar dados (não código JSX)
- Múltiplos programas compartilham mesmos componentes

✅ **Reutilização:**
- Description.jsx funciona para todos os programas
- ModuleRenderer.jsx funciona para todos os módulos
- Quiz.jsx funciona para qualquer questionário

✅ **Performance:**
- Menos componentes em memória
- Redução de código duplicado

---

## 📝 NOTAS IMPORTANTES

1. **Ordem de execução:** Fazer Fase 1 completa antes de Fase 2
2. **Backup:** Manter cópias dos arquivos antigos antes de deletar
3. **Testes contínuos:** Testar após cada refatoração de componente
4. **Versionamento:** Commits pequenos e testados após cada passo
5. **Reutilização:** Se outros programas já existem com dados estáticos, considerar consolidação

---

Está pronto para começar? Qual fase você prefere atacar primeiro?
