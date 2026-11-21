/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo tecnicas-de-lideranca-e-equipes-produtivas).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Validar antes de construir",
      description: "Toda ideia é hipótese até ser testada com quem vai usar, inclusive a sua arquitetura favorita.",
    },
    {
      label: "Mostrar em vez de explicar",
      description: "Um protótipo ou um diagrama resolve em cinco minutos a discussão que levaria uma reunião inteira.",
    },
    {
      label: "Importante antes do urgente",
      description: "A matriz de Eisenhower ajuda o time a sair do modo bombeiro e investir no que evita incêndios.",
    },
  ],
  body: [
    "A primeira técnica é o customer development, ideia popularizada por Steve Blank e depois incorporada ao movimento lean startup: nada é verdade até ser testado e validado fora da sua cabeça. Para um time de produto, isso significa tratar cada feature do roadmap como hipótese. Antes de gastar três sprints, converse com cinco usuários, olhe os dados de uso, publique uma versão mínima. Para um tech lead, vale também para decisões técnicas: a migração para microsserviços é mesmo necessária ou é uma suposição que ninguém mediu? Perguntas para se fazer: quantas ideias suas morrem no backlog sem nunca serem testadas? Você muda de rota quando a evidência contradiz o plano, ou insiste?",
    "A segunda é a prototipagem, que pode ser resumida em em vez de falar, mostre. Protótipo é o primeiro modelo de algo, feito para testar um conceito. Em tecnologia ele tem muitas formas: um wireframe no Figma, uma prova de conceito num branch descartável, um diagrama de sequência num quadro, um mock de API. Quem lidera e chega à discussão com algo visível sai na frente, porque o time entende mais rápido, critica com mais precisão e decide melhor. A pergunta incômoda aqui é: você costuma errar rápido com rascunhos ou demora semanas aperfeiçoando antes de mostrar?",
    "A terceira é o service design, a atenção aos detalhes de toda a experiência de quem recebe o seu trabalho. A disciplina tem raízes no service blueprint, o mapa visual de todas as etapas de um serviço, descrito por G. Lynn Shostack num artigo da Harvard Business Review de 1984. No dia a dia de um time de dev, os clientes não são só os usuários finais: são também o time de suporte que recebe os chamados, o colega que vai dar manutenção no seu código e o outro squad que consome a sua API. Documentação clara, mensagens de erro úteis, changelog legível e onboarding de novos devs são detalhes de service design.",
  ],
  quote:
    "O trabalho de quem lidera não é fazer mais coisas, é decidir com o time o que deve ser feito primeiro. Fazer a coisa certa vale mais do que fazer muitas coisas.",
  bodyContinued: [
    "A quarta técnica é a proatividade, entendida como o oposto da reação. A raiz do conceito está em Viktor Frankl, que em Em Busca de Sentido defende que sempre resta a escolha de como responder às circunstâncias, e ele virou o primeiro hábito do livro Os 7 Hábitos das Pessoas Altamente Eficazes, de Stephen Covey. Num time de tecnologia, proatividade é ver o alerta no monitoramento e abrir o incidente antes que alguém peça, propor o teste que falta, estudar a tecnologia que o time vai adotar no próximo trimestre. O vocabulário entrega quem é proativo: vamos procurar alternativas, eu assumo, eu faço. A quinta técnica é o pensamento sistêmico, a capacidade de enxergar conexões invisíveis: um prazo apertado gera atalhos, os atalhos geram bugs, os bugs geram mais urgência e o ciclo se repete. Quem lidera aprende a perguntar qual estrutura está produzindo o problema, e não só quem errou.",
    "Técnicas individuais não bastam se o time está mal organizado. A primeira escolha é como você enxerga as pessoas: como recursos que executam tarefas isoladas ou como parceiras com metas negociadas e compartilhadas. Equipes pequenas, multidisciplinares e com autonomia respondem mais rápido, e a diversidade de perfis pesa a favor: times parecidos demais tendem a concordar no papel e errar juntos na prática. Isso não exige abolir a hierarquia. Em momentos de crise, como um incidente em produção, alguém precisa ter a palavra final.",
    "Depois vem o fluxo de trabalho, em três passos. Primeiro, coloque tudo no papel: liste todas as demandas sem se preocupar em organizar, depois agrupe as tarefas grandes em projetos ou épicos. Segundo, aloque pessoas considerando não só as habilidades, mas o tempo disponível de cada uma; se alguns estão sobrecarregados e outros ociosos, capacite ou redistribua. Terceiro, priorize numa pilha única, em que a tarefa de cima é sempre a mais importante. Métodos consagrados ajudam: o GTD, de David Allen, com seus cinco passos (coletar, processar, organizar, revisar e fazer, com a regra de resolver na hora o que leva até dois minutos), e o ciclo PDCA (planejar, fazer, checar e agir), associado a Walter Shewhart e difundido por W. Edwards Deming, que combina bem com retrospectivas de sprint.",
    "A matriz de Eisenhower fecha o pacote. Para cada demanda, duas perguntas: é importante? É urgente? Importante e urgente, como um bug crítico em produção, se faz agora. Importante e não urgente, como pagar dívida técnica, escrever testes, planejar a arquitetura e cuidar das relações do time, se agenda e se protege. Urgente e não importante, como boa parte das interrupções e reuniões sem pauta, se delega ou se recusa com diplomacia. Nem importante nem urgente se elimina. O quadrante que separa times maduros dos apagadores de incêndio é o segundo: quem negligencia o importante hoje o encontra amanhã no quadrante da crise.",
    "Algumas dicas práticas tiradas da matriz: não se orgulhe de estar sempre correndo, porque isso costuma ser sinal de prioridade mal definida; tenha no máximo três grandes objetivos para o trimestre e confira se cada tarefa serve a algum deles; reserve blocos semanais sem reuniões para trabalho de foco; faça as reuniões operacionais curtas e em pé. Teste por uma semana deixar de fazer o que você classificou como nem importante nem urgente e veja se alguém sente falta. Liderar times de tecnologia é, no fim, um exercício contínuo de validar, mostrar, cuidar dos detalhes, agir antes e enxergar o sistema.",
  ],
  sources: [
    {
      label: "5 Técnicas indispensáveis para um líder (e-book) — Na Prática / Fundação Estudar",
      url: "https://www.napratica.org.br/",
    },
    {
      label: "Criando equipes altamente produtivas e Matriz de gestão do tempo (Marcelo Nakagawa) — Endeavor Brasil",
      url: "https://endeavor.org.br/",
    },
    {
      label: "What is customer development? — Eric Ries, Startup Lessons Learned (2008)",
      url: "https://www.startuplessonslearned.com/2008/11/what-is-customer-development.html",
    },
    {
      label: "Service blueprint — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Service_blueprint",
    },
    {
      label: "Service design — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Service_design",
    },
  ],
};

export default artigo;
