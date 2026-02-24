const questions = [
  // MÓDULO 0: Configuração de Ambiente
  // [M0 - Básico]
  {
    id: 1,
    question:
      "Qual extensão do VS Code é utilizada para visualizar alterações no código em tempo real?",
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
    question:
      "No VS Code, qual atalho de teclado é comumente usado para abrir o terminal integrado?",
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
    question:
      "Para que serve o arquivo .gitignore em um projeto versionado com Git?",
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
    question:
      "Qual tag HTML5 é a mais adequada para definir o conteúdo principal de uma página?",
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
    question: "Em UX Design, o que caracteriza um 'Wireframe'?",
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
    question:
      "Qual a importância da semântica HTML para o SEO (Search Engine Optimization)?",
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
    question:
      "Qual propriedade CSS é usada para criar um layout flexível unidimensional?",
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
    question:
      "No conceito Mobile-First, como devemos aplicar as Media Queries?",
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
    question:
      "No CSS Grid, qual unidade de medida é ideal para criar colunas que ocupam o espaço disponível proporcionalmente?",
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
    question:
      "Qual método é usado no JavaScript para selecionar um elemento pelo seu ID?",
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
    question: "O que faz o método .addEventListener()?",
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
    question:
      "Para que serve a API 'Intersection Observer' no desenvolvimento de Landing Pages?",
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
    question:
      "Qual plataforma é amplamente utilizada para hospedar e versionar repositórios de código?",
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
    question: "O que significa o processo de 'Minificação' de arquivos CSS/JS?",
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
    question:
      "O que é CI/CD no contexto de deploy em plataformas como Vercel ou Netlify?",
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
    question:
      "Em QA, qual o objetivo principal de realizar testes em uma Landing Page?",
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
    question: "O que é o teste 'Cross-Browser'?",
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
    question:
      "Durante o debug, qual ferramenta do navegador permite simular uma conexão 3G lenta?",
    options: [
      { text: "Aba Network (Rede) no DevTools", isCorrect: true },
      { text: "Aba Elements (Elementos)", isCorrect: false },
      { text: "Menu de Configurações do Windows", isCorrect: false },
      { text: "Barra de Favoritos", isCorrect: false },
    ],
  },
];

export default questions;
