import React, { useState } from "react";
import { FaSitemap, FaListOl, FaTags, FaCheckCircle } from "react-icons/fa";

export const ModuleOne = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Semântica HTML5",
      guidance:
        "Perceba que <div> é genérico, mas <header>, <nav>, <main>, <section>, <article>, <footer> comunicam significado. Use semântica para estruturar sua página de forma lógica.",
      tip: "Google e acessibilidade dependem dessa estrutura semântica.",
      code: "<header> <nav> <main> <footer>",
    },
    {
      number: 2,
      title: "Headings e Hierarquia (h1-h6)",
      guidance:
        "Use um único <h1> por página (seu título principal). Use h2, h3 etc. para subtítulos em ordem hierárquica. Nunca pule níveis.",
      tip: "Bots de SEO lêem seus headings para entender o tópico.",
      code: null,
    },
    {
      number: 3,
      title: "Meta Tags Essenciais",
      guidance:
        "No <head>, inclua a tag meta viewport para garantir responsividade, e uma meta description descrevendo a página — é o texto que aparece no resultado de busca do Google.",
      tip: "Sem a meta viewport, seu site pode aparecer minúsculo em celulares, mesmo com CSS responsivo pronto.",
      code: '<meta name="viewport">',
    },
  ];

  const highlights = [
    {
      icon: FaSitemap,
      title: "Hierarquia de Conteúdo",
      text: "Tags semânticas dão significado à estrutura, além de organizar visualmente o documento.",
    },
    {
      icon: FaTags,
      title: "Acessibilidade",
      text: "Atributos ARIA e boas práticas de semanticidade tornam o site acessível a mais pessoas.",
    },
    {
      icon: FaListOl,
      title: "SEO Estrutural",
      text: "A hierarquia de headings ajuda buscadores a entender do que a página trata.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);
  const toggleStep = (n) =>
    setDoneSteps((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  const allDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600">
          <FaSitemap className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo 01</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Estrutura Semântica
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Fundações HTML5: da semântica à acessibilidade
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        Agora que seu ambiente está configurado, é hora de aprender a linguagem que
        os navegadores entendem: HTML5. Não é apenas sobre tags e elementos, mas
        sobre contar uma história estruturada. Cada tag tem um propósito semântico
        que melhora o SEO e também torna seu site acessível a um público muito mais
        amplo, incluindo pessoas com deficiências visuais ou auditivas.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            📐 Hierarquia de Conteúdo
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${(doneSteps.length / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-neutral-500">
              {doneSteps.length} de {steps.length} passos
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => {
            const isDone = doneSteps.includes(step.number);
            return (
              <div
                key={step.number}
                className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                  isDone ? "border-indigo-300 bg-indigo-50/50" : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  aria-label={isDone ? "Marcar como pendente" : "Marcar como concluído"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${
                    isDone
                      ? "bg-indigo-500 border-indigo-500 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-sky-400"
                  }`}
                >
                  {isDone ? <FaCheckCircle size={16} /> : step.number}
                </button>
                <div className="space-y-1.5 flex-1">
                  <h4 className={`text-base font-bold ${isDone ? "text-indigo-800" : "text-neutral-800"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-700 underline">Orientação:</span>{" "}
                    {step.guidance}
                  </p>
                  {step.code && (
                    <code className="inline-block bg-neutral-900 text-sky-300 text-sm font-mono px-3 py-1 rounded-lg mt-2">
                      {step.code}
                    </code>
                  )}
                  {step.tip && <p className="text-xs text-neutral-500 italic pt-1">💡 {step.tip}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {allDone && (
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-indigo-800">
              Estrutura semântica dominada! Seu HTML agora tem significado.
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">🔍 Por que isso importa</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Icon size={16} />
                </div>
                <h4 className="text-sm font-bold text-neutral-800">{item.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-base text-neutral-600 font-normal leading-relaxed">
        Com a estrutura semântica finalizada, sua landing page agora tem "corpo" e
        significado. Você deixou de apenas escrever tags para arquitetar uma
        solução. O próximo grande passo será dar vida e estilo a esse esqueleto.
      </p>

      <div className="bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">📐 Estrutura Pronta!</h3>
        <p className="text-sky-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Seu esqueleto está de pé. No Módulo 2, mergulharemos no CSS para
          transformar essa estrutura em uma interface visualmente impactante.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Ir para Módulo 2: Estilização com CSS
          </button>
        </div>
      </div>
    </div>
  );
};