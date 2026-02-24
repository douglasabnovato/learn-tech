import React from "react";
import { TabContent } from "./tabContent/TabContent";

export const Description = () => {
  return (
    <div className="w-full space-y-16">
      {/* Title Section */}
      <div className="w-full space-y-2">
        <p className="text-sm text-neutral-600 font-normal bg-neutral-200/60 border border-neutral-100 rounded-full w-fit px-3 py-1">
          Desenvolvimento Web
        </p>
        <h1 className="text-2xl text-neutral-800 font-semibold">
          Um ótimo lugar para mergulhar em novos recursos de aprendizagem,
          livros e cursos.
        </h1>
        {/* Parágrafo 1: O Core da Aplicação Web */}
        <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
          Uma <span className="font-bold">aplicação web</span> é um sistema
          interativo acessível pelo navegador, construído sobre o tripé
          fundamental do frontend. O <span className="font-bold">HTML</span>{" "}
          atua como o esqueleto, definindo a estrutura e o significado do
          conteúdo; o <span className="font-bold">CSS</span> é a camada estética
          que dita o estilo, as cores e o layout; enquanto o{" "}
          <span className="font-bold">JavaScript</span> provê a inteligência e o
          comportamento, permitindo que a página responda às ações do usuário em
          tempo real.
        </p>

        {/* Parágrafo 2: UX e Responsividade (O diferencial do ecossistema) */}
        <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
          O sucesso de um produto digital reside na harmonia entre forma e
          função. Através do{" "}
          <span className="font-bold">UX (User Experience)</span>, projetamos
          cada interação com o objetivo de tornar a jornada do usuário intuitiva
          e eficiente. Aliado a isso, a{" "}
          <span className="font-bold">responsividade</span> garante que essa
          experiência seja preservada em qualquer tela, adaptando o design de
          forma inteligente desde smartphones até monitores de alta resolução,
          eliminando barreiras de acesso.
        </p>

        {/* Parágrafo 3: O Objetivo deste curso (Seu texto original refinado) */}
        <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
          Nesta jornada, você aprenderá a construir uma landing page
          profissional do zero, unindo estas tecnologias em um{" "}
          <span className="font-bold">setup de desenvolvimento</span> otimizado.
          O foco não é apenas escrever código, mas compreender como entregar uma
          aplicação moderna, produtiva e pronta para os desafios reais do
          mercado de tecnologia.
        </p>

        <div className="w-full space-y-8">
          {/* Seção Sobre o Curso */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-800 tracking-tight">
              Construa sua base sólida na Web
            </h2>
            <p className="text-sm font-normal text-neutral-600 leading-relaxed text-justify">
              Este bootcamp foi projetado para ser o seu primeiro grande passo
              no mercado de tecnologia. Mais do que um curso, é uma imersão
              prática que transforma iniciantes em desenvolvedores capazes de
              arquitetar, estilizar e dar vida a aplicações modernas. Através de
              uma metodologia direta ao ponto, você dominará as ferramentas que
              as maiores empresas utilizam para criar produtos digitais de alto
              impacto.
            </p>
          </div>

          {/* Seção Ementa Detalhada */}
          <div className="space-y-6">
            <h3 className="text-xl text-neutral-700 font-semibold border-b border-neutral-200 pb-2">
              O que você vai aprender
            </h3>

            <div className="grid gap-6">
              {/* Módulo 1 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-800">
                  Módulo 1: Setup e Arquitetura (O Início)
                </h4>
                <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Setup de Produtividade:
                    </span>{" "}
                    Configuração do VS Code, extensões essenciais e estrutura de
                    pastas profissional.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Análise de Requisitos:
                    </span>{" "}
                    Entender o objetivo da conversão (ex: landing pages de
                    conversão).
                  </li>
                </ul>
              </div>

              {/* Módulo 2 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-800">
                  Módulo 2: UX Design e Estrutura Semântica (HTML)
                </h4>
                <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Wireframing e UX:
                    </span>{" "}
                    Estudo de hierarquia visual e posicionamento estratégico de
                    CTAs (Enroll/Frete).
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      HTML5 Semântico:
                    </span>{" "}
                    Uso de tags estruturais para melhor acessibilidade e SEO.
                  </li>
                </ul>
              </div>

              {/* Módulo 3 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-800">
                  Módulo 3: Estilização e Responsividade (CSS)
                </h4>
                <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Layout Moderno:
                    </span>{" "}
                    Domínio de Flexbox e CSS Grid para interfaces dinâmicas.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Mobile-First:
                    </span>{" "}
                    Desenvolvimento adaptativo focado em dispositivos móveis.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Design System:
                    </span>{" "}
                    Padronização de cores e tipografia da identidade learnTECH.
                  </li>
                </ul>
              </div>

              {/* Módulo 4 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-800">
                  Módulo 4: Interatividade e Comportamento (JavaScript)
                </h4>
                <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Manipulação de DOM:
                    </span>{" "}
                    Menus interativos, scroll suave e validação de formulários.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Efeitos Dinâmicos:
                    </span>{" "}
                    Animações para retenção de atenção do usuário.
                  </li>
                </ul>
              </div>

              {/* Módulo 5 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-800">
                  Módulo 5: Entrega e Deploy (O Projeto Final)
                </h4>
                <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Otimização:
                    </span>{" "}
                    Ajuste de performance, minificação e carregamento
                    instantâneo.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-700">
                      Publicação:
                    </span>{" "}
                    Deploy profissional via GitHub para Vercel ou Netlify.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de transição para as abas de conteúdo */}
        <div className="space-y-4">
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            Explore detalhadamente o que preparamos para sua formação nas seções
            abaixo. Você terá orientações com uma{" "}
            <span className="font-bold">visão geral</span> completa do projeto,
            como acessar todos os <span className="font-bold">recursos</span>{" "}
            técnicos e arquivos de apoio necessários, e poderá conferir as{" "}
            <span className="font-bold">avaliações</span> de quem já transformou
            sua carreira através deste conteúdo.
          </p>
        </div>
      </div>
      {/* Tab Section */}
      <TabContent />
    </div>
  );
};
