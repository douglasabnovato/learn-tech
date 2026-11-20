/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo copy-e-ux-writing-para-devs).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Microcopy",
      description: "Botões, erros e estados vazios dizem o que acontece e o que fazer em seguida.",
    },
    {
      label: "Tom de voz",
      description: "A voz do produto é fixa; o tom muda conforme o momento de quem lê.",
    },
    {
      label: "Acessibilidade",
      description: "Rótulo visível, texto alternativo e linguagem simples beneficiam todo mundo.",
    },
  ],
  body: [
    'Copywriting é o texto feito para convencer: chamar atenção, apresentar um benefício e levar a uma ação, como se inscrever ou comprar. Aparece em anúncios, landing pages e campanhas de e-mail. UX writing é o texto que ajuda a pessoa a usar o produto: rótulos, instruções, mensagens do sistema e confirmações. O primeiro trabalha a decisão; o segundo, a tarefa. As fronteiras se cruzam, porque o botão de uma landing page é copy e microcopy ao mesmo tempo. O que muda é a pergunta que guia a escrita: no copy, "por que alguém faria isso?"; no UX writing, "o que essa pessoa precisa saber agora para seguir?".',
    'Botões. O rótulo diz o que acontece ao clicar, com um verbo e, se ajudar, o objeto: "Salvar alterações", "Enviar inscrição", "Baixar boleto". Rótulos genéricos como "OK" ou "Clique aqui" obrigam a pessoa a ler o resto da tela para entender. Em diálogos de confirmação, repita a ação nos botões ("Excluir projeto" e "Manter projeto") em vez de "Sim" e "Não". Links seguem a mesma regra: o texto precisa fazer sentido sozinho, porque leitores de tela costumam listar os links fora do contexto.',
    'Mensagens de erro. A Nielsen Norman Group organiza as boas práticas em três frentes. Visibilidade: a mensagem aparece perto do campo com problema e não depende só da cor vermelha; um ícone e um texto reforçam o aviso. Comunicação: linguagem simples, sem código técnico, descrevendo o problema com precisão, indicando a correção e sem culpar a pessoa. Eficiência: preservar o que já foi digitado e, quando possível, sugerir a correção mais provável. Compare "Dados inválidos" com "Informe o CEP com 8 números, sem traço". A segunda diz o que houve e como resolver.',
    'Estados vazios. A tela sem dados, como a lista de pedidos de quem ainda não comprou ou a busca sem resultado, é muito vista e pouco escrita. Em vez de "Nenhum registro encontrado", explique o que deveria aparecer ali e ofereça o próximo passo: "Você ainda não criou nenhum projeto. Crie o primeiro para acompanhar os prazos aqui", com o botão "Criar projeto". Numa busca vazia, sugira revisar a grafia ou limpar os filtros.',
  ],
  quote: "Se a pessoa precisa adivinhar o que o botão faz, o problema não está nela, está no texto.",
  bodyContinued: [
    'Landing page. A estrutura mínima tem três partes. O título diz qual é a oferta na linguagem do público, não na do time interno. O benefício explica o que muda para quem aceita, com algo concreto ("receba as vagas da semana toda segunda-feira") em vez de adjetivos. A chamada para ação repete a promessa no botão ("Quero receber as vagas") e volta a aparecer em páginas longas. No formulário, peça só o necessário e diga para que cada dado será usado, o que também conversa com a LGPD.',
    "E-mail. O assunto e o texto de pré-visualização funcionam como título e subtítulo: dizem do que se trata antes de a mensagem ser aberta. E-mails transacionais, como confirmação de cadastro ou redefinição de senha, pedem clareza acima de tudo, com a ação principal num botão e o mesmo destino num link em texto. Escreva para funcionar também sem imagens: se todo o conteúdo está numa arte, quem não a carrega não recebe nada.",
    "Tom de voz. O guia de conteúdo da Mailchimp, aberto ao público, separa a voz, a personalidade que se mantém, do tom, que muda conforme o estado de quem lê. Uma mensagem de boas-vindas pode ser leve; o aviso de um pagamento recusado pede objetividade e nenhuma piada. Registre a voz do seu produto em três ou quatro características, com exemplos do que fazer e do que evitar, e consulte essa lista ao escrever mensagens novas.",
    "Acessibilidade. Todo campo de formulário precisa de rótulo visível, e não só de placeholder, que some quando a pessoa começa a digitar. Imagens que informam levam texto alternativo que descreve o conteúdo ou a função; imagens decorativas, alt vazio. Linguagem simples significa frases curtas, palavras do dia a dia, a informação mais importante primeiro e siglas explicadas na primeira vez em que aparecem. No Brasil, o serviço público tem orientações próprias sobre o assunto, como as do portal gov.br para quem escreve a página de um serviço.",
    "Como testar texto. Leia em voz alta: a frase que trava na leitura trava na tela. Mostre a tela por alguns segundos a alguém de fora do projeto e pergunte o que essa pessoa faria em seguida. Em testes de usabilidade, observe onde as pessoas hesitam ou releem e anote as palavras que usam para descrever a tarefa, que costumam ser melhores que as do time. Com tráfego suficiente, um teste A/B compara duas versões de um título ou botão. E provoque cada erro de propósito para revisar as mensagens.",
    "O programa Fundamentos de UX/UI: do Problema do Usuário ao Wireframe Testado trabalha heurísticas, fluxos e teste com usuário, em que o texto da tela é avaliado junto com o layout. Desenvolver uma Landing Page Moderna leva a estrutura semântica até a página publicada, e E-mail HTML e Landing Pages Integradas ao CRM trata de e-mails que funcionam nos principais clientes, personalização com dados e formulários ligados ao CRM.",
  ],
  sources: [
    {
      label: "Error-Message Guidelines — Nielsen Norman Group",
      url: "https://www.nngroup.com/articles/error-message-guidelines/",
    },
    {
      label: "Voice and Tone — Mailchimp Content Style Guide",
      url: "https://styleguide.mailchimp.com/voice-and-tone/",
    },
    {
      label: "Writing for Accessibility — Mailchimp Content Style Guide",
      url: "https://styleguide.mailchimp.com/writing-for-accessibility/",
    },
    {
      label: "Escrevendo para o seu usuário — Guia de Edição de Serviços do gov.br",
      url: "https://www.gov.br/pt-br/guia-de-edicao-de-servicos-do-gov.br/escrevendo-para-o-seu-usuario",
    },
  ],
};

export default artigo;
