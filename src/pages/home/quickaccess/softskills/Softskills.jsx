import React from "react";
import { VideoGrid } from "../../../../components/videoGrid/VideoGrid";
import * as premiosLocal from "../../../../constants/premiosData";
import { usePagina } from "../../../../services/conteudo";

export const Softskills = () => {
  const { softSkillsData } = usePagina("mentorias", premiosLocal);
  return (
    <VideoGrid
      eyebrow="Além do código"
      pageTitle="Soft Skills"
      subtitle="Habilidade técnica te faz escrever código. O que sustenta uma carreira é outra coisa: como você lida com pressão, como comunica o que fez, como resolve um problema que não tem resposta pronta no Stack Overflow. As quatro conversas aqui cobrem os três eixos que aparecem toda vez que se fala no que separa quem cresce rápido de quem trava — inteligência emocional, comunicação e resolução de problemas. Sem fórmula mágica, só o que costuma funcionar na prática."
      items={softSkillsData}
      accentGradient="from-sky-600 via-blue-600 to-indigo-700"
    />
  );
};