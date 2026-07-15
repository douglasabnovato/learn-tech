import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaServer,
  FaLayerGroup,
  FaUsers,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa6";

const sections = [
  {
    id: "frontend",
    icon: FaReact,
    title: "Frontend",
    subtitle: "O que as pessoas veem",
    gradient: "from-indigo-500 via-sky-600 to-sky-700",
    paragraphs: [
      "É a camada com a qual o usuário conversa. Botões, telas, animações, o formulário que responde ao clique. O frontend traduz a lógica invisível em algo que uma pessoa consegue usar sem pensar.",
      "Dominar frontend é entender que a tela não é só estética — é a ponte entre o sistema e o ser humano. Quando ela funciona, ninguém percebe. Quando falha, todo mundo sente.",
    ],
    items: [],
    closing: null,
  },
  {
    id: "backend",
    icon: FaServer,
    title: "Backend",
    subtitle: "O que sustenta por trás",
    gradient: "from-purple-500 via-indigo-600 to-indigo-700",
    paragraphs: [
      "É o motor que ninguém vê. Onde os dados são guardados, as regras são aplicadas, as decisões são tomadas. O backend é a diferença entre uma página bonita e um sistema que aguenta mil pessoas ao mesmo tempo sem cair.",
      "Aqui mora a segurança, a performance, a integridade. É a fundação — e, como toda fundação, só recebe atenção quando racha.",
    ],
    items: [],
    closing: null,
  },
  {
    id: "fullstack",
    icon: FaLayerGroup,
    title: "Fullstack",
    subtitle: "Os dois mundos",
    gradient: "from-sky-500 via-purple-600 to-purple-700",
    paragraphs: [
      "Fullstack não é saber tudo. É entender como os dois lados conversam.",
      "O desenvolvedor fullstack transita entre a tela e o servidor, enxerga o caminho completo de um clique até o banco de dados e de volta. Não é sobre dominar cada detalhe dos dois lados — é sobre nunca perder de vista o sistema inteiro enquanto trabalha em uma parte dele.",
    ],
    items: [],
    closing: null,
  },
  {
    id: "soft-skills",
    icon: FaUsers,
    title: "Soft Skills",
    subtitle: "O que o código não resolve",
    gradient: "from-pink-500 via-purple-600 to-indigo-700",
    paragraphs: [
      "Nenhum sistema é construído por uma pessoa sozinha. E é aqui que a maioria dos problemas de verdade acontece — não no código, mas entre as pessoas que o escrevem.",
    ],
    items: [
      {
        label: "Comunicação",
        text: "Explicar o que você fez, entender o que pediram, transformar uma dúvida em pergunta clara.",
      },
      {
        label: "Trabalho em equipe",
        text: "Código é feito a várias mãos. Saber colaborar, revisar e ser revisado vale tanto quanto saber programar.",
      },
      {
        label: "Projetos",
        text: "Uma boa ideia sem organização morre no meio do caminho. Planejar, priorizar e entregar é o que transforma esforço em resultado.",
      },
    ],
    closing:
      "Habilidade técnica te faz escrever código. Habilidade comportamental te faz construir junto.",
  },
  {
    id: "avancados",
    icon: FaRocket,
    title: "Avançados",
    subtitle: "O que faz a diferença",
    gradient: "from-indigo-500 via-sky-600 to-teal-600",
    paragraphs: ["São as camadas que separam o bom do excepcional."],
    items: [
      {
        label: "English",
        text: "A maior parte do conhecimento de tecnologia nasce em inglês. Documentação, cursos, comunidades. Ler inglês não é diferencial — é chave de acesso.",
      },
      {
        label: "Produtos",
        text: "Entender o negócio por trás do código. Saber não só como construir, mas o que vale a pena construir e para quem.",
      },
      {
        label: "Performance",
        text: "Fazer funcionar é o mínimo. Fazer funcionar rápido, barato e em escala é o que sustenta um produto de verdade.",
      },
    ],
    closing: null,
  },
];

export const CategoriesAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* HERO */}
      <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
        <div className="max-w-4xl space-y-6">
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
            Este é o mapa do território. Cada área abaixo é uma peça do
            profissional de tecnologia completo.
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

                {/* Itens (soft skills / avançados) */}
                {section.items.length > 0 && (
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-2">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 space-y-2 hover:border-sky-300 transition-all ease-in-out duration-300"
                      >
                        <h3 className="text-lg font-bold text-neutral-800">
                          {item.label}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
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