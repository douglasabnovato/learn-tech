import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import areasLocal from "../../../constants/areasData";
import { useApi, hidratar } from "../../../services/conteudo";

/* As áreas vêm da API (learn-tech/areas.json); areasData.js é a cópia local gerada por
   learntech-content/scripts/exportar-copias.mjs. Ícones chegam por nome e viram componente em hidratar. */
const AREAS_LOCAIS = hidratar(areasLocal);

/* Gradiente de cada área: é visual do site, por isso fica no código. */
const GRADIENTES = {
  front: "from-indigo-500 via-sky-600 to-sky-700",
  back: "from-purple-500 via-indigo-600 to-indigo-700",
  fullstack: "from-sky-500 via-purple-600 to-purple-700",
  comportamentais: "from-pink-500 via-purple-600 to-indigo-700",
  diferenciais: "from-indigo-500 via-sky-600 to-teal-600",
};

/* Desenha o ícone só quando o nome foi resolvido para componente. */
const Icone = ({ icone }) => (typeof icone === "function" || typeof icone === "object" ? React.createElement(icone) : null);
Icone.propTypes = { icone: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]) };

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
  const { dados: sections } = useApi("learn-tech/areas.json", AREAS_LOCAIS);

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
          return (
            <div
              key={section.id}
              className="w-full flex md:flex-row flex-col md:gap-12 gap-6 md:items-start items-center"
            >
              {/* Coluna do ícone + número */}
              <div className="md:w-1/4 w-full flex md:flex-col flex-row md:items-start items-center gap-4">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr ${GRADIENTES[section.id] || GRADIENTES.front} shrink-0`}
                >
                  <span className="text-4xl text-neutral-50">
                    <Icone icone={section.icon} />
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
                              <Icone icone={card.icon} />
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

                {/* Como começar e fontes (conteúdo da API) */}
                {section.comoComecar?.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <h3 className="text-base font-bold text-neutral-800">Como começar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                      {section.comoComecar.map((passo) => (
                        <li key={passo}>{passo}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.ferramentas?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {section.ferramentas.map((f) => (
                      <span key={f} className="text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1">
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                {section.sources?.length > 0 && (
                  <p className="text-sm text-neutral-500 pt-1">
                    Fontes:{" "}
                    {section.sources
                      .filter((f) => /^https:\/\//.test(f.url))
                      .map((f, i) => (
                        <span key={f.url}>
                          {i > 0 && " · "}
                          <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-800">
                            {f.label}
                          </a>
                        </span>
                      ))}
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