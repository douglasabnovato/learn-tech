import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { ProgramsCard } from "../../components/programs/ProgramsCard";
import { useProgramas } from "../../services/conteudo";
import { Seo } from "../../components/common/Seo";
import { filtrarProgramas, recorteParaQuery, textoStatusProgramas, contagemProgramas, LIMPAR_BUSCA } from "../../services/busca";

export const Programs = () => {
  const programsData = useProgramas();
  const categorias = useMemo(() => [...new Map(programsData.map((p) => [p.categoryFilter, p.category])).entries()], [programsData]);
  // O recorte (categoria e termo) mora na URL: ?categoria=web&q=react. Dá para compartilhar e o "voltar" o mantém.
  const [searchParams, setSearchParams] = useSearchParams();
  const campoBusca = useRef(null);
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
      <Seo
        titulo="Programas"
        descricao="Programas gratuitos de tecnologia em ordem, com prática e quiz: web, back-end, carreira, CRM e mais. Busque pelo título ou filtre por categoria."
      />
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Programas"} />
      {/* Programs contends */}
      <div className="space-y-8 w-full md:px-16 sm:px-10 px-4">
        {/* Busca e filtro (learn-tech#175, nota 1): abaixo de sm, cada um na largura toda, um por linha, para o texto de
            exemplo caber a 320 e 360 px. A borda neutral-500 dá 4,5:1 contra o fundo (WCAG 1.4.11); a neutral-300 dava 1,4:1. */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          {/* Search section */}
          <input
            ref={campoBusca}
            type="text"
            placeholder="Buscar programas..."
            aria-label="Buscar programas pelo título ou categoria"
            value={searchTerm} // ✅ valor controlado
            onChange={(e) => setSearchTerm(e.target.value)} // ✅ atualiza estado
            className="w-full sm:max-w-sm rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 border border-neutral-500 focus:border-sky-700 outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2 ease-in-out duration-300"
          />

          {/* Filter or sort section */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filtrar programas por categoria"
            className="w-full sm:w-fit sm:max-w-sm rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 border border-neutral-500 focus:border-sky-700 outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2 ease-in-out duration-300"
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
            <h2 className="text-xl font-semibold text-neutral-900">Programas</h2>
            {/* A contagem é a mensagem de status da busca e do filtro (WCAG 4.1.3): o leitor de tela anuncia só ela, e não a
                lista (a mesma solução do career#48; o bootcamps e o tools já fazem assim). */}
            <span
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="px-3 py-1 text-sm font-medium rounded-full bg-sky-100 text-sky-700 border border-sky-300"
            >
              {/* Com 0, a pílula mostra a contagem curta e o leitor de tela ouve o texto com a saída. */}
              {filteredPrograms.length === 0 ? (
                <>
                  <span aria-hidden="true">{contagemProgramas(0)}</span>
                  <span className="sr-only">{textoStatusProgramas(0)}</span>
                </>
              ) : (
                textoStatusProgramas(filteredPrograms.length)
              )}
            </span>
          </div>

          {/* Grid de cards */}
          <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-8">
            {visiblePrograms.length > 0 ? (
              visiblePrograms.map((program) => (
                <ProgramsCard key={program.id} {...program} voltarPara={`/programs${recorteParaQuery(selectedCategory, searchTerm)}`} />
              ))
            ) : (
              /* Com 0, uma saída na tela: limpa a busca e o filtro de uma vez (o status diz o nome do botão). */
              <div className="col-span-full flex flex-col items-center gap-4 py-6 text-center">
                <p className="text-neutral-700">Nenhum programa encontrado.</p>
                <button
                  type="button"
                  onClick={() => {
                    atualizarRecorte("all", "");
                    /* O botão some com a lista cheia: o foco vai ao campo de busca, e não ao body. */
                    campoBusca.current?.focus();
                  }}
                  className="h-11 px-5 border border-neutral-300 text-neutral-800 text-sm font-medium rounded-lg hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
                >
                  {LIMPAR_BUSCA}
                </button>
              </div>
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
                visibleCount >= filteredPrograms.length ? "border-gray-300 text-gray-400 cursor-not-allowed" : "border-sky-800 text-sky-800"
              }`}
            >
              {visibleCount >= filteredPrograms.length
                ? "Todos carregados"
                : `Ver mais (${filteredPrograms.length - visibleCount} restantes)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
