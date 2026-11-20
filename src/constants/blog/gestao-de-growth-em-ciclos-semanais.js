/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo gestao-de-growth-em-ciclos-semanais).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Ciclo = semana útil",
      description: "Cada ciclo é numerado pela semana do ano e vai de segunda a sexta, com previsão de conclusão.",
    },
    {
      label: "Esforço em minutos",
      description: "Estimar em minutos obriga a quebrar a tarefa até ela caber num dia de trabalho.",
    },
    {
      label: "Atraso visível",
      description: "Prazo inicial, data de finalização e atraso lado a lado mostram onde o planejamento falha.",
    },
  ],
  body: [
    "A planilha tinha onze colunas: Projeto, Status, Ciclo, Previsão de Conclusão, Responsável, Tarefa, Esforço, Prazo Inicial, Data de Finalização, Atraso e Observação. Os projetos eram frentes permanentes numeradas, como 00 - Geral, 04 - Leads e 05 - E-Commerce, e cada linha era uma tarefa concreta dentro de uma delas: criar um pop-up de captura de CEP, montar um relatório, fazer QA de uma página, preparar o material de uma ação com clube de futebol. O status era binário, finalizado ou não finalizado, e os ciclos levavam o número da semana do ano, como Ciclo 26, de 23/06 a 27/06, e Ciclo 27, de 30/06 a 04/07.",
    "O esforço era anotado em minutos, às vezes como conta (cinco blocos de uma hora mais duas horas de revisão, por exemplo). Parece detalhe, mas é o coração do método: se uma tarefa não cabe numa estimativa em minutos, ela ainda não é tarefa, é projeto. A coluna de atraso compara o prazo inicial com a data real de finalização, e a observação guarda o contexto, como a dependência de uma reunião ou de um retorno de outra área.",
  ],
  quote: "Planejar a semana não é prever o futuro. É deixar registrado o que você achou que daria tempo, para aprender com a diferença.",
  bodyContinued: [
    "Do Scrum, o ciclo semanal pega o timebox. O Scrum Guide define sprints de duração fixa de um mês ou menos, com planejamento no início e revisão no fim; uma semana é um sprint curto, adequado a um time pequeno com demandas de marketing que mudam rápido. A coluna Previsão de Conclusão faz o papel da meta da sprint, e a revisão de sexta-feira, olhando o que ficou não finalizado, é uma retrospectiva informal. O que a planilha não tem, e um time maior sentiria falta, é um backlog priorizado separado do ciclo.",
    "Do Kanban, vem o foco no fluxo. O Kanban Guide pede que o fluxo de trabalho seja visível e que se acompanhem quatro métricas: trabalho em andamento, vazão (itens finalizados por unidade de tempo), idade do item em andamento e tempo de ciclo do início ao fim. A planilha já tem quase tudo: contar linhas finalizadas por ciclo dá a vazão, e a diferença entre prazo inicial e finalização se aproxima do tempo de ciclo. Falta só um limite de trabalho em andamento, que impediria abrir a sexta frente quando cinco ainda estão paradas.",
    "Quando a planilha começa a pesar, as ferramentas ajudam. No Microsoft Planner, os buckets podem representar os projetos, e cada tarefa tem progresso (não iniciada, em andamento, concluída), prioridade, datas de início e de conclusão, com atrasos destacados em vermelho, além de rótulos e checklist. No ClickUp, o recurso de Sprints cria pastas por time com duração configurável, permite mover tarefas que sobraram para o próximo sprint e liga estimativas de tempo ou pontos por meio de ClickApps, com relatórios em painéis. Em qualquer uma delas, a lógica continua sendo a da planilha: ciclo, responsável, esforço e prazo.",
    "Para quem está começando, vale montar o próprio ciclo semanal antes de pedir uma ferramenta. Liste as tarefas da semana na segunda, estime em minutos, anote o que terminou na sexta e calcule o atraso. Em quatro semanas você terá dados sobre a sua própria capacidade, e essa é a conversa que qualquer líder quer ter numa entrevista: não quantas ferramentas você conhece, mas como você sabe o que cabe na sua semana.",
  ],
  sources: [
    {
      label: "The Kanban Guide (2020.7) — Kanban Guides",
      url: "https://kanbanguides.org/the-kanban-guide/2020.7",
    },
    {
      label: "The Scrum Guide (2020) — Scrum Guides",
      url: "https://scrumguides.org/scrum-guide.html",
    },
    {
      label: "Intro to Sprints — ClickUp Help",
      url: "https://help.clickup.com/hc/en-us/articles/6303974210071-Intro-to-Sprints",
    },
    {
      label: "Microsoft Planner: Creating Buckets and Tasks — RPI ITSSC",
      url: "https://itssc.rpi.edu/hc/en-us/articles/19379074676109-Microsoft-Planner-Creating-Buckets-and-Tasks",
    },
  ],
};

export default artigo;
