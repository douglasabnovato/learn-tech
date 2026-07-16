import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaServer,
  FaLayerGroup,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaArrowLeft,
  FaHtml5,
  FaFigma,
  FaDatabase,
  FaUserGroup,
  FaListCheck,
  FaGaugeHigh,
} from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineTranslate } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { HiOutlineChip } from "react-icons/hi";

const sections = [
  {
    id: "front",
    icon: FaReact,
    title: "Técnicas do Front",
    subtitle: "O que as pessoas veem",
    gradient: "from-indigo-500 via-sky-600 to-sky-700",
    paragraphs: [
      "É a camada com a qual o usuário conversa. Tudo o que aparece na tela — e cada decisão sobre como aquilo aparece — vive aqui. O front é responsável por traduzir a lógica invisível do sistema em algo que uma pessoa consegue usar sem precisar entender o que acontece por baixo.",
      "Dominar esta área é entender que a interface não é enfeite: é a ponte entre a máquina e o ser humano. Um botão no lugar errado, um formulário confuso ou uma tela que demora a responder não são problemas estéticos — são barreiras que fazem alguém desistir. Quando o front funciona, ninguém percebe o esforço. Quando falha, todo mundo sente.",
      "O front reúne três frentes que se completam: a base da web e como ela funciona, a construção de interfaces que respondem e escalam, e o design que decide como a experiência acontece antes de uma linha de código ser escrita.",
    ],
    cards: [
      {
        icon: FaReact,
        title: "Frontend",
        description:
          "Crie interfaces incríveis, rápidas e responsivas para usuários exigentes.",
        color: "purple",
      },
      {
        icon: FaHtml5,
        title: "Web",
        description:
          "Explore o universo da web e domine as tecnologias que movem a internet.",
        color: "sky",
      },
      {
        icon: FaFigma,
        title: "UX/UI",
        description:
          "Aprenda a desenhar experiências marcantes com design intuitivo e criativo.",
        color: "pink",
      },
    ],
    closing: null,
  },
  {
    id: "back",
    icon: FaServer,
    title: "Técnicas do Back",
    subtitle: "O que sustenta por trás",
    gradient: "from-purple-500 via-indigo-600 to-indigo-700",
    paragraphs: [
      "É o motor que ninguém vê. Onde os dados são guardados, as regras de negócio são aplicadas e as decisões são tomadas antes de qualquer coisa chegar à tela. O back é a diferença entre uma página bonita e um sistema que aguenta mil pessoas ao mesmo tempo sem cair.",
      "Aqui moram as perguntas que definem se um produto sobrevive ao crescimento: os dados estão seguros? A informação está íntegra? O sistema responde rápido quando o número de usuários dobra? São questões que não aparecem para quem usa — até o dia em que algo quebra e todas elas aparecem de uma vez.",
      "Esta área junta duas competências inseparáveis: a construção da lógica que sustenta a aplicação, e a organização dos dados que essa lógica manipula. Uma não existe sem a outra.",
    ],
    cards: [
      {
        icon: FaServer,
        title: "Backend",
        description:
          "Estruture sistemas sólidos e escaláveis para dar vida às suas aplicações.",
        color: "indigo",
      },
      {
        icon: FaDatabase,
        title: "DataBase",
        description:
          "Organize e gerencie dados com segurança, eficiência e inteligência.",
        color: "green",
      },
    ],
    closing: null,
  },
  {
    id: "fullstack",
    icon: FaLayerGroup,
    title: "Fullstack",
    subtitle: "A visão do sistema inteiro",
    gradient: "from-sky-500 via-purple-600 to-purple-700",
    paragraphs: [
      "Fullstack não é saber tudo. É a união madura das competências de front e back na mesma pessoa — e, mais do que isso, a capacidade de enxergar o caminho completo de uma ação: do clique do usuário até o banco de dados, e de volta até a tela.",
      "Não é uma posição de entrada. É o território do profissional pleno a sênior, que já domina a técnica dos dois lados e passou a usá-la de forma estratégica. Não escreve apenas código: decide arquitetura, pondera trade-offs, escolhe onde a complexidade deve morar e antecipa como cada decisão vai impactar o sistema como um todo — inclusive as partes que ele não está tocando naquele momento.",
      "É por isso que o fullstack sênior é tão valorizado. O valor dele não está em conseguir escrever qualquer parte do código, mas em nunca perder de vista o todo enquanto trabalha em uma parte dele. Ele conecta o que o negócio precisa com o que a tecnologia permite — e sabe quando dizer não a uma solução tecnicamente possível, mas estrategicamente errada.",
    ],
    cards: [],
    closing: null,
  },
  {
    id: "comportamentais",
    icon: FaUsers,
    title: "Comportamentais e Método",
    subtitle: "O que o código não resolve",
    gradient: "from-pink-500 via-purple-600 to-indigo-700",
    paragraphs: [
      "Nenhum sistema relevante é construído por uma pessoa sozinha. E é aqui, não no código, que a maioria dos problemas de verdade acontece — nas conversas que não aconteceram, nos alinhamentos que ficaram para depois, nas decisões que ninguém registrou.",
      "Um desenvolvedor tecnicamente brilhante que não consegue explicar o que fez, entender o que pediram ou trabalhar junto de outras pessoas entrega menos que um desenvolvedor mediano que domina essas habilidades. Não é opinião: é o que separa quem escreve código de quem constrói produto em equipe. E some a isso o método — a capacidade de organizar o trabalho para que uma boa ideia não morra na desorganização.",
    ],
    cards: [
      {
        icon: BsChatDots,
        title: "Comunicação",
        description:
          "Colabore, alinhe times e conduza conversas que destravam projetos.",
        color: "violet",
      },
      {
        icon: FaUserGroup,
        title: "Trabalho em equipe",
        description:
          "Código é feito a várias mãos. Colaborar, revisar e ser revisado vale tanto quanto programar.",
        color: "fuchsia",
      },
      {
        icon: HiOutlineChip,
        title: "Gestão",
        description:
          "Organize tarefas, prazos e prioridades para entregar com previsibilidade.",
        color: "blue",
      },
      {
        icon: FaListCheck,
        title: "Projetos",
        description:
          "Planeje, organize e execute projetos de tecnologia com sucesso garantido.",
        color: "indigo",
      },
    ],
    closing:
      "Habilidade técnica te faz escrever código. Habilidade comportamental e método te fazem construir junto e entregar no prazo.",
  },
  {
    id: "diferenciais",
    icon: FaRocket,
    title: "Diferenciais",
    subtitle: "O que separa o bom do excepcional",
    gradient: "from-indigo-500 via-sky-600 to-teal-600",
    paragraphs: [
      "São as camadas que quase nunca aparecem na descrição de uma vaga, mas sempre aparecem no resultado do trabalho. Não são pré-requisito para começar — são o que faz a diferença quando dois profissionais têm a mesma base técnica.",
      "Ler inglês abre a porta para a documentação, os cursos e as comunidades onde o conhecimento nasce primeiro. Entender de produto transforma quem executa tarefas em quem resolve problemas de negócio. E performance é o que separa 'funciona na minha máquina' de 'funciona para milhões, rápido e barato'. Junto disso, dominar as ferramentas e plataformas certas amplia o que uma pessoa consegue construir sozinha.",
    ],
    cards: [
      {
        icon: MdOutlineTranslate,
        title: "English",
        description:
          "Melhore seu inglês para crescer na programação e se conectar com o mundo.",
        color: "amber",
      },
      {
        icon: AiFillProduct,
        title: "Produtos Digitais",
        description:
          "Transforme ideias em soluções digitais úteis, inovadoras e escaláveis.",
        color: "rose",
      },
      {
        icon: HiOutlineChip,
        title: "Tecnologia",
        description:
          "Ferramentas e plataformas que ampliam o que é possível construir e entregar.",
        color: "teal",
      },
      {
        icon: FaGaugeHigh,
        title: "Performance",
        description:
          "Fazer funcionar é o mínimo. Fazer funcionar rápido, barato e em escala sustenta um produto de verdade.",
        color: "sky",
      },
    ],
    closing: null,
  },
];

// Mapa de cores por categoria — fundo do quadrado do ícone e cor do ícone
const colorMap = {
  sky: "from-sky-500 to-sky-600",
  purple: "from-purple-500 to-purple-600",
  pink: "from-pink-500 to-pink-600",
  indigo: "from-indigo-500 to-indigo-600",
  green: "from-green-500 to-green-600",
  violet: "from-violet-500 to-violet-600",
  fuchsia: "from-fuchsia-500 to-fuchsia-600",
  blue: "from-blue-500 to-blue-600",
  amber: "from-amber-500 to-amber-600",
  rose: "from-rose-500 to-rose-600",
  teal: "from-teal-500 to-teal-600",
};

export const CategoriesAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* HERO */}
      <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
        <div className="max-w-4xl space-y-6">
          {/* Botão voltar */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
          >
            <FaArrowLeft /> Voltar para a Home
          </Link>

          <p className="text-lg md:text-xl font-medium text-neutral-600">
            O ecossistema da tecnologia
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.2]">
            O que forma um desenvolvedor
          </h1>
          <p className="text-lg font-normal text-neutral-800 max-w-3xl">
            Programar é só o começo. Por trás de cada aplicação que funciona
            existe um conjunto de habilidades que vai muito além de escrever
            código — e é esse conjunto que separa quem digita comandos de quem
            constrói soluções.
          </p>
          <p className="text-base font-normal text-neutral-600 max-w-3xl">
            Este é o mapa do território. Cada área abaixo reúne as categorias
            que compõem o profissional de tecnologia completo — do que o usuário
            vê ao que sustenta tudo por trás.
          </p>
        </div>
      </div>

      {/* SEÇÕES */}
      <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-12 space-y-16">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              className="w-full flex md:flex-row flex-col md:gap-12 gap-6 md:items-start items-center"
            >
              {/* Coluna do ícone + número */}
              <div className="md:w-1/4 w-full flex md:flex-col flex-row md:items-start items-center gap-4">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr ${section.gradient} shrink-0`}
                >
                  <span className="text-4xl text-neutral-50">
                    <Icon />
                  </span>
                </div>
                <div className="md:space-y-1">
                  <span className="text-sm font-semibold text-neutral-400">
                    0{index + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-neutral-800">
                    {section.title}
                  </h2>
                  <p className="text-base font-medium text-neutral-500">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              {/* Coluna do conteúdo */}
              <div className="md:w-3/4 w-full space-y-5">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg font-normal text-neutral-700 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                {/* Cards compactos das categorias do bloco */}
                {section.cards.length > 0 && (
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-2">
                    {section.cards.map((card) => {
                      const CardIcon = card.icon;
                      return (
                        <div
                          key={card.title}
                          className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:border-sky-300 hover:shadow-sm transition-all ease-in-out duration-300"
                        >
                          <div
                            className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-tr ${colorMap[card.color] || colorMap.sky
                              }`}
                          >
                            <span className="text-xl text-neutral-50">
                              <CardIcon />
                            </span>
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-base font-bold text-neutral-800">
                              {card.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {section.closing && (
                  <p className="text-lg font-medium text-neutral-800 pt-2">
                    {section.closing}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FECHO */}
      <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-20 py-14">
        <div className="max-w-4xl space-y-6">
          <h2 className="md:text-4xl text-3xl font-bold text-neutral-800 leading-tight">
            O desenvolvedor completo não é quem domina uma dessas áreas.
          </h2>
          <p className="text-lg font-normal text-neutral-700">
            É quem entende que todas se conectam — e escolhe por onde começar.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300 hover:opacity-90"
          >
            Explorar os conteúdos <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};