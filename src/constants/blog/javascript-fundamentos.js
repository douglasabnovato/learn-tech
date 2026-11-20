/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo javascript-fundamentos).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  illustrationImg: "https://cdn.pixabay.com/photo/2016/11/23/15/48/code-1853305_1280.jpg",
  highlights: [
    {
      label: "Variáveis e tipos",
      description: "Como o JavaScript guarda e diferencia informação — texto, número, verdadeiro/falso.",
    },
    {
      label: "Funções",
      description: "O bloco reutilizável que recebe entrada, processa, e devolve resultado.",
    },
    {
      label: "DOM e eventos",
      description: "Como o código enxerga a página e reage ao clique, ao digitar, ao rolar.",
    },
  ],
  body: [
    "Todo iniciante em JavaScript passa pelo mesmo momento de confusão: a sintaxe parece simples, mas o raciocínio por trás dela não é intuitivo até que alguns conceitos se encaixem. O primeiro deles é entender que JavaScript é uma linguagem que executa instrução por instrução, de cima para baixo — e que cada variável é uma caixa com nome, guardando um valor que pode mudar ao longo do tempo.",
    "O segundo salto de entendimento vem com funções. Uma função é, na prática, uma receita: você define os ingredientes que ela espera receber (os parâmetros), o que ela faz com eles, e o que ela devolve no final. Uma vez que isso fica claro, código deixa de ser uma sequência solta de comandos e passa a ser um conjunto de blocos organizados, cada um com uma responsabilidade.",
  ],
  quote: "Você não aprende JavaScript decorando sintaxe. Aprende quando entende o que cada linha está pedindo para o navegador fazer.",
  bodyContinued: [
    "É só depois desses dois fundamentos que a manipulação do DOM (Document Object Model) faz sentido de verdade. O DOM é a representação da sua página que o JavaScript consegue enxergar e alterar — é por isso que um clique num botão consegue mudar o texto de um parágrafo, sem a página inteira recarregar. Sem entender variável e função antes, o DOM parece mágica. Com esses dois fundamentos, ele é só mais uma ferramenta com um propósito claro.",
    "O caminho mais eficiente não é tentar aprender tudo de uma vez — é praticar cada conceito isoladamente, num arquivo pequeno, antes de juntar tudo num projeto real. É exatamente essa progressão que o nosso módulo de JavaScript segue: primeiro a lógica, depois o DOM, só então a interatividade completa.",
  ],
  sources: [
    {
      label: "MDN Web Docs — JavaScript",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      label:
        "Library of Congress (Sustainability of Digital Formats): ECMAScript Language (ECMA-262), including JavaScript (atualizado em 28/10/2019)",
      url: "https://loc.gov/preservation/digital/formats/fdd/fdd000443.shtml",
    },
  ],
};

export default artigo;
