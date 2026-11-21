/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo encarte-digital-e-tabloide-por-praca).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Uma versão por praça",
      description: "Mesmo layout, preços e limites de cada estado, com nome de arquivo padronizado e validade clara.",
    },
    {
      label: "Preço que respeita a lei",
      description: "Preço à vista em destaque, parcelamento com total e juros, e o mesmo item com o mesmo preço dentro de cada versão.",
    },
    {
      label: "Jornada, não anexo",
      description: "Landing page com escolha do estado, entrega por e-mail, lembrete por WhatsApp e medição por praça.",
    },
  ],
  body: [
    "Por que regionalizar? Frete, tributos e condições comerciais variam por estado, e a tabela de preços das lojas acompanha essa variação. Um encarte nacional único obriga a escolher entre o preço mais alto (e perder competitividade) ou o mais baixo (e criar uma oferta que algumas lojas não conseguem honrar). A saída é uma base de ofertas com uma linha por item e por praça, da qual saem automaticamente as versões do mês: uma por estado, com o mesmo layout. Um padrão de nome como tabloide-mes-ano-UF evita o clássico arquivo final-final-2 circulando no grupo de WhatsApp.",
    'A anatomia de uma página ajuda a revisar. No topo, o tema do mês (por exemplo, um festival de acabamentos) e a validade. Depois, blocos por categoria (pisos, metais, louças) ou por ambiente (sala, cozinha, banheiro, área externa). Cada quadro de produto traz o nome técnico (formato, acabamento, cor), o "de/por", o percentual de desconto, a unidade de venda (metro quadrado ou peça), o código do item e o limite de quantidade. Exemplo fictício: porcelanato 90x90 cm acetinado, de R$ 120,00 por R$ 79,90 o m², limite de 500 m² por cliente. No rodapé, "imagens ilustrativas", o convite para a loja mais próxima e o endereço do site.',
  ],
  quote: "Encarte regional errado não é só um erro de design: é uma oferta pública que alguém vai querer cobrar no balcão.",
  bodyContinued: [
    "Regra de preço é requisito, não detalhe. O Decreto 5.903/2006, que regulamenta a Lei 10.962/2004, exige que o preço seja informado com correção, clareza, precisão, ostensividade e legibilidade. Exige também o total à vista e, quando houver parcelamento, o valor total, o número e o valor das parcelas, os juros e os encargos. O decreto trata como infração atribuir preços distintos ao mesmo item, e a Lei 13.543/2017 acrescentou regras para a divulgação de preço no comércio eletrônico. Na prática, cada versão regional precisa ser coerente por dentro, deixar claro a qual praça e a qual período se refere, e combinar com o preço que a loja daquela praça vai cobrar.",
    "Do PDF à revista digital, o formato pesa. Defina um tamanho máximo de arquivo (5 MB, por exemplo) e ajuste a resolução das imagens e o número de páginas para cabê-lo; PDF pesado não abre no celular de quem está na obra. Publique numa landing page que pergunta o estado e entrega a versão certa, em PDF ou como página folheável. Na automação, uma ferramenta como o Journey Builder, do Salesforce Marketing Cloud, recebe o contato pela fonte de entrada (o formulário ou uma base), envia o e-mail com conteúdo dinâmico por estado, espera alguns dias e decide o próximo passo: quem não abriu recebe um lembrete por outro canal, quem clicou entra na régua de orçamento.",
    'Há também a versão interna. Uma edição de análise, com código, limite e desconto de cada item, serve para as lojas planejarem estoque e para o time de CRM reativar clientes com orçamentos em aberto que contêm itens do tabloide. Para que as lojas usem o material, prepare uma régua de lançamento para a rede: novidade na primeira semana, o que é e quais as vantagens na segunda, uma provocação na terceira ("sua equipe já está usando o tabloide com os clientes?"), live com franqueados e vendedores na quarta e um lembrete de urgência quando o material entra no segundo mês.',
    "Por fim, controle as peças. Uma planilha simples, com atualização datada, guarda as versões, as artes de última hora, os testes de e-mail e até os brindes de campanha (tamanhos, quantidades e regra de quem pode pedir, com respostas padrão para as solicitações). Meça por praça: acessos à landing page, contatos captados, orçamentos com itens do encarte e vendas atribuídas, lembrando que a atribuição só é confiável se a origem for registrada corretamente na loja. Para quem quer entrar em marketing de varejo, montar um encarte regional de três estados, com base de dados, checklist legal e jornada de envio, é um projeto de portfólio que mostra muito mais do que saber diagramar.",
  ],
  sources: [
    {
      label: "Decreto 5.903/2006: oferta e afixação de preço de produto ou serviço — Procon Goiás",
      url: "https://goias.gov.br/procon/decreto-5-903-20-09-06-oferta-e-afixacao-de-preco-de-produto-ou-servico/",
    },
    {
      label: "Lei nº 10.962, de 11 de outubro de 2004 — Câmara dos Deputados",
      url: "https://www2.camara.leg.br/legin/fed/lei/2004/lei-10962-11-outubro-2004-534307-norma-pl.html",
    },
    {
      label: "Get Started with Journey Builder — Trailhead (Salesforce)",
      url: "https://trailhead.salesforce.com/content/learn/modules/journey-builder-basics/get-started-with-journey-builder",
    },
  ],
};

export default artigo;
