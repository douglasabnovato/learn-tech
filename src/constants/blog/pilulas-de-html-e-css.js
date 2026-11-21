/* GERADO por learntech-content/scripts/exportar-copias.mjs a partir de content/learn-tech/paginas/blog.json (artigo pilulas-de-html-e-css).
   Não edite à mão: mude o conteúdo na API e rode o script de novo. */

const artigo = {
  highlights: [
    {
      label: "Semântica",
      description: "Entidades corretas, figure e figcaption ajudam leitores de tela e buscadores a entender a página.",
    },
    {
      label: "Flexbox",
      description: "Separar o que é do contêiner e o que é dos itens resolve boa parte dos layouts.",
    },
    {
      label: "Transparência",
      description: "rgba no fundo e opacity no elemento têm efeitos bem diferentes sobre o conteúdo.",
    },
  ],
  body: [
    '1. Espaços que somem. O navegador junta vários espaços seguidos em um só, então digitar dez espaços no código não move nada na tela. Para manter duas palavras sempre na mesma linha, como "10 km" ou "Seção 2", use a entidade &nbsp;, o espaço não separável. Quando o espaçamento faz parte do conteúdo, como um trecho de código ou um poema com recuos, o elemento <pre> preserva espaços e quebras de linha. A pegadinha: usar sequências de &nbsp; para recuar texto, o que quebra em telas menores e é trabalho do CSS. E caracteres reservados, como < e &, precisam virar &lt; e &amp;.',
    "2. Layout que não se adapta. Com display: flex, os itens ficam lado a lado numa única linha, porque o valor inicial de flex-wrap é nowrap. Numa tela estreita, encolhem e, se não couberem, transbordam. A solução é flex-wrap: wrap, que leva para a linha seguinte o que não cabe, junto com uma base de tamanho nos itens, como flex: 1 1 250px. A pegadinha: cada linha quebrada se comporta como um contêiner flex separado, então os itens da última linha podem ficar mais largos que os de cima. Para alinhar linhas e colunas ao mesmo tempo, use CSS Grid.",
    "3. O mapa do Flexbox. No contêiner, o elemento com display: flex, ficam flex-direction, flex-wrap, o atalho flex-flow, justify-content, align-items, align-content e gap. Nos itens, os filhos diretos, ficam flex-grow, flex-shrink, flex-basis, o atalho flex, order e align-self. Os valores iniciais dos itens equivalem a flex: 0 1 auto: não crescem, podem encolher e partem do tamanho do conteúdo. A pegadinha: propriedade de contêiner aplicada no item, ou o contrário, simplesmente não faz nada. E order muda só a ordem visual, não a ordem em que o teclado e o leitor de tela percorrem a página.",
    "4. Gradientes. Gradiente em CSS é uma imagem, por isso vai em background-image (ou no atalho background), e não em background-color. linear-gradient() faz a transição em linha reta e, sem direção informada, vai de cima para baixo; dá para usar palavras como to right ou ângulos como 90deg. radial-gradient() parte de um ponto central para fora, em forma de elipse ou círculo. A pegadinha: texto sobre gradiente pode ter bom contraste numa ponta e ruim na outra; confira as duas extremidades e declare uma background-color sólida como reserva.",
    "5. Imagens com transparência. Para um logotipo que vai sobre fundos diferentes, use um formato com canal alfa, como PNG, WebP ou SVG; o JPEG não guarda transparência e sempre traz um fundo. A pegadinha: um PNG transparente com traço escuro desaparece num tema escuro, então teste a imagem nos fundos em que ela vai aparecer. Se ela informa algo, descreva-a no alt; se é decoração, use alt vazio.",
    "6. Cor de fundo com hex, rgb e rgba. #1e90ff, rgb(30, 144, 255) e o nome dodgerblue descrevem a mesma cor. O hexadecimal usa dois dígitos por canal (vermelho, verde e azul), e rgb() usa valores de 0 a 255. Para transparência, rgba() acrescenta um quarto valor, o alfa, que vai de 0 (transparente) a 1 (sólido); o hexadecimal de oito dígitos faz o mesmo. A pegadinha: notações misturadas dificultam a manutenção; defina as cores uma vez em variáveis CSS, como --cor-primaria.",
  ],
  quote: "Quase todo bug de CSS é uma propriedade no lugar errado: no item em vez do contêiner, no elemento inteiro em vez de só no fundo.",
  bodyContinued: [
    "7. opacity na prática. Vai de 0 a 1 e esmaece o elemento inteiro, como num botão desativado ou numa entrada suave com transition. A pegadinha: um elemento com opacity: 0 fica invisível, mas continua ocupando espaço, recebendo cliques e sendo lido por leitores de tela. Para esconder de verdade, use display: none ou o atributo hidden.",
    "8. Fundo transparente sem apagar o texto. Pense numa faixa escura sobre uma foto. Se você aplica opacity: 0.5 na faixa, o texto dentro dela também fica pela metade, porque opacity vale para o elemento com todo o seu conteúdo. A solução é deixar o elemento opaco e pôr a transparência só na cor do fundo: background-color: rgba(0, 0, 0, 0.5). A pegadinha: colocar opacity: 1 no filho não desfaz o efeito, já que ele é desenhado dentro de um pai que já está semitransparente.",
    "9. text-align. Alinha o conteúdo em linha (texto, links, imagens inline) dentro de um bloco, com left, right, center, justify, start e end. start e end respeitam a direção do idioma. A pegadinha: text-align: center não centraliza uma div; para isso use margin-inline: auto com largura definida, ou Flexbox. E justify em colunas estreitas abre buracos entre as palavras que atrapalham a leitura.",
    "10. figure e figcaption. O elemento <figure> marca um conteúdo autocontido, como uma imagem, um gráfico ou um trecho de código, que o texto referencia mas que poderia mudar de lugar sem prejudicar o fluxo. A legenda fica em <figcaption>, como primeiro ou último filho. A pegadinha: repetir no alt o texto da legenda. O alt descreve o que a imagem mostra para quem não a vê; a legenda complementa com crédito, contexto ou data.",
    "11. opacity e o contexto de empilhamento. Qualquer opacity diferente de 1 cria um novo contexto de empilhamento: o elemento e seus filhos passam a ser empilhados como um bloco único. Um z-index alto num filho só vale dentro desse grupo. Por isso, um menu suspenso dentro de um elemento semitransparente pode ficar atrás de uma seção vizinha, por mais que você aumente o z-index dele. Procure opacity, transform ou filter nos ancestrais.",
    "12. align-items no eixo transversal. justify-content distribui os itens no eixo principal; align-items alinha no eixo transversal, perpendicular a ele. Com flex-direction: row, o eixo principal é horizontal e align-items: center centraliza na vertical; com column, os papéis se invertem. O valor inicial é stretch, que estica os itens até a altura da linha, e é por isso que colunas lado a lado ficam com a mesma altura. A pegadinha: confundir align-items com align-content, que só tem efeito quando há mais de uma linha.",
    "Esses temas aparecem nos programas HTML5 e CSS3 Moderno: do Zero ao Currículo Publicado, com semântica, box model, Flexbox e Grid, e Web Design Responsivo: do Celular ao Monitor com CSS Moderno, com mobile first, imagens responsivas e testes de acessibilidade.",
  ],
  sources: [
    {
      label: "Conceitos básicos de flexbox — MDN Web Docs",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts",
    },
    {
      label: "opacity — MDN Web Docs",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Properties/opacity",
    },
    {
      label: "<figure>: o elemento de figura com legenda opcional — MDN Web Docs",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/figure",
    },
    {
      label: "CSS Gradients — W3Schools",
      url: "https://www.w3schools.com/css/css3_gradients.asp",
    },
    {
      label: "HTML Entities — W3Schools",
      url: "https://www.w3schools.com/html/html_entities.asp",
    },
  ],
};

export default artigo;
