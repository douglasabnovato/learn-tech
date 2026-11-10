import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { ProgramsCard } from "../../components/programs/ProgramsCard";
import { useProgramas } from "../../services/conteudo";
import { Seo } from "../../components/common/Seo";
import { filtrarProgramas, recorteParaQuery } from "../../services/busca";

export const Programs = () => {
  const programsData = useProgramas();
  const categorias = useMemo(
    () => [...new Map(programsData.map((p) => [p.categoryFilter, p.category])).entries()],
    [programsData],
  );
  // O recorte (categoria e termo) mora na URL: ?categoria=web&q=react. Dá para compartilhar e o "voltar" o mantém.
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") ?? "";
  const selectedCategory = searchParams.get("categoria") || "all";
  const atualizarRecorte = (categoria, termo) => {
    setSearchParams(new URLSearchParams(recorteParaQuery(categoria, termo)), { replace: true });
  };
  const setSearchTerm = (termo) => atualizarRecorte(selectedCategory, termo);
  const setSelectedCategory = (categoria) => atualizarRecorte(categoria, searchTerm);
  const [visibleCount, setVisibleCount] = useState(4);

  // Resetar paginação ao mudar busca/categoria
  useEffect(() => {
    setVisibleCount(4);
  }, [searchTerm, selectedCategory]);

  // Busca sem acento e sem diferença de maiúsculas ("logica" acha "Lógica").
  const filteredPrograms = useMemo(
    () => filtrarProgramas(programsData, searchTerm, selectedCategory),
    [programsData, searchTerm, selectedCategory],
  );

  const visiblePrograms = filteredPrograms.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      <Seo titulo="Programas" descricao="Programas gratuitos de tecnologia em ordem, com prática e quiz: web, back-end, carreira, CRM e mais. Busque pelo título ou filtre por categoria." />
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Programas"} />
      {/* Programs contends */}
      <div className="space-y-8 w-full md:px-16 sm:px-10 px-4">
        {/* Programs search and filter section */}
        <div className="w-full flex items-center gap-6">
          {/* Search section */}
          <input
            type="text"
            placeholder="Buscar programas..."
            aria-label="Buscar programas pelo título ou categoria"
            value={searchTerm} // ✅ valor controlado
            onChange={(e) => setSearchTerm(e.target.value)} // ✅ atualiza estado
            className="max-w-sm w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 border border-neutral-300 focus:border-sky-500 outline-none ease-in-out duration-300"
          />

          {/* Filter or sort section */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filtrar programas por categoria"
            className="max-w-sm w-fit rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 focus:border-sky-500 outline-none ease-in-out duration-300"
          >
            <option value="all">Todas Categorias</option>
            {categorias.map(([valor, nome]) => (
              <option key={valor} value={valor}>
                {nome}
              </option>
            ))}
</select>
        </div>
        {/* Programs data */}
        <section className="space-y-4">
          {/* Cabeçalho + contador */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-neutral-900">
              Programas
            </h2>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-sky-100 text-sky-700 border border-sky-300">
              {filteredPrograms.length}{" "}
              {filteredPrograms.length === 1 ? "treinamento" : "treinamentos"}
            </span>
          </div>

          {/* Grid de cards */}
          <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-8">
            {visiblePrograms.length > 0 ? (
              visiblePrograms.map((program) => (
                <ProgramsCard key={program.id} {...program} voltarPara={`/programs${recorteParaQuery(selectedCategory, searchTerm)}`} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Nenhum programa encontrado.
              </p>
            )}
          </div>
        </section>

        {/* Load data */}
        {visibleCount < filteredPrograms.length && (
          <div className="w-full flex items-center justify-center">
            <button
              disabled={visibleCount >= filteredPrograms.length}
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className={`w-fit border py-3 px-8 rounded-full font-semibold cursor-pointer ease-in-out duration-300 ${
                visibleCount >= filteredPrograms.length
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-sky-800 text-sky-800"
              }`}
            >
              {visibleCount >= filteredPrograms.length
                ? "Todos carregados"
                : `Ver mais (${
                    filteredPrograms.length - visibleCount
                  } restantes)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
