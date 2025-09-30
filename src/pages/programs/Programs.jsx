import React, { useState } from "react";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { ProgramsCard } from "../../components/programs/ProgramsCard";
import programsData from "./../../constants/programsData";

export const Programs = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ novo estado
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ lógica de filtragem
  const filteredPrograms = programsData.filter((program) => {
    const matchText =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "all" || program.categoryFilter === selectedCategory;

    return matchText && matchCategory;
  });

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
            value={searchTerm} // ✅ valor controlado
            onChange={(e) => setSearchTerm(e.target.value)} // ✅ atualiza estado
            className="max-w-sm w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 border border-neutral-300 focus:border-sky-500 outline-none ease-in-out duration-300"
          />

          {/* Filter or sort section */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
          {/* Contador */}
          <div className="w-full text-sm text-neutral-600">
            {filteredPrograms.length > 0 ? (
              <p>{filteredPrograms.length} programa(s) encontrado(s)</p>
            ) : (
              <p>Nenhum programa encontrado</p>
            )}
          </div>

          <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
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
        <div className="w-full flex items-center justify-center">
          <button className="w-fit border border-sky-800 text-sky-800 py-3 px-8 rounded-full font-semifold cursor-pointer ease-in-out duration-300">
            Ver mais ...
          </button>
        </div>
      </div>
    </div>
  );
};
