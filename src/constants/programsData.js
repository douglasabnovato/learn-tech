import Image1 from "./../assets/programs/1-programs.png";

const programsData = [
  // Web (1 a 100)
  {
    id: 1,
    image: Image1,
    category: "Web",
    categoryFilter: "web",
    rating: "4.5",
    title: "Desenvolver uma Landing Page Moderna",
    lessons: "12 Lições",
    students: "11 Alunos",
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
      { id: 0, title: "Setup e Arquitetura", lessonsCount: 5, component: "ModuleZero" },
      { id: 1, title: "Estrutura Semântica", lessonsCount: 6, component: "ModuleOne" },
      { id: 2, title: "CSS Avançado", lessonsCount: 7, component: "ModuleTwo" },
      { id: 3, title: "JavaScript Fundamentals", lessonsCount: 8, component: "ModuleThree" },
      { id: 4, title: "Projeto Prático e Deploy", lessonsCount: 6, component: "ModuleFour" },
      { id: 5, title: "Deployment e Otimização", lessonsCount: 4, component: "ModuleFive" },
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
          title: "Módulo 0: Setup e Arquitetura (O Início)",
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
          title: "Módulo 1: Estrutura Semântica (HTML5)",
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
          title: "Módulo 2: Estilização com CSS (Layouts Modernos)",
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
          title: "Módulo 3: JavaScript e Interatividade",
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
          title: "Módulo 4: Projeto Prático e Deploy",
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
          title: "Módulo 5: QA, Testes e Otimização",
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
        title: "Setup e Arquitetura",
        shortDescription:
          "Configuração do Ambiente e Validação 'Hello World': Da preparação da máquina à primeira visualização em tempo real",
        introductionText:
          "Ter um setup bem configurado não é apenas uma questão de estética, mas de eficiência técnica. Ao alinhar o editor de código (VS Code), o navegador (Chrome) e a organização de arquivos, você reduz o atrito entre a ideia e a execução. O objetivo deste módulo é garantir que sua 'oficina' esteja funcionando perfeitamente, permitindo que você visualize suas criações instantaneamente através da extensão Live Server. Todo o resto do curso se apoia neste alicerce — um ambiente mal configurado custa horas de frustração mais adiante, por isso não pulamos esta etapa.",
        sections: [
          {
            title: "🚀 Passo a Passo do Setup Profissional",
            subsections: [
              {
                number: 1,
                title: "Organização de Diretórios (Windows Explorer)",
                guidance:
                  "No seu Windows Explorer, crie uma pasta raiz chamada learnTECH em um local seguro. Para este teste inicial, crie uma subpasta chamada hello-world.",
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
                guidance:
                  "No arquivo index.html, adicione <h1>Hello World</h1> entre as tags <body>. Salve (Ctrl + S). Observe que o navegador atualiza automaticamente sem refresh manual.",
                tips: ["Este é o primeiro sinal de que seu ambiente está funcionando corretamente."],
              },
            ],
          },
        ],
        closingText:
          "Com o seu ambiente validado e o primeiro sinal de vida da sua aplicação no navegador, você acaba de cruzar a fronteira entre um entusiasta e um desenvolvedor em formação. Este setup será o seu porto seguro durante todo o bootcamp, garantindo que cada linha de código escrita seja visualizada e refinada em tempo real. Agora que a fundação está sólida, estamos prontos para subir o nível: no próximo módulo, deixaremos o 'Hello World' para trás para darmos início à arquitetura real da nossa landing page.",
        nextButtonText: "Ir para Módulo 1: Estrutura Semântica",
      },
      {
        id: 1,
        title: "Estrutura Semântica",
        shortDescription: "Fundações HTML5: Da Semântica à Acessibilidade - Construir com Propósito",
        introductionText:
          "Agora que seu ambiente está configurado, é hora de aprender a linguagem que os navegadores entendem: HTML5. Não é apenas sobre tags e elementos, mas sobre contar uma história estruturada. Cada tag tem um propósito semântico que não só melhora o SEO, mas também torna seu site acessível a um público muito mais amplo, incluindo pessoas com deficiências visuais ou auditivas. Um HTML bem estruturado é a diferença entre um site que qualquer pessoa e qualquer buscador consegue interpretar, e um site que só faz sentido visualmente.",
        sections: [
          {
            title: "📐 Hierarquia de Conteúdo",
            subsections: [
              {
                number: 1,
                title: "Semântica HTML5",
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
        closingText:
          "Com a estrutura semântica finalizada, sua landing page agora tem 'corpo' e significado. Você deixou de apenas 'escrever tags' para arquitetar uma solução. O próximo grande passo será dar vida e estilo a esse esqueleto: no Módulo 2, mergulharemos no CSS para transformar essa estrutura em uma interface visualmente impactante.",
        nextButtonText: "Ir para Módulo 2: Estilização com CSS",
      },
      {
        id: 2,
        title: "Estilização com CSS Avançado",
        shortDescription: "Do Padrão Navegador ao Design Profissional - Flexbox, Grid e Beyond",
        introductionText:
          "CSS não é apenas 'deixar bonito'. É sobre comunicação visual, hierarquia de informação e adaptar seu design para qualquer tela. Neste módulo, você dominará Flexbox e CSS Grid, as duas ferramentas mais poderosas do CSS moderno, permitindo criar layouts que se adaptam perfeitamente de um iPhone até uma TV. A diferença entre um site amador e um profissional geralmente está aqui: no domínio de layout e consistência visual, não na quantidade de código escrito.",
        sections: [
          {
            title: "🎨 Design System Implementado",
            subsections: [
              {
                number: 1,
                title: "Flexbox Fundamentals",
                guidance:
                  "Flexbox simplifica alinhamento e distribuição de espaço. Aprenda display: flex, justify-content, align-items, flex-direction.",
                tips: ["Flexbox é ideal para componentes e layouts unidimensionais."],
              },
              {
                number: 2,
                title: "CSS Grid",
                guidance:
                  "Para layouts mais complexos, Grid oferece controle em duas dimensões. Defina grid-template-columns, grid-gap e posicione itens com grid-column.",
                tips: ["Grid é perfeito para layouts de página inteira."],
              },
              {
                number: 3,
                title: "Media Queries e Responsividade",
                guidance:
                  "Use @media (max-width: 768px) para redefinir o layout em telas menores. Teste sempre do menor breakpoint para o maior (mobile-first).",
                tips: ["Projetar mobile-first evita retrabalho: é mais fácil expandir um layout simples do que simplificar um complexo."],
              },
            ],
          },
        ],
        closingText:
          "Sua página agora é profissional e se adapta a qualquer tela. Com Flexbox e Grid, você dominou o layout moderno. É hora de sair da estática e adicionar interatividade real.",
        nextButtonText: "Ir para Módulo 3: JavaScript e Interatividade",
      },
      {
        id: 3,
        title: "JavaScript Fundamentals",
        shortDescription: "Trazendo Vida à Página - Do Static ao Interactive",
        introductionText:
          "HTML estrutura, CSS estiliza, mas JavaScript traz a magia: interatividade, validação, e reatividade em tempo real. Neste módulo, você aprenderá não apenas sintaxe, mas padrões que os profissionais usam diariamente para criar experiências de usuário incríveis. Se o HTML é o esqueleto e o CSS é a pele, o JavaScript é o sistema nervoso da sua aplicação — é ele que faz a página perceber e reagir ao que o usuário faz.",
        sections: [
          {
            title: "⚙️ Interatividade com JavaScript",
            subsections: [
              {
                number: 1,
                title: "DOM e Eventos",
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
                guidance:
                  "Use a API de Intersection Observer para disparar animações apenas quando o elemento estiver visível na tela, otimizando a performance em vez de escutar o evento de scroll diretamente.",
                tips: ["Animações disparadas por scroll direto (sem Intersection Observer) tendem a travar em celulares mais fracos."],
              },
            ],
          },
        ],
        closingText:
          "Sua página agora responde aos usuários, mas ainda temos um objetivo: fazer isso em produção onde o mundo possa acessá-la.",
        nextButtonText: "Ir para Módulo 4: Projeto Prático e Deploy",
      },
      {
        id: 4,
        title: "Projeto Prático e Deploy",
        shortDescription: "Do Seu Computador ao Mundo - GitHub e Produção",
        introductionText:
          "Um projeto perfeito localmente não vale nada se ninguém pode acessá-lo. Neste módulo, você aprenderá a versioná-lo com Git/GitHub e publicá-lo em plataformas como Vercel, tornando sua landing page acessível para qualquer pessoa em qualquer lugar. É também o momento em que o projeto deixa de ser 'exercício de curso' e passa a ser, de fato, um item de portfólio.",
        sections: [
          {
            title: "🚀 Ciclo Completo de Desenvolvimento",
            subsections: [
              {
                number: 1,
                title: "GitHub e Versionamento",
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
        closingText:
          "Sua URL está ativa e seu código está seguro no GitHub. Você completou o ciclo de produção. Mas um desenvolvedor de elite nunca para: vamos garantir que seu código seja inquebrável.",
        nextButtonText: "Finalizar com Módulo Especial: QA",
      },
      {
        id: 5,
        title: "QA, Testes e Otimização",
        shortDescription: "Polimento Final: Garantindo Excelência Técnica",
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
        closingText:
          "Sua jornada pelo Módulo 0 ao Módulo Especial foi concluída com sucesso. Agora você possui uma landing page funcional, estilizada, interativa, publicada e testada. Este é o padrão de excelência técnica com foco total na experiência real do usuário.",
        nextButtonText: "Emitir Certificado de Conclusão",
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
    rating: "4.7",
    title: "HTML5 e CSS3 Moderno: Do Zero ao Deployment",
    lessons: "20+ Lições",
    students: "45+ Estudantes",
    duration: "15hr 20min",
    access: "Acesso Livre",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg",
    category: "Web",
    categoryFilter: "web",
    rating: "4.6",
    title:
      "Web Design Responsivo: Criando sites que se adaptam a qualquer tela",
    lessons: "10+ Lições",
    students: "30+ Estudantes",
    duration: "08hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg",
    category: "Web",
    categoryFilter: "web",
    rating: "4.9",
    title: "JavaScript para Iniciantes: A Base da Web Moderna",
    lessons: "25+ Lições",
    students: "120+ Estudantes",
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
    rating: "4.8",
    title:
      "Construa interfaces dinâmicas e modernas dominando ReactJS no Frontend.",
    lessons: "15+ Lições",
    students: "7+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 102,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    rating: "4.9",
    title: "Next.js e Tailwind CSS: Performance e Estilo na Prática",
    lessons: "18+ Lições",
    students: "55+ Estudantes",
    duration: "14hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 103,
    image:
      "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    rating: "4.7",
    title: "Vue.js 3: Guia Completo para Desenvolvimento Ágil",
    lessons: "22+ Lições",
    students: "40+ Estudantes",
    duration: "16hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 104,
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
    category: "Frontend",
    categoryFilter: "frontend",
    rating: "4.8",
    title: "Estado Global com Redux e Context API em Aplicações Reais",
    lessons: "12+ Lições",
    students: "25+ Estudantes",
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
    rating: "4.8",
    title:
      "Aprenda UX/UI para criar interfaces modernas, criativas e funcionais",
    lessons: "15+ Lições",
    students: "7+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 202,
    image:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    rating: "4.9",
    title: "Figma para Iniciantes: Do Protótipo ao Design System",
    lessons: "30+ Lições",
    students: "200+ Estudantes",
    duration: "20hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 203,
    image:
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    rating: "4.7",
    title: "Psicologia das Cores e Tipografia aplicada ao Produto Digital",
    lessons: "08+ Lições",
    students: "85+ Estudantes",
    duration: "06hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 204,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    category: "UX/UI",
    categoryFilter: "ux-ui",
    rating: "4.6",
    title: "UX Research: Métodos de Pesquisa para Validar Ideias",
    lessons: "12+ Lições",
    students: "40+ Estudantes",
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
    rating: "4.8",
    title:
      "Back-end descomplicado: APIs, lógica de negócios e integração eficiente",
    lessons: "15+ Lições",
    students: "100+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 302,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    rating: "4.9",
    title: "Node.js e Express: Criando APIs RESTful Escaláveis",
    lessons: "25+ Lições",
    students: "300+ Estudantes",
    duration: "22hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 303,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    rating: "4.7",
    title: "Arquitetura de Microsserviços com Docker e Kubernetes",
    lessons: "20+ Lições",
    students: "150+ Estudantes",
    duration: "18hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 304,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    category: "Backend",
    categoryFilter: "backend",
    rating: "4.8",
    title: "Python para Backend: Do Django ao FastAPI",
    lessons: "18+ Lições",
    students: "110+ Estudantes",
    duration: "16hr 00min",
    access: "Acesso Livre",
  },

  // Data Base (401 a 500)
  {
    id: 401,
    image: "https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_640.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    rating: "4.5",
    title:
      "Banco de Dados na prática: SQL, NoSQL e modelagem para aplicações reais",
    lessons: "12+ Lições",
    students: "50+ Estudantes",
    duration: "10hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 402,
    image:
      "https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    rating: "4.8",
    title: "PostgreSQL Avançado: Queries Complexas e Performance",
    lessons: "15+ Lições",
    students: "65+ Estudantes",
    duration: "12hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 403,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    rating: "4.7",
    title: "MongoDB: Do Zero ao CRUD em Aplicações NoSQL",
    lessons: "10+ Lições",
    students: "40+ Estudantes",
    duration: "08hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 404,
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
    category: "Data Base",
    categoryFilter: "data-base",
    rating: "4.9",
    title: "Segurança de Dados: Protegendo Bancos contra Invasões",
    lessons: "20+ Lições",
    students: "95+ Estudantes",
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
    rating: "4.8",
    title: "Produtos Digitais: da ideia ao lançamento com metodologias ágeis",
    lessons: "15+ Lições",
    students: "100+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 502,
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    rating: "4.9",
    title: "Gestão de Backlog: Priorização para Product Owners",
    lessons: "10+ Lições",
    students: "50+ Estudantes",
    duration: "08hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 503,
    image:
      "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    rating: "4.7",
    title: "MVP na Prática: Como Validar seu Produto com Baixo Custo",
    lessons: "12+ Lições",
    students: "120+ Estudantes",
    duration: "10hr 30min",
    access: "Acesso Livre",
  },
  {
    id: 504,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    category: "Produtos Digitais",
    categoryFilter: "produtos-digitais",
    rating: "4.8",
    title: "Métricas de Produto: North Star, OMTM e Retenção",
    lessons: "14+ Lições",
    students: "40+ Estudantes",
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
    rating: "4.8",
    title:
      "Projetos Tech: desenvolva habilidades práticas com cases reais e colaborativos.",
    lessons: "15+ Lições",
    students: "100+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 602,
    image:
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    rating: "4.9",
    title: "Scrum e Kanban: Agilidade na Gestão de Projetos Tech",
    lessons: "20+ Lições",
    students: "250+ Estudantes",
    duration: "15hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 603,
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    rating: "4.7",
    title: "Liderança Técnica: Como Gerir Equipes de Desenvolvedores",
    lessons: "12+ Lições",
    students: "30+ Estudantes",
    duration: "10hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 604,
    image:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
    category: "Projetos",
    categoryFilter: "projetos",
    rating: "4.8",
    title: "Git e GitHub Workflow: Colaboração em Projetos de Código Aberto",
    lessons: "10+ Lições",
    students: "180+ Estudantes",
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
    rating: "4.8",
    title:
      "English for Tech: aprimore seu inglês focado em carreira e programação",
    lessons: "15+ Lições",
    students: "100+ Estudantes",
    duration: "12hr 45min",
    access: "Acesso Livre",
  },
  {
    id: 702,
    image:
      "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg",
    category: "English",
    categoryFilter: "english",
    rating: "4.7",
    title: "Vocabulary for Developers: Termos Técnicos e Documentação",
    lessons: "20+ Lições",
    students: "80+ Estudantes",
    duration: "09hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 703,
    image:
      "https://cdn.pixabay.com/photo/2015/09/06/00/17/macbook-926558_1280.jpg",
    category: "English",
    categoryFilter: "english",
    rating: "4.9",
    title: "Job Interview Prep: Como Passar em Entrevistas de TI em Inglês",
    lessons: "08+ Lições",
    students: "60+ Estudantes",
    duration: "06hr 00min",
    access: "Acesso Livre",
  },
  {
    id: 704,
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
    category: "English",
    categoryFilter: "english",
    rating: "4.6",
    title: "Daily Scrum English: Melhore sua Comunicação em Daily Meetings",
    lessons: "10+ Lições",
    students: "120+ Estudantes",
    duration: "05hr 30min",
    access: "Acesso Livre",
  },
];

export default programsData;
