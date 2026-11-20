/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo cashback-e-ltv-no-varejo-quando-o-desconto-paga-a-recompra).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Crédito que pede volta",
      description:
        "No varejo, o cashback costuma virar saldo para a próxima compra. É isso que o transforma em mecânica de recompra, e não em desconto imediato.",
    },
    {
      label: "LTV com margem",
      description:
        "O valor do cliente no tempo se calcula com margem, não com faturamento, e é a régua para saber quanto vale pagar para ele voltar.",
    },
    {
      label: "Coorte e controle",
      description:
        "Só a comparação entre quem recebeu o benefício e um grupo que não recebeu mostra a recompra incremental, que é a única que paga o custo.",
    },
  ],
  body: [
    "Cashback vem do inglês e quer dizer dinheiro de volta. Um artigo da comunidade do Sebrae/PR descreve a mecânica no varejo: a loja define um percentual, que pode ir de uma pequena parcela, como 0,5%, até 10% ou mais, e o valor fica como crédito numa carteira digital para compras futuras ou é depositado em conta. O mesmo texto trata o cashback como um programa de fidelidade evoluído e lembra o efeito que interessa ao CRM: para usar o retorno, o cliente precisa fazer uma nova compra. Por isso, quando o saldo só vale na própria loja, o cashback deixa de ser desconto e vira um convite com prazo para voltar. Cashback de cartão de crédito ou de aplicativo intermediário segue outra lógica, porque o crédito pode ser gasto em qualquer lugar.",
    "Para saber se esse convite compensa, entra o LTV, sigla de lifetime value, ou valor do cliente no tempo. A Wikipédia o define como uma estimativa do lucro líquido que um cliente gera ao longo de todo o relacionamento com a empresa. Um guia da Coursera (atualizado em agosto de 2024) mostra a versão mais simples: ticket médio vezes frequência de compra vezes tempo de permanência como cliente, e separa o LTV histórico, que soma o que o cliente já gastou, do preditivo, que estima o que ele ainda vai gastar. Quando margem e retenção são estáveis, a fórmula clássica é margem por período vezes taxa de retenção, dividido por (1 + taxa de desconto − taxa de retenção). Exemplo fictício: margem anual de R$ 120 por cliente, retenção de 60% ao ano e taxa de desconto de 10% dão LTV de R$ 144. Repare que o cálculo usa margem, e não faturamento: devolver 5% de uma venda com 30% de margem custa um sexto do lucro daquela compra.",
  ],
  quote:
    "Cashback bom não é o que mais gente resgata. É o que traz de volta quem não voltaria sem ele, por um custo menor que a margem dessa volta.",
  bodyContinued: [
    "O passo seguinte é desenhar o funil por etapa, porque cada uma tem um ponto de perda diferente. Na Rede Construir+, ele fica assim: primeira compra; cadastro no programa, com consentimento para receber mensagens; crédito gerado e avisado; lembrete de saldo antes do vencimento; volta à loja ou ao site; resgate; segunda compra; terceira compra. Se muita gente compra e pouca se cadastra, o problema está no caixa ou no formulário. Se o crédito é gerado e ninguém abre o aviso, está na régua. Se o cliente volta e não resgata, a regra pode estar confusa, como valor mínimo de compra alto ou saldo que só vale em parte dos produtos. Medir a conversão de cada passagem mostra onde mexer antes de aumentar o percentual, que é sempre a alavanca mais cara.",
    "Para medir se o cashback se paga, trabalhe com coortes. A ajuda do Google Analytics 4 define coorte como um grupo de usuários que compartilham uma característica, como a mesma data de aquisição, e a exploração de coorte permite acompanhar o retorno desse grupo por dia, semana ou mês, com cálculo padrão, contínuo ou cumulativo. No CRM, a lógica é a mesma: agrupe os clientes pelo mês da primeira compra e acompanhe quantos voltaram em 30, 60, 90 e 180 dias e quanto deixaram de margem. A peça que falta é o grupo de controle: uma parte sorteada da coorte, que não recebe o benefício. Sem ele, toda recompra parece mérito do cashback, inclusive a do cliente que voltaria de qualquer jeito.",
    "Um exemplo fictício mostra a conta. Duas coortes de mil clientes, com ticket médio de R$ 200 e margem de 30% (R$ 60 por compra). O grupo de controle teve 200 recompras em seis meses; o grupo com cashback de 5% teve 280. A margem das recompras foi de R$ 12 mil no controle e de R$ 16,8 mil no grupo com benefício, uma diferença de R$ 4,8 mil. O custo foi o saldo resgatado por quem voltou: 280 vezes R$ 10, ou R$ 2,8 mil. Saldo: R$ 2 mil positivos. Note que, das 280 recompras, 200 aconteceriam de qualquer forma, e o desconto dado a esses clientes é custo puro. Se a taxa de recompra do grupo com cashback fosse de 23% em vez de 28%, a conta ficaria negativa. Outro cuidado: crédito que vence sem uso reduz o custo no curto prazo, mas regra que frustra o cliente costuma aparecer depois, na reclamação e no descadastro.",
    "Com isso, os indicadores do programa ficam claros: taxa de recompra por coorte, comparada com o controle; tempo até a segunda compra; taxa de resgate; custo do benefício como percentual da margem incremental; e LTV por coorte ao longo dos meses. Leve esses números para o report no formato de objetivo, resultado-chave e próxima ação, como mostramos no artigo sobre OKRs e report executivo de growth, e lembre que cada lembrete de saldo é uma comunicação de CRM com base legal e opção de descadastro, assunto do artigo sobre LGPD nas comunicações de CRM. Para quem quer entrar na área, um bom projeto de portfólio é montar, com dados fictícios, a planilha de coortes de um programa de cashback, com grupo de controle e a conta de quando o desconto se paga.",
  ],
  sources: [
    {
      label: "Como funciona o Cashback no Varejo — Comunidade Sebrae/PR (26/11/2022)",
      url: "https://sebraepr.com.br/comunidade/artigo/como-funciona-o-cashback-no-varejo",
    },
    {
      label: "Customer lifetime value — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Customer_lifetime_value",
    },
    {
      label: "What Is Customer Lifetime Value (CLV)? — Coursera (30/08/2024)",
      url: "https://www.coursera.org/ca/articles/what-is-customer-lifetime-value",
    },
    {
      label: "[GA4] Cohort exploration — Ajuda do Google Analytics",
      url: "https://support.google.com/analytics/answer/9670133",
    },
  ],
};

export default artigo;
