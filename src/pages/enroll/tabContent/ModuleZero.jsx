import React, { useState } from "react";
import {
  FaTools,
  FaRoute,
  FaEye,
  FaKeyboard,
  FaMobileAlt,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

export const ModuleZero = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Organização de Diretórios (Windows Explorer)",
      guidance:
        "No seu Windows Explorer, crie uma pasta raiz chamada learnTECH em um local seguro. Para este teste inicial, crie uma subpasta chamada hello-world.",
      tip: "Use sempre o padrão kebab-case (ex: meu-primeiro-projeto). Evite espaços para prevenir erros de link.",
      code: null,
    },
    {
      number: 2,
      title: "Preparação do Editor (Visual Studio Code)",
      guidance:
        "Abra o VS Code e vá em \"File > Open Folder\" selecionando a pasta criada. No menu de Extensões, instale o Live Server (de Ritwick Dey) e o Prettier.",
      tip: null,
      code: null,
    },
    {
      number: 3,
      title: "Criação da Estrutura Base (HTML5)",
      guidance: "Crie um arquivo index.html. Digite ! e aperte Tab para gerar o código base.",
      tip: "Este atalho é fornecido pela extensão Emmet do VS Code.",
      code: "! + Tab",
    },
    {
      number: 4,
      title: "Visualização e Debug (Google Chrome)",
      guidance:
        "Clique no botão Go Live na barra inferior do VS Code. O Chrome abrirá o endereço local. Aperte F12 para explorar o DevTools.",
      tip: null,
      code: null,
    },
    {
      number: 5,
      title: "Validação do Ciclo de Desenvolvimento",
      guidance:
        "Altere o texto no HTML e salve (Ctrl + S). A página deve atualizar automaticamente. Se isso ocorreu, seu setup está validado!",
      tip: null,
      code: "Ctrl + S",
    },
  ];

  const highlights = [
    {
      icon: FaRoute,
      title: "Hierarquia de Passos",
      text: "Uma linha do tempo visual guia o olho através do processo de forma sequencial e lógica.",
    },
    {
      icon: FaEye,
      title: "Feedback Visual",
      text: "O passo de validação recebe destaque, sinalizando a conclusão bem-sucedida do objetivo.",
    },
    {
      icon: FaKeyboard,
      title: "Acessibilidade de Atalhos",
      text: "Atalhos de teclado aparecem estilizados de forma distinta, fáceis de identificar na leitura técnica.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsividade",
      text: "O grid e o espaçamento garantem que o conteúdo seja totalmente adaptável a qualquer dispositivo.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);
  const toggleStep = (n) =>
    setDoneSteps((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  const allDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-600 to-purple-600">
          <FaTools className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo 00</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Setup e Arquitetura (O Início)
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Configuração do Ambiente e Validação "Hello World"
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        Ter um setup bem configurado não é apenas uma questão de estética, mas de
        eficiência técnica. Ao alinhar o editor de código (VS Code), o navegador
        (Chrome) e a organização de arquivos, você reduz o atrito entre a ideia e a
        execução — permitindo visualizar suas criações instantaneamente através da
        extensão Live Server.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            🚀 Passo a Passo do Setup Profissional
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
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
                      : "border-neutral-300 text-neutral-500 hover:border-indigo-400"
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
                    <code className="inline-block bg-neutral-900 text-purple-300 text-sm font-mono px-3 py-1 rounded-lg mt-2">
                      {step.code}
                    </code>
                  )}
                  {step.tip && (
                    <p className="text-xs text-neutral-500 italic pt-1">💡 {step.tip}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {allDone && (
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-purple-800">
              Ambiente validado! Todos os passos do setup foram concluídos.
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">🔍 Destaques da Implementação de UX</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
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
        Com o seu ambiente validado e o primeiro sinal de vida da sua aplicação no
        navegador, você acaba de cruzar a fronteira entre um entusiasta e um
        desenvolvedor em formação. Agora que a fundação está sólida, estamos
        prontos para subir o nível: no próximo módulo, daremos início à arquitetura
        real da nossa landing page.
      </p>

      <div className="bg-gradient-to-tr from-indigo-600 via-sky-600 to-purple-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">🛠️ Ambiente Configurado!</h3>
        <p className="text-indigo-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Sua "oficina" está pronta. O próximo passo é dar vida ao seu projeto
          começando pela estrutura.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Ir para Módulo 1: Estrutura Semântica
          </button>
        </div>
      </div>
    </div>
  );
};