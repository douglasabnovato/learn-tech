/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo react-interfaces-modernas).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  illustrationImg: "https://cdn.pixabay.com/photo/2016/09/15/16/28/tree-1671079_1280.jpg",
  highlights: [
    {
      label: "Componentes",
      description: "Cada pedaço da interface — um botão, um card, um formulário — vira uma peça independente e reutilizável.",
    },
    {
      label: "Estado (state)",
      description: "A memória de um componente. Quando o estado muda, o React redesenha a tela sozinho.",
    },
    {
      label: "Props",
      description: "Como um componente recebe dado de fora, sem decidir por conta própria o que exibir.",
    },
  ],
  body: [
    "A ideia central do React é simples de enunciar e difícil de internalizar de primeira: em vez de escrever uma página inteira como um bloco só, você a divide em componentes — pequenas peças de interface, cada uma responsável por uma parte específica da tela. Um botão de curtir, um card de produto, um menu de navegação — cada um vira uma função que retorna o que deve aparecer.",
    "O que torna essa divisão poderosa é a reutilização: o mesmo componente `Button` pode aparecer dez vezes na mesma página, cada instância com seu próprio texto e comportamento, sem você reescrever a lógica do botão dez vezes. Isso é o oposto de HTML puro, onde cada botão é código solto, repetido manualmente sempre que precisa de outro.",
  ],
  quote:
    "Pensar em componentes é a virada de chave: você para de perguntar 'como faço essa página' e passa a perguntar 'quais peças essa página é feita'.",
  bodyContinued: [
    "A segunda peça central é o estado — a memória que cada componente carrega. Um contador de curtidas, um campo de formulário sendo digitado, um menu aberto ou fechado: tudo isso é estado. A regra de ouro do React é que, quando o estado muda, a tela se atualiza sozinha — você nunca escreve 'atualize esse número na tela', você só muda o valor guardado, e o React cuida do resto.",
    "Por fim, componentes conversam entre si através de props — dados que um componente pai passa para um componente filho. Isso cria uma direção clara de informação (de cima para baixo), o que torna mais fácil entender de onde vem cada dado exibido, mesmo em telas com dezenas de componentes encaixados uns nos outros.",
  ],
  sources: [
    {
      label: "React — Documentação oficial (react.dev)",
      url: "https://react.dev/",
    },
    {
      label: "Linux Foundation: Linux Foundation Announces Intent to Launch the React Foundation (07/10/2025)",
      url: "https://www.linuxfoundation.org/press/linux-foundation-announces-intent-to-launch-the-react-foundation",
    },
  ],
};

export default artigo;
