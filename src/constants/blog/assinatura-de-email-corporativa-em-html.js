/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo assinatura-de-email-corporativa-em-html).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Tabela, não div",
      description: "Layout com tabelas e CSS inline é o que sobrevive no Outlook, no Gmail e no celular.",
    },
    {
      label: "Imagem hospedada e leve",
      description: "Logo em PNG ou JPG num servidor público com HTTPS, no tamanho exato em que aparece, com texto alternativo.",
    },
    {
      label: "Um molde, várias marcas",
      description: "Variáveis para nome, cargo, empresa, logo e cor; um único modelo para todo o grupo.",
    },
  ],
  body: [
    "Pense num grupo fictício, o Grupo Construir+, com uma holding e várias empresas. Cada uma tem logo e cor, mas todas precisam parecer da mesma família. O caminho prático começa fora do código: rascunhe duas ou três variações num editor de slides ou no Figma (nome em uma linha ou em duas, logo à esquerda ou acima), com campos genéricos como Nome Sobrenome, e-mail e telefone em formato (XX) XXXXX-XXXX. Aprovado o rascunho, ele vira HTML.",
    "Aqui está a primeira armadilha: exportar o rascunho como uma imagem única e colar no e-mail. Fica bonito na sua tela e péssimo no resto. Se o cliente de e-mail bloquear imagens, a assinatura some; o texto não pode ser copiado; leitores de tela não leem nada; e cada pessoa precisa de uma imagem própria. A assinatura boa é texto de verdade, com só o logo como imagem.",
  ],
  quote: "Assinatura de e-mail é a única página que você publica milhares de vezes por dia sem saber em que navegador ela vai abrir.",
  bodyContinued: [
    "Na construção, siga as regras do HTML para e-mail. A Exclaimer, que vende gestão de assinaturas, recomenda estruturar o layout com tabelas, fixar a largura da tabela, usar padding em vez de elementos vazios para espaçar e manter a assinatura entre 320 e 600 pixels de largura, com 450 como referência. Para texto, a mesma orientação sugere 11 a 12 pontos para nome e cargo, 8 a 10 para contatos e 7 a 8 para avisos legais, sempre com uma pilha de fontes de reserva (Arial, Helvetica, sans-serif), porque fonte personalizada raramente chega ao destinatário. Escreva o CSS inline em cada célula; muitos clientes descartam o bloco style.",
    "Imagens vão hospedadas num endereço público com HTTPS, de preferência no domínio da empresa, exportadas no tamanho em que serão exibidas e com width e height declarados. Todo img precisa de alt: o logo pode ter o nome da empresa como texto alternativo, como recomenda o tutorial de imagens do W3C. Garanta contraste suficiente, não coloque informação só na cor e teste no modo escuro, onde fundos transparentes e textos cinza costumam desaparecer. Links de telefone usam tel:, de e-mail usam mailto:, e redes sociais entram como ícones pequenos com alt.",
    "Sobre o aviso legal: texto de confidencialidade no rodapé não protege dado nenhum por si só. O que a LGPD exige é base legal para tratar dados pessoais, transparência e segurança. Na assinatura, o útil é curto: nome da empresa, CNPJ se for padrão do grupo e um link para a política de privacidade. Evite colocar dados pessoais desnecessários, como celular particular, só porque o modelo tem um campo para isso.",
    "Para padronizar no grupo inteiro, transforme o HTML num molde com variáveis. No Microsoft 365, regras de fluxo de e-mail do Exchange Online podem acrescentar uma assinatura ou aviso em HTML a todas as mensagens, com tokens como %%DisplayName%%, %%Title%% e %%Company%% preenchidos a partir do perfil do usuário; a documentação da Microsoft recomenda criar uma exceção para não repetir o bloco em respostas e testar em modo de teste antes de ativar. Sem ferramenta central, um gerador simples em HTML e JavaScript, em que a pessoa escolhe a empresa e preenche nome e cargo, já resolve e é um ótimo projeto de portfólio.",
    "Antes de publicar, teste no Outlook para desktop, no Outlook na web, no Gmail, no Apple Mail e em celulares Android e iOS, com e sem imagens, no claro e no escuro. Versione o HTML num repositório e registre quem pode alterar o modelo. Assinatura padronizada é identidade visual, mas também é governança.",
  ],
  sources: [
    {
      label: "Guidelines for signature design — Exclaimer Support",
      url: "https://support.exclaimer.com/hc/en-gb/articles/4458004178589-Guidelines-for-signature-design",
    },
    {
      label: "Organization-wide message disclaimers, signatures, footers, or headers in Exchange Online — Microsoft Learn",
      url: "https://learn.microsoft.com/tr-tr/exchange/security-and-compliance/mail-flow-rules/disclaimers-signatures-footers-or-headers",
    },
    {
      label: "Images Tutorial — W3C Web Accessibility Initiative",
      url: "https://www.w3.org/WAI/tutorials/images/",
    },
    {
      label: "Lei nº 13.709/2018 (LGPD) — Planalto",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
    },
  ],
};

export default artigo;
