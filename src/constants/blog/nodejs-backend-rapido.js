/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo nodejs-backend-rapido).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  illustrationImg: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
  highlights: [
    {
      label: "Event loop",
      description: "O mecanismo que permite ao Node lidar com muitas conexões ao mesmo tempo, sem travar esperando uma terminar.",
    },
    {
      label: "NPM",
      description: "O maior repositório de pacotes de código do mundo, prontos para instalar e usar no seu projeto.",
    },
    {
      label: "APIs",
      description: "O uso mais comum do Node: construir o servidor que recebe pedido do frontend e devolve dado.",
    },
  ],
  body: [
    "O que diferencia o Node.js de outros ambientes de backend é o modelo de execução: em vez de abrir uma nova linha de processamento para cada pedido que chega (o que consome muita memória), o Node usa um único processo, organizado em torno de um event loop — uma fila que vai tratando cada tarefa assim que ela fica pronta, sem ficar parado esperando uma operação lenta (como uma consulta ao banco de dados) terminar antes de atender o próximo pedido.",
    "Isso torna o Node especialmente eficiente para aplicações que lidam com muitas conexões simultâneas fazendo operações de entrada e saída — ler arquivo, consultar banco, chamar outra API — mais do que para tarefas de cálculo pesado, que bloqueiam essa fila única.",
  ],
  quote: "Node não é rápido porque faz uma coisa de cada vez rapidamente. É rápido porque nunca fica parado esperando.",
  bodyContinued: [
    'Na prática, o uso mais comum de Node.js é construir APIs — o servidor que recebe uma requisição do frontend ("me dá a lista de produtos"), busca a informação (geralmente num banco de dados), e devolve a resposta em um formato que o frontend consegue exibir. Frameworks como o Express simplificam esse trabalho, cuidando de rotas e requisições para você focar na lógica do negócio.',
    "Outra vantagem prática, além da performance: como o Node roda JavaScript, o mesmo desenvolvedor que escreve a interface pode escrever o backend, sem trocar de linguagem — o que reduz a curva de aprendizado de quem já vem do frontend e quer entender o outro lado da aplicação.",
  ],
  sources: [
    {
      label: "Node.js — Documentação oficial",
      url: "https://nodejs.org/en/docs",
    },
  ],
};

export default artigo;
