import React from "react";

export const ModuleFour = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Seção 1: Introdução ao Módulo 4 */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Entrega e Deploy (O Projeto Final)
          </h1>
          <h2 className="text-lg font-medium text-neutral-500">
            Otimização extrema e publicação em ambiente de produção
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          O ciclo de desenvolvimento só termina quando o usuário consegue acessar sua aplicação via URL. 
          Neste módulo, focaremos na <span className="font-semibold text-neutral-800">lapidação final</span>. 
          Reduziremos o peso dos arquivos e garantiremos que o carregamento seja instantâneo, utilizando 
          <span className="font-semibold text-neutral-800"> Git e GitHub</span> para conectar seu código 
          a plataformas de hospedagem profissional, realizando o deploy da sua obra-prima.
        </p>
      </div>

      {/* Seção 2: Passo a Passo */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🚀 Passo a Passo: O Lançamento
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">1. Otimização de Ativos</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Passe seu CSS e JS por um minificador. Otimize imagens usando ferramentas como o TinyPNG para reduzir o peso sem perder qualidade visual.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">2. Versionamento e Repositório</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Execute o comando <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono text-xs text-blue-900 font-bold">git push</code> para subir seu projeto para o repositório <span className="italic">learnTECH</span> no GitHub.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-blue-500 bg-blue-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-blue-900">3. Deploy e Publicação</h4>
            <p className="text-sm text-blue-800">
              <span className="font-semibold underline">Orientação:</span> Conecte o repositório à Vercel. Garanta que o status de "Production" esteja ativo e que sua URL personalizada esteja funcionando corretamente com HTTPS.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Destaques de UX */}
      <div className="pt-10 border-t border-neutral-200 space-y-8">
        <h3 className="text-xl font-bold text-neutral-800">
          🔍 Destaques da Entrega Profissional
        </h3>

        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Performance Insuperável</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Um site rápido melhora o rankeamento no Google e a experiência de quem acessa via redes 4G instáveis, algo crítico para o usuário final.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Fluxo de CI/CD</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              A automação do deploy permite que você corrija bugs ou adicione novas funcionalidades em minutos, mantendo a aplicação sempre atualizada.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Segurança de Dados</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O uso de hospedagens modernas garante certificados SSL automáticos, protegendo as informações de contato e transações dos seus clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Fechamento Final */}
      <div className="pt-6">
        <p className="text-base text-neutral-600 font-normal leading-relaxed text-justify">
          Parabéns! Sua landing page está no ar. Você concluiu o ciclo completo de desenvolvimento web. 
          Mas para um desenvolvedor de elite, o trabalho nunca para. No nosso <span className="font-bold text-neutral-800">Módulo Especial</span>, 
          aprenderemos a garantir que esse projeto se mantenha resiliente através de <span className="font-bold text-neutral-800">Testes e QA</span>.
        </p>
      </div>

      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
  <h3 className="text-xl font-bold text-white">🚀 O Projeto está no Ar!</h3>
  <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
    Sua URL está ativa e seu código está seguro no GitHub. Você completou o ciclo de produção. Mas um desenvolvedor de elite nunca para: vamos garantir que seu código seja inquebrável.
  </p>
  <div className="pt-2">
    <button
      onClick={onComplete}
      className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
    >
      Finalizar com Módulo Especial: QA
    </button>
  </div>
</div>

    </div>
  );
};