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
    price: "R$100.89",
    level: "Iniciante",
    description:
      "Este bootcamp abrangente de desenvolvimento web leva você do iniciante absoluto ao desenvolvedor profissional. Você aprenderá todas as ferramentas e tecnologias necessárias para construir aplicações web full-stack.",
    letslearn: [
      "Aprenda a construir aplicações web full-stack usando HTML, CSS e JavaScript.",
      "Entenda os fundamentos do desenvolvimento web",
      "Conceitos principais de HTML, CSS e JavaScript",
      "Construa interfaces responsivas e amigáveis para o usuário.",
    ],
    curriculum:"Introdução ao Desenvolvimento Web",
    about: "Este programa abrangente de desenvolvimento web leva você do iniciante absoluto ao desenvolvedor profissional. Você aprenderá todas as ferramentas e tecnologias necessárias para construir aplicações web full-stack.",
    materials: [
      "Slides Completos",
      "Repositório de Código Fonte",
      "Arquivos do Projeto",
      "Diretrizes e Dicas",
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
    price: "R$89.90",
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
    price: "R$75.00",
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
    price: "R$110.00",
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
    price: "R$120.99",
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
    price: "R$145.50",
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
    price: "R$115.00",
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
    price: "R$99.90",
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
    price: "R$120.99",
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
    price: "R$150.00",
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
    price: "R$65.00",
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
    price: "R$110.00",
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
    price: "R$120.99",
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
    price: "R$180.00",
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
    price: "R$250.00",
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
    price: "R$135.00",
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
    price: "R$100.89",
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
    price: "R$115.00",
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
    price: "R$85.00",
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
    price: "R$160.00",
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
    price: "R$120.99",
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
    price: "R$95.00",
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
    price: "R$130.00",
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
    price: "R$140.00",
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
    price: "R$120.99",
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
    price: "R$110.00",
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
    price: "R$190.00",
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
    price: "R$60.00",
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
    price: "R$120.99",
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
    price: "R$80.00",
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
    price: "R$150.00",
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
    price: "R$70.00",
  },
];

export default programsData;
