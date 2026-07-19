import React from "react";
import { VideoGrid } from "../../../../components/videoGrid/VideoGrid";
import { mentoriasData } from "../../../../constants/premiosData";

export const Mentorias = () => {
  return (
    <VideoGrid
      eyebrow="Como estruturar seu crescimento"
      pageTitle="Mentorias"
      subtitle="As quatro conversas aqui giram em torno da mesma pergunta prática: como transformar vontade de crescer em um plano que realmente se cumpre. Você vai ver como estruturar um Plano de Desenvolvimento Individual usando duas ferramentas concretas — a metodologia SMART, que transforma objetivo vago em meta mensurável, e o modelo 70/20/10, que distribui seu tempo entre prática direta, mentoria e curso formal. Não é teoria de RH engavetada — é o que gestores de verdade usam para avaliar quem está evoluindo."
      items={mentoriasData}
      accentGradient="from-amber-600 via-orange-600 to-red-700"
    />
  );
};