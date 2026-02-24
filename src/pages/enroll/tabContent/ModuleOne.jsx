import React from "react";

export const ModuleOne = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Seção 1: Introdução ao Módulo 1 */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
            UX Design e Estrutura Semântica (HTML)
          </h1>
          <h2 className="text-lg font-medium text-neutral-500">
            Planejando a jornada do usuário e construindo a base do HTML5
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          Antes de colorir ou animar, precisamos projetar. Uma landing page de alta conversão 
          não nasce por acaso; ela é fruto de um estudo de <span className="font-semibold text-neutral-800">hierarquia visual</span> e 
          <span className="font-semibold text-neutral-800"> UX (User Experience)</span>. Neste módulo, você aprenderá a desenhar o esqueleto da aplicação (Wireframing) e a traduzi-lo para o código usando 
          <span className="font-semibold text-neutral-800"> HTML5 Semântico</span>. O objetivo é garantir que seu site seja acessível, otimizado para SEO e profissional.
        </p>
      </div>

      {/* Seção 2: Passo a Passo do Planejamento ao Código */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🚀 Passo a Passo: Da Estratégia ao Código
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">1. Wireframing e Hierarquia Visual</h4>
            <div className="space-y-1">
              <p className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-700 underline">Orientação:</span> Identifique as seções principais: Cabeçalho, Hero (Destaque), Serviços e Rodapé. Defina onde ficarão os <span className="italic font-medium">Call to Actions</span> (CTAs).
              </p>
              <p className="text-xs text-neutral-500 italic">
                💡 Foco: No contexto learnTECH/Logística, a distinção entre "tenho caminhão" e "tenho carga" deve ser visualmente imediata.
              </p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">2. Planejamento de UX (User Experience)</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Projete a jornada. O usuário deve entender o valor do produto em menos de 5 segundos. Use o padrão de leitura em "Z" para guiar os olhos até o botão de conversão.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">3. Implementação de HTML5 Semântico</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> No VS Code, substitua as divs genéricas por tags como <code className="bg-neutral-100 px-1 rounded">&lt;header&gt;</code>, <code className="bg-neutral-100 px-1 rounded">&lt;main&gt;</code> e <code className="bg-neutral-100 px-1 rounded">&lt;section&gt;</code>.
            </p>
          </div>

          {/* Passo 4 */}
          <div className="space-y-2 border-l-2 border-blue-500 bg-blue-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-blue-900">4. Otimização para SEO e Acessibilidade</h4>
            <p className="text-sm text-blue-800">
              <span className="font-semibold underline">Orientação:</span> Garanta que exista apenas um <kbd className="bg-blue-100 px-1 text-xs border border-blue-200">h1</kbd> por página e que todas as imagens possuam o atributo <code className="font-mono text-xs">alt</code> descritivo.
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
            <h4 className="text-base font-bold text-neutral-700">Planejamento Estratégico</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O uso de wireframes evita o retrabalho. Quando você sabe exatamente onde cada elemento deve estar, o processo de codificação torna-se muito mais focado.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Semântica para o Mercado</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Empresas buscam profissionais que entregam sites que aparecem no topo das buscas e são inclusivos para todos os usuários.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Arquitetura de Conversão</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              A disposição dos elementos foi pensada para guiar o usuário até a conversão final, garantindo que a landing page cumpra seu papel comercial.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Responsividade Nativa</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Ao planejar o conteúdo de forma modular com seções bem definidas, facilitamos a aplicação futura do CSS em qualquer dispositivo.
            </p>
          </div>
        </div>
      </div>

      {/* Parágrafo de Fechamento */}
      <div className="pt-6">
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Com a estrutura semântica finalizada, sua landing page agora tem "corpo" e significado. 
          Você deixou de apenas "escrever tags" para <span className="font-bold text-neutral-800">arquitetar uma solução</span>. 
          O próximo grande passo será dar vida e estilo a esse esqueleto: no <span className="font-bold text-neutral-800">Módulo 2</span>, 
          mergulharemos no CSS para transformar essa estrutura em uma interface visualmente impactante.
        </p>
      </div>

      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
  <h3 className="text-xl font-bold text-white">🏗️ Estrutura Finalizada!</h3>
  <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
    Você transformou um wireframe em código semântico. Sua landing page já tem significado para o Google e acessibilidade para os usuários. Agora, vamos tirar o visual do "padrão navegador" e aplicar estilo.
  </p>
  <div className="pt-2">
    <button
      onClick={onComplete}
      className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
    >
      Próximo: Estilização com CSS
    </button>
  </div>
</div>
    </div>
  );
};