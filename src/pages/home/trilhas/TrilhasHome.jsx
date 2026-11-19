import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import trilhasLocal from "../../../constants/trilhasData";
import { usePagina } from "../../../services/api";

/* Chamada da home para as trilhas por objetivo (#132): um cartão por trilha, que leva direto a ela. */
export const TrilhasHome = () => {
  const { titulo, introducao, itens = [] } = usePagina("trilhas", trilhasLocal);
  if (!itens.length) return null;
  return (
    <section aria-labelledby="trilhas-home" className="w-full md:px-16 sm:px-10 px-4 space-y-8">
      <div className="max-w-3xl space-y-3">
        <h2 id="trilhas-home" className="text-3xl font-bold text-neutral-800">
          {titulo}
        </h2>
        <p className="text-lg text-neutral-700">{introducao}</p>
      </div>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {itens.map((t) => (
          <li key={t.id}>
            <Link
              to={`/trilhas#${t.id}`}
              className="h-full flex flex-col justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-6 hover:border-sky-300 hover:shadow-sm ease-in-out duration-300 group"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-800">{t.titulo}</h3>
                <p className="text-base text-neutral-700 leading-relaxed">{t.objetivo}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                {t.passos.length} passos <FaArrowRight aria-hidden="true" className="group-hover:translate-x-1 ease-in-out duration-300" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

/* Fim de TrilhasHome.jsx */
