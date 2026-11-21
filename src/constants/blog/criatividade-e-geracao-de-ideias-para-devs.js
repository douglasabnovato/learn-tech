/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo criatividade-e-geracao-de-ideias-para-devs).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Criatividade x inovação",
      description: "Criar é gerar ideias novas; inovar é levar uma delas até gerar valor real para alguém.",
    },
    {
      label: "Problema vira pergunta",
      description: '"Como poderíamos...?" abre espaço para várias respostas em vez de uma só.',
    },
    {
      label: "Método, não musa",
      description: "Regras de brainstorming, SCAMPER e Crazy 8s produzem ideias com hora marcada.",
    },
  ],
  body: [
    "Criatividade é a capacidade de gerar ideias novas e úteis. Inovação é o que acontece quando uma dessas ideias é implementada, testada e passa a gerar valor: um usuário que resolve o problema dele, um custo que cai, um processo que fica mais rápido. Dá para ser muito criativo sem inovar nada (a gaveta cheia de ideias nunca testadas) e dá para inovar com uma ideia simples, bem executada. Para quem é dev, a lição é dupla: gerar opções é metade do trabalho, e a outra metade é escolher, prototipar e medir.",
    'A rotina é o maior inimigo das ideias porque ela é eficiente. Repetir o mesmo caminho economiza energia, e o cérebro aprende a pular direto para a solução conhecida: mais um campo no formulário, mais um filtro na tela, mais uma notificação. Por isso os problemas são o melhor combustível da criatividade, desde que sejam tratados como perguntas e não como reclamações. O método How Might We, documentado pelo IDEO.org no Design Kit, propõe reescrever cada percepção sobre o usuário como uma pergunta que começa com "Como poderíamos...". A pergunta precisa permitir várias soluções: estreita demais, ela já traz a resposta; ampla demais, ninguém sabe por onde começar.',
  ],
  quote: "A primeira ideia quase nunca é a melhor; ela só é a mais próxima. Método de criatividade serve para obrigar você a passar dela.",
  bodyContinued: [
    'Primeiro método: brainstorming com regras. O IDEO.org lista sete: adiar o julgamento, encorajar ideias malucas, construir sobre a ideia do outro (usando "e" em vez de "mas"), manter o foco no tema, uma conversa de cada vez, ser visual com post-its e rascunhos e buscar quantidade. Segundo o próprio Design Kit, uma boa sessão pode chegar a cerca de 100 ideias em 60 minutos. Para times de tecnologia, a regra mais difícil costuma ser a primeira: a vontade de dizer "isso não escala" aparece cedo. Deixe a avaliação para depois.',
    "Segundo método: SCAMPER. É uma lista de perguntas para mexer em algo que já existe, organizada por Bob Eberle a partir de perguntas de Alex Osborn, o criador do brainstorming. Cada letra é um verbo: Substituir, Combinar, Adaptar, Modificar (aumentar ou diminuir), Propor outro uso, Eliminar e Reorganizar. Funciona muito bem com funcionalidades existentes: o que acontece se eu eliminar esta etapa do cadastro? E se eu combinar a busca com o histórico de pedidos?",
    "Terceiro método: Crazy 8s, do kit de Design Sprint do Google. Cada pessoa dobra uma folha em oito partes, liga um cronômetro de oito minutos e desenha uma ideia diferente em cada quadro. O objetivo é passar da primeira ideia e calar o crítico interno; desenhar mal não é problema, porque o rascunho só precisa ser entendido pelo time na hora de compartilhar e votar.",
    "Exercício para fazer hoje. Problema de produto: muitos usuários abandonam um app de agendamento de consultas antes de confirmar o horário. Reescreva como pergunta: como poderíamos fazer a pessoa confirmar o agendamento em menos passos, sem perder informações importantes? Rode 15 minutos de brainstorming com as regras acima, aplique o SCAMPER sobre o fluxo atual (eliminar o login obrigatório, combinar escolha de horário e confirmação numa tela, substituir o formulário por dados já salvos) e feche com um Crazy 8s para desenhar as telas. Escolha duas ideias, prototipe e meça a taxa de confirmação. É aí que criatividade começa a virar inovação.",
  ],
  sources: [
    {
      label: "Brainstorm Rules — IDEO.org Design Kit",
      url: "https://www.designkit.org/methods/brainstorm-rules.html",
    },
    {
      label: "How Might We — IDEO.org Design Kit",
      url: "https://designkit.org/methods/3.html",
    },
    {
      label: "Crazy 8's — Design Sprint Kit (Google)",
      url: "https://conference-pages-dot-designsprintkit.appspot.com/methods/sketch/crazy-8s",
    },
    {
      label: "Learn How to Use the Best Ideation Methods: SCAMPER — Interaction Design Foundation",
      url: "https://ixdf.org/literature/article/learn-how-to-use-the-best-ideation-methods-scamper",
    },
  ],
};

export default artigo;
