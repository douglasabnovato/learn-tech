const questions = [
  // MÓDULO 0: Configuração de Ambiente
  // [M0 - Básico]
  {
    id: 1,
    moduleId: 0,
    question:
      "Qual extensão do VS Code é utilizada para visualizar alterações no código em tempo real?",
    explanation:
      "O Live Server monitora seus arquivos e recarrega o navegador automaticamente a cada vez que você salva, eliminando a necessidade de atualizar a página manualmente. O Prettier formata código, o ESLint verifica padrões de qualidade, e o Docker serve para containers — nenhum dos três mostra o resultado em tempo real no navegador.",
    options: [
      { text: "Live Server", isCorrect: true },
      { text: "Prettier", isCorrect: false },
      { text: "ESLint", isCorrect: false },
      { text: "Docker", isCorrect: false },
    ],
  },
  // [M0 - Intermediário]
  {
    id: 2,
    moduleId: 0,
    question:
      "No VS Code, qual atalho de teclado é comumente usado para abrir o terminal integrado?",
    explanation:
      "Ctrl + ` (a crase, geralmente ao lado do número 1 no teclado) é o atalho padrão do VS Code para abrir e fechar o terminal integrado. Ctrl+Shift+P abre a paleta de comandos, Alt+F4 fecha janelas no nível do sistema operacional, e Ctrl+Space aciona sugestões de autocompletar — nenhum deles abre o terminal.",
    options: [
      { text: "Ctrl + Shift + P", isCorrect: false },
      { text: "Ctrl + ` (crase)", isCorrect: true },
      { text: "Alt + F4", isCorrect: false },
      { text: "Ctrl + Space", isCorrect: false },
    ],
  },
  // [M0 - Avançado]
  {
    id: 3,
    moduleId: 0,
    question:
      "Para que serve o arquivo .gitignore em um projeto versionado com Git?",
    explanation:
      "O .gitignore lista padrões de arquivos e pastas que o Git deve ignorar — como node_modules, arquivos de configuração local ou dados sensíveis — impedindo que sejam versionados e enviados ao repositório por engano. Ele não apaga arquivo nenhum, não guarda senha, e não tem relação com a aparência do editor.",
    options: [
      {
        text: "Para listar arquivos que não devem ser rastreados pelo Git",
        isCorrect: true,
      },
      {
        text: "Para salvar as senhas do banco de dados com segurança",
        isCorrect: false,
      },
      {
        text: "Para deletar arquivos desnecessários automaticamente",
        isCorrect: false,
      },
      { text: "Para configurar as cores do editor VS Code", isCorrect: false },
    ],
  },

  // MÓDULO 1: UX Design e Estrutura (HTML)
  // [M1 - Básico]
  {
    id: 4,
    moduleId: 1,
    question:
      "Qual tag HTML5 é a mais adequada para definir o conteúdo principal de uma página?",
    explanation:
      "A tag <main> existe especificamente para marcar o conteúdo central e único da página — aquilo que não se repete em outras páginas do site, ao contrário de cabeçalho, rodapé e menu. <section> agrupa conteúdo temático, <article> marca conteúdo autocontido (como um post de blog), e <div> não carrega significado semântico nenhum.",
    options: [
      { text: "<section>", isCorrect: false },
      { text: "<div>", isCorrect: false },
      { text: "<main>", isCorrect: true },
      { text: "<article>", isCorrect: false },
    ],
  },
  // [M1 - Intermediário]
  {
    id: 5,
    moduleId: 1,
    question: "Em UX Design, o que caracteriza um 'Wireframe'?",
    explanation:
      "Um wireframe é um protótipo de baixa fidelidade — só estrutura, hierarquia e posicionamento dos elementos, sem cor, fonte ou imagem definitiva. Ele existe para validar a organização da página antes de investir tempo em visual e código. O design final com cores e fontes reais é a etapa seguinte, chamada de mockup ou protótipo de alta fidelidade.",
    options: [
      {
        text: "O design final com cores, fontes e imagens reais",
        isCorrect: false,
      },
      {
        text: "Um protótipo de baixa fidelidade focado na estrutura e hierarquia",
        isCorrect: true,
      },
      {
        text: "O código CSS que define a animação da página",
        isCorrect: false,
      },
      {
        text: "Uma ferramenta de teste de velocidade do site",
        isCorrect: false,
      },
    ],
  },
  // [M1 - Avançado]
  {
    id: 6,
    moduleId: 1,
    question:
      "Qual a importância da semântica HTML para o SEO (Search Engine Optimization)?",
    explanation:
      "Tags semânticas (<header>, <nav>, <article>, <h1> a <h6>) dizem aos buscadores qual parte do conteúdo é título, qual é navegação e qual é o corpo principal — isso ajuda o Google a entender a hierarquia e a relevância de cada trecho para indexar a página corretamente. Não tem relação com tempo de carregamento de imagem nem com resolução de foto — isso é otimização de performance, um tema diferente.",
    options: [
      {
        text: "Ajuda os motores de busca a entenderem a hierarquia e relevância do conteúdo",
        isCorrect: true,
      },
      {
        text: "Serve apenas para tornar o código mais bonito para o desenvolvedor",
        isCorrect: false,
      },
      {
        text: "Diminui o tempo de carregamento das imagens no servidor",
        isCorrect: false,
      },
      {
        text: "Aumenta a resolução das fotos exibidas na landing page",
        isCorrect: false,
      },
    ],
  },

  // MÓDULO 2: Estilização e Responsividade (CSS)
  // [M2 - Básico]
  {
    id: 7,
    moduleId: 2,
    question:
      "Qual propriedade CSS é usada para criar um layout flexível unidimensional?",
    explanation:
      "display: flex organiza os elementos ao longo de um único eixo — linha ou coluna — e facilita alinhamento e distribuição de espaço entre eles. display: grid cuida de layouts bidimensionais (linhas e colunas ao mesmo tempo), display: block é o comportamento padrão sem nenhuma flexibilidade, e position: relative só afeta posicionamento, não organização de múltiplos elementos.",
    options: [
      { text: "display: grid", isCorrect: false },
      { text: "display: block", isCorrect: false },
      { text: "display: flex", isCorrect: true },
      { text: "position: relative", isCorrect: false },
    ],
  },
  // [M2 - Intermediário]
  {
    id: 8,
    moduleId: 2,
    question:
      "No conceito Mobile-First, como devemos aplicar as Media Queries?",
    explanation:
      "No mobile-first, o CSS base (sem media query nenhuma) já é pensado para a tela pequena — e usamos @media (min-width: ...) para adicionar ou ajustar estilos conforme a tela cresce. É o oposto do desktop-first (que parte do grande e reduz), e costuma gerar CSS mais enxuto, porque a maioria dos usuários acessa primeiro pelo celular.",
    options: [
      {
        text: "Começamos o estilo pelo Desktop e diminuímos para o Mobile",
        isCorrect: false,
      },
      {
        text: "O estilo base é para telas pequenas e usamos @media para telas maiores",
        isCorrect: true,
      },
      {
        text: "Não utilizamos Media Queries, apenas porcentagens fixas",
        isCorrect: false,
      },
      {
        text: "Escrevemos códigos diferentes para cada marca de celular",
        isCorrect: false,
      },
    ],
  },
  // [M2 - Avançado]
  {
    id: 9,
    moduleId: 2,
    question:
      "No CSS Grid, qual unidade de medida é ideal para criar colunas que ocupam o espaço disponível proporcionalmente?",
    explanation:
      "A unidade fr (fractional unit) divide o espaço restante do grid proporcionalmente entre as colunas ou linhas — por exemplo, 1fr 2fr faz a segunda coluna ocupar o dobro do espaço da primeira, sempre se adaptando ao tamanho da tela. px é uma medida fixa que não se adapta, e em/vh medem em relação a fonte ou altura da tela, não ao espaço disponível no grid.",
    options: [
      { text: "px (pixels)", isCorrect: false },
      { text: "fr (fractional unit)", isCorrect: true },
      { text: "em", isCorrect: false },
      { text: "vh (viewport height)", isCorrect: false },
    ],
  },

  // MÓDULO 3: Interatividade e Comportamento (JS)
  // [M3 - Básico]
  {
    id: 10,
    moduleId: 3,
    question:
      "Qual método é usado no JavaScript para selecionar um elemento pelo seu ID?",
    explanation:
      "document.getElementById() busca diretamente o elemento cujo atributo id corresponde ao valor informado — é o método mais direto e eficiente para esse caso específico. As outras opções não existem como métodos nativos do JavaScript para essa finalidade.",
    options: [
      { text: "document.selectId()", isCorrect: false },
      { text: "document.getElementById()", isCorrect: true },
      { text: "document.query()", isCorrect: false },
      { text: "window.find()", isCorrect: false },
    ],
  },
  // [M3 - Intermediário]
  {
    id: 11,
    moduleId: 3,
    question: "O que faz o método .addEventListener()?",
    explanation:
      "addEventListener() anexa uma função a um elemento, para que ela seja executada quando um evento específico ocorrer — como um clique ou envio de formulário — sem sobrescrever outros handlers já anexados ao mesmo elemento (diferente de definir onclick= diretamente, que substitui qualquer handler anterior). Não mexe em CSS, não apaga elemento, e não cria variável.",
    options: [
      {
        text: "Adiciona um estilo CSS diretamente no elemento",
        isCorrect: false,
      },
      {
        text: "Anexa uma função que será executada quando um evento ocorrer",
        isCorrect: true,
      },
      { text: "Deleta um elemento do DOM permanentemente", isCorrect: false },
      { text: "Cria uma nova variável global no script", isCorrect: false },
    ],
  },
  // [M3 - Avançado]
  {
    id: 12,
    moduleId: 3,
    question:
      "Para que serve a API 'Intersection Observer' no desenvolvimento de Landing Pages?",
    explanation:
      "Intersection Observer detecta, de forma assíncrona e eficiente, quando um elemento entra ou sai da área visível da tela (viewport) — é assim que se disparam animações de scroll ou carregamento tardio de imagem, sem precisar escutar o evento de scroll diretamente, o que sobrecarregaria a performance da página.",
    options: [
      {
        text: "Para detectar quando um elemento entra ou sai da área visível (viewport)",
        isCorrect: true,
      },
      {
        text: "Para conectar o banco de dados diretamente ao HTML",
        isCorrect: false,
      },
      {
        text: "Para traduzir o site automaticamente para outros idiomas",
        isCorrect: false,
      },
      {
        text: "Para impedir que o usuário clique com o botão direito",
        isCorrect: false,
      },
    ],
  },

  // MÓDULO 4: Entrega e Deploy
  // [M4 - Básico]
  {
    id: 13,
    moduleId: 4,
    question:
      "Qual plataforma é amplamente utilizada para hospedar e versionar repositórios de código?",
    explanation:
      "O GitHub é a plataforma padrão do mercado para hospedar repositórios Git, permitindo versionamento, colaboração e histórico de mudanças do código. As outras opções são ferramentas de edição de imagem, planilha e streaming de música — sem relação com versionamento de código.",
    options: [
      { text: "GitHub", isCorrect: true },
      { text: "Photoshop", isCorrect: false },
      { text: "Excel", isCorrect: false },
      { text: "Spotify", isCorrect: false },
    ],
  },
  // [M4 - Intermediário]
  {
    id: 14,
    moduleId: 4,
    question: "O que significa o processo de 'Minificação' de arquivos CSS/JS?",
    explanation:
      "Minificar é remover espaços em branco, quebras de linha e comentários do código — sem mudar o que ele faz — para reduzir o tamanho do arquivo e acelerar o carregamento da página. Não tem relação com resolução de imagem, tradução de idioma, ou dividir o código em vários arquivos.",
    options: [
      {
        text: "Aumentar a resolução das fontes para melhor leitura",
        isCorrect: false,
      },
      {
        text: "Remover espaços e comentários para reduzir o tamanho do arquivo",
        isCorrect: true,
      },
      { text: "Traduzir o código de Inglês para Português", isCorrect: false },
      { text: "Dividir o código em 10 arquivos menores", isCorrect: false },
    ],
  },
  // [M4 - Avançado]
  {
    id: 15,
    moduleId: 4,
    question:
      "O que é CI/CD no contexto de deploy em plataformas como Vercel ou Netlify?",
    explanation:
      "CI/CD significa Integração Contínua e Entrega Contínua — a automação que testa e publica seu código automaticamente a cada push no repositório, sem que você precise fazer deploy manual. É exatamente o que acontece quando você conecta um repositório GitHub à Vercel: cada push já vira uma nova versão no ar.",
    options: [
      {
        text: "Integração Contínua e Entrega Contínua (automação do deploy)",
        isCorrect: true,
      },
      { text: "Cópia Integral e Conteúdo Duplicado", isCorrect: false },
      { text: "Código Interno e Comando Direto", isCorrect: false },
      { text: "Internet Colorida e Design Criativo", isCorrect: false },
    ],
  },

  // MÓDULO ESPECIAL: QA e Testes
  // [M5 - Básico]
  {
    id: 16,
    moduleId: 5,
    question:
      "Em QA, qual o objetivo principal de realizar testes em uma Landing Page?",
    explanation:
      "O objetivo do QA (Quality Assurance) é garantir que a página funcione corretamente, sem bugs, do ponto de vista de quem usa — antes que um erro chegue ao usuário real. Não é uma etapa de design, não é sobre redes sociais, e não é sobre velocidade de escrever código — é sobre confiabilidade do resultado final.",
    options: [
      {
        text: "Garantir que a página funcione corretamente e sem bugs para o usuário",
        isCorrect: true,
      },
      {
        text: "Mudar as cores do design conforme o gosto do desenvolvedor",
        isCorrect: false,
      },
      {
        text: "Aumentar o número de seguidores nas redes sociais",
        isCorrect: false,
      },
      { text: "Escrever o código mais rápido possível", isCorrect: false },
    ],
  },
  // [M5 - Intermediário]
  {
    id: 17,
    moduleId: 5,
    question: "O que é o teste 'Cross-Browser'?",
    explanation:
      "Cross-browser testing verifica se o site funciona e aparece de forma consistente em navegadores diferentes — Chrome, Safari, Firefox, Edge — porque cada um pode interpretar CSS e JavaScript de forma sutilmente distinta. Não tem relação com preço de computador, conexão de internet, ou editores de foto.",
    options: [
      {
        text: "Testar se o site funciona apenas em computadores caros",
        isCorrect: false,
      },
      {
        text: "Verificar a compatibilidade do site em diferentes navegadores (Chrome, Safari, etc)",
        isCorrect: true,
      },
      { text: "Testar se o site funciona sem internet", isCorrect: false },
      {
        text: "Verificar se as imagens abrem em editores de fotos",
        isCorrect: false,
      },
    ],
  },
  // [M5 - Avançado]
  {
    id: 18,
    moduleId: 5,
    question:
      "Durante o debug, qual ferramenta do navegador permite simular uma conexão 3G lenta?",
    explanation:
      "A aba Network (Rede) do DevTools do Chrome tem uma opção de throttling que simula conexões lentas, como 3G, para você testar como o site se comporta para um usuário com internet ruim — uma das técnicas centrais de teste de performance. As outras opções (Elements, Configurações do Windows, Favoritos) não têm relação com simulação de rede.",
    options: [
      { text: "Aba Network (Rede) no DevTools", isCorrect: true },
      { text: "Aba Elements (Elementos)", isCorrect: false },
      { text: "Menu de Configurações do Windows", isCorrect: false },
      { text: "Barra de Favoritos", isCorrect: false },
    ],
  },
];

export default questions;