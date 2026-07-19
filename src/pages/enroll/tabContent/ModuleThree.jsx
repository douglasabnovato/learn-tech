import React, { useState } from "react";
import { FaBolt, FaCommentDots, FaShieldAlt, FaTachometerAlt, FaCheckCircle } from "react-icons/fa";

export const ModuleThree = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Manipulação do DOM e Eventos",
      guidance:
        "Utilize seletores como querySelector para capturar elementos e adicionar interatividade a menus e botões de ação.",
      tip: null,
      code: "document.querySelector()",
    },
    {
      number: 2,
      title: "Validação de Formulários",
      guidance:
        "Implemente lógica para verificar entradas de dados em tempo real. Forneça feedback visual imediato para o usuário caso um campo esteja incorreto.",
      tip: null,
      code: null,
    },
    {
      number: 3,
      title: "Efeitos Dinâmicos e Scroll",
      guidance:
        "Use a API de Intersection Observer para disparar animações apenas quando o elemento estiver visível na tela, otimizando a performance.",
      tip: "Animações disparadas por scroll direto tendem a travar em celulares mais fracos.",
      code: "IntersectionObserver()",
    },
  ];

  const highlights = [
    {
      icon: FaCommentDots,
      title: "Feedback de Estado",
      text: "O JavaScript permite informar ao usuário o que está acontecendo (ex: \"Enviando formulário...\"), reduzindo a ansiedade durante a navegação.",
    },
    {
      icon: FaShieldAlt,
      title: "Prevenção de Erros",
      text: "Através da validação antecipada, evitamos que o usuário cometa erros fatais, garantindo a integridade dos dados enviados.",
    },
    {
      icon: FaTachometerAlt,
      title: "Performance e Fluidez",
      text: "Scripts otimizados garantem que as animações não pesem no carregamento, mantendo a nota alta no Google PageSpeed.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);
  const toggleStep = (n) =>
    setDoneSteps((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  const allDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500">
          <FaBolt className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo 03</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Interatividade e Comportamento (JavaScript)
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Dando vida à sua interface com lógica e dinamismo
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        Se o HTML é o esqueleto e o CSS é a pele, o JavaScript é o sistema nervoso
        da sua aplicação. Neste módulo, aprenderemos a manipular o DOM para criar
        componentes que reagem às ações do usuário. O foco é a interatividade
        funcional: menus inteligentes, scrolls fluidos e validações que garantem
        uma experiência profissional e sem atritos.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            🚀 Passo a Passo: Programando a Experiência
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-300"
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
                  isDone ? "border-orange-300 bg-orange-50/50" : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  aria-label={isDone ? "Marcar como pendente" : "Marcar como concluído"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${
                    isDone
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-amber-400"
                  }`}
                >
                  {isDone ? <FaCheckCircle size={16} /> : step.number}
                </button>
                <div className="space-y-1.5 flex-1">
                  <h4 className={`text-base font-bold ${isDone ? "text-orange-800" : "text-neutral-800"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-700 underline">Orientação:</span>{" "}
                    {step.guidance}
                  </p>
                  {step.code && (
                    <code className="inline-block bg-neutral-900 text-amber-300 text-sm font-mono px-3 py-1 rounded-lg mt-2">
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
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-50 to-red-50 border border-orange-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-orange-800">
              Interatividade dominada! Sua página agora responde ao usuário.
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">🔍 Destaques da Implementação de UX</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600">
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
        Com o JavaScript dominado, sua landing page deixou de ser um cartaz digital
        para se tornar uma ferramenta de conversão ativa. O próximo passo é o
        teste final antes do lançamento: no Módulo 4, aprenderemos sobre
        otimização de performance e como realizar o deploy profissional da sua
        obra-prima.
      </p>

      <div className="bg-gradient-to-tr from-amber-600 via-orange-600 to-red-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">⚡ Sua Aplicação ganhou Vida!</h3>
        <p className="text-amber-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Menus, validações e eventos estão funcionando. Você deixou de ser um web
          designer para se tornar um desenvolvedor que domina comportamentos. O
          próximo passo é mostrar isso para o mundo.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-orange-700 font-bold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Seguir para Módulo 4: Projeto Prático e Deploy
          </button>
        </div>
      </div>
    </div>
  );
};