import React from "react";

export const ModuleFive = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-700">
      {/* Seção 1: Introdução ao Módulo Especial */}
      <div className="space-y-4 border-b border-neutral-100 pb-8">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wider">
              Especial
            </span>
            <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
              Testes e Garantia de Qualidade (QA)
            </h1>
          </div>
          <h2 className="text-lg font-medium text-neutral-500">
            Blindando sua aplicação contra falhas e inconsistências
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          Desenvolver é criar, mas testar é garantir a confiança. Neste módulo, assumimos o papel de 
          <span className="font-semibold text-neutral-800"> Analista de QA</span>. O objetivo é submeter sua landing page 
          a condições reais: ela funciona em todos os navegadores? O formulário de conversão é seguro? 
          Dominar o <span className="font-semibold text-neutral-800">Debugging</span> e a auditoria técnica é o que 
          diferencia um amador de um profissional de elite no ecossistema <span className="italic">learnTECH</span>.
        </p>
      </div>

      {/* Seção 2: Passo a Passo do QA */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🛠️ Checklist de Qualidade Profissional
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">1. Auditoria de Navegação</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Realize o "Caminho do Usuário". Verifique se todos os CTAs (Call to Actions) direcionam corretamente para as seções ou páginas de conversão.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">2. Testes Cross-Browser</h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">Orientação:</span> Valide o layout no Chrome, Safari e Firefox. Use o emulador de dispositivos para garantir que o menu hambúrguer funcione em resoluções de 320px.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-amber-500 bg-amber-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-amber-900">3. Debugging e Performance</h4>
            <p className="text-sm text-amber-800">
              <span className="font-semibold underline">Orientação:</span> Monitore o Console do navegador (<kbd className="bg-amber-100 px-1 text-xs border border-amber-200">F12</kbd>). Corrija qualquer erro de script e valide a velocidade de carregamento sob conexão lenta.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Destaques de UX */}
      <div className="pt-10 border-t border-neutral-200 space-y-8">
        <h3 className="text-xl font-bold text-neutral-800">
          🔍 Destaques da Implementação de UX (QA Edition)
        </h3>

        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Hierarquia de Passos</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Mantivemos a consistência visual com bordas laterais para indicar progresso, mas adicionamos o tom de destaque para reforçar a importância da fase especial de testes.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Feedback Visual de Erro</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O QA garante que o usuário nunca fique "no escuro". Se um erro ocorre, o sistema deve informar o que aconteceu de forma amigável e clara.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">Acessibilidade Garantida</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Testar com foco em QA inclui garantir que o contraste de cores e o tamanho das fontes permitam uma leitura confortável para todos os perfis de usuários.
            </p>
          </div>
        </div>
      </div>

      {/* Mensagem Final de Conclusão */}
      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">🏆 Você concluiu a Trilha do Desenvolvedor!</h3>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Sua jornada pelo Módulo 0 ao Módulo Especial foi concluída com sucesso. Agora você possui uma landing page funcional, estilizada, interativa, publicada e testada. Este é o padrão <span className="text-white font-semibold">byteclass</span>: excelência técnica com foco total na experiência real do usuário.
        </p>
        <div className="pt-2">
           <button
             onClick={onComplete}
             className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
           >
             Emitir Certificado de Conclusão
           </button>
        </div>
      </div>

      
    </div>
  );
};