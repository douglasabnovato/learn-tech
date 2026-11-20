/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo chatbot-e-whatsapp-no-atendimento-do-varejo).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Coletar e encaminhar",
      description: "O bot pergunta o mínimo (nome, CEP, telefone), cria o lead no CRM e entrega o cliente à loja mais próxima.",
    },
    {
      label: "Humano na hora certa",
      description: "Transbordo para atendente quando o assunto é complexo, e só se houver alguém disponível.",
    },
    {
      label: "Custo por mensagem",
      description: "Desde julho de 2025 a Meta cobra por mensagem entregue; o desenho do fluxo mexe no orçamento.",
    },
  ],
  body: [
    "O WhatsApp é o canal dominante das conversas comerciais no Brasil. Na base da RD Station Conversas, o aplicativo concentrou 97% das mensagens enviadas pelas empresas em 2025, e os usos mais citados por 1.351 respondentes foram atendimento comercial e fechamento de vendas (47%), pós-venda (37%) e captação de leads (35%). Robô também já é rotina: no Panorama Mobile Time/Opinion Box de agosto de 2022, com 2.073 entrevistados, 90% dos usuários de WhatsApp já tinham conversado com bots de atendimento, mas a nota média dada a eles foi 3,2 numa escala de 1 a 5. Todo mundo usa, pouca gente elogia.",
    "Pense na Rede Construir+, uma rede fictícia de franquias de acabamento. O objetivo do bot cabe numa frase: colocar o cliente em contato com o franqueado certo em três, dois, um. Para isso o fluxo faz triagem (orçamento, dúvida, pós-venda), coleta nome, CEP e telefone, consulta uma API interna que devolve a loja mais próxima pelo CEP, cria o lead no CRM e entrega ao cliente um link wa.me com o número do consultor e uma mensagem pronta. Ao mesmo tempo, o consultor recebe um aviso com os dados do cliente.",
  ],
  quote:
    "Um bom bot é medido pelo tempo que o cliente leva para chegar à pessoa certa, não pelo tempo que ele passa conversando com o robô.",
  bodyContinued: [
    "Uma proposta de melhoria de bot costuma ter a mesma estrutura: cenário atual, ajustes solicitados, definição técnica, considerações, papéis e responsabilidades, estimativa de horas por tipo de tarefa (arquitetura, desenvolvimento, testes, deploy) e termos comerciais. Os ajustes típicos dizem muito sobre boas práticas: trocar menus numerados por botões, criar um diálogo de confirmação para perguntas de sim ou não, deixar claro o que é obrigatório (nome, CEP, telefone) e o que é opcional (e-mail), perguntar se o cliente quer usar o número de onde está falando ou informar outro, e verificar duplicidade antes de criar o lead: se já existe cadastro com o mesmo nome, e-mail, CEP ou telefone, o bot mostra os dados e pergunta se deve atualizar.",
    "Leia com atenção as considerações e os termos. O fornecedor depende de você para os textos das mensagens, para a API que busca a loja e para o alinhamento interno: se as lojas não responderem pelo canal combinado, o lead se perde mesmo com o bot perfeito. Os termos definem o que está fora do escopo, como funciona o cancelamento, quem homologa em ambiente de testes (sandbox) e em que prazo, e o que acontece depois do deploy. Mudança pedida depois da aprovação vira nova demanda, com nova estimativa.",
    "Humano entra quando o assunto pede julgamento: negociação, reclamação, pedido fora do padrão. Plataformas como Blip e Zenvia oferecem o transbordo do bot para uma fila de atendentes. A documentação da Blip recomenda checar se há atendente online antes de transferir, porque, se ninguém estiver disponível, o bot para de responder e o cliente fica falando sozinho. Fora do horário, o fluxo deve dizer quando haverá retorno e já deixar o lead registrado.",
    "Dinheiro também é desenho de fluxo. Desde 1º de julho de 2025, a plataforma de negócios do WhatsApp cobra por mensagem entregue, com preços por categoria (marketing, utilidade, autenticação e serviço) e por país. Segundo a documentação da Meta, cada número tem 1.000 mensagens de serviço gratuitas por mês, e a partir de 1º de outubro de 2026 as mensagens de utilidade dentro da janela de 24 horas passaram a ser cobradas. Conversas iniciadas por anúncios de clique para o WhatsApp abrem uma janela gratuita de até 7 dias. Disparo de oferta em massa, portanto, custa; responder bem quem chegou sozinho custa bem menos.",
    "As métricas que valem acompanhar: taxa de conclusão do fluxo, abandono por etapa, leads criados e duplicados evitados, tempo até o primeiro contato humano, taxa de resposta das lojas, conversão em orçamento e satisfação ao fim da conversa. Se o abandono se concentra numa pergunta, o problema é a pergunta, não o cliente.",
  ],
  sources: [
    {
      label: "Pricing on the WhatsApp Business Platform — Meta for Developers",
      url: "https://developers.facebook.com/docs/whatsapp/pricing",
    },
    {
      label: "Cenário das Conversas e Atendimento em 2025 — RD Station",
      url: "https://www.rdstation.com/pesquisas/panorama-marketing-vendas/edicao-2026/conversas/cenario-2025/",
    },
    {
      label: "Nove em cada dez usuários de WhatsApp já conversaram com robôs de atendimento — Mercado&Consumo (set/2022)",
      url: "https://mercadoeconsumo.com.br/12/09/2022/inovacao/nove-em-cada-dez-usuarios-de-whatsapp-ja-conversaram-com-robos-de-atendimento/",
    },
    {
      label: "Verificar se existe atendente disponível no Builder — Blip Help",
      url: "https://hmg-help.blip.ai/docs/en/builder/verificar-se-existe-atendente-disponível-no-builder",
    },
    {
      label: "Visão geral do Blip Desk — Blip Help",
      url: "https://hmg-help.blip.ai/docs/en/helpdesk/blipdesk/visao-geral-desk",
    },
  ],
};

export default artigo;
