import React from "react";

export const ModuleTwo = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Seção 1: Introdução ao Módulo 2 */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Estilização e Responsividade (CSS)
          </h1>
          <h2 className="text-lg font-medium text-neutral-500">
            Transformando estruturas em interfaces profissionais e adaptáveis
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          Dominar o CSS é o que separa um site básico de uma plataforma profissional de alta conversão. 
          Neste módulo, mergulharemos no desenvolvimento <span className="font-semibold text-neutral-800">Mobile-First</span>, 
          garantindo que sua landing page seja impecável em smartphones antes mesmo de pensar no desktop. 
          Você aprenderá a criar layouts complexos com <span className="font-semibold text-neutral-800">Flexbox e Grid</span>, 
          além de implementar um <span className="font-semibold text-neutral-800">Design System</span> consistente e escalável.
        </p>
      </div>

      {/* Seção 2: Passo a Passo */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🚀 Passo a Passo: O Poder do Design
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">1. Implementação do Design System</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Defina variáveis para cores e fontes. Use <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono">rem</code> para garantir que o layout respeite as configurações do usuário.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">2. Layouts com Flexbox e Grid</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Use Flexbox para alinhamentos unidimensionais (header) e Grid para a estrutura bidimensional (galeria de cards de serviços/mercadorias).
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-blue-500 bg-blue-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-blue-900">3. Estratégia Mobile-First</h4>
            <p className="text-sm text-blue-800">
              <span className="font-semibold underline">Orientação:</span> Escreva seu código CSS para telas pequenas primeiro. Use <kbd className="bg-blue-100 px-1 text-xs border border-blue-200">@media</kbd> para ajustar o layout apenas quando houver espaço lateral disponível.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Destaques de UX */}
      <div className="pt-10 border-t border-neutral-200 space-y-8">
        <h3 className="text-xl font-bold text-neutral-800">
          🔍 Destaques da Implementação de UX
        </h3>

        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Hierarquia Visual com CSS</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Diferenciamos pesos de fontes e contrastes de cores para guiar o usuário aos pontos de conversão, como os botões de orçamento.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Consistência do Design System</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O uso de uma paleta restrita e padronizada passa credibilidade e profissionalismo, essencial para o ecossistema learnTECH.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Performance e CSS Limpo</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Evitamos o uso excessivo de bibliotecas externas, focando em propriedades nativas modernas para um carregamento ultra-rápido.
            </p>
          </div>
        </div>
      </div>

      {/* Fechamento */}
      <div className="pt-6">
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Sua landing page agora possui uma identidade visual única e funciona perfeitamente em qualquer dispositivo. 
          O design é o que atrai, mas a inteligência é o que converte. No <span className="font-bold text-neutral-800">Módulo 3</span>, 
          adicionaremos a camada final de interatividade: o <span className="font-bold text-neutral-800">JavaScript</span>, 
          transformando elementos estáticos em ações dinâmicas.
        </p>
      </div>

      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
  <h3 className="text-xl font-bold text-white">🎨 Design System Implementado!</h3>
  <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
    Sua página agora é profissional e se adapta a qualquer tela. Com Flexbox e Grid, você dominou o layout moderno. É hora de sair da estatística e adicionar interatividade real.
  </p>
  <div className="pt-2">
    <button
      onClick={onComplete}
      className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
    >
      Avançar para Módulo 3: JavaScript
    </button>
  </div>
</div>

    </div>
  );
};