import React from "react";

export const ModuleThree = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Seção 1: Introdução ao Módulo 3 */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            Interatividade e Comportamento (JavaScript)
          </h1>
          <h2 className="text-lg font-medium text-neutral-500">
            Dando vida à sua interface com lógica e dinamismo
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          Se o HTML é o esqueleto e o CSS é a pele, o <span className="font-semibold text-neutral-800">JavaScript</span> é o sistema nervoso da sua aplicação. 
          Neste módulo, aprenderemos a manipular o <span className="font-semibold text-neutral-800">DOM</span> para criar componentes que reagem 
          às ações do usuário. O foco é a <span className="font-semibold text-neutral-800">interatividade funcional</span>: 
          menus inteligentes, scrolls fluidos e validações que garantem uma experiência profissional e sem atritos.
        </p>
      </div>

      {/* Seção 2: Passo a Passo */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🚀 Passo a Passo: Programando a Experiência
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">1. Manipulação do DOM e Eventos</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Utilize seletores como <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono">querySelector</code> para capturar elementos e adicionar interatividade a menus e botões de ação.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">2. Validação de Formulários</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Implemente lógica para verificar entradas de dados em tempo real. Forneça feedback visual imediato para o usuário caso um campo esteja incorreto.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-blue-500 bg-blue-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-blue-900">3. Efeitos Dinâmicos e Scroll</h4>
            <p className="text-sm text-blue-800">
              <span className="font-semibold underline">Orientação:</span> Use a API de <code className="font-mono text-xs text-blue-900">Intersection Observer</code> para disparar animações apenas quando o elemento estiver visível na tela, otimizando a performance.
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
            <h4 className="text-base font-bold text-neutral-700">Feedback de Estado</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O JavaScript permite informar ao usuário o que está acontecendo (ex: "Enviando formulário..."), reduzindo a ansiedade e incerteza durante a navegação.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Prevenção de Erros</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Através da validação antecipada, evitamos que o usuário cometa erros fatais, garantindo a integridade dos dados enviados para o backend learnTECH.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Performance e Fluidez</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Scripts otimizados garantem que as animações não pesem no carregamento, mantendo a nota alta no Google PageSpeed e a satisfação do usuário.
            </p>
          </div>
        </div>
      </div>

      {/* Fechamento */}
      <div className="pt-6">
        <p className="text-base text-neutral-600 font-normal leading-relaxed text-justify">
          Com o JavaScript dominado, sua landing page deixou de ser um cartaz digital para se tornar uma <span className="font-bold text-neutral-800">ferramenta de conversão ativa</span>. 
          O próximo passo é o teste final antes do lançamento: no <span className="font-bold text-neutral-800">Módulo 4</span>, aprenderemos sobre otimização de performance e como realizar o <span className="font-bold text-neutral-800">Deploy Profissional</span> da sua obra-prima.
        </p>
      </div>

      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
  <h3 className="text-xl font-bold text-white">⚡ Sua Aplicação ganhou Vida!</h3>
  <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
    Menus, validações e eventos estão funcionando. Você deixou de ser um web designer para se tornar um desenvolvedor que domina comportamentos. O próximo passo é mostrar isso para o mundo.
  </p>
  <div className="pt-2">
    <button
      onClick={onComplete}
      className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
    >
      Seguir para Módulo 4: Deploy
    </button>
  </div>
</div>

    </div>
  );
};