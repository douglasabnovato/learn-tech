import React, { useState, useEffect } from "react";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { ProgramsCard } from "../../components/programs/ProgramsCard";
import programsData from "./../../constants/programsData";

export const Programs = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ novo estado
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  // ✅ lógica de filtragem
  const filteredPrograms = programsData.filter((program) => {
    const matchText =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "all" || program.categoryFilter === selectedCategory;

    return matchText && matchCategory;
  });

  const visiblePrograms = filteredPrograms.slice(0, visibleCount);

  // Resetar paginação ao mudar busca/categoria
  useEffect(() => {
    setVisibleCount(4);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Programs"} />
      {/* Programs contends */}
      <div className="space-y-8 w-full md:px-16 sm:px-10 px-4">
        {/* Programs search and filter section */}
        <div className="w-full flex items-center gap-6">
          {/* Search section */}
          <input
            type="text"
            placeholder="Search programs..."
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
            <option value="web">Web</option>
            <option value="frontend">Frontend</option>
            <option value="ux-ui">UX/UI</option>
            <option value="backend">Backend</option>
            <option value="data-base">Data Base</option>
            <option value="produtos-digitais">Produtos Digitais</option>
            <option value="projetos">Projetos</option>
            <option value="english">English</option>
          </select>
        </div>
        {/* Programs data */}
        <div className="space-y-4">
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
                <ProgramsCard key={program.id} {...program} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Nenhum programa encontrado.
              </p>
            )}
          </div>
        </div>

        {/* Load data */}
        {visibleCount < filteredPrograms.length && (
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              aria-label={`Carregar mais programas, ${filteredPrograms.length - visibleCount} restantes`} 
              className="w-fit border border-sky-800 text-sky-800 py-3 px-8 rounded-full font-semibold cursor-pointer ease-in-out duration-300"
            >
              Ver mais ({filteredPrograms.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
