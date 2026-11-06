import { StatsCard } from "../../../components/stats/StatsCard";
import statsLocal from "../../../constants/statsData";
import { usePagina } from "../../../services/api";
import { hidratar } from "../../../services/hidratar";

export const Stats = () => {
  const { itens: statsData } = usePagina("estatisticas", { itens: statsLocal }, hidratar);
  return (
    <div id="section-stats" className="w-full flex items-center justify-center bg-neutral-100 py-12 md:px-16 sm:px-10 px-4">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5">
        {statsData.map((stats, index) => (
          <StatsCard key={index} {...stats} />
        ))}
      </div>
    </div>
  );
};
