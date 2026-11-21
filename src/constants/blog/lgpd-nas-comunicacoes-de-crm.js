/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo lgpd-nas-comunicacoes-de-crm).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Base legal",
      description:
        "Cada tipo de mensagem precisa de uma justificativa: consentimento, execução de contrato ou legítimo interesse, com regras diferentes.",
    },
    {
      label: "Saída fácil",
      description: "Descadastro em todo envio, central de preferências e uma lista de bloqueio consultada antes de qualquer disparo.",
    },
    {
      label: "Prova e mínimo",
      description: "Guardar onde e quando o contato aceitou, e coletar só os dados de que a comunicação precisa.",
    },
  ],
  body: [
    "A Lei nº 13.709/2018 lista as hipóteses que autorizam o tratamento de dados. Três aparecem o tempo todo no CRM. O consentimento (art. 7º, I) é a manifestação livre, informada e inequívoca do titular para uma finalidade determinada (art. 5º, XII), e pode ser revogado a qualquer momento por procedimento gratuito e facilitado (art. 8º, § 5º). A execução de contrato (art. 7º, V) costuma sustentar as mensagens que fazem parte da compra, como pedido confirmado, nota fiscal emitida e previsão de entrega. E o legítimo interesse (art. 7º, IX) pode sustentar algumas comunicações de relacionamento, desde que se tratem só os dados estritamente necessários e haja transparência (art. 10, §§ 1º e 2º).",
    "O legítimo interesse não é um atalho para dispensar a caixa de seleção. O guia orientativo da ANPD sobre o tema, publicado em fevereiro de 2024, propõe um teste em três fases: finalidade (o interesse é legítimo e ligado a uma situação concreta?), necessidade (há um meio menos invasivo?) e balanceamento com salvaguardas (o envio é razoavelmente esperado pelo titular naquele contexto?). Em um dos exemplos do guia, promoções enviadas a quem já tem relação com a empresa e pode se descadastrar passam no teste. Sem relação prévia e sem informação clara, a conclusão tende a ser a oposta. O legítimo interesse também não vale para dados sensíveis.",
  ],
  quote:
    "Cadastro e descadastro têm que ser verdade: se a pessoa disse sim, você consegue mostrar onde; se disse não, nenhuma automação volta a falar com ela.",
  bodyContinued: [
    "Separar transacional de promocional é o primeiro passo prático. Na Rede Construir+, a confirmação do pedido vai por WhatsApp em uma mensagem curta e objetiva, e o e-mail leva a nota fiscal e os detalhes da compra, servindo também de registro. Ofertas e novidades só vão para quem aceitou recebê-las. A política da Meta para o WhatsApp exige opt-in antes da primeira mensagem, com o nome da empresa e a indicação clara de que a pessoa aceita receber comunicações dela, e recomenda opt-ins separados por tipo de mensagem. A própria plataforma divide os modelos em marketing, utilidade e autenticação, e desde 1º de julho de 2025 cobra por mensagem entregue, com preço diferente por categoria. Classificar errado uma oferta como utilidade é problema de conformidade e de custo.",
    "A saída precisa ser tão fácil quanto a entrada. Todo e-mail promocional leva um link de descadastro que funciona, e todo SMS ou WhatsApp automático explica como parar, por exemplo respondendo SAIR. Uma central de preferências permite escolher o que receber (só conteúdos técnicos, só ofertas, só uma marca) em vez de sair de tudo. Por trás disso fica a lista de bloqueio: e-mails e telefones que não podem receber nada, consultada antes de cada envio, incluindo pedidos de eliminação que chegam pelo encarregado ou pelo jurídico com base no art. 18 da LGPD. Um bloqueio urgente pode ser feito à mão no mesmo dia, mas o processo definitivo deve ser automático, para que nenhuma lista importada reative quem saiu.",
    "Minimização é a regra da necessidade (art. 6º, III) aplicada ao formulário. Uma landing page de captação precisa de nome e um contato; CPF só faz sentido no orçamento ou na compra. Também vale para grupos com várias marcas: o contato que aceitou ofertas de uma marca não aceitou, só por isso, as de outra, porque a finalidade informada foi aquela (art. 6º, I). Formulários com caixa de aceite não devem liberar o envio sem a marcação, e todo formulário, e-mail e página precisa de um link visível para a política de privacidade.",
    "Por fim, registro. O art. 37 exige que controlador e operador mantenham registro das operações de tratamento, em especial quando a base é o legítimo interesse, e o art. 6º, X, pede que a empresa consiga demonstrar as medidas que adota. No CRM, isso significa guardar com cada contato a origem (qual formulário ou loja), a data e a hora do aceite, o texto exibido e a versão da política vigente, além da data e do canal de cada descadastro. Com esse histórico, responder a um titular ou à ANPD vira uma consulta, não uma investigação.",
  ],
  sources: [
    {
      label: "Lei nº 13.709/2018 (LGPD), texto integral — gov.br",
      url: "https://www.gov.br/governodigital/pt-br/identidade/identificacao-do-cidadao-e-carteira-de-identidade-nacional/camara-executiva-federal-de-identificacao-do-cidadao-cefic/L13709.pdf",
    },
    {
      label: "ANPD — Guia orientativo: hipóteses legais de tratamento, legítimo interesse (v1.0, fev. 2024)",
      url: "https://tce.pb.gov.br/wp-content/uploads/2025/03/guia_legitimo_interesse.pdf",
    },
    {
      label: "ANPD — Glossário: legítima expectativa e legítimo interesse",
      url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/glossario-anpd/l",
    },
    {
      label: "Meta for Developers — Get opt-in for WhatsApp",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in",
    },
    {
      label: "Meta for Developers — Pricing on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    },
  ],
};

export default artigo;
