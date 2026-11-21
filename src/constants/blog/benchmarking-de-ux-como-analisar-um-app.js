/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo benchmarking-de-ux-como-analisar-um-app).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Escolha com critério",
      description: "De dois a quatro concorrentes diretos, mais uma ou duas referências de fora do setor que resolvem uma tarefa parecida.",
    },
    {
      label: "Tarefas, não impressões",
      description: "Fazer um pedido, encontrar um produto, pagar: cada app é avaliado pela mesma tarefa, passo a passo.",
    },
    {
      label: "Da tabela à decisão",
      description:
        "Os atritos registrados viram uma comparação lado a lado e, no fim, uma lista curta do que o seu produto vai fazer diferente.",
    },
  ],
  body: [
    "Comece pelo objetivo. Um benchmarking sem pergunta vira uma coleção de prints. Defina o que você quer descobrir: como os apps resolvem a busca, como conduzem o pagamento, como mostram o andamento de um pedido. A Nielsen Norman Group recomenda começar olhando vários candidatos e depois reduzir a lista para algo entre dois e quatro produtos, priorizando os que têm funções parecidas com a sua, os que têm boa experiência e os que o seu público costuma comparar com você.",
    "Inclua também referências fora do setor. A pergunta certa é: com o que o usuário compara a minha solução? Se você vai criar um app de entrega para uma farmácia de bairro, iFood e Mercado Livre são referências óbvias para catálogo, carrinho e entrega. Mas o acompanhamento em tempo real do Uber, com o mapa e a previsão de chegada do motorista, ensina muito sobre manter a pessoa informada enquanto ela espera. E o Airbnb é um bom estudo de como apresentar opções com fotos, filtros e avaliações antes de uma decisão de compra mais pensada.",
    'Depois, escreva as tarefas. Elas devem ser representativas do que o usuário realmente faz e iguais para todos os apps: encontrar um produto específico, montar um pedido com dois itens, alterar o endereço de entrega, chegar à tela de pagamento, cancelar algo. Escreva cada tarefa como uma frase com começo e fim claros, por exemplo "encontrar um analgésico, adicionar ao carrinho e chegar à confirmação do pedido sem finalizar a compra". Inclua pelo menos uma tarefa em que os apps seguem caminhos diferentes, porque é ali que aparecem as comparações mais úteis.',
    "Agora percorra e registre. Para cada app e cada tarefa, anote o número de passos, faça um print das telas decisivas e marque cada atrito: um botão que não parece clicável, um custo que só aparece no fim, um campo que pede a mesma informação duas vezes, uma mensagem de erro que não diz o que fazer. Faça isso no celular, como o usuário faria, e com uma conta nova sempre que possível, para enxergar o caminho de quem chega pela primeira vez.",
  ],
  quote:
    "Benchmarking não serve para descobrir quem venceu. Serve para entender por que uma solução funciona e se ela faz sentido no seu contexto.",
  bodyContinued: [
    "Para não comparar por gosto pessoal, use uma lente. As dez heurísticas de usabilidade de Jakob Nielsen funcionam bem aqui: visibilidade do status do sistema, correspondência com o mundo real, controle e liberdade do usuário, consistência e padrões, prevenção de erros, reconhecimento em vez de memorização, flexibilidade e eficiência, design estético e minimalista, ajuda para reconhecer e corrigir erros, e ajuda e documentação. Cada atrito registrado ganha a heurística que ele fere. Um pedido sem confirmação clara de que foi enviado fere a visibilidade do status; um checkout que apaga o carrinho ao voltar uma tela fere o controle do usuário.",
    "Organize tudo numa tabela. Nas linhas, as tarefas; nas colunas, os apps. Em cada célula, o número de passos, os principais atritos e a heurística ligada a cada um. Uma última coluna registra a ideia que vale levar para o seu produto. Para tarefas de carrinho e pagamento, as pesquisas do Baymard Institute ajudam a calibrar o olhar: em testes de usabilidade, o instituto observa que o desenho e o fluxo do checkout muitas vezes são, sozinhos, o motivo de a pessoa desistir da compra, por exemplo quando ela não entende como preencher um campo.",
    "Por fim, transforme a tabela em decisões. Separe três listas: o que é padrão de mercado e o seu app precisa ter, porque o usuário já espera; o que os concorrentes fazem mal e é uma oportunidade; e o que funciona para eles mas não serve para o seu público. A Interaction Design Foundation dá um exemplo do terceiro caso: o menu hambúrguer se espalhou porque grandes apps o usavam, e testes A/B posteriores mostraram problemas de usabilidade em comparação com barras de abas e outras navegações. Padrão popular ainda precisa ser testado.",
    "Lembre que essa análise é uma revisão feita por você, não um teste com usuários. Ela levanta hipóteses rápidas e baratas; a confirmação vem quando pessoas reais tentam as mesmas tarefas. O programa 201, Fundamentos de UX/UI: do Problema do Usuário ao Wireframe Testado, mostra como levar essas decisões para o wireframe, e o 204, UX Research: Métodos de Pesquisa para Validar Ideias, aprofunda o teste de usabilidade. Para acompanhar se as mudanças funcionaram depois do lançamento, o 504, Métricas de Produto: North Star, OMTM e Retenção, ajuda a escolher o que medir.",
  ],
  sources: [
    {
      label: "Competitive Usability Evaluations — Nielsen Norman Group (Tim Neusesser, janeiro de 2024)",
      url: "https://www.nngroup.com/articles/competitive-usability-evaluations/",
    },
    {
      label: "10 Usability Heuristics for User Interface Design — Nielsen Norman Group (Jakob Nielsen, revisado em janeiro de 2024)",
      url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
    },
    {
      label: "Why You Should Analyze Your Competition to Design Better Solutions and How to Do It — Interaction Design Foundation",
      url: "https://ixdf.org/literature/article/why-you-should-analyze-your-competition-to-design-better-solutions-and-how-to-do-it",
    },
    {
      label: "Cart & Checkout Usability Research — Baymard Institute",
      url: "https://baymard.com/research/checkout-usability",
    },
  ],
};

export default artigo;
