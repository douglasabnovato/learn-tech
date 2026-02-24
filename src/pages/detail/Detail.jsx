import React from "react";
import { PageTopBanner } from "./../../components/pageTop/PageTopBanner";
import { PiBookOpenTextFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa6";

import { useParams, Link } from "react-router-dom";
import programsData from "./../../constants/programsData";
import { NotFound } from "./../error/not-found";

export const Detail = () => {
  const { category, id } = useParams();
  const programId = Number(id);

  const getLevelClasses = (level = "") => {
    const l = String(level).toLowerCase();
    if (l === "iniciante") return "bg-green-100 text-green-800";
    if (l === "intermediário" || l === "intermediario") return "bg-yellow-100 text-yellow-800";
    if (l === "avançado" || l === "avancado") return "bg-red-100 text-red-800";
    return "bg-sky-100 text-sky-800";
  };
  const program =
    programsData.find(
      (p) =>
        p.id === programId &&
        String(p.categoryFilter).toLowerCase() ===
          String(category).toLowerCase(),
    ) || programsData.find((p) => p.id === programId);

  if (!program) return <NotFound />;

  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={program.title} />
      <div className="w-full space-y-16 md:px-16 sm:px-10 px-4">
        <div className="w-full grid md:grid-cols-5 grid-cols-1 md:gap-16 gap-10 grid-flow-row-dense items-start">
          {/* Left (title, image, other) */}
          <div className="w-full md:col-span-3 col-span-5 space-y-12">
            {/* title, image */}
            <div className="space-y-8">
              <div className="space-y-3 md:space-y-2">
                <h2 className="text-txl md:text-2xl font-bold text-neutral-800">
                  {program.title}
                </h2>
                <div className="w-full flex items-center gap-x-5 gap-y-2 px-1 flex-wrap">
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <FiClock size={16} className="text-neutral-500" />
                    {program.duration}
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <FaUserTie size={16} className="text-neutral-500" />
                    {program.students}
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <PiBookOpenTextFill
                      size={16}
                      className="text-neutral-500"
                    />
                    {program.category}
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <PiBookOpenTextFill
                      size={16}
                      className="text-neutral-500"
                    />
                    {program.lessons}
                    <span className="ml-2 inline-flex items-center bg-sky-100 text-sky-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {program.level}
                    </span>
                  </p>
                </div>
              </div>
              <img
                src={program.image}
                alt={program.title}
                className="w-full object-cover aspect-[16/10] rounded-xl"
              />
            </div>
            {/* course overview contents */}
            <div className="space-y-10">
              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Vamos aprender
                </h3>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    Descrição
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    {program.description}
                  </p>
                </div>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    O que você vai aprender
                  </h3>
                  <ul className="list-disc list-inside px-2">
                    {program.letslearn?.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-600 text-base font-normal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Curriculum */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Currículo
                </h3>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    {program.curriculum}
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    {program.about}
                  </p>
                </div>
              </div>
              {/* Course Materials */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Materiais
                </h3>
                <ul className="list-disc list-inside px-2">
                  {program.materials?.map((m, i) => (
                    <li
                      key={i}
                      className="text-neutral-600 text-base font-normal"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right (price, features, buttons)*/}
          <div className="w-full md:col-span-2 col-span-5 border border-neutral-300 p-6 rounded-xl space-y-4 sticky top-28">
            <h2 className="text-4xl text-neutral-900 font-bold">
              Na Learn Tech você tem
            </h2>
            <ul className="space-y-1 w-full list-disc list-inside px-2">
              <li className="text-neutral-700 text-base font-normal">
                Acesso a mais de 30 programas
              </li>
              <li className="text-neutral-700 text-base font-normal">
                Níveis Iniciante, Intermediário e Avançado
              </li>
              <li className="text-neutral-700 text-base font-normal">
                Orientações de Soft Skill
              </li>
              <li className="text-neutral-700 text-base font-normal">
                Tudo isso passou por uma curadoria rigorosa para garantir a
                melhor experiência de aprendizado possível.
              </li>
            </ul>

            <div className="w-full flex flex-col md:flex-row items-center md:gap-4 gap-3 mt-6">
              <Link
                to={`/program/${program.categoryFilter}/${program.id}/enroll`}
                aria-label="Acessar este programa"
                className="md:w-1/2 w-full h-10 bg-sky-800 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Acessar
              </Link>
              <Link
                to="/programs"
                aria-label="Ver outros programas"
                className="md:w-1/2 w-full h-10 border border-neutral-300 text-neutral-800 text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-50 transition focus:outline-none focus:ring-2 focus:ring-sky-100"
              >
                Programas
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page Top Banner section */}
    </div>
  );
};
