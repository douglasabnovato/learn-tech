import { useState } from "react";
import { FaCheck, FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { PageTopBanner } from "../../components/pageTop/PageTopBanner";

import { VideoPlayer } from "../../components/player/VideoPlayer";
import DemoVideo from "./../../assets/programs/1-demo.mp4";
import DemoPoster from "./../../assets/programs/1-demo-poster.jpg";

import { Description } from "./Description";

import { NotFound } from "../error/not-found";

import { Quiz } from "./quiz/Quiz";

import programsData from "../../constants/programsData";

export const EnrollPrograms = () => {
  const { category, id } = useParams();
  const programId = Number(id);

  // Estado para rastrear qual módulo foi completo (-1 = nenhum completo yet)
  const [completedModuleIndex, setCompletedModuleIndex] = useState(-1);

  // Estado para rastrear qual módulo está sendo exibido na aba (corrige o link morto)
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Handler para quando usuário clica botão ao final de um módulo
  const handleCompleteModule = (moduleIndex) => {
    if (moduleIndex > completedModuleIndex) {
      setCompletedModuleIndex(moduleIndex);
    }
    // Avança automaticamente para a aba do próximo módulo
    setActiveModuleIndex(moduleIndex + 1);
  };

  const program =
    programsData.find(
      (p) =>
        p.id === programId &&
        String(p.categoryFilter).toLowerCase() ===
          String(category).toLowerCase(),
    ) || programsData.find((p) => p.id === programId);

  if (!program) return <NotFound />;

  // Cálculo de progresso agora usa a quantidade real de módulos deste programa,
  // não o número 6 cravado — funciona para qualquer curso, com qualquer contagem.
  const totalModules = program.modules?.length || 1;
  const progressPercentage = Math.round(
    ((completedModuleIndex + 1) / totalModules) * 100
  );

  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={program.title} />
      {/* Programs contents */}
      <div className="w-full space-y-16 md:px-16 sm:px-10 px-4">
        <div className="w-full grid md:grid-cols-5 grid-cols-1 md:gap-12 gap-10 grid-row-dense items-start">
          {/** Video and Description */}
          <div className="w-full md:col-span-3 col-span-5 space-y-12">
            {/** Video player */}
            <VideoPlayer src={DemoVideo} poster={DemoPoster} />
            {/** Description with TabContent (modules 0-N) */}
            <Description
              program={program}
              onCompleteModule={handleCompleteModule}
              completedModuleIndex={completedModuleIndex}
              activeModuleIndex={activeModuleIndex}
              onSelectModule={setActiveModuleIndex}
            />
          </div>

          {/** Course Progress section */}
          <div className="w-full md:col-span-2 col-span-5 space-y-8 sticky top-28">
            {/** progress */}
            <div className="w-full border border-neutral-300 md:p-4 p-3 rounded-xl space-y-8">
              {/** title progress */}
              <div className="space-y-2">
                <h5 className="text-base text-neutral-600 font-medium">
                  Seu progresso no curso
                </h5>
                <div className="w-full bg-indigo-500/5 border border-indigo-200 rounded-xl p-4 space-y-2">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-neutral-600 font-medium">
                      Andamento
                    </p>
                    <p className="text-sm text-neutral-600 font-medium">
                      {progressPercentage}% concluído
                    </p>
                  </div>
                  <div className="relative h-2.5 bg-neutral-300 w-full mb-2 cursor-pointer rounded-full">
                    <div
                      className="absolute h-full bg-indigo-500 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/** módulos: agora clicáveis de verdade, trocam a aba ativa */}
              <div className="space-y-4">
                <h5 className="text-base text-neutral-600 font-medium">
                  {program.curriculum || "Conteúdo do Treinamento"}
                </h5>
                <div className="w-full space-y-2">
                  {program.modules &&
                    program.modules.map((mod, index) => {
                      // Determinar status do módulo baseado no completedModuleIndex
                      let status = "pending";
                      if (index <= completedModuleIndex) {
                        status = "completed";
                      } else if (index === completedModuleIndex + 1) {
                        status = "current";
                      }
                      const isActive = index === activeModuleIndex;

                      return (
                        <button
                          key={mod.id}
                          type="button"
                          onClick={() => setActiveModuleIndex(index)}
                          className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg ease-in-out duration-300 text-left ${
                            isActive
                              ? "bg-indigo-500/10 ring-1 ring-indigo-300"
                              : status === "completed"
                                ? "bg-indigo-500/5 hover:bg-indigo-500/10"
                                : "bg-transparent hover:bg-neutral-100"
                          }`}
                        >
                          <div className="flex items-center gap-x-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                                status === "completed"
                                  ? "bg-indigo-500 text-white border-indigo-500"
                                  : status === "current"
                                    ? "bg-white text-indigo-500 border-indigo-500"
                                    : "bg-neutral-100 text-neutral-400 border-neutral-200"
                              }`}
                            >
                              {status === "completed" ? (
                                <FaCheck size={12} />
                              ) : (
                                <FaPlay size={10} />
                              )}
                            </div>
                            <h1
                              className={`text-sm font-semibold flex-1 ${
                                status === "pending"
                                  ? "text-neutral-400"
                                  : "text-neutral-800"
                              }`}
                            >
                              {`Módulo ${mod.id}: ${mod.title}`}
                            </h1>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
            {/** quiz */}
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};