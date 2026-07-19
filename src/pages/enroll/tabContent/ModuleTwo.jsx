import React, { useState } from "react";
import { FaPalette, FaThLarge, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

export const ModuleTwo = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Flexbox Fundamentals",
      guidance:
        "Flexbox simplifica alinhamento e distribuição de espaço. Aprenda display: flex, justify-content, align-items, flex-direction.",
      tip: "Flexbox é ideal para componentes e layouts unidimensionais.",
      code: "display: flex;",
    },
    {
      number: 2,
      title: "CSS Grid",
      guidance:
        "Para layouts mais complexos, Grid oferece controle em duas dimensões. Defina grid-template-columns, grid-gap e posicione itens com grid-column.",
      tip: "Grid é perfeito para layouts de página inteira.",
      code: "display: grid;",
    },
    {
      number: 3,
      title: "Media Queries e Responsividade",
      guidance:
        "Use @media (max-width: 768px) para redefinir o layout em telas menores. Teste sempre do menor breakpoint para o maior (mobile-first).",
      tip: "Projetar mobile-first evita retrabalho: é mais fácil expandir um layout simples do que simplificar um complexo.",
      code: "@media (max-width: 768px)",
    },
  ];

  const highlights = [
    {
      icon: FaThLarge,
      title: "Design System",
      text: "Tokens de design, variáveis CSS e componentes reutilizáveis dão consistência ao projeto inteiro.",
    },
    {
      icon: FaMobileAlt,
      title: "Adaptação de Tela",
      text: "O mesmo layout se reorganiza perfeitamente de um celular até uma TV.",
    },
    {
      icon: FaPalette,
      title: "Consistência Visual",
      text: "Cores, espaçamento e tipografia seguem um padrão único em toda a página.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);
  const toggleStep = (n) =>
    setDoneSteps((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  const allDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600">
          <FaPalette className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo 02</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Estilização com CSS Avançado
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Do padrão navegador ao design profissional
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        CSS não é apenas "deixar bonito". É sobre comunicação visual, hierarquia de
        informação e adaptar seu design para qualquer tela. Neste módulo, você
        dominará Flexbox e CSS Grid, as duas ferramentas mais poderosas do CSS
        moderno, permitindo criar layouts que se adaptam perfeitamente de um
        iPhone até uma TV.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            🎨 Design System Implementado
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-300"
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
                  isDone ? "border-purple-300 bg-purple-50/50" : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  aria-label={isDone ? "Marcar como pendente" : "Marcar como concluído"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${
                    isDone
                      ? "bg-purple-500 border-purple-500 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-pink-400"
                  }`}
                >
                  {isDone ? <FaCheckCircle size={16} /> : step.number}
                </button>
                <div className="space-y-1.5 flex-1">
                  <h4 className={`text-base font-bold ${isDone ? "text-purple-800" : "text-neutral-800"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-700 underline">Orientação:</span>{" "}
                    {step.guidance}
                  </p>
                  {step.code && (
                    <code className="inline-block bg-neutral-900 text-pink-300 text-sm font-mono px-3 py-1 rounded-lg mt-2">
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
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-50 to-indigo-50 border border-purple-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-purple-800">
              Layout dominado! Sua página se adapta a qualquer tela agora.
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">🔍 Destaques do Estilo</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
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
        Sua página agora é profissional e se adapta a qualquer tela. Com Flexbox e
        Grid, você dominou o layout moderno. É hora de sair da estática e
        adicionar interatividade real.
      </p>

      <div className="bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">🎨 Visual Pronto!</h3>
        <p className="text-purple-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Sua interface está estilizada e responsiva. No Módulo 3, vamos trazer
          interatividade real com JavaScript.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors"
          >
            Ir para Módulo 3: JavaScript e Interatividade
          </button>
        </div>
      </div>
    </div>
  );
};