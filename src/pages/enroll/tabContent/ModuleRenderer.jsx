// ModuleRenderer.jsx — renderiza qualquer módulo de qualquer programa a partir
// de programsData.moduleContents. Substitui os antigos ModuleZero..ModuleFive.

import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaBolt,
  FaCheckCircle,
  FaClipboardCheck,
  FaCommentDots,
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaLaptopCode,
  FaListOl,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaSyncAlt,
  FaTachometerAlt,
  FaTags,
  FaTasks,
  FaThLarge,
  FaTools,
} from "react-icons/fa";

const ICONES = {
  bolt: FaBolt,
  clipboard: FaClipboardCheck,
  comment: FaCommentDots,
  folder: FaFolderOpen,
  gauge: FaTachometerAlt,
  github: FaGithub,
  globe: FaGlobe,
  grid: FaThLarge,
  laptop: FaLaptopCode,
  list: FaListOl,
  mobile: FaMobileAlt,
  palette: FaPalette,
  rocket: FaRocket,
  search: FaSearch,
  shield: FaShieldAlt,
  sitemap: FaSitemap,
  sync: FaSyncAlt,
  tags: FaTags,
  tasks: FaTasks,
  tools: FaTools,
};

// Resolve o nome simbólico do ícone vindo do dado; cai num padrão se não existir.
const iconeDe = (nome) => ICONES[nome] || FaTools;

export const ModuleRenderer = ({ modulo, ordem, onComplete }) => {
  const [feitos, setFeitos] = useState([]);

  // Marca ou desmarca um passo do checklist.
  const alternarPasso = (n) =>
    setFeitos((antes) =>
      antes.includes(n) ? antes.filter((x) => x !== n) : [...antes, n]
    );

  if (!modulo) {
    return (
      <div className="w-full py-12 text-center text-neutral-500">
        Conteúdo deste módulo ainda não disponível.
      </div>
    );
  }

  const IconeCabecalho = iconeDe(modulo.icon);
  const passos = (modulo.sections || []).flatMap((s) => s.subsections || []);
  const tudoFeito = passos.length > 0 && feitos.length === passos.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-600 to-purple-600">
          <IconeCabecalho className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">
            Módulo {ordem}
          </span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            {modulo.title}
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            {modulo.shortDescription}
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        {modulo.introductionText}
      </p>

      {(modulo.sections || []).map((secao, si) => (
        <div key={si} className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
              {secao.title}
            </h3>
            {si === 0 && passos.length > 0 && (
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    style={{
                      width: `${(feitos.length / passos.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-neutral-500">
                  {feitos.length} de {passos.length} passos
                </span>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {(secao.subsections || []).map((passo) => {
              const feito = feitos.includes(passo.number);
              return (
                <div
                  key={passo.number}
                  className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                    feito
                      ? "border-purple-300 bg-purple-50/50"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => alternarPasso(passo.number)}
                    aria-label={
                      feito ? "Marcar como pendente" : "Marcar como concluído"
                    }
                    className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${
                      feito
                        ? "bg-purple-500 border-purple-500 text-white"
                        : "border-neutral-300 text-neutral-500 hover:border-indigo-400"
                    }`}
                  >
                    {feito ? <FaCheckCircle size={16} /> : passo.number}
                  </button>
                  <div className="space-y-1.5 flex-1">
                    <h4
                      className={`text-base font-bold ${
                        feito ? "text-purple-800" : "text-neutral-800"
                      }`}
                    >
                      {passo.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      <span className="font-semibold text-neutral-700 underline">
                        Orientação:
                      </span>{" "}
                      {passo.guidance}
                    </p>
                    {passo.code && (
                      <code className="inline-block bg-neutral-900 text-purple-300 text-sm font-mono px-3 py-1 rounded-lg mt-2">
                        {passo.code}
                      </code>
                    )}
                    {(passo.tips || []).map((dica, di) => (
                      <p
                        key={di}
                        className="text-xs text-neutral-500 italic pt-1"
                      >
                        💡 {dica}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {si === 0 && tudoFeito && (
            <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-200 px-4 py-3">
              <span className="text-2xl">🏅</span>
              <p className="text-sm font-semibold text-purple-800">
                Todos os passos deste módulo foram concluídos.
              </p>
            </div>
          )}
        </div>
      ))}

      {modulo.highlights?.length > 0 && (
        <div className="pt-6 border-t border-neutral-200 space-y-6">
          <h3 className="text-xl font-bold text-neutral-800">
            {modulo.highlightsTitle}
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {modulo.highlights.map((item) => {
              const Icone = iconeDe(item.icon);
              return (
                <div
                  key={item.title}
                  className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <Icone size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <p className="text-base text-neutral-600 font-normal leading-relaxed">
        {modulo.closingText}
      </p>

      <div className="bg-gradient-to-tr from-indigo-600 via-sky-600 to-purple-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">{modulo.ctaTitle}</h3>
        <p className="text-indigo-50 text-sm max-w-2xl mx-auto leading-relaxed">
          {modulo.ctaText}
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            {modulo.nextButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

ModuleRenderer.propTypes = {
  modulo: PropTypes.object,
  ordem: PropTypes.number,
  onComplete: PropTypes.func,
};

// Fim de ModuleRenderer.jsx
