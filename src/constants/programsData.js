import Image1 from "./../assets/programs/1-programs.png";
import Video1 from "./../assets/programs/1-demo.mp4";
import Poster1 from "./../assets/programs/1-demo-poster.jpg";
import quiz1 from "./quizData";

const programsData = [
  // Web (1 a 100)
  {
    id: 1,
    image: Image1,
    video: Video1,
    videoPoster: Poster1,
    quiz: quiz1,
    category: "Web",
    categoryFilter: "web",
    title: "Desenvolver uma Landing Page Moderna",
    lessons: "12 Lições",
    duration: "10hr e 30min",
    access: "Acesso Livre",
    accessType: "livre",
    level: "Iniciante",
    description:
      "Um bootcamp prático de desenvolvimento web: você sai do zero absoluto e chega a uma landing page real, publicada, construída com HTML, CSS e JavaScript.",
    letslearn: [
      "Aprenda a construir aplicações web full-stack usando HTML, CSS e JavaScript.",
      "Entenda os fundamentos do desenvolvimento web",
      "Conceitos principais de HTML, CSS e JavaScript",
      "Construa interfaces responsivas e amigáveis para o usuário.",
    ],
    curriculum: "Introdução ao Desenvolvimento Web",
    about:
      "O currículo segue uma progressão deliberada: primeiro a estrutura (HTML semântico), depois a aparência (CSS e layout responsivo), depois o comportamento (JavaScript), e por fim a entrega (versionamento, deploy e testes). Cada módulo usa o que o anterior construiu — não são aulas isoladas, é uma única aplicação crescendo etapa por etapa.",
    materials: [
      "Slides Completos",
      "Repositório de Código Fonte",
      "Arquivos do Projeto",
      "Diretrizes e Dicas",
    ],
    modules: [
      { id: 0, title: "Ambiente de Desenvolvimento", lessonsCount: 5, component: "ModuleZero" },
      { id: 1, title: "Estrutura Semântica", lessonsCount: 3, component: "ModuleOne" },
      { id: 2, title: "Layout e Responsividade", lessonsCount: 3, component: "ModuleTwo" },
      { id: 3, title: "Interatividade com JavaScript", lessonsCount: 3, component: "ModuleThree" },
      { id: 4, title: "Versionamento e Publicação", lessonsCount: 3, component: "ModuleFour" },
      { id: 5, title: "Testes e Qualidade", lessonsCount: 4, component: "ModuleFive" },
    ],
    enrollDetails: {
      categoryBadge: "Desenvolvimento Web",
      mainTitle:
        "Construa uma landing page real, do primeiro HTML ao deploy em produção.",
      introductionParagraphs: [
        {
          title: "O Core da Aplicação Web",
          text: "Uma aplicação web é um sistema interativo acessível pelo navegador, construído sobre o tripé fundamental do frontend. O **HTML** atua como o esqueleto, definindo a estrutura e o significado do conteúdo; o **CSS** é a camada estética que dita o estilo, as cores e o layout; enquanto o **JavaScript** provê a inteligência e o comportamento, permitindo que a página responda às ações do usuário em tempo real. Nenhuma das três substitui a outra — a força da web está exatamente nessa divisão de responsabilidades.",
        },
        {
          title: "UX e Responsividade",
          text: "O sucesso de um produto digital reside na harmonia entre forma e função. Através do UX (User Experience), projetamos cada interação com o objetivo de tornar a jornada do usuário intuitiva e eficiente. Aliado a isso, a responsividade garante que essa experiência seja preservada em qualquer tela, adaptando o design de forma inteligente desde smartphones até monitores de alta resolução, eliminando barreiras de acesso. Um site que só funciona bem no computador do desenvolvedor não está pronto — está pronto quando funciona no celular de quem nunca viu o projeto antes.",
        },
        {
          title: "O Objetivo deste Curso",
          text: "Nesta jornada, você aprenderá a construir uma landing page profissional do zero, unindo estas tecnologias em um setup de desenvolvimento otimizado. O foco não é apenas escrever código, mas compreender como entregar uma aplicação moderna, produtiva e pronta para os desafios reais do mercado de tecnologia — versionada, testada, e publicada num endereço que qualquer pessoa pode acessar.",
        },
      ],
      courseAboutTitle: "Construa sua base sólida na Web",
      courseAboutDescription:
        "Este bootcamp foi projetado para ser o seu primeiro grande passo no mercado de tecnologia. Mais do que um curso, é uma imersão prática que transforma iniciantes em desenvolvedores capazes de arquitetar, estilizar e dar vida a aplicações modernas. Através de uma metodologia direta ao ponto, você dominará as ferramentas que sustentam praticamente toda a web moderna — e vai sair com um projeto publicado, não só um certificado.",
      moduleOverviews: [
        {
          moduleId: 0,
          title: "Módulo 0: Ambiente de Desenvolvimento",
          items: [
            {
              label: "Setup de Produtividade",
              description: "Configuração do VS Code, extensões essenciais e estrutura de pastas profissional.",
            },
            {
              label: "Análise de Requisitos",
              description: "Entender o objetivo da conversão (ex: landing pages de conversão).",
            },
            {
              label: "Validação do Ambiente",
              description: "Confirmar que o Live Server responde em tempo real antes de seguir para o conteúdo.",
            },
          ],
        },
        {
          moduleId: 1,
          title: "Módulo 1: Estrutura Semântica",
          items: [
            {
              label: "Hierarquia de Conteúdo",
              description: "Tags semânticas (<header>, <nav>, <main>, <footer>).",
            },
            {
              label: "Acessibilidade",
              description: "Atributos ARIA e boas práticas de semanticidade para usuários com deficiências.",
            },
            {
              label: "SEO Estrutural",
              description: "Como a hierarquia de headings e tags semânticas ajuda buscadores a entender a página.",
            },
          ],
        },
        {
          moduleId: 2,
          title: "Módulo 2: Layout e Responsividade",
          items: [
            {
              label: "Flexbox e Grid",
              description: "Dominar layouts flexíveis e responsivos com CSS moderno.",
            },
            {
              label: "Design System",
              description: "Tokens de design, variáveis CSS e componentes reutilizáveis.",
            },
            {
              label: "Media Queries",
              description: "Adaptar o layout para diferentes tamanhos de tela, do celular ao desktop.",
            },
          ],
        },
        {
          moduleId: 3,
          title: "Módulo 3: Interatividade com JavaScript",
          items: [
            {
              label: "DOM e Eventos",
              description: "Manipulação do DOM e tratamento de eventos de usuário.",
            },
            {
              label: "Validação de Formulários",
              description: "Validação client-side com feedback ao usuário.",
            },
            {
              label: "Efeitos de Scroll",
              description: "Animações e comportamentos acionados conforme o usuário navega pela página.",
            },
          ],
        },
        {
          moduleId: 4,
          title: "Módulo 4: Versionamento e Publicação",
          items: [
            {
              label: "GitHub e Versionamento",
              description: "Usar Git/GitHub para versionamento do projeto.",
            },
            {
              label: "Deploy em Produção",
              description: "Publicar projeto em plataformas como Vercel ou Netlify.",
            },
            {
              label: "Domínio e URL Final",
              description: "Entender como o projeto passa a ter um endereço público e acessível.",
            },
          ],
        },
        {
          moduleId: 5,
          title: "Módulo 5: Testes e Qualidade",
          items: [
            {
              label: "Testes Manuais",
              description: "Verificação de links, formulários e comportamento.",
            },
            {
              label: "Cross-Browser Testing",
              description: "Testar em múltiplos navegadores.",
            },
            {
              label: "Checklist Final",
              description: "Uma revisão de encerramento antes de considerar o projeto pronto para o portfólio.",
            },
          ],
        },
      ],
      transitionText:
        "Explore detalhadamente o que preparamos para sua formação nas seções abaixo. Você terá orientações com uma visão geral completa do projeto, como acessar todos os recursos técnicos e arquivos de apoio necessários, e poderá conferir as avaliações de quem já transformou sua carreira através deste conteúdo.",
    },
    moduleContents: [
      {
        id: 0,
        icon: "tools",
        title: "Ambiente de Desenvolvimento",
        shortDescription:
          "Do computador vazio à primeira página rodando no navegador",
        introductionText:
          "Ter um setup bem configurado não é apenas uma questão de estética, mas de eficiência técnica. Ao alinhar o editor de código (VS Code), o navegador (Chrome) e a organização de arquivos, você reduz o atrito entre a ideia e a execução. O objetivo deste módulo é garantir que sua 'oficina' esteja funcionando perfeitamente, permitindo que você visualize suas criações instantaneamente através da extensão Live Server. Todo o resto do curso se apoia neste alicerce — um ambiente mal configurado custa horas de frustração mais adiante, por isso não pulamos esta etapa.",
        sections: [
          {
            title: "🚀 Passo a Passo do Setup Profissional",
            subsections: [
              {
                number: 1,
                title: "Organização de Diretórios",
                guidance:
                  "No gerenciador de arquivos do seu sistema, crie uma pasta raiz chamada learnTECH em um local de fácil acesso. Dentro dela, crie uma subpasta chamada hello-world para este primeiro teste.",
                tips: [
                  "💡 Dica de Ouro: Use sempre o padrão kebab-case (ex: meu-primeiro-projeto).",
                  "Evite espaços para prevenir erros de link.",
                ],
              },
              {
                number: 2,
                title: "Preparação do Editor (Visual Studio Code)",
                guidance:
                  "Abra o VS Code e vá em 'File > Open Folder' selecionando a pasta criada. No menu de Extensões, instale o Live Server (de Ritwick Dey) e o Prettier.",
                tips: ["O Prettier formata seu código automaticamente ao salvar — configure isso agora e não precisará se preocupar com indentação depois."],
              },
              {
                number: 3,
                title: "Criação da Estrutura Base (HTML5)",
                code: "! + Tab",
                guidance:
                  "Crie um arquivo index.html. Digite ! e pressione Tab para gerar o boilerplate HTML5 automaticamente.",
                tips: ["Este atalho é fornecido pela extensão Emmet do VS Code."],
              },
              {
                number: 4,
                title: "Inicializando o Live Server",
                guidance:
                  "Clique com botão direito no arquivo index.html e selecione 'Open with Live Server'. Seu navegador abrirá automaticamente em http://localhost:5500.",
                tips: ["Se a porta 5500 estiver em uso, Live Server usará 5501 ou superior automaticamente."],
              },
              {
                number: 5,
                title: "Validação: 'Hello World'",
                code: "Ctrl + S",
                guidance:
                  "No arquivo index.html, adicione <h1>Hello World</h1> entre as tags <body>. Salve (Ctrl + S). Observe que o navegador atualiza automaticamente sem refresh manual.",
                tips: ["Este é o primeiro sinal de que seu ambiente está funcionando corretamente."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que o ambiente importa",
        highlights: [
          {
            icon: "sync",
            title: "Atrito zero entre escrever e ver",
            text: "O Live Server recarrega a página a cada gravação. Some o ciclo de salvar, alternar de janela e apertar F5 — e some junto a chance de você achar que mudou algo quando não mudou.",
          },
          {
            icon: "folder",
            title: "Padrão desde o primeiro dia",
            text: "Nome de pasta e arquivo em kebab-case, sem espaço e sem acento. É a convenção que evita o erro de caminho que só aparece depois, no servidor.",
          },
          {
            icon: "laptop",
            title: "As mesmas ferramentas do mercado",
            text: "VS Code, extensões e navegador com DevTools são o que equipes de produto usam todo dia. Você começa no ambiente real, não num simulador.",
          },
        ],
        closingText:
          "Com o seu ambiente validado e o primeiro sinal de vida da sua aplicação no navegador, você acaba de cruzar a fronteira entre um entusiasta e um desenvolvedor em formação. Este setup será o seu porto seguro durante todo o bootcamp, garantindo que cada linha de código escrita seja visualizada e refinada em tempo real. Agora que a fundação está sólida, estamos prontos para subir o nível: no próximo módulo, deixaremos o 'Hello World' para trás para darmos início à arquitetura real da nossa landing page.",
        ctaTitle: "🛠️ Ambiente Configurado!",
        ctaText:
          "Seu ambiente está pronto. O próximo passo é dar vida ao projeto começando pela estrutura.",
        nextButtonText: "Ir para Módulo 1: Estrutura Semântica",
      },
      {
        id: 1,
        icon: "sitemap",
        title: "Estrutura Semântica",
        shortDescription: "HTML5 com significado: hierarquia, acessibilidade e SEO",
        introductionText:
          "Agora que seu ambiente está configurado, é hora de aprender a linguagem que os navegadores entendem: HTML5. Não é apenas sobre tags e elementos, mas sobre contar uma história estruturada. Cada tag tem um propósito semântico que não só melhora o SEO, mas também torna seu site acessível a um público muito mais amplo, incluindo pessoas com deficiências visuais ou auditivas. Um HTML bem estruturado é a diferença entre um site que qualquer pessoa e qualquer buscador consegue interpretar, e um site que só faz sentido visualmente.",
        sections: [
          {
            title: "📐 Hierarquia de Conteúdo",
            subsections: [
              {
                number: 1,
                title: "Semântica HTML5",
                code: "<header> <nav> <main> <footer>",
                guidance:
                  "Realize que <div> é genérico, mas <header>, <nav>, <main>, <section>, <article>, <footer> comunicam significado. Use semântica para estruturar sua página de forma lógica.",
                tips: ["Google e acessibilidade dependem dessa estrutura semântica."],
              },
              {
                number: 2,
                title: "Headings e Hierarquia (h1-h6)",
                guidance:
                  "Use um único <h1> por página (seu título principal). Use h2, h3 etc. para subtítulos em ordem hierárquica. Nunca pule níveis (não vá de h1 para h3).",
                tips: ["Bots de SEO lêem seus headings para entender o tópico."],
              },
              {
                number: 3,
                title: "Meta Tags Essenciais",
                guidance:
                  "No <head>, inclua a tag <meta name='viewport'> para garantir responsividade, e uma <meta name='description'> descrevendo a página — é o texto que aparece no resultado de busca do Google.",
                tips: ["Sem a meta viewport, seu site pode aparecer minúsculo em celulares, mesmo com CSS responsivo pronto."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que a semântica importa",
        highlights: [
          {
            icon: "sitemap",
            title: "Um documento que se explica sozinho",
            text: "Com tags semânticas, quem lê o código entende a página sem precisar rodar. O HTML deixa de ser um monte de caixas e passa a ter significado.",
          },
          {
            icon: "tags",
            title: "Alcance para quem navega diferente",
            text: "Leitor de tela, navegação por teclado e modo de leitura dependem dessa estrutura. Semântica não é preciosismo: é quanta gente consegue usar o que você fez.",
          },
          {
            icon: "list",
            title: "O buscador entende o assunto",
            text: "Hierarquia de headings e meta tags são o que o Google lê para decidir do que a página trata. Estrutura errada custa posição, mesmo com bom conteúdo.",
          },
        ],
        closingText:
          "Com a estrutura semântica finalizada, sua landing page agora tem 'corpo' e significado. Você deixou de apenas 'escrever tags' para arquitetar uma solução. O próximo grande passo será dar vida e estilo a esse esqueleto: no Módulo 2, mergulharemos no CSS para transformar essa estrutura em uma interface visualmente impactante.",
        ctaTitle: "📐 Estrutura Pronta!",
        ctaText:
          "Seu esqueleto está de pé. No Módulo 2, mergulhamos no CSS para transformar essa estrutura em uma interface visualmente impactante.",
        nextButtonText: "Ir para Módulo 2: Layout e Responsividade",
      },
      {
        id: 2,
        icon: "palette",
        title: "Layout e Responsividade",
        shortDescription: "Flexbox, Grid e media queries: o mesmo site em qualquer tela",
        introductionText:
          "CSS não é apenas 'deixar bonito'. É sobre comunicação visual, hierarquia de informação e adaptar seu design para qualquer tela. Neste módulo, você dominará Flexbox e CSS Grid, as duas ferramentas mais poderosas do CSS moderno, permitindo criar layouts que se adaptam perfeitamente de um iPhone até uma TV. A diferença entre um site amador e um profissional geralmente está aqui: no domínio de layout e consistência visual, não na quantidade de código escrito.",
        sections: [
          {
            title: "🎨 Design System Implementado",
            subsections: [
              {
                number: 1,
                title: "Flexbox Fundamentals",
                code: "display: flex;",
                guidance:
                  "Flexbox simplifica alinhamento e distribuição de espaço. Aprenda display: flex, justify-content, align-items, flex-direction.",
                tips: ["Flexbox é ideal para componentes e layouts unidimensionais."],
              },
              {
                number: 2,
                title: "CSS Grid",
                code: "display: grid;",
                guidance:
                  "Para layouts mais complexos, Grid oferece controle em duas dimensões. Defina grid-template-columns, grid-gap e posicione itens com grid-column.",
                tips: ["Grid é perfeito para layouts de página inteira."],
              },
              {
                number: 3,
                title: "Media Queries e Responsividade",
                code: "@media (max-width: 768px)",
                guidance:
                  "Use @media (max-width: 768px) para redefinir o layout em telas menores. Teste sempre do menor breakpoint para o maior (mobile-first).",
                tips: ["Projetar mobile-first evita retrabalho: é mais fácil expandir um layout simples do que simplificar um complexo."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que o layout importa",
        highlights: [
          {
            icon: "grid",
            title: "Design system",
            text: "Tokens de design, variáveis CSS e componentes reutilizáveis dão consistência ao projeto inteiro.",
          },
          {
            icon: "mobile",
            title: "Adaptação de tela",
            text: "O mesmo layout se reorganiza de um celular até uma TV, sem versão separada e sem rolagem horizontal.",
          },
          {
            icon: "palette",
            title: "Consistência visual",
            text: "Cores, espaçamento e tipografia seguem um padrão único em toda a página — é o que separa o amador do profissional.",
          },
        ],
        closingText:
          "Sua página agora é profissional e se adapta a qualquer tela. Com Flexbox e Grid, você dominou o layout moderno. É hora de sair da estática e adicionar interatividade real.",
        ctaTitle: "🎨 Visual Pronto!",
        ctaText:
          "Sua interface está estilizada e responsiva. No Módulo 3, vamos trazer interatividade real com JavaScript.",
        nextButtonText: "Ir para Módulo 3: Interatividade com JavaScript",
      },
      {
        id: 3,
        icon: "bolt",
        title: "Interatividade com JavaScript",
        shortDescription: "DOM, eventos e validação: a página que responde ao usuário",
        introductionText:
          "HTML estrutura, CSS estiliza, mas JavaScript traz a magia: interatividade, validação, e reatividade em tempo real. Neste módulo, você aprenderá não apenas sintaxe, mas padrões que os profissionais usam diariamente para criar experiências de usuário incríveis. Se o HTML é o esqueleto e o CSS é a pele, o JavaScript é o sistema nervoso da sua aplicação — é ele que faz a página perceber e reagir ao que o usuário faz.",
        sections: [
          {
            title: "⚙️ Interatividade com JavaScript",
            subsections: [
              {
                number: 1,
                title: "DOM e Eventos",
                code: "document.querySelector()",
                guidance:
                  "O Document Object Model permite acessar e modificar elementos HTML. Aprenda document.querySelector, addEventListener, classList.",
                tips: ["Eventos como 'click', 'input', 'submit' são seus aliados."],
              },
              {
                number: 2,
                title: "Validação de Formulários",
                guidance:
                  "Valide inputs do usuário client-side antes de enviar. Verifique campos vazios, formatos de email, senhas fortes. Forneça feedback visual imediato para o usuário caso um campo esteja incorreto.",
                tips: ["Validação client-side melhora UX; nunca confie apenas nela para segurança."],
              },
              {
                number: 3,
                title: "Efeitos Dinâmicos e Scroll",
                code: "IntersectionObserver()",
                guidance:
                  "Use a API de Intersection Observer para disparar animações apenas quando o elemento estiver visível na tela, otimizando a performance em vez de escutar o evento de scroll diretamente.",
                tips: ["Animações disparadas por scroll direto (sem Intersection Observer) tendem a travar em celulares mais fracos."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que a interatividade importa",
        highlights: [
          {
            icon: "comment",
            title: "Feedback de estado",
            text: "O JavaScript informa ao usuário o que está acontecendo. Um aviso de envio em andamento reduz a ansiedade de quem não sabe se o clique funcionou.",
          },
          {
            icon: "shield",
            title: "Prevenção de erros",
            text: "A validação antecipada evita que o usuário envie dado incompleto ou fora do formato, e explica o que corrigir antes do envio.",
          },
          {
            icon: "gauge",
            title: "Performance e fluidez",
            text: "Animações disparadas no momento certo mantêm a página leve. Script mal escrito trava justamente no celular mais simples.",
          },
        ],
        closingText:
          "Sua página agora responde aos usuários, mas ainda temos um objetivo: fazer isso em produção onde o mundo possa acessá-la.",
        ctaTitle: "⚡ Sua aplicação ganhou vida!",
        ctaText:
          "Menus, validações e eventos estão funcionando. Você deixou de montar telas para construir comportamento. O próximo passo é mostrar isso para o mundo.",
        nextButtonText: "Ir para Módulo 4: Versionamento e Publicação",
      },
      {
        id: 4,
        icon: "rocket",
        title: "Versionamento e Publicação",
        shortDescription: "Git, GitHub e deploy: do seu computador a um endereço público",
        introductionText:
          "Um projeto perfeito localmente não vale nada se ninguém pode acessá-lo. Neste módulo, você aprenderá a versioná-lo com Git/GitHub e publicá-lo em plataformas como Vercel, tornando sua landing page acessível para qualquer pessoa em qualquer lugar. É também o momento em que o projeto deixa de ser 'exercício de curso' e passa a ser, de fato, um item de portfólio.",
        sections: [
          {
            title: "🚀 Ciclo Completo de Desenvolvimento",
            subsections: [
              {
                number: 1,
                title: "GitHub e Versionamento",
                code: "git push origin main",
                guidance:
                  "Crie um repositório GitHub. Use git init, git add, git commit, git push para versionar seu código. Isto não é opcional: é como profissionais trabalham.",
                tips: ["GitHub é seu portfólio. Commits bem feitos mostram sua história de desenvolvimento."],
              },
              {
                number: 2,
                title: "Deploy em Produção",
                guidance:
                  "Conecte seu repositório GitHub a uma plataforma como Vercel ou Netlify. Cada push automaticamente publica a versão mais recente ao vivo.",
                tips: ["Vercel oferece hospedagem gratuita com deploy em segundos."],
              },
              {
                number: 3,
                title: "Compartilhando a URL",
                guidance:
                  "Depois do deploy, você recebe um endereço público (algo como seu-projeto.vercel.app). Esse link é o que você coloca no currículo, no LinkedIn e no portfólio.",
                tips: ["Um projeto só conta como portfólio quando alguém de fora consegue abrir o link — não quando só roda na sua máquina."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que publicar importa",
        highlights: [
          {
            icon: "github",
            title: "Histórico que conta como você trabalha",
            text: "Cada commit registra uma decisão. O repositório deixa de ser backup e vira evidência do seu processo para quem avalia.",
          },
          {
            icon: "bolt",
            title: "Publicação automática",
            text: "Conectado o repositório, cada envio publica sozinho. Corrigir algo passa a ser um commit, não um ritual de subir arquivo.",
          },
          {
            icon: "shield",
            title: "HTTPS sem configurar nada",
            text: "Hospedagens modernas emitem o certificado automaticamente. Seu projeto nasce em endereço seguro, sem etapa extra.",
          },
        ],
        closingText:
          "Sua URL está ativa e seu código está seguro no GitHub. Você completou o ciclo de produção. Mas um desenvolvedor de elite nunca para: vamos garantir que seu código seja inquebrável.",
        ctaTitle: "🚀 O projeto está no ar!",
        ctaText:
          "Sua URL está ativa e seu código está versionado no GitHub. Você completou o ciclo de produção — falta garantir que ele aguenta o uso real.",
        nextButtonText: "Ir para Módulo 5: Testes e Qualidade",
      },
      {
        id: 5,
        icon: "clipboard",
        title: "Testes e Qualidade",
        shortDescription: "Verificação, compatibilidade e a checklist antes de publicar",
        introductionText:
          "Um desenvolvedor não é apenas quem escreve código, mas quem garante que funcione perfeitamente em qualquer situação. Neste módulo especial, você aprenderá técnicas de QA (Quality Assurance) que separam quem só termina o projeto de quem entrega o projeto pronto de verdade.",
        sections: [
          {
            title: "🔍 Garantia de Qualidade",
            subsections: [
              {
                number: 1,
                title: "Testes Manuais",
                guidance:
                  "Não confie em 'parecia funcionar'. Teste cada interação: clique em botões, envie formulários com dados válidos e inválidos, teste em conexões lentas.",
                tips: ["Testes manuais encontram bugs que automação não consegue."],
              },
              {
                number: 2,
                title: "Cross-Browser Testing",
                guidance:
                  "Garanta que sua landing page funcione perfeitamente em Chrome, Safari, Edge e Firefox. Use BrowserStack se necessário para testar em dispositivos reais.",
                tips: ["Usuários iOS, Android e Windows precisam da mesma experiência."],
              },
              {
                number: 3,
                title: "Validação de Dados",
                guidance:
                  "Testes unitários simples em JavaScript para validar entradas de e-mail, campos obrigatórios, senhas fortes.",
                tips: ["Validação é a primeira linha de defesa contra dados ruins."],
              },
              {
                number: 4,
                title: "Checklist Final de Publicação",
                guidance:
                  "Antes de considerar o projeto pronto, revise: todos os links funcionam? O formulário valida corretamente? O site carrega bem em celular? Existe algum texto de placeholder esquecido?",
                tips: ["Esta checklist final é o que separa um projeto 'terminado' de um projeto realmente pronto para mostrar a alguém."],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que QA importa",
        highlights: [
          {
            icon: "search",
            title: "Olhar de QA",
            text: "Testar como o usuário mais exigente é o que revela o problema antes que alguém de fora encontre.",
          },
          {
            icon: "globe",
            title: "Consistência entre navegadores",
            text: "O mesmo código se comporta de forma sutilmente diferente em cada navegador. Testar evita a surpresa depois de publicado.",
          },
          {
            icon: "tasks",
            title: "Checklist como hábito",
            text: "Profissional não confia na memória: a checklist de publicação vira parte do processo, não um extra.",
          },
        ],
        closingText:
          "Sua jornada do Módulo 0 ao Módulo 5 foi concluída com sucesso. Agora você possui uma landing page funcional, estilizada, interativa, publicada e testada. Este é o padrão de excelência técnica com foco total na experiência real do usuário.",
        ctaTitle: "🎓 Programa concluído!",
        ctaText:
          "Você construiu, estilizou, deu vida e publicou uma aplicação real, do zero até o ar — e conferiu que ela funciona.",
        nextButtonText: "Concluir o programa",
      },
    ],

    whatYouBuild: {
      title: "O que você vai construir",
      description:
        "Ao final deste programa, você terá uma landing page profissional completa — estruturada, estilizada, interativa e publicada na internet, acessível por qualquer pessoa. Não é um exercício de gaveta: é um projeto real, do seu computador ao ar, pronto para o seu portfólio.",
      highlights: [
        "Uma página publicada e acessível por URL",
        "Código versionado no GitHub",
        "Projeto pronto para o portfólio",
      ],
    },

    whyNow: {
      title: "Por que isso importa agora",
      paragraphs: [
        "JavaScript está presente em mais de 95% dos sites da internet atualmente — é, disparado, a tecnologia mais universal da web. Saber construir com HTML, CSS e JavaScript não é uma habilidade entre outras: é a base sobre a qual quase toda experiência digital é construída.",
        "O mercado de desenvolvimento front-end segue aquecido em 2026, com demanda crescente por quem domina os fundamentos antes de qualquer framework. Mais do que escrever código, este programa ensina a entregar uma aplicação real — o que separa quem 'estudou' de quem 'sabe fazer'.",
      ],
    },

    appliedIn: {
      title: "Onde se aplica",
      items: [
        {
          label: "Landing pages de produto",
          description: "Páginas de lançamento e conversão para produtos e serviços.",
        },
        {
          label: "Portfólios profissionais",
          description: "Sua própria presença online, para mostrar trabalho e atrair oportunidades.",
        },
        {
          label: "Sites institucionais",
          description: "Presença digital de empresas, negócios locais e projetos.",
        },
      ],
    },

    forWho: {
      title: "Para quem é este programa",
      profiles: [
        {
          label: "Iniciantes em tecnologia",
          description: "Quem quer dar o primeiro passo concreto no desenvolvimento web.",
        },
        {
          label: "Quem quer o primeiro projeto real",
          description: "Já viu teoria, mas nunca entregou algo publicado de ponta a ponta.",
        },
        {
          label: "Profissionais em transição de carreira",
          description: "Quem vem de outra área e quer construir base sólida para migrar.",
        },
      ],
    },

    marketUsage: {
      title: "Quem usa no mercado",
      description:
        "HTML, CSS e JavaScript não são tecnologia de nicho — são a base universal da web. Presentes em praticamente todo site que existe, de pequenos negócios locais a produtos usados por bilhões de pessoas, esse é o conjunto de habilidades mais transferível que existe em tecnologia: aprenda uma vez, aplique em qualquer contexto.",
      companies: [],
    },

    sources: [
      {
        label: "Gitnux — JavaScript Statistics (2026), agregando dados de W3Techs, Stack Overflow Developer Survey e GitHub Octoverse",
        url: "https://gitnux.org/javascript-statistics/",
      },
      {
        label: "Alura — Desenvolvedor Front-end em 2026: o guia para a carreira",
        url: "https://www.alura.com.br/artigos/desenvolvedor-frontend",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    category: "Web",
    categoryFilter: "web",
    title: "HTML5 e CSS3 Moderno: Do Zero ao Deployment",
    lessons: "20+ Lições",
    duration: "15hr 20min",
    access: "Acesso Livre",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg",
    category: "Web",
    categoryFilter: "web",
    title:
      "Web Design Responsivo: Criando sites que se adaptam a qualquer tela",
    lessons: "10+ Lições",
    duration: "08hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg",
    category: "Web",
    categoryFilter: "web",
    title: "JavaScript para Iniciantes: A Base da Web Moderna",
    lessons: "25+ Lições",
    duration: "18hr 10min",
    access: "Acesso Livre",
  },

  // Frontend (101 a 200)
    {
    id: 101,
    image:
      "https://cdn.pixabay.com/photo/2015/09/06/00/17/macbook-926558_960_720.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    title: "React: Componentes, Estado e a Primeira Aplicação",
    lessons: "13 passos",
    duration: "8h estimadas",
    access: "Acesso Livre",
    accessType: "livre",
    level: "Intermediário",
    description:
      "A ponte entre saber HTML, CSS e JavaScript e construir uma aplicação de verdade. Você aprende a pensar em componentes, controlar estado e montar uma interface que reage aos dados — sem framework mágico, entendendo o que cada peça faz.",
    letslearn: [
      "Quebrar uma interface em componentes reutilizáveis",
      "Controlar estado com useState e entender quando o React re-renderiza",
      "Renderizar listas, controlar formulários e lidar com efeitos colaterais",
      "Organizar uma aplicação em pastas que continuam fazendo sentido depois de crescer",
    ],
    curriculum: "Do JavaScript ao React",
    about:
      "O programa parte de onde a landing page parou. Você já sabe manipular o DOM na mão; aqui aprende por que o React existe, o que ele resolve e o custo que cobra em troca. A progressão vai do componente isolado ao estado compartilhado, da lista estática ao formulário controlado, e termina com a aplicação organizada. Nenhum módulo introduz biblioteca nova sem antes mostrar o problema que ela resolve.",
    materials: [
      "Repositório com o projeto por módulo",
      "Checklist de revisão de componente",
      "Lista de erros comuns e como identificá-los",
    ],
    modules: [
      { id: 0, title: "Do HTML ao Componente", lessonsCount: 3, component: "ModuleRenderer" },
      { id: 1, title: "Estado e Eventos", lessonsCount: 3, component: "ModuleRenderer" },
      { id: 2, title: "Listas, Formulários e Efeitos", lessonsCount: 4, component: "ModuleRenderer" },
      { id: 3, title: "Organizando a Aplicação", lessonsCount: 3, component: "ModuleRenderer" },
    ],
    enrollDetails: {
      categoryBadge: "Frontend",
      mainTitle:
        "Pense em componentes: da página escrita à mão para a interface que reage aos dados.",
      introductionParagraphs: [
        {
          title: "Por que o React existe",
          text: "Manipular o DOM na mão funciona até a página ter dois lugares que mostram o mesmo dado. A partir daí, você passa a gastar tempo sincronizando tela e variável — e é exatamente aí que os bugs aparecem. O **React** inverte a ordem: você descreve como a tela deve ser para um determinado estado, e ele se encarrega de atualizar o que mudou. Você para de dar ordens ao DOM e passa a declarar o resultado.",
        },
        {
          title: "Componente é a unidade de raciocínio",
          text: "Um componente é uma função que recebe dados e devolve interface. Essa definição simples é o que permite montar telas complexas sem perder o controle: cada peça tem entrada declarada, saída previsível e pode ser lida isoladamente. Quando um botão quebra, você sabe onde olhar — e quando ele funciona, funciona em qualquer lugar onde for usado.",
        },
        {
          title: "O que este programa não faz",
          text: "Não instala biblioteca de estado global, não usa framework por cima do React e não esconde o JavaScript. A ideia é que ao final você entenda o React o suficiente para decidir sozinho quando precisa de mais ferramenta — e para perceber que, na maior parte dos casos, não precisa.",
        },
      ],
      courseAboutTitle: "O passo seguinte a HTML, CSS e JavaScript",
      courseAboutDescription:
        "Este é o programa que transforma quem constrói páginas em quem constrói aplicações. A diferença não está na quantidade de código, e sim no modelo mental: parar de pensar em elementos que você atualiza e começar a pensar em estado que se desenha na tela. É a mudança de cabeça que separa o desenvolvedor que copia trecho de tutorial daquele que resolve um problema novo.",
      moduleOverviews: [
        {
          moduleId: 0,
          title: "Módulo 0: Do HTML ao Componente",
          items: [
            { label: "JSX sem mistério", description: "O que o JSX vira depois de compilado e por que ele não é HTML." },
            { label: "Props", description: "Como um componente recebe dados de quem o usa." },
            { label: "Composição", description: "Montar telas combinando componentes pequenos em vez de um grande." },
          ],
        },
        {
          moduleId: 1,
          title: "Módulo 1: Estado e Eventos",
          items: [
            { label: "useState", description: "O que é estado, e por que variável comum não serve." },
            { label: "Re-renderização", description: "Quando o React redesenha e o que isso custa." },
            { label: "Estado onde ele pertence", description: "Onde declarar o estado para não ter que sincronizar duas cópias." },
          ],
        },
        {
          moduleId: 2,
          title: "Módulo 2: Listas, Formulários e Efeitos",
          items: [
            { label: "Listas e a prop key", description: "Renderizar coleções e por que o índice do array é uma escolha ruim." },
            { label: "Formulário controlado", description: "O input cujo valor vive no estado, e a validação que vem de graça." },
            { label: "useEffect com critério", description: "Quando existe efeito colateral de verdade — e quando você não precisa dele." },
          ],
        },
        {
          moduleId: 3,
          title: "Módulo 3: Organizando a Aplicação",
          items: [
            { label: "Estrutura de pastas", description: "Uma organização que sobrevive ao crescimento do projeto." },
            { label: "Hook próprio", description: "Extrair lógica repetida para uma função reutilizável." },
            { label: "Quando parar", description: "Reconhecer o ponto em que o projeto pede biblioteca de estado — e o ponto em que não pede." },
          ],
        },
      ],
      transitionText:
        "Abaixo está o conteúdo completo de cada módulo, com os passos práticos para executar no seu próprio projeto. Ao final, um quiz com explicação de cada resposta fecha a revisão.",
    },
    moduleContents: [
      {
        id: 0,
        icon: "laptop",
        title: "Do HTML ao Componente",
        shortDescription: "JSX, props e composição: a menor unidade de interface",
        introductionText:
          "Antes de escrever qualquer coisa em React, vale entender o que ele é: uma biblioteca que transforma uma descrição de interface em atualizações no DOM. Você escreve como a tela deve ser, e o React calcula o que precisa mudar. Neste módulo você constrói os primeiros componentes e descobre que JSX não é HTML — é JavaScript disfarçado, e entender isso evita metade dos erros de iniciante.",
        sections: [
          {
            title: "🧩 Sua primeira interface em componentes",
            subsections: [
              {
                number: 1,
                title: "JSX é JavaScript",
                code: "className, não class",
                guidance:
                  "Crie um componente que devolva um bloco de JSX. Repare que atributos mudam de nome: class vira className, for vira htmlFor. Isso acontece porque JSX vira chamada de função JavaScript, e essas palavras já são reservadas na linguagem.",
                tips: [
                  "Todo componente devolve um único elemento raiz. Quando precisar de dois irmãos, envolva em um fragmento vazio.",
                ],
              },
              {
                number: 2,
                title: "Props: a entrada do componente",
                code: "function Card({ titulo })",
                guidance:
                  "Transforme um bloco fixo em um componente que recebe props. Passe um título e um texto de fora e veja o mesmo componente renderizar conteúdos diferentes. Props são somente leitura: quem recebe nunca altera.",
                tips: [
                  "Se você sentir vontade de alterar uma prop dentro do componente, o dado provavelmente devia ser estado de quem chama.",
                ],
              },
              {
                number: 3,
                title: "Composição no lugar de configuração",
                guidance:
                  "Em vez de criar um componente com dez props para cobrir todas as variações, componha: monte telas combinando componentes menores. Um Card que aceita conteúdo livre por children é mais flexível que um Card com props para cada pedaço.",
                tips: [
                  "Regra prática: quando um componente passa de cinco props de aparência, ele provavelmente deveria ser dois componentes.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que componentes importam",
        highlights: [
          {
            icon: "grid",
            title: "Um lugar para consertar",
            text: "O botão existe em um arquivo só. Corrigir ali conserta todas as telas que o usam, em vez de caçar a mesma marcação copiada em cinco lugares.",
          },
          {
            icon: "list",
            title: "Leitura por fora",
            text: "Um componente bem feito se entende pela assinatura: o que entra e o que sai. Você revisa a tela sem precisar ler a implementação inteira.",
          },
          {
            icon: "sync",
            title: "Interface como função do dado",
            text: "Você descreve o resultado em vez de dar o passo a passo da atualização. Some a classe inteira de bug em que a tela e a variável discordam.",
          },
        ],
        closingText:
          "Você já tem componentes que recebem dados e desenham interface. Até aqui, tudo é estático: os dados vêm de fora e nada muda depois que a tela aparece. No próximo módulo entra a peça que torna a aplicação viva — o estado.",
        ctaTitle: "🧩 Primeiros componentes de pé!",
        ctaText:
          "Sua interface já está quebrada em peças reutilizáveis. Agora vamos fazer essas peças reagirem ao usuário.",
        nextButtonText: "Ir para Módulo 1: Estado e Eventos",
      },
      {
        id: 1,
        icon: "bolt",
        title: "Estado e Eventos",
        shortDescription: "useState, re-renderização e onde o dado deve morar",
        introductionText:
          "Estado é o dado que muda com o tempo e que, ao mudar, precisa aparecer na tela. Uma variável comum não serve: alterá-la não avisa ninguém. O useState resolve isso guardando o valor e sinalizando ao React que a tela precisa ser redesenhada. Este módulo é onde a maioria dos erros de React nasce, então vale ir devagar: entender quando o componente re-renderiza é mais importante do que decorar a sintaxe.",
        sections: [
          {
            title: "⚡ Fazendo a tela reagir",
            subsections: [
              {
                number: 1,
                title: "useState e o par valor + atualizador",
                code: "const [valor, setValor] = useState(0)",
                guidance:
                  "Declare um estado e ligue um botão que o altere. Observe que você nunca atribui direto ao valor: sempre chama o atualizador. É essa chamada que avisa o React.",
                tips: [
                  "Quando o novo valor depende do anterior, passe uma função ao atualizador em vez do valor pronto. Isso evita erro em atualizações seguidas.",
                ],
              },
              {
                number: 2,
                title: "O que dispara uma re-renderização",
                guidance:
                  "Coloque uma marcação temporária no corpo do componente para ver quantas vezes ele executa. Mude o estado e observe. Entender esse ciclo é o que explica comportamentos que parecem mágicos ou quebrados.",
                tips: [
                  "Re-renderizar não é redesenhar a página inteira. O React compara o resultado e toca só no que mudou no DOM.",
                ],
              },
              {
                number: 3,
                title: "Elevar o estado",
                guidance:
                  "Quando dois componentes irmãos precisam do mesmo dado, o estado sobe para o pai comum e desce como prop. Faça esse movimento uma vez à mão: é o padrão que resolve a maioria dos casos sem nenhuma biblioteca.",
                tips: [
                  "Antes de procurar solução de estado global, pergunte se o dado não pertence a um componente acima dos dois que o usam.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que estado é o assunto central",
        highlights: [
          {
            icon: "sync",
            title: "Uma verdade, não duas",
            text: "O dado vive em um lugar e a tela é consequência dele. Acaba o bug clássico em que o texto na tela e o valor na memória contam histórias diferentes.",
          },
          {
            icon: "gauge",
            title: "Re-render previsível",
            text: "Entender quando o componente executa de novo é o que separa quem conserta o problema de quem espalha soluções aleatórias até parar de quebrar.",
          },
          {
            icon: "sitemap",
            title: "O dado no lugar certo",
            text: "Estado em componente fundo demais obriga a passar prop por camadas; estado alto demais re-renderiza a árvore inteira. O meio-termo é decisão de projeto.",
          },
        ],
        closingText:
          "Sua aplicação já responde ao usuário e mantém dados que mudam. O próximo passo é lidar com o que aparece em quase toda tela real: coleções de itens, formulários e interações com o mundo fora do React.",
        ctaTitle: "⚡ A tela reage!",
        ctaText:
          "Estado e eventos funcionando. Agora vamos para os três padrões que aparecem em praticamente toda aplicação.",
        nextButtonText: "Ir para Módulo 2: Listas, Formulários e Efeitos",
      },
      {
        id: 2,
        icon: "list",
        title: "Listas, Formulários e Efeitos",
        shortDescription: "Os três padrões que aparecem em toda aplicação real",
        introductionText:
          "Toda aplicação mostra uma lista, coleta um dado e conversa com algo externo. Este módulo cobre os três. São também os três lugares onde iniciante mais escorrega: usar o índice do array como chave, deixar o input fora do estado e transformar o useEffect em depósito de código que não sabia onde colocar. Cada passo aqui mostra o erro comum antes de mostrar a forma correta.",
        sections: [
          {
            title: "📋 Padrões do dia a dia",
            subsections: [
              {
                number: 1,
                title: "Renderizar uma lista",
                code: "itens.map((item) => ...)",
                guidance:
                  "Transforme um array de dados em elementos na tela com map. Cada item precisa de uma prop key com um identificador estável — normalmente o id que vem do dado.",
                tips: [
                  "Usar o índice do array como key funciona até a lista reordenar ou perder um item no meio. Aí o React reaproveita o elemento errado e o estado vai junto para o item errado.",
                ],
              },
              {
                number: 2,
                title: "Formulário controlado",
                code: "value={texto} onChange={...}",
                guidance:
                  "Ligue o valor do input ao estado e o onChange ao atualizador. O estado passa a ser a única fonte do que está escrito, o que torna validação e limpeza do formulário triviais.",
                tips: [
                  "Com o valor no estado, validar em tempo real é só uma condição sobre esse valor — não precisa ler o DOM.",
                ],
              },
              {
                number: 3,
                title: "Buscar dados de uma API",
                guidance:
                  "Use useEffect para disparar a busca quando o componente aparece, e guarde em estado os três casos: carregando, sucesso e erro. Renderize algo diferente para cada um.",
                tips: [
                  "Tela que só trata o caso de sucesso parece pronta no seu computador e quebra na primeira conexão lenta.",
                ],
              },
              {
                number: 4,
                title: "Quando você não precisa de useEffect",
                guidance:
                  "Se um valor pode ser calculado a partir do estado que você já tem, calcule direto durante a renderização. Não crie um estado extra sincronizado por efeito — é a origem de renderizações duplicadas e dados desencontrados.",
                tips: [
                  "Teste rápido: o valor deriva de algo que já está no estado? Então é cálculo, não efeito.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que estes três padrões",
        highlights: [
          {
            icon: "list",
            title: "Chave estável, lista correta",
            text: "A prop key é como o React identifica cada item entre uma renderização e outra. Chave errada produz bug que só aparece quando a lista muda de ordem.",
          },
          {
            icon: "shield",
            title: "Formulário que se explica",
            text: "Com o valor no estado, validação, limpeza e preenchimento automático saem do mesmo lugar. Ler o DOM para saber o que o usuário digitou deixa de ser necessário.",
          },
          {
            icon: "globe",
            title: "Os três estados de uma requisição",
            text: "Carregando, deu certo e deu errado são três telas, não uma. Tratar os três é o que faz a aplicação parecer profissional em conexão ruim.",
          },
        ],
        closingText:
          "Com listas, formulários e dados externos, você já cobre o que a maioria das telas precisa. Falta a parte que raramente aparece em tutorial e sempre aparece em projeto real: manter isso organizado quando o número de arquivos cresce.",
        ctaTitle: "📋 Padrões dominados!",
        ctaText:
          "Sua aplicação lista, coleta e busca dados. Vamos organizar tudo isso para que continue legível daqui a três meses.",
        nextButtonText: "Ir para Módulo 3: Organizando a Aplicação",
      },
      {
        id: 3,
        icon: "sitemap",
        title: "Organizando a Aplicação",
        shortDescription: "Estrutura, hooks próprios e o momento de parar de adicionar",
        introductionText:
          "Projeto pequeno funciona com qualquer organização. O problema aparece no terceiro mês, quando ninguém lembra onde está o quê. Este módulo trata da parte que nenhum tutorial mostra porque só dói depois: como agrupar arquivos, como extrair lógica repetida e — o mais importante — como reconhecer quando o projeto realmente precisa de mais ferramenta, em vez de instalar por hábito.",
        sections: [
          {
            title: "🗂️ Estrutura que sobrevive ao crescimento",
            subsections: [
              {
                number: 1,
                title: "Agrupar por assunto, não por tipo",
                guidance:
                  "Em vez de uma pasta components com trinta arquivos soltos, agrupe pelo assunto do produto. Tudo que diz respeito a um mesmo domínio fica junto, mesmo que sejam tipos diferentes de arquivo.",
                tips: [
                  "Teste: para mexer em uma funcionalidade, quantas pastas você precisa abrir? Se for mais de duas, a organização está por tipo e não por assunto.",
                ],
              },
              {
                number: 2,
                title: "Extrair um hook próprio",
                code: "function useAlgumaCoisa()",
                guidance:
                  "Quando a mesma combinação de estado e efeito aparece em dois componentes, mova para uma função que começa com use. O componente fica com a interface e o hook com a lógica.",
                tips: [
                  "Hook próprio é função comum que pode chamar outros hooks. Não há mágica: o prefixo use é convenção que as ferramentas de lint reconhecem.",
                ],
              },
              {
                number: 3,
                title: "Reconhecer quando parar",
                guidance:
                  "Antes de instalar biblioteca de estado global, verifique: o dado é realmente usado em partes distantes da árvore? Se for só passar por dois níveis, prop resolve. Se for dado que vem do servidor, o problema provavelmente é de cache, não de estado global.",
                tips: [
                  "Na pesquisa State of React 2025, 34% dos respondentes não usam biblioteca de estado nenhuma. Não usar também é uma escolha de arquitetura.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que organização é decisão técnica",
        highlights: [
          {
            icon: "folder",
            title: "Achar antes de consertar",
            text: "A maior parte do tempo de manutenção é gasta procurando onde mexer. Agrupar por assunto reduz essa busca a uma pasta.",
          },
          {
            icon: "tools",
            title: "Lógica em um lugar só",
            text: "Um hook próprio evita que a mesma regra exista em dois componentes e envelheça em direções diferentes.",
          },
          {
            icon: "search",
            title: "A ferramenta que você não instalou",
            text: "Cada dependência é código que você passa a manter e atualizar. Adiar a instalação até o problema existir é uma decisão de engenharia, não preguiça.",
          },
        ],
        closingText:
          "Você saiu de componentes isolados para uma aplicação organizada, com estado no lugar certo, dados vindos de fora e lógica reaproveitada. Esse é o conjunto que permite ler um projeto React de outra pessoa e entender o que está acontecendo — que é, na prática, o que se espera de quem trabalha com isso.",
        ctaTitle: "🎓 Programa concluído!",
        ctaText:
          "Você agora pensa em componentes, controla estado e organiza um projeto React. O próximo passo natural é um framework por cima disso, como o Next.js.",
        nextButtonText: "Concluir o programa",
      },
    ],
    quiz: [
      {
        id: 1,
        moduleId: 0,
        question: "Por que em JSX escrevemos className em vez de class?",
        explanation:
          "JSX é transformado em chamadas de função JavaScript, e class é palavra reservada da linguagem. Por isso o atributo recebe o nome className, o mesmo usado pela API do DOM. Não tem relação com CSS, nem com React estar depreciando algo, nem com desempenho.",
        options: [
          { text: "Porque class é palavra reservada do JavaScript", isCorrect: true },
          { text: "Porque o CSS do React funciona de forma diferente", isCorrect: false },
          { text: "Porque class foi descontinuado no HTML5", isCorrect: false },
          { text: "Porque className é mais rápido de processar", isCorrect: false },
        ],
      },
      {
        id: 2,
        moduleId: 0,
        question: "O que são props em React?",
        explanation:
          "Props são os dados que um componente recebe de quem o utiliza, e são somente leitura: o componente que recebe nunca as altera. Estado é outra coisa — é o dado interno que muda. Props não são um arquivo de configuração nem têm relação com estilo.",
        options: [
          { text: "Dados que o componente recebe de fora, somente leitura", isCorrect: true },
          { text: "Variáveis internas que o componente pode alterar livremente", isCorrect: false },
          { text: "Um arquivo de configuração do projeto React", isCorrect: false },
          { text: "As classes CSS aplicadas ao componente", isCorrect: false },
        ],
      },
      {
        id: 3,
        moduleId: 0,
        question: "Um componente precisa exibir dois elementos lado a lado na raiz. Qual é a saída correta?",
        explanation:
          "Um componente devolve um único elemento raiz. Quando você precisa de irmãos sem acrescentar marcação, usa um fragmento — o par de tags vazias. Envolver em div funciona, mas polui o HTML final; devolver dois elementos soltos é erro de sintaxe; e array exigiria chave em cada item.",
        options: [
          { text: "Envolver os dois em um fragmento vazio", isCorrect: true },
          { text: "Devolver os dois elementos soltos, um após o outro", isCorrect: false },
          { text: "Criar dois componentes separados obrigatoriamente", isCorrect: false },
          { text: "Não é possível: React aceita apenas um elemento por tela", isCorrect: false },
        ],
      },
      {
        id: 4,
        moduleId: 1,
        question: "Por que uma variável comum não serve para guardar dado que muda na tela?",
        explanation:
          "Alterar uma variável comum não avisa o React de nada, então a tela continua mostrando o valor antigo. O useState guarda o valor e, ao ser atualizado, sinaliza que aquele componente precisa ser renderizado de novo. Não é questão de velocidade nem de tipo de dado.",
        options: [
          { text: "Porque alterá-la não sinaliza ao React que a tela deve ser atualizada", isCorrect: true },
          { text: "Porque variáveis comuns são mais lentas que useState", isCorrect: false },
          { text: "Porque o React proíbe declarar variáveis dentro de componentes", isCorrect: false },
          { text: "Porque variáveis comuns não aceitam objetos", isCorrect: false },
        ],
      },
      {
        id: 5,
        moduleId: 1,
        question: "Quando o novo valor do estado depende do valor anterior, qual é a forma segura de atualizar?",
        explanation:
          "Passar uma função ao atualizador garante que ela receba o valor mais recente, mesmo que várias atualizações aconteçam em sequência. Usar o valor direto pode trabalhar sobre uma leitura antiga. Atribuir direto à variável não funciona, e não existe necessidade de recarregar a página.",
        options: [
          { text: "Passar uma função ao atualizador, que recebe o valor anterior", isCorrect: true },
          { text: "Ler a variável de estado e passar o resultado já calculado", isCorrect: false },
          { text: "Atribuir o novo valor diretamente à variável de estado", isCorrect: false },
          { text: "Recarregar o componente manualmente após a mudança", isCorrect: false },
        ],
      },
      {
        id: 6,
        moduleId: 1,
        question: "Dois componentes irmãos precisam ler e alterar o mesmo dado. Qual é a solução mais simples?",
        explanation:
          "Mover o estado para o pai comum e passá-lo como prop resolve o caso sem nenhuma biblioteca — é o padrão conhecido como elevar o estado. Duplicar em cada irmão cria duas verdades que vão divergir. Biblioteca global e armazenamento do navegador são soluções desproporcionais para o problema.",
        options: [
          { text: "Mover o estado para o componente pai comum aos dois", isCorrect: true },
          { text: "Declarar o mesmo estado nos dois componentes", isCorrect: false },
          { text: "Instalar uma biblioteca de estado global", isCorrect: false },
          { text: "Guardar o valor no armazenamento local do navegador", isCorrect: false },
        ],
      },
      {
        id: 7,
        moduleId: 2,
        question: "Por que usar o índice do array como prop key é problemático?",
        explanation:
          "A key identifica cada item entre uma renderização e outra. Se a lista reordena ou perde um item do meio, o índice passa a apontar para outro dado, e o React reaproveita o elemento errado — levando junto o estado interno dele. Com lista imutável o índice até funciona, mas é hábito que cobra caro depois.",
        options: [
          { text: "Porque ao reordenar ou remover itens o índice passa a apontar para outro dado", isCorrect: true },
          { text: "Porque o React não aceita número como key", isCorrect: false },
          { text: "Porque deixa a renderização mais lenta em qualquer caso", isCorrect: false },
          { text: "Porque impede o uso de map para renderizar listas", isCorrect: false },
        ],
      },
      {
        id: 8,
        moduleId: 2,
        question: "O que caracteriza um formulário controlado?",
        explanation:
          "Em um formulário controlado o valor do campo vem do estado e toda digitação passa pelo atualizador. Isso torna o estado a única fonte da verdade e simplifica validação e limpeza. Não tem relação com envio ao servidor, com biblioteca externa nem com o atributo required.",
        options: [
          { text: "O valor do campo vem do estado e toda alteração passa pelo atualizador", isCorrect: true },
          { text: "O formulário envia os dados automaticamente ao servidor", isCorrect: false },
          { text: "O formulário usa uma biblioteca externa de validação", isCorrect: false },
          { text: "Todos os campos têm o atributo required", isCorrect: false },
        ],
      },
      {
        id: 9,
        moduleId: 2,
        question: "Um valor pode ser calculado a partir do estado que já existe. Onde ele deve ficar?",
        explanation:
          "Se o valor deriva de algo que já está no estado, ele deve ser calculado durante a renderização. Criar um estado extra sincronizado por efeito gera renderização dupla e abre espaço para os dois valores discordarem. Efeito existe para conversar com o mundo fora do React, não para derivar dados.",
        options: [
          { text: "Calculado direto na renderização, sem estado nem efeito", isCorrect: true },
          { text: "Em um estado próprio, atualizado por um efeito", isCorrect: false },
          { text: "Em uma variável global fora do componente", isCorrect: false },
          { text: "No armazenamento local do navegador", isCorrect: false },
        ],
      },
      {
        id: 10,
        moduleId: 3,
        question: "Qual é a vantagem de agrupar arquivos por assunto do produto em vez de por tipo?",
        explanation:
          "Agrupando por assunto, tudo que diz respeito a uma funcionalidade fica na mesma pasta, e mexer nela exige abrir um lugar só. Agrupando por tipo, uma única mudança espalha o trabalho por várias pastas. Não muda desempenho, não é exigência do React e não altera o tamanho do pacote final.",
        options: [
          { text: "Mexer em uma funcionalidade passa a exigir abrir uma pasta só", isCorrect: true },
          { text: "A aplicação carrega mais rápido no navegador", isCorrect: false },
          { text: "É exigência da própria biblioteca React", isCorrect: false },
          { text: "Reduz automaticamente o tamanho do pacote final", isCorrect: false },
        ],
      },
      {
        id: 11,
        moduleId: 3,
        question: "O que é um hook próprio?",
        explanation:
          "Hook próprio é uma função comum, por convenção iniciada com use, que pode chamar outros hooks e existe para reunir lógica repetida fora dos componentes. Não é recurso especial da biblioteca, não substitui componente e não tem relação com desempenho por si só.",
        options: [
          { text: "Uma função que reúne lógica reutilizável e pode chamar outros hooks", isCorrect: true },
          { text: "Um componente que não renderiza nada na tela", isCorrect: false },
          { text: "Um recurso exclusivo de bibliotecas de estado global", isCorrect: false },
          { text: "Uma técnica para acelerar a renderização", isCorrect: false },
        ],
      },
      {
        id: 12,
        moduleId: 3,
        question: "Segundo a pesquisa State of React 2025, qual proporção dos respondentes não usa nenhuma biblioteca de estado?",
        explanation:
          "34% dos respondentes não usam biblioteca de estado alguma, o que mostra que os recursos nativos do React resolvem boa parte dos casos. Isso não significa que bibliotecas sejam desnecessárias — significa que instalar antes de ter o problema é decisão precipitada.",
        options: [
          { text: "34%", isCorrect: true },
          { text: "5%", isCorrect: false },
          { text: "60%", isCorrect: false },
          { text: "Menos de 1%", isCorrect: false },
        ],
      },
    ],
    whatYouBuild: {
      title: "O que você vai construir",
      description:
        "Uma aplicação React funcionando: componentes reutilizáveis, estado controlado, lista renderizada a partir de dados, formulário validado e busca a uma API com os três estados tratados. Organizada em pastas que continuam fazendo sentido depois que o projeto cresce.",
      highlights: [
        "Uma aplicação React organizada e funcional",
        "Formulário controlado com validação",
        "Consumo de API com estados de carregamento e erro",
      ],
    },
    whyNow: {
      title: "Por que isso importa agora",
      paragraphs: [
        "React é, com folga, a escolha dominante do mercado: cerca de 162,5 milhões de downloads anuais no npm, contra 14,1 milhões do Vue — mais de onze vezes. Na pesquisa State of JavaScript 2025, aproximadamente 85% dos respondentes declararam usá-lo.",
        "Essa concentração importa para quem está entrando: é onde estão as vagas, a documentação, as respostas em fórum e a maior parte do código que você vai encontrar ao entrar em uma equipe. Aprender React não é seguir moda — é escolher a base com maior chance de ser a que você vai usar no primeiro emprego.",
      ],
    },
    appliedIn: {
      title: "Onde se aplica",
      items: [
        { label: "Painéis e sistemas internos", description: "Telas com muitos dados que mudam e precisam refletir o estado na hora." },
        { label: "Produtos web", description: "Aplicações que o usuário abre e usa por um tempo, em vez de só ler." },
        { label: "Base para frameworks", description: "Next.js e Remix são construídos sobre React — este é o pré-requisito." },
      ],
    },
    forWho: {
      title: "Para quem é este programa",
      profiles: [
        { label: "Quem já entregou uma página", description: "Conhece HTML, CSS e JavaScript e quer dar o passo para aplicação." },
        { label: "Quem tentou React e travou", description: "Já viu tutorial mas não entendeu quando o componente renderiza de novo." },
        { label: "Quem vai entrar numa equipe", description: "Precisa ler e entender código React de outras pessoas." },
      ],
    },
    marketUsage: {
      title: "Quem usa no mercado",
      description:
        "React sustenta desde painéis internos de empresas pequenas até produtos usados por centenas de milhões de pessoas. É a biblioteca de interface com maior base instalada da web, o que significa que a habilidade é transferível entre setores, tamanhos de empresa e países.",
      companies: [],
    },
    sources: [
      {
        label: "SVAR — React, Vue or Svelte in 2026: comparativo com downloads npm e dados do State of JavaScript 2025",
        url: "https://svar.dev/blog/react-vs-vue-vs-svelte-for-modern-web-apps/",
      },
      {
        label: "React State Management in 2026: A Data-Driven Comparison — dados do State of React 2025",
        url: "https://saschb2b.com/blog/react-state-management-2026",
      },
    ],
  },
  {
    id: 102,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    title: "Next.js e Tailwind CSS: Performance e Estilo na Prática",
    lessons: "18+ Lições",
    duration: "14hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 103,
    image:
      "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    title: "Vue.js 3: Guia Completo para Desenvolvimento Ágil",
    lessons: "22+ Lições",
    duration: "16hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 104,
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    title: "Estado Global com Redux e Context API em Aplicações Reais",
    lessons: "12+ Lições",
    duration: "10hr 15min",
    access: "Acesso Livre",
  },

  // UX/UI (201 a 300)
  {
    id: 201,
    image:
      "https://cdn.pixabay.com/photo/2015/06/01/09/04/phone-793046_960_720.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    title:
      "Aprenda UX/UI para criar interfaces modernas, criativas e funcionais",
    lessons: "15+ Lições",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 202,
    image:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    title: "Figma para Iniciantes: Do Protótipo ao Design System",
    lessons: "30+ Lições",
    duration: "20hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 203,
    image:
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    title: "Psicologia das Cores e Tipografia aplicada ao Produto Digital",
    lessons: "08+ Lições",
    duration: "06hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 204,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    title: "UX Research: Métodos de Pesquisa para Validar Ideias",
    lessons: "12+ Lições",
    duration: "10hr 00min",
    access: "Acesso Livre",
  },

  // Backend (301 a 400)
  {
    id: 301,
    image:
      "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    title:
      "Back-end descomplicado: APIs, lógica de negócios e integração eficiente",
    lessons: "15+ Lições",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 302,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    title: "Node.js e Express: Criando APIs RESTful Escaláveis",
    lessons: "25+ Lições",
    duration: "22hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 303,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    title: "Arquitetura de Microsserviços com Docker e Kubernetes",
    lessons: "20+ Lições",
    duration: "18hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 304,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    title: "Python para Backend: Do Django ao FastAPI",
    lessons: "18+ Lições",
    duration: "16hr 00min",
    access: "Acesso Livre",
  },

  // Data Base (401 a 500)
  {
    id: 401,
    image: "https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_640.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    title:
      "Banco de Dados na prática: SQL, NoSQL e modelagem para aplicações reais",
    lessons: "12+ Lições",
    duration: "10hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 402,
    image:
      "https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    title: "PostgreSQL Avançado: Queries Complexas e Performance",
    lessons: "15+ Lições",
    duration: "12hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 403,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    title: "MongoDB: Do Zero ao CRUD em Aplicações NoSQL",
    lessons: "10+ Lições",
    duration: "08hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 404,
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    title: "Segurança de Dados: Protegendo Bancos contra Invasões",
    lessons: "20+ Lições",
    duration: "14hr 30min",
    access: "Acesso Livre",
  },

  // Produtos Digitais (501 a 600)
  {
    id: 501,
    image:
      "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    title: "Produtos Digitais: da ideia ao lançamento com metodologias ágeis",
    lessons: "15+ Lições",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 502,
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    title: "Gestão de Backlog: Priorização para Product Owners",
    lessons: "10+ Lições",
    duration: "08hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 503,
    image:
      "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    title: "MVP na Prática: Como Validar seu Produto com Baixo Custo",
    lessons: "12+ Lições",
    duration: "10hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 504,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    title: "Métricas de Produto: North Star, OMTM e Retenção",
    lessons: "14+ Lições",
    duration: "11hr 00min",
    access: "Acesso Livre",
  },

  // Projetos (601 a 700)
  {
    id: 601,
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/42/whiteboard-849803_960_720.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    title:
      "Projetos Tech: desenvolva habilidades práticas com cases reais e colaborativos.",
    lessons: "15+ Lições",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 602,
    image:
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    title: "Scrum e Kanban: Agilidade na Gestão de Projetos Tech",
    lessons: "20+ Lições",
    duration: "15hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 603,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    title: "Liderança Técnica: Como Gerir Equipes de Desenvolvedores",
    lessons: "12+ Lições",
    duration: "10hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 604,
    image:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    title: "Git e GitHub Workflow: Colaboração em Projetos de Código Aberto",
    lessons: "10+ Lições",
    duration: "07hr 30min",
    access: "Acesso Livre",
  },

  // English (701 a 800)
  {
    id: 701,
    image:
      "https://cdn.pixabay.com/photo/2016/08/03/21/38/london-1567903_960_720.jpg",
    category: "English",
    categoryFilter: "english",
    title:
      "English for Tech: aprimore seu inglês focado em carreira e programação",
    lessons: "15+ Lições",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 702,
    image:
      "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg",
    category: "English",
    categoryFilter: "english",
    title: "Vocabulary for Developers: Termos Técnicos e Documentação",
    lessons: "20+ Lições",
    duration: "09hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 703,
    image:
      "https://cdn.pixabay.com/photo/2015/09/06/00/17/macbook-926558_1280.jpg",
    category: "English",
    categoryFilter: "english",
    title: "Job Interview Prep: Como Passar em Entrevistas de TI em Inglês",
    lessons: "08+ Lições",
    duration: "06hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 704,
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
    category: "English",
    categoryFilter: "english",
    title: "Daily Scrum English: Melhore sua Comunicação em Daily Meetings",
    lessons: "10+ Lições",
    duration: "05hr 30min",
    access: "Acesso Livre",
  },
    // IA (801 a 900)
  {
    id: 801,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    category: "IA",
    categoryFilter: "ia",
    title: "Programar com IA sem Perder o Aprendizado",
    lessons: "13 passos",
    duration: "6h estimadas",
    access: "Acesso Livre",
    accessType: "livre",
    level: "Iniciante",
    description:
      "Assistente de IA acelera a entrega e pode atrapalhar a formação — há pesquisa medindo os dois efeitos. Este programa ensina a usar a ferramenta de um jeito que mantém o código saindo e a habilidade crescendo.",
    letslearn: [
      "O que a pesquisa mostra sobre IA e formação de habilidade em programação",
      "Os três modos de interagir com o assistente, e quando cada um serve",
      "Revisar código gerado por IA com critério, em vez de aceitar por parecer certo",
      "Montar uma rotina de estudo em que a IA ensina em vez de substituir",
    ],
    curriculum: "IA no aprendizado de programação",
    about:
      "O programa não é contra nem a favor da ferramenta: parte de evidência. Um ensaio controlado com 52 desenvolvedores júnior mediu a diferença de compreensão entre quem programou com e sem assistente, e os resultados desenham com precisão onde está o risco e onde está o ganho. A partir daí, cada módulo constrói um hábito concreto — o que perguntar, quando não perguntar, e como verificar o que voltou.",
    materials: [
      "Roteiro de perguntas para usar com o assistente",
      "Checklist de revisão de código gerado",
      "Modelo de registro de estudo semanal",
    ],
    modules: [
      { id: 0, title: "O Que a Pesquisa Mostra", lessonsCount: 3, component: "ModuleRenderer" },
      { id: 1, title: "Os Três Modos de Perguntar", lessonsCount: 3, component: "ModuleRenderer" },
      { id: 2, title: "Revisar o Que a IA Escreveu", lessonsCount: 4, component: "ModuleRenderer" },
      { id: 3, title: "Uma Rotina que Ensina", lessonsCount: 3, component: "ModuleRenderer" },
    ],
    enrollDetails: {
      categoryBadge: "Inteligência Artificial",
      mainTitle:
        "A ferramenta entrega mais rápido. A pergunta é o que fica com você depois.",
      introductionParagraphs: [
        {
          title: "O dado que dá início a tudo",
          text: "Pesquisadores da Anthropic conduziram um **ensaio controlado randomizado** com 52 desenvolvedores júnior aprendendo uma biblioteca nova. Metade usou assistente de IA, metade programou à mão. Logo depois, os dois grupos fizeram o mesmo teste de compreensão. O grupo com IA tirou **50%**; o grupo sem IA, **67%** — quase dois conceitos de diferença, com significância estatística. O grupo com IA terminou cerca de dois minutos mais rápido, diferença que não foi estatisticamente significativa.",
        },
        {
          title: "O detalhe que muda a conclusão",
          text: "O resultado não foi uniforme. Entre os participantes que usaram IA, o desempenho variou muito — e variou conforme **como** usaram. Quem pontuou acima de 65% tinha usado o assistente para obter explicação, não para delegar a tarefa. Ou seja: o problema não é a ferramenta estar presente, é o tipo de interação. É isso que dá para treinar, e é o que este programa treina.",
        },
        {
          title: "Onde a perda foi maior",
          text: "A maior diferença entre os dois grupos apareceu nas questões de **depuração** — encontrar e corrigir erro. Faz sentido: depurar exige ter construído um modelo mental de como o código funciona, e é exatamente esse modelo que não se forma quando o código chega pronto. Por isso o módulo mais longo deste programa é o de revisão.",
        },
      ],
      courseAboutTitle: "Nem proibir, nem delegar",
      courseAboutDescription:
        "A discussão pública sobre IA e programação costuma ficar entre dois extremos inúteis: quem diz para não usar e quem diz para deixar a IA fazer tudo. Nenhum dos dois descreve a prática de quem trabalha bem. Este programa fica no meio, que é onde está a evidência: usar bastante, perguntando certo, verificando sempre, e reservando de propósito os momentos em que você trava sozinho — porque travar é parte de como a habilidade se forma.",
      moduleOverviews: [
        {
          moduleId: 0,
          title: "Módulo 0: O Que a Pesquisa Mostra",
          items: [
            { label: "O experimento", description: "Como foi montado o ensaio com 52 júniores e o que ele mede de fato." },
            { label: "Os números", description: "50% contra 67%, e o que essa diferença significa na prática." },
            { label: "O limite do estudo", description: "O que o experimento não mediu, e por que isso importa na leitura." },
          ],
        },
        {
          moduleId: 1,
          title: "Módulo 1: Os Três Modos de Perguntar",
          items: [
            { label: "Gerar e depois investigar", description: "Pedir o código e, na sequência, perguntar por que ele é assim." },
            { label: "Pedir código com explicação", description: "Solicitar os dois juntos na mesma resposta." },
            { label: "Só conceito", description: "Perguntar a ideia e escrever o código você mesmo." },
          ],
        },
        {
          moduleId: 2,
          title: "Módulo 2: Revisar o Que a IA Escreveu",
          items: [
            { label: "Ler antes de rodar", description: "O hábito que separa revisão de aposta." },
            { label: "Checklist de revisão", description: "Cinco perguntas objetivas para qualquer trecho gerado." },
            { label: "Quebrar de propósito", description: "Testar o entendimento alterando o código e prevendo o resultado." },
          ],
        },
        {
          moduleId: 3,
          title: "Módulo 3: Uma Rotina que Ensina",
          items: [
            { label: "Sessão sem assistente", description: "Reservar tempo para trabalhar travado, de propósito." },
            { label: "Registro do que não sabia", description: "Anotar a lacuna no momento em que ela aparece." },
            { label: "Revisão semanal", description: "Voltar ao que foi gerado e reescrever sem ajuda." },
          ],
        },
      ],
      transitionText:
        "Cada módulo abaixo tem passos para praticar durante a sua própria semana de trabalho ou estudo — não são exercícios artificiais. Ao final, o quiz revisa o que ficou.",
    },
    moduleContents: [
      {
        id: 0,
        icon: "search",
        title: "O Que a Pesquisa Mostra",
        shortDescription: "O ensaio com 52 júniores, os números e o que eles não dizem",
        introductionText:
          "Quase tudo que se lê sobre IA e programação é opinião. Este módulo começa por um dado: um ensaio controlado randomizado, com grupo de comparação, publicado com método aberto. Entender como o estudo foi feito importa tanto quanto o resultado, porque é o que permite saber até onde a conclusão vale — e onde ela para.",
        sections: [
          {
            title: "📊 Lendo o experimento",
            subsections: [
              {
                number: 1,
                title: "Como o estudo foi montado",
                guidance:
                  "Leia o desenho do experimento: 52 desenvolvedores júnior, divididos aleatoriamente entre usar assistente de IA e programar sem ele, todos aprendendo a mesma biblioteca de programação assíncrona em Python. Logo após a tarefa, os dois grupos responderam ao mesmo teste, com quatro tipos de questão: depuração, leitura de código, escrita de código e compreensão conceitual.",
                tips: [
                  "Divisão aleatória entre os grupos é o que permite atribuir a diferença ao uso da IA, e não a quem era mais experiente.",
                ],
              },
              {
                number: 2,
                title: "O resultado numérico",
                code: "50% × 67%",
                guidance:
                  "O grupo que usou IA acertou em média 50% do teste; o grupo sem IA, 67%. A diferença foi estatisticamente significativa. O grupo com IA terminou cerca de dois minutos mais rápido, mas essa vantagem de tempo não foi significativa — ou seja, pagou-se compreensão sem ganhar velocidade de forma confiável.",
                tips: [
                  "Guarde a ordem de grandeza, não o número exato: a perda de compreensão foi grande e o ganho de tempo foi pequeno.",
                ],
              },
              {
                number: 3,
                title: "O que o estudo não mede",
                guidance:
                  "O teste foi aplicado logo depois da tarefa, com desenvolvedores júnior aprendendo algo novo. Não mede retenção em meses, não mede desempenho de quem já é experiente, e não mede produtividade em um projeto longo. Registre esses limites: usar o dado além do que ele suporta é o mesmo erro de quem ignora o dado.",
                tips: [
                  "Um estudo forte responde uma pergunta específica muito bem. A honestidade está em não esticar a resposta para perguntas que ele não fez.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que começar pela evidência",
        highlights: [
          {
            icon: "search",
            title: "Opinião não resolve",
            text: "O debate sobre IA na programação está saturado de posição pessoal. Um ensaio com grupo de comparação é um chão diferente para pisar.",
          },
          {
            icon: "gauge",
            title: "O ganho de tempo era pequeno",
            text: "Dois minutos, sem significância estatística. A troca que parecia óbvia — menos aprendizado, mais velocidade — não se confirmou nem no lado da velocidade.",
          },
          {
            icon: "shield",
            title: "Depurar foi o que mais caiu",
            text: "A maior diferença apareceu nas questões de encontrar erro. Depuração exige modelo mental do código, e é ele que não se forma quando o código chega pronto.",
          },
        ],
        closingText:
          "O dado sozinho poderia levar à conclusão errada — a de largar a ferramenta. Mas o próprio estudo mostra que, entre quem usou IA, o desempenho variou bastante conforme o modo de usar. É esse achado que o próximo módulo transforma em prática.",
        ctaTitle: "📊 Você já tem o dado",
        ctaText:
          "Agora a parte acionável: o estudo identificou como se comportava quem usou IA e mesmo assim aprendeu.",
        nextButtonText: "Ir para Módulo 1: Os Três Modos de Perguntar",
      },
      {
        id: 1,
        icon: "comment",
        title: "Os Três Modos de Perguntar",
        shortDescription: "O que fazia quem usou IA e ainda assim entendeu",
        introductionText:
          "Entre os participantes que usaram assistente, os que pontuaram acima de 65% no teste — ou seja, acima até da média do grupo sem IA — tinham três padrões de interação em comum. Nenhum deles é complicado, e nenhum exige abrir mão da ferramenta. A diferença está em o que se pede e em que ordem.",
        sections: [
          {
            title: "💬 Três formas de conduzir a conversa",
            subsections: [
              {
                number: 1,
                title: "Gerar primeiro, investigar depois",
                guidance:
                  "Peça o código, mas não encerre ali. Na sequência, pergunte por que aquela abordagem foi escolhida, o que aconteceria com uma entrada diferente e qual alternativa existiria. Pratique hoje: pegue o último trecho que você pediu pronto e faça três perguntas de acompanhamento sobre ele.",
                tips: [
                  "A pergunta mais produtiva costuma ser: o que quebraria esse código?",
                ],
              },
              {
                number: 2,
                title: "Pedir código e explicação juntos",
                code: "explique cada decisão",
                guidance:
                  "Inclua no próprio pedido que a resposta venha com a justificativa de cada decisão. Você recebe o código e o raciocínio de uma vez, e a leitura já vem acompanhada do porquê — em vez de um bloco pronto que você aceita sem processar.",
                tips: [
                  "Peça também o que a solução não resolve. Limitação declarada é mais útil que elogio à própria resposta.",
                ],
              },
              {
                number: 3,
                title: "Perguntar só o conceito",
                guidance:
                  "Para o que você está tentando aprender de verdade, pergunte apenas a ideia — como funciona, quando se usa, qual o problema que resolve — e escreva o código você mesmo. É o modo mais lento e o que mais forma habilidade. Escolha deliberadamente um assunto por semana para tratar assim.",
                tips: [
                  "Este modo não é para tudo. É para aquilo que você quer conseguir fazer sozinho daqui a seis meses.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que o modo de perguntar decide",
        highlights: [
          {
            icon: "comment",
            title: "Explicação em vez de delegação",
            text: "Quem foi bem no teste pedia para entender, não para entregar. A mesma ferramenta, usada com outra intenção, produziu outro resultado.",
          },
          {
            icon: "tasks",
            title: "Escolher o modo antes de perguntar",
            text: "Decidir de antemão se aquele trecho é para aprender ou para despachar evita o piloto automático de aceitar tudo que vem pronto.",
          },
          {
            icon: "laptop",
            title: "Nem tudo precisa ser aprendido",
            text: "Configuração que você usa uma vez por ano pode vir pronta sem culpa. Reserve o modo lento para o que é do seu ofício.",
          },
        ],
        closingText:
          "Saber perguntar melhora o que entra. Falta a outra metade: o que fazer com o código depois que ele chega. É onde estava a maior perda medida no estudo, e é o módulo mais longo deste programa.",
        ctaTitle: "💬 Você já sabe o que pedir",
        ctaText:
          "Agora a metade que protege contra o erro mais caro: revisar antes de confiar.",
        nextButtonText: "Ir para Módulo 2: Revisar o Que a IA Escreveu",
      },
      {
        id: 2,
        icon: "shield",
        title: "Revisar o Que a IA Escreveu",
        shortDescription: "Ler antes de rodar, e um checklist que cabe em qualquer trecho",
        introductionText:
          "Código gerado por IA tem uma característica perigosa: ele parece certo. A formatação é boa, os nomes fazem sentido, a estrutura é plausível. Essa aparência de qualidade desarma a desconfiança que você teria com código de origem desconhecida. Este módulo constrói o hábito oposto — tratar o que voltou como um pull request de alguém que você não conhece.",
        sections: [
          {
            title: "🔎 Do aceite automático à revisão real",
            subsections: [
              {
                number: 1,
                title: "Ler o código inteiro antes de executar",
                guidance:
                  "Estabeleça a regra: nenhum trecho gerado vai para o projeto sem ser lido linha a linha antes de rodar. Rodar primeiro cria um atalho — se funcionou, você não lê. E é justamente aí que o erro silencioso entra.",
                tips: [
                  "Se o trecho é grande demais para ler com atenção, ele é grande demais para pedir de uma vez. Peça em pedaços.",
                ],
              },
              {
                number: 2,
                title: "O checklist de cinco perguntas",
                guidance:
                  "Para qualquer trecho gerado, responda: o que acontece se a entrada vier vazia? Existe caso de erro sem tratamento? Alguma dependência nova foi introduzida? Há valor fixo no código que deveria ser configurável? Eu saberia reescrever isso sem ajuda? A última é a mais reveladora.",
                tips: [
                  "Se a resposta da quinta pergunta for não, você tem uma lacuna de estudo identificada — anote em vez de seguir adiante.",
                ],
              },
              {
                number: 3,
                title: "Quebrar de propósito",
                guidance:
                  "Altere uma linha do código gerado e preveja o que vai acontecer antes de rodar. Depois rode e compare com a sua previsão. Acertar a previsão é a evidência de que você entendeu; errar aponta exatamente onde o modelo mental está furado.",
                tips: [
                  "Esta é a única verificação de entendimento que não dá para enganar a si mesmo.",
                ],
              },
              {
                number: 4,
                title: "Depurar sem pedir a resposta",
                guidance:
                  "Quando aparecer um erro, resista ao impulso de colar a mensagem no assistente. Passe dez minutos lendo o erro, localizando a linha e formulando uma hipótese. Só depois, se necessário, peça ajuda — e peça para conferirem sua hipótese, não para entregarem a correção.",
                tips: [
                  "Depuração foi onde a pesquisa mediu a maior perda de compreensão. Não é coincidência: é a habilidade que mais depende de prática direta.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que revisão é a defesa central",
        highlights: [
          {
            icon: "search",
            title: "Parecer certo não é estar certo",
            text: "Código gerado vem bem formatado e com nomes plausíveis. Essa aparência desarma a desconfiança que você teria com qualquer outra origem.",
          },
          {
            icon: "shield",
            title: "A pergunta que revela a lacuna",
            text: "Eu saberia reescrever isso sem ajuda? Responder honestamente transforma cada trecho aceito num diagnóstico do que você ainda não sabe.",
          },
          {
            icon: "gauge",
            title: "Depurar é o músculo que mais atrofia",
            text: "Foi onde o estudo mediu a maior diferença. Ler o erro antes de pedir a resposta é o exercício direto para essa habilidade.",
          },
        ],
        closingText:
          "Perguntar bem e revisar bem resolvem o trabalho do dia. Falta o que age no prazo longo: uma rotina que garanta que, ao final de cada semana, você saiba algo que não sabia — e não apenas tenha entregue mais.",
        ctaTitle: "🔎 Revisão virou hábito",
        ctaText:
          "Você já não aceita código por parecer certo. O último módulo monta a rotina que faz isso durar.",
        nextButtonText: "Ir para Módulo 3: Uma Rotina que Ensina",
      },
      {
        id: 3,
        icon: "tasks",
        title: "Uma Rotina que Ensina",
        shortDescription: "Travar de propósito, registrar a lacuna e revisar o que foi gerado",
        introductionText:
          "Os pesquisadores concluíram que o esforço cognitivo — inclusive o desconforto de ficar travado — é provavelmente importante para a formação de domínio. Isso não acontece por acaso: precisa estar na agenda. Este módulo monta três hábitos pequenos que cabem em qualquer semana de trabalho e garantem que a habilidade continue crescendo enquanto a entrega continua saindo.",
        sections: [
          {
            title: "🗓️ Três hábitos semanais",
            subsections: [
              {
                number: 1,
                title: "Bloco sem assistente",
                guidance:
                  "Reserve um período fixo por semana — uma hora já serve — para programar com o assistente fechado. Escolha uma tarefa que você conseguiria despachar em cinco minutos com ajuda. O objetivo não é produtividade: é passar pelo processo inteiro de ficar travado e sair sozinho.",
                tips: [
                  "Bloco curto e recorrente funciona melhor que um dia inteiro ocasional.",
                ],
              },
              {
                number: 2,
                title: "Caderno de lacunas",
                guidance:
                  "Toda vez que a resposta da quinta pergunta do checklist for não, anote o assunto em uma lista. Não estude na hora — apenas registre. Ao final da semana você tem um mapa das suas lacunas reais, tiradas do trabalho de verdade, não de um plano de estudo genérico.",
                tips: [
                  "Lacuna anotada no momento em que aparece é específica. Lembrada depois vira uma vaga sensação de que você precisa estudar mais.",
                ],
              },
              {
                number: 3,
                title: "Reescrever sem ajuda",
                guidance:
                  "Uma vez por semana, escolha um trecho que a IA gerou nos últimos dias e reescreva do zero, sem consultar. Compare as duas versões. As diferenças mostram o que você absorveu e o que passou direto.",
                tips: [
                  "Sua versão não precisa ficar melhor. Ela precisa existir — é a prova de que o conhecimento ficou com você.",
                ],
              },
            ],
          },
        ],
        highlightsTitle: "🔍 Por que rotina e não força de vontade",
        highlights: [
          {
            icon: "clipboard",
            title: "O esforço precisa de agenda",
            text: "Se travar de propósito depender de disposição no momento, não vai acontecer. Bloco marcado é o que transforma intenção em prática.",
          },
          {
            icon: "folder",
            title: "Lacuna registrada é lacuna estudável",
            text: "Anotar no instante em que aparece produz uma lista específica e sua, em vez de um plano de estudo copiado da internet.",
          },
          {
            icon: "sync",
            title: "Reescrever é o teste honesto",
            text: "Você pode achar que entendeu ao ler. Só descobre de verdade quando tenta produzir de novo, sem consulta.",
          },
        ],
        closingText:
          "Você termina este programa com três coisas: um dado real sobre o efeito da ferramenta, um jeito de conversar com ela que preserva o aprendizado, e uma rotina que mantém isso de pé. A ferramenta continua na sua mesa, usada o dia inteiro — a diferença é que agora ela trabalha a favor da sua formação, e não no lugar dela.",
        ctaTitle: "🎓 Programa concluído!",
        ctaText:
          "Você sai com evidência, método de conversa e rotina. A ferramenta segue com você — a habilidade também.",
        nextButtonText: "Concluir o programa",
      },
    ],
    quiz: [
      {
        id: 1,
        moduleId: 0,
        question: "No ensaio controlado com 52 desenvolvedores júnior, qual foi a diferença de desempenho no teste de compreensão?",
        explanation:
          "O grupo que usou assistente de IA acertou em média 50%, contra 67% do grupo que programou sem assistente — quase dois conceitos de diferença, com significância estatística. Os grupos não empataram, e o grupo com IA não foi melhor.",
        options: [
          { text: "50% com IA contra 67% sem IA", isCorrect: true },
          { text: "Os dois grupos empataram", isCorrect: false },
          { text: "67% com IA contra 50% sem IA", isCorrect: false },
          { text: "O estudo não aplicou teste de compreensão", isCorrect: false },
        ],
      },
      {
        id: 2,
        moduleId: 0,
        question: "Sobre o tempo de execução da tarefa, o que o estudo encontrou?",
        explanation:
          "O grupo com IA terminou cerca de dois minutos mais rápido, mas essa diferença não foi estatisticamente significativa. Ou seja, o ganho de velocidade que normalmente justifica a troca não se confirmou de forma confiável naquele experimento.",
        options: [
          { text: "Cerca de dois minutos mais rápido, sem significância estatística", isCorrect: true },
          { text: "Redução de metade do tempo, com significância estatística", isCorrect: false },
          { text: "O grupo com IA demorou significativamente mais", isCorrect: false },
          { text: "O tempo não foi medido", isCorrect: false },
        ],
      },
      {
        id: 3,
        moduleId: 0,
        question: "Em qual tipo de questão apareceu a maior diferença entre os dois grupos?",
        explanation:
          "A maior diferença apareceu nas questões de depuração. Encontrar erro exige um modelo mental de como o código funciona, e é esse modelo que não se forma quando o código chega pronto. As demais categorias também foram avaliadas, mas com diferença menor.",
        options: [
          { text: "Depuração", isCorrect: true },
          { text: "Leitura de código", isCorrect: false },
          { text: "Compreensão conceitual", isCorrect: false },
          { text: "Não houve diferença por categoria", isCorrect: false },
        ],
      },
      {
        id: 4,
        moduleId: 1,
        question: "O que caracterizava os participantes que usaram IA e mesmo assim pontuaram acima de 65%?",
        explanation:
          "Eles usaram o assistente de forma estratégica, buscando explicação em vez de delegar a tarefa. O fator não foi usar menos a ferramenta nem ter mais experiência — foi o tipo de interação estabelecida com ela.",
        options: [
          { text: "Usaram o assistente para obter explicação, não para delegar", isCorrect: true },
          { text: "Usaram o assistente pouquíssimas vezes", isCorrect: false },
          { text: "Eram os participantes com mais anos de experiência", isCorrect: false },
          { text: "Trabalharam mais devagar que os demais", isCorrect: false },
        ],
      },
      {
        id: 5,
        moduleId: 1,
        question: "Qual dos três modos de interação forma mais habilidade, e por isso é o mais lento?",
        explanation:
          "Perguntar apenas o conceito e escrever o código você mesmo é o modo que mais exige esforço cognitivo e, por isso, o que mais forma habilidade. Gerar e investigar depois, ou pedir código com explicação, são intermediários. Aceitar o código sem nenhuma pergunta é o padrão que o estudo associa à perda de compreensão.",
        options: [
          { text: "Perguntar só o conceito e escrever o código por conta própria", isCorrect: true },
          { text: "Pedir o código pronto e aceitar sem perguntas", isCorrect: false },
          { text: "Pedir o código junto com a explicação", isCorrect: false },
          { text: "Pedir o código e investigar depois", isCorrect: false },
        ],
      },
      {
        id: 6,
        moduleId: 1,
        question: "Por que não faz sentido aplicar o modo mais lento a tudo?",
        explanation:
          "O modo de só conceito custa tempo, e nem tudo compensa esse custo — configuração usada uma vez por ano, por exemplo, pode vir pronta. A escolha deliberada é reservá-lo para aquilo que você quer dominar. Não se trata de o modo ser ineficaz nem de uma recomendação do estudo contra ele.",
        options: [
          { text: "Porque nem todo assunto compensa o tempo; reserve-o para o que é do seu ofício", isCorrect: true },
          { text: "Porque o modo conceitual produz código de pior qualidade", isCorrect: false },
          { text: "Porque o estudo desaconselha escrever código à mão", isCorrect: false },
          { text: "Porque assistentes modernos não respondem só conceito", isCorrect: false },
        ],
      },
      {
        id: 7,
        moduleId: 2,
        question: "Por que código gerado por IA exige atenção especial na revisão?",
        explanation:
          "Ele chega bem formatado, com nomes plausíveis e estrutura convincente — e essa aparência de qualidade desarma a desconfiança que você teria com código de origem desconhecida. O problema não é a linguagem usada nem a quantidade de comentários.",
        options: [
          { text: "Porque parece correto, e essa aparência desarma a desconfiança", isCorrect: true },
          { text: "Porque costuma vir mal formatado e difícil de ler", isCorrect: false },
          { text: "Porque sempre usa bibliotecas obsoletas", isCorrect: false },
          { text: "Porque nunca inclui tratamento de erro", isCorrect: false },
        ],
      },
      {
        id: 8,
        moduleId: 2,
        question: "Qual das cinco perguntas do checklist revela melhor uma lacuna de estudo sua?",
        explanation:
          "Eu saberia reescrever isso sem ajuda? é a pergunta que mede o seu entendimento, e não a qualidade do código. Responder não transforma aquele trecho num item de estudo identificado. As outras quatro avaliam o código; esta avalia você.",
        options: [
          { text: "Eu saberia reescrever isso sem ajuda?", isCorrect: true },
          { text: "Alguma dependência nova foi introduzida?", isCorrect: false },
          { text: "Há valor fixo que deveria ser configurável?", isCorrect: false },
          { text: "O que acontece se a entrada vier vazia?", isCorrect: false },
        ],
      },
      {
        id: 9,
        moduleId: 2,
        question: "Qual é a verificação de entendimento que não dá para enganar a si mesmo?",
        explanation:
          "Alterar uma linha e prever o resultado antes de rodar expõe o modelo mental: acertar a previsão comprova entendimento, errar aponta exatamente onde ele está furado. Reler, rodar os testes ou pedir confirmação ao assistente não exigem que você tenha construído esse modelo.",
        options: [
          { text: "Alterar o código e prever o resultado antes de executar", isCorrect: true },
          { text: "Ler o trecho uma segunda vez com atenção", isCorrect: false },
          { text: "Rodar e ver se os testes passam", isCorrect: false },
          { text: "Pedir ao assistente que confirme se você entendeu", isCorrect: false },
        ],
      },
      {
        id: 10,
        moduleId: 3,
        question: "Qual é o objetivo do bloco semanal sem assistente?",
        explanation:
          "O objetivo é passar pelo processo completo de ficar travado e sair sozinho — os pesquisadores apontam o esforço cognitivo, inclusive o desconforto de travar, como provavelmente importante para formar domínio. Não é medir velocidade, nem provar independência, nem economizar uso da ferramenta.",
        options: [
          { text: "Passar pelo esforço de travar e destravar sozinho", isCorrect: true },
          { text: "Medir quanto tempo você perde sem a ferramenta", isCorrect: false },
          { text: "Reduzir o custo de uso do assistente", isCorrect: false },
          { text: "Provar que você não depende de IA", isCorrect: false },
        ],
      },
      {
        id: 11,
        moduleId: 3,
        question: "Por que anotar a lacuna no momento em que ela aparece, em vez de estudar na hora?",
        explanation:
          "Registrar no instante produz uma lista específica, tirada do trabalho real, sem interromper a entrega. Estudar na hora quebra o fluxo, e lembrar depois transforma a lacuna numa sensação vaga de que falta estudar. A lista não serve para provar nada a ninguém.",
        options: [
          { text: "Porque preserva o fluxo e gera uma lista específica e sua", isCorrect: true },
          { text: "Porque estudar no mesmo dia não funciona", isCorrect: false },
          { text: "Porque a lista serve como comprovação para o gestor", isCorrect: false },
          { text: "Porque lacunas somem sozinhas com o tempo", isCorrect: false },
        ],
      },
      {
        id: 12,
        moduleId: 3,
        question: "Ao reescrever do zero um trecho que a IA gerou, o que indica sucesso?",
        explanation:
          "O sucesso é a sua versão existir e funcionar — é a prova de que o conhecimento ficou com você. Ela não precisa ser melhor, nem idêntica, nem mais curta. A comparação entre as duas mostra o que foi absorvido e o que passou direto.",
        options: [
          { text: "Sua versão existir e funcionar, mesmo sem ser melhor", isCorrect: true },
          { text: "Sua versão ficar idêntica à gerada pela IA", isCorrect: false },
          { text: "Sua versão ter menos linhas que a original", isCorrect: false },
          { text: "Você conseguir reescrever sem consultar nem a documentação", isCorrect: false },
        ],
      },
    ],
    whatYouBuild: {
      title: "O que você vai construir",
      description:
        "Não é um projeto de código — é um método de trabalho. Você sai com um roteiro de perguntas para usar com o assistente, um checklist de revisão aplicável a qualquer trecho gerado, e uma rotina semanal com três hábitos que mantêm a habilidade crescendo enquanto a entrega continua saindo.",
      highlights: [
        "Roteiro de perguntas por tipo de situação",
        "Checklist de cinco pontos para revisar código gerado",
        "Rotina semanal com bloco sem assistente e caderno de lacunas",
      ],
    },
    whyNow: {
      title: "Por que isso importa agora",
      paragraphs: [
        "Programação assistida por IA deixou de ser novidade e virou padrão de mercado: ferramentas desse tipo já fazem parte do dia a dia da maioria das equipes. Ao mesmo tempo, a competição por vagas júnior aumentou — e o que diferencia um candidato é justamente a compreensão que o assistente não entrega pronta.",
        "O ensaio controlado da Anthropic com 52 desenvolvedores júnior mostra o tamanho do efeito: 50% contra 67% de acerto em teste de compreensão, com a maior perda em depuração. A conclusão dos pesquisadores não é abandonar a ferramenta — é desenhar de propósito como ela é usada, para que apoie o desenvolvimento contínuo da habilidade em vez de apenas concluir tarefas.",
      ],
    },
    appliedIn: {
      title: "Onde se aplica",
      items: [
        { label: "Quem está aprendendo a programar", description: "Fase em que o risco de atrofia é maior, porque a base ainda está se formando." },
        { label: "Primeiro emprego em tecnologia", description: "Entregar com ajuda e ainda assim construir repertório próprio." },
        { label: "Quem ensina ou coordena", description: "Definir como a turma ou a equipe usa assistente sem perder formação." },
      ],
    },
    forWho: {
      title: "Para quem é este programa",
      profiles: [
        { label: "Iniciantes que já usam IA", description: "Usam todo dia e desconfiam que estão aprendendo menos do que deveriam." },
        { label: "Quem evita a ferramenta por receio", description: "Prefere não usar por medo de não aprender, e perde produtividade por isso." },
        { label: "Instrutores e líderes técnicos", description: "Precisam de uma política de uso baseada em evidência, não em opinião." },
      ],
    },
    marketUsage: {
      title: "Quem usa no mercado",
      description:
        "Assistentes de código estão presentes na rotina de equipes de todos os portes, de estúdios pequenos a grandes produtos. A questão prática deixou de ser se a ferramenta será usada e passou a ser como — e é aí que empresas e escolas ainda não têm política definida. Saber conduzir esse uso é uma habilidade de carreira, não só de ferramenta.",
      companies: [],
    },
    sources: [
      {
        label: "Anthropic — How AI assistance impacts the formation of coding skills (ensaio controlado randomizado com 52 desenvolvedores júnior)",
        url: "https://www.anthropic.com/research/AI-assistance-coding-skills",
      },
      {
        label: "Alura — Mercado de programação 2026: programação assistida por IA como tendência e competição maior em vagas júnior",
        url: "https://www.alura.com.br/artigos/mercado-de-programacao-2025",
      },
    ],
  },
];

export default programsData;
