import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import trilhasLocal from "../../constants/trilhasData";
import blogLocal from "../../constants/blogData";
import { usePagina } from "../../services/api";
import { useProgramas } from "../../services/conteudo";
import { formatarTempo, montarTrilha } from "../../services/trilhas";
import { Seo } from "../../components/common/Seo";

/* Trilhas por objetivo (#132): curadoria da API (learn-tech/paginas/trilhas.json) com programas e artigos
   que já existem. trilhasData.js é a cópia local gerada pelo learntech-content (npm run copias). */
function useTrilhas() {
  const pagina = usePagina("trilhas", trilhasLocal);
  const { itens: artigos } = usePagina("blog", { itens: blogLocal });
  const programas = useProgramas();
  return { ...pagina, itens: (pagina.itens ?? []).map((t) => montarTrilha(t, programas, artigos)) };
}

/* Uma trilha: objetivo, para quem, tempo total e os passos em ordem. */
export const Trilha = ({ trilha }) => (
  <section id={trilha.id} aria-labelledby={`${trilha.id}-titulo`} className="scroll-mt-28 rounded-3xl border border-neutral-200 bg-white p-6 md:p-10 space-y-6">
    <div className="space-y-3">
      <h2 id={`${trilha.id}-titulo`} className="text-2xl md:text-3xl font-bold text-neutral-800">
        {trilha.titulo}
      </h2>
      <p className="text-lg text-neutral-800">{trilha.objetivo}</p>
      <p className="text-base text-neutral-600">{trilha.paraQuem}</p>
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-full px-4 py-1">
        <FaRegClock aria-hidden="true" /> {trilha.passos.length} passos · {trilha.tempo}
      </p>
    </div>
    <ol className="space-y-4">
      {trilha.passos.map((passo, i) => (
        <li key={`${passo.tipo}-${passo.id}`} className="flex gap-4">
          <span aria-hidden="true" className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700 text-neutral-50 font-bold">
            {i + 1}
          </span>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              {passo.rotulo} · {formatarTempo(passo.minutos)}
            </p>
            <Link to={passo.link} className="text-lg font-bold text-neutral-800 hover:text-sky-800 underline-offset-4 hover:underline">
              {passo.titulo}
            </Link>
            <p className="text-base text-neutral-700 leading-relaxed">{passo.porque}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
Trilha.propTypes = {
  trilha: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    objetivo: PropTypes.string.isRequired,
    paraQuem: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
    passos: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export const Trilhas = () => {
  const { titulo, introducao, itens } = useTrilhas();
  const { hash } = useLocation();

  /* Link da home leva direto à trilha (/trilhas#id); sem âncora, abre no topo. */
  useEffect(() => {
    const alvo = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (alvo) alvo.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="w-full min-h-screen">
      <Seo titulo={titulo} descricao={introducao} />
      <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl font-medium text-neutral-600">Escolha pelo objetivo</p>
          <h1 className="md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.2]">
            {titulo}
          </h1>
          <p className="text-lg font-normal text-neutral-800">{introducao}</p>
          <nav aria-label="Trilhas" className="flex flex-wrap gap-3 pt-2">
            {itens.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="text-sm font-semibold text-neutral-800 bg-white/80 border border-neutral-200 rounded-full px-4 py-2 hover:border-sky-300 hover:text-sky-800">
                {t.titulo}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-12 space-y-10 bg-neutral-50">
        {itens.map((t) => (
          <Trilha key={t.id} trilha={t} />
        ))}
        <p className="text-base text-neutral-700">
          Prefere montar o seu caminho?{" "}
          <Link to="/programs" className="inline-flex items-center gap-1 font-semibold text-sky-800 underline underline-offset-4">
            Veja todos os programas <FaArrowRight aria-hidden="true" />
          </Link>
        </p>
      </div>
    </div>
  );
};

/* Fim de Trilhas.jsx */
