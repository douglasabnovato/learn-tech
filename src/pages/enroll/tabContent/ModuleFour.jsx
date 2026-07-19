import React, { useState } from "react";
import {
  FaRocket,
  FaGithub,
  FaBolt,
  FaShieldAlt,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

export const ModuleFour = ({ onComplete }) => {
  const steps = [
    {
      number: 1,
      title: "Otimização de Ativos",
      guidance:
        "Passe seu CSS e JS por um minificador. Otimize imagens usando ferramentas como o TinyPNG para reduzir o peso sem perder qualidade visual.",
      code: null,
    },
    {
      number: 2,
      title: "Versionamento e Repositório",
      guidance: "Execute o comando para subir seu projeto para o repositório no GitHub.",
      code: "git push origin main",
    },
    {
      number: 3,
      title: "Deploy e Publicação",
      guidance:
        "Conecte o repositório à Vercel. Garanta que o status de \"Production\" esteja ativo e que sua URL personalizada esteja funcionando corretamente com HTTPS.",
      code: null,
    },
  ];

  const highlights = [
    {
      icon: FaBolt,
      title: "Performance Insuperável",
      text: "Um site rápido melhora o rankeamento no Google e a experiência de quem acessa via redes 4G instáveis, algo crítico para o usuário final.",
    },
    {
      icon: FaGithub,
      title: "Fluxo de CI/CD",
      text: "A automação do deploy permite que você corrija bugs ou adicione novas funcionalidades em minutos, mantendo a aplicação sempre atualizada.",
    },
    {
      icon: FaShieldAlt,
      title: "Segurança de Dados",
      text: "O uso de hospedagens modernas garante certificados SSL automáticos, protegendo as informações de contato e transações dos seus clientes.",
    },
  ];

  const [doneSteps, setDoneSteps] = useState([]);

  const toggleStep = (number) => {
    setDoneSteps((prev) =>
      prev.includes(number) ? prev.filter((n) => n !== number) : [...prev, number]
    );
  };

  const allStepsDone = doneSteps.length === steps.length;

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Cabeçalho do módulo */}
      <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-600 to-teal-600">
          <FaRocket className="text-white text-2xl" />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-semibold text-neutral-400">Módulo 04</span>
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Entrega e Deploy (O Projeto Final)
          </h1>
          <h2 className="text-base font-medium text-neutral-500">
            Otimização extrema e publicação em ambiente de produção
          </h2>
        </div>
      </div>

      <p className="text-base font-normal text-neutral-600 leading-relaxed max-w-4xl">
        O ciclo de desenvolvimento só termina quando o usuário consegue acessar sua
        aplicação via URL. Neste módulo, focaremos na lapidação final. Reduziremos o
        peso dos arquivos e garantiremos que o carregamento seja instantâneo,
        utilizando Git e GitHub para conectar seu código a plataformas de hospedagem
        profissional, realizando o deploy da sua obra-prima.
      </p>

      {/* Passo a passo com progresso próprio (gamificação leve) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
            🚀 Passo a Passo: O Lançamento
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 transition-all duration-300"
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
                className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 ${isDone
                    ? "border-teal-300 bg-teal-50/50"
                    : "border-neutral-200 bg-white"
                  }`}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  aria-label={isDone ? "Marcar passo como pendente" : "Marcar passo como concluído"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-colors duration-200 ${isDone
                      ? "bg-teal-500 border-teal-500 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-indigo-400"
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
                  {step.code && (
                    <code className="block bg-neutral-900 text-teal-300 text-sm font-mono px-3 py-2 rounded-lg mt-2 w-fit">
                      {step.code}
                    </code>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {allStepsDone && (
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-50 to-teal-50 border border-teal-200 px-4 py-3">
            <span className="text-2xl">🏅</span>
            <p className="text-sm font-semibold text-teal-800">
              Checklist completo! Você seguiu todos os passos do lançamento.
            </p>
          </div>
        )}
      </div>

      {/* Destaques em grid de 3 colunas */}
      <div className="pt-6 border-t border-neutral-200 space-y-6">
        <h3 className="text-xl font-bold text-neutral-800">
          🔍 Destaques da Entrega Profissional
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
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

      {/* Dica destacada (estilo callout, separado do texto corrido) */}
      <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
        <FaLightbulb className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-900">
          Vercel oferece hospedagem gratuita com deploy em segundos — não é preciso
          cartão de crédito para publicar seu primeiro projeto.
        </p>
      </div>

      <p className="text-base text-neutral-600 font-normal leading-relaxed">
        Parabéns! Sua landing page está no ar. Você concluiu o ciclo completo de
        desenvolvimento web. Mas para um desenvolvedor de elite, o trabalho nunca
        para. No nosso Módulo Especial, aprenderemos a garantir que esse projeto se
        mantenha resiliente através de Testes e QA.
      </p>

      {/* Caixa de fechamento com gradiente da marca */}
      <div className="bg-gradient-to-tr from-indigo-600 via-sky-600 to-teal-600 p-8 rounded-2xl text-center space-y-4 mt-4">
        <h3 className="text-xl font-bold text-white">🚀 O Projeto está no Ar!</h3>
        <p className="text-indigo-50 text-sm max-w-2xl mx-auto leading-relaxed">
          Sua URL está ativa e seu código está seguro no GitHub. Você completou o
          ciclo de produção. Mas um desenvolvedor de elite nunca para: vamos
          garantir que seu código seja inquebrável.
        </p>
        <div className="pt-2">
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Finalizar com Módulo Especial: QA
          </button>
        </div>
      </div>
    </div>
  );
};