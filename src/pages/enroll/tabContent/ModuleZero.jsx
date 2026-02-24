import React from "react";

export const ModuleZero = ({ onComplete }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500">
      {/* Seção 1: Introdução ao Módulo 0 */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl pt-6 font-bold text-neutral-800 tracking-tight">
            Setup e Arquitetura (O Início)
          </h1>
          <h2 className="text-lg font-medium text-neutral-500">
            Configuração do Ambiente e Validação "Hello World": Da preparação da
            máquina à primeira visualização em tempo real
          </h2>
        </div>

        <p className="text-base font-normal text-neutral-600 leading-relaxed text-justify max-w-4xl">
          Ter um setup bem configurado não é apenas uma questão de estética, mas
          de eficiência técnica. Ao alinhar o editor de código (
          <span className="font-semibold text-neutral-800">VS Code</span>), o
          navegador (
          <span className="font-semibold text-neutral-800">Chrome</span>) e a
          organização de arquivos, você reduz o atrito entre a ideia e a
          execução. O objetivo deste módulo é garantir que sua "oficina" esteja
          funcionando perfeitamente, permitindo que você visualize suas criações
          instantaneamente através da extensão{" "}
          <span className="font-semibold text-neutral-800">Live Server</span>.
        </p>
      </div>

      {/* Seção 2: Passo a Passo do Setup Profissional */}
      <div className="space-y-6">
        <h3 className="text-xl text-neutral-800 font-bold flex items-center gap-2">
          🚀 Passo a Passo do Setup Profissional
        </h3>

        <div className="grid gap-8">
          {/* Passo 1 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">
              1. Organização de Diretórios (Windows Explorer)
            </h4>
            <div className="space-y-1">
              <p className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-700 underline">
                  Orientação:
                </span>{" "}
                No seu Windows Explorer, crie uma pasta raiz chamada{" "}
                <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono">
                  learnTECH
                </code>{" "}
                em um local seguro. Para este teste inicial, crie uma subpasta
                chamada{" "}
                <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono">
                  hello-world
                </code>
                .
              </p>
              <p className="text-xs text-neutral-500 italic">
                💡 Dica de Ouro: Use sempre o padrão kebab-case (ex:
                meu-primeiro-projeto). Evite espaços para prevenir erros de
                link.
              </p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">
              2. Preparação do Editor (Visual Studio Code)
            </h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">
                Orientação:
              </span>{" "}
              Abra o VS Code e vá em "File {">"} Open Folder" selecionando a
              pasta criada. No menu de Extensões, instale o{" "}
              <span className="font-bold text-neutral-800">Live Server</span>{" "}
              (de Ritwick Dey) e o{" "}
              <span className="font-bold text-neutral-800">Prettier</span>.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">
              3. Criação da Estrutura Base (HTML5)
            </h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">
                Orientação:
              </span>{" "}
              Crie um arquivo{" "}
              <code className="bg-neutral-100 px-1 rounded text-neutral-800 font-mono">
                index.html
              </code>
              . Digite{" "}
              <kbd className="bg-neutral-200 px-1.5 py-0.5 rounded shadow-sm text-xs">
                !
              </kbd>{" "}
              e aperte{" "}
              <kbd className="bg-neutral-200 px-1.5 py-0.5 rounded shadow-sm text-xs">
                Tab
              </kbd>{" "}
              para gerar o código base. Entre as tags body, adicione seu H1.
            </p>
          </div>

          {/* Passo 4 */}
          <div className="space-y-2 border-l-2 border-neutral-200 pl-4">
            <h4 className="text-base font-bold text-neutral-800">
              4. Visualização e Debug (Google Chrome)
            </h4>
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-700 underline">
                Orientação:
              </span>{" "}
              Clique no botão{" "}
              <span className="font-bold text-blue-600 italic">Go Live</span> na
              barra inferior do VS Code. O Chrome abrirá o endereço local.
              Aperte{" "}
              <kbd className="bg-neutral-200 px-1.5 py-0.5 rounded shadow-sm text-xs">
                F12
              </kbd>{" "}
              para explorar o DevTools.
            </p>
          </div>

          {/* Passo 5 */}
          <div className="space-y-2 border-l-2 border-blue-500 bg-blue-50/30 p-4 rounded-r-lg">
            <h4 className="text-base font-bold text-blue-900">
              5. Validação do Ciclo de Desenvolvimento
            </h4>
            <p className="text-sm text-blue-800">
              <span className="font-semibold underline">Orientação:</span>{" "}
              Altere o texto no HTML e salve (
              <kbd className="bg-blue-100 px-1.5 py-0.5 rounded shadow-sm text-xs border border-blue-200">
                Ctrl + S
              </kbd>
              ). A página deve atualizar automaticamente. Se isso ocorreu, seu
              setup está validado!
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Destaques de UX - Estruturada em Títulos e Subtítulos */}
      <div className="pt-10 border-t border-neutral-200 space-y-8">
        <h3 className="text-xl font-bold text-neutral-800">
          🔍 Destaques da Implementação de UX
        </h3>

        <div className="space-y-6">
          {/* Item 1 */}
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">
              Hierarquia de Passos
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Utilizamos uma borda lateral (border-l-2) para criar uma linha do
              tempo visual, guiando o olho do usuário através do processo de
              forma sequencial e lógica.
            </p>
          </div>

          {/* Item 2 */}
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">
              Feedback Visual
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O Passo 5 (Validação) recebeu um destaque sutil em azul,
              sinalizando a conclusão bem-sucedida do objetivo ("Hello World") e
              reforçando a sensação de progresso.
            </p>
          </div>

          {/* Item 3 */}
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">
              Acessibilidade de Atalhos
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Implementamos a tag <code className="text-xs">&lt;kbd&gt;</code>{" "}
              para estilizar atalhos de teclado, tornando-os visualmente
              distintos e fáceis de identificar durante a leitura técnica.
            </p>
          </div>

          {/* Item 4 */}
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-700">
              Responsividade
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              O grid e o espaçamento (space-y-x) garantem que o conteúdo seja
              totalmente adaptável, evitando que o texto se torne ilegível ou
              amontoado em dispositivos móveis.
            </p>
          </div>
        </div>
      </div>

      {/* Parágrafo de Fechamento do Módulo 0 */}
      <div className="pt-6">
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Com o seu ambiente validado e o primeiro sinal de vida da sua
          aplicação no navegador, você acaba de cruzar a fronteira entre um
          entusiasta e um{" "}
          <span className="font-bold text-neutral-800">
            desenvolvedor em formação
          </span>
          . Este setup será o seu porto seguro durante todo o bootcamp,
          garantindo que cada linha de código escrita seja visualizada e
          refinada em tempo real. Agora que a fundação está sólida, estamos
          prontos para subir o nível: no próximo módulo, deixaremos o "Hello
          World" para trás para darmos início à{" "}
          <span className="font-bold text-neutral-800">arquitetura real</span>{" "}
          da nossa landing page.
        </p>
      </div>

      <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center space-y-4 mt-12">
  <h3 className="text-xl font-bold text-white">🛠️ Ambiente Configurado!</h3>
  <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
    Sua "oficina" está pronta. Com o VS Code e o Live Server operacionais, você eliminou as barreiras técnicas iniciais. O próximo passo é dar vida ao seu projeto começando pela estrutura.
  </p>
  <div className="pt-2">
    <button
      onClick={onComplete}
      className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
    >
      Ir para Módulo 1: Estrutura Semântica
    </button>
  </div>
</div>

    </div>
  );
};
