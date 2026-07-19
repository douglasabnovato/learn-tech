import React, { useState } from "react";
import { FaSearch, FaClipboardCheck, FaGlobe, FaTasks, FaCheckCircle } from "react-icons/fa";

export const ModuleFive = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Testes Manuais",
      guidance:
        "Não confie em \"parecia funcionar\". Teste cada interação: clique em botões, envie formulários com dados válidos e inválidos, teste em conexões lentas.",
      tip: "Testes manuais encontram bugs que automação não consegue.",
      code: null,
    },
    {
      number: 2,
      title: "Cross-Browser Testing",
      guidance:
        "Garanta que sua landing page funcione perfeitamente em Chrome, Safari, Edge e Firefox. Use BrowserStack se necessário para testar em dispositivos reais.",
      tip: "Usuários iOS, Android e Windows precisam da mesma experiência.",
      code: null,
    },
    {
      number: 3,
      title: "Validação de Dados",
      guidance:
        "Testes unitários simples em JavaScript para validar entradas de e-mail, campos obrigatórios, senhas fortes.",
      tip: "Validação é a primeira linha de defesa contra dados ruins.",
      code: null,
    },
    {
      number: 4,
      title: "Checklist Final de Publicação",
      guidance:
        "Antes de considerar o projeto pronto, revise: todos os links funcionam? O formulário valida corretamente? O site carrega bem em celular? Existe algum texto de placeholder esquecido?",
      tip: "Esta checklist final é o que separa um projeto \"terminado\" de um projeto realmente pronto para mostrar a alguém.",
      code: null,
    },
  ];

  const highlights = [
    {
      icon: FaSearch,
      title: "Olhar de QA",
      text: "Testar como se fosse o usuário mais exigente é o que revela problemas antes que alguém de fora os encontre.",
    },
    {
      icon: FaGlobe,
      title: "Consistência entre Navegadores",
      text: "O mesmo código pode se comportar de forma sutilmente diferente em cada navegador — testar evita surpresas.",
    },
    {
      icon: FaTasks,
      title: "Checklist como Hábito",
      text: "Profissionais não confiam na memória: uma checklist de publicação vira parte do processo, não um extra.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);
  const toggleStep = (n) =>
    setDoneSteps((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  const allDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-600">
          <FaClipboardCheck className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo Especial</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            QA, Testes e Otimização
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Polimento final: garantindo excelência técnica
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        Um desenvolvedor não é apenas quem escreve código, mas quem garante que
        funcione perfeitamente em qualquer situação. Neste módulo especial, você
        aprenderá técnicas de QA (Quality Assurance) que separam quem só termina o
        projeto de quem entrega o projeto pronto de verdade.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            🔍 Garantia de Qualidade
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
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
                  isDone ? "border-teal-300 bg-teal-50/50" : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  aria-label={isDone ? "Marcar como pendente" : "Marcar como concluído"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${
                    isDone
                      ? "bg-teal-500 border-teal-500 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-emerald-400"
                  }`}
                >
                  {isDone ? <FaCheckCircle size={16} /> : step.number}
                </button>
                <div className="space-y-1.5 flex-1">
                  <h4 className={`text-base font-bold ${isDone ? "text-teal-800" : "text-neutral-800"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-700 underline">Orientação:</span>{" "}
                    {step.guidance}
                  </p>
                  {step.tip && <p className="text-xs text-neutral-500 italic pt-1">💡 {step.tip}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {allDone && (
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-teal-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-teal-800">
              Checklist de qualidade completo! Seu projeto está pronto de verdade.
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">🔍 Por que QA importa</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600">
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
        Sua jornada pelo Módulo 0 ao Módulo Especial foi concluída com sucesso.
        Agora você possui uma landing page funcional, estilizada, interativa,
        publicada e testada.
      </p>

      <div className="bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">🎓 Curso Concluído!</h3>
        <p className="text-teal-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Você construiu, estilizou, deu vida e publicou uma aplicação real, do
          zero até o ar. Este é o padrão de excelência técnica com foco total na
          experiência real do usuário.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors"
          >
            Emitir Certificado de Conclusão
          </button>
        </div>
      </div>
    </div>
  );
};