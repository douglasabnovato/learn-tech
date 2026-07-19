import React from "react";
import { PageTopBanner } from "./../../components/pageTop/PageTopBanner";
import { PiBookOpenTextFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa6";

import { useParams, Link } from "react-router-dom";
import programsData from "./../../constants/programsData";
import { NotFound } from "./../error/not-found";

import testimonials from "./../../constants/testimonialData";
import ReviewsCard from "./../../components/reviews/ReviewsCard";

export const Detail = () => {
  const { category, id } = useParams();
  const programId = Number(id);

  const getLevelClasses = (level = "") => {
    const l = String(level).toLowerCase();
    if (l === "iniciante") return "bg-green-100 text-green-800";
    if (l === "intermediário" || l === "intermediario")
      return "bg-yellow-100 text-yellow-800";
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
              {/* bloco 1 */}
              {program.whatYouBuild && (
                <div className="w-full space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800">
                    {program.whatYouBuild.title}
                  </h2>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    {program.whatYouBuild.description}
                  </p>
                  {program.whatYouBuild.highlights && (
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 pt-2">
                      {program.whatYouBuild.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/50 px-4 py-3"
                        >
                          <span className="text-sky-700 text-lg">✓</span>
                          <span className="text-sm font-medium text-neutral-800">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
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

                {/* Bloco 2 */}
                {program.whyNow && (
                  <div className="w-full space-y-4 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-700/10 to-purple-700/10 p-6">
                    <h2 className="text-2xl font-bold text-neutral-800">
                      {program.whyNow.title}
                    </h2>
                    {program.whyNow.paragraphs.map((p, i) => (
                      <p key={i} className="text-base text-neutral-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
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

              {/* Bloco 3 */}
              {program.appliedIn && (
                <div className="w-full space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800">
                    {program.appliedIn.title}
                  </h2>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    {program.appliedIn.items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 space-y-2"
                      >
                        <h3 className="text-base font-bold text-neutral-800">
                          {item.label}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bloco 4 */}
              {program.forWho && (
                <div className="w-full space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800">
                    {program.forWho.title}
                  </h2>
                  <div className="space-y-3">
                    {program.forWho.profiles.map((profile, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                      >
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold">
                          {i + 1}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-neutral-800">
                            {profile.label}
                          </h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {profile.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/*  BLOCO 5 — QUEM USA NO MERCADO     */}
              {program.marketUsage && (
                <div className="w-full space-y-4">
                  <h2 className="text-2xl font-bold text-neutral-800">
                    {program.marketUsage.title}
                  </h2>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    {program.marketUsage.description}
                  </p>
                  {program.marketUsage.companies && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {program.marketUsage.companies.map((company, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/*  BLOCO 6 — FONTES */}
              {program.sources && program.sources.length > 0 && (
                <div className="w-full space-y-2 pt-4 border-t border-neutral-200">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                    Fontes
                  </p>
                  <ul className="space-y-1">
                    {program.sources.map((source, i) => (
                      <li key={i} className="text-xs text-neutral-400">
                        {source.url && source.url !== "#" ? (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-700 underline"
                          >
                            {source.label}
                          </a>
                        ) : (
                          source.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
            {/** Depoimentos de alunos - criar componente */}
            <div className="w-full space-y-6">
              <div className="w-full flex items-center justify-between gap-4 py-4 border-b border-neutral-300 md:flex-nowrap flex-wrap">
                <h1 className="text-xl font-semibold text-neutral-800">
                  O que dizem nossos alunos
                </h1>
              </div>
              <div className="space-y-1 5">
                <h3 className="text-xl font-semibold text-neutral-700">
                  Histórias que inspiram o seu próximo passo
                </h3>
                <p className="text-base text-neutral-600 font-normal">
                  Confira os relatos de quem já transformou sua carreira através
                  da nossa metodologia prática. Mais do que apenas depoimentos,
                  estas são histórias reais de desenvolvedores que construíram
                  sua base técnica conosco e hoje dominam as ferramentas mais
                  requisitadas pelo mercado de tecnologia
                </p>
              </div>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {/** Make a reviewcard */}
                {testimonials.map((review, index) => (
                  <div key={index} className="breake-inside-avoid w-full">
                    <ReviewsCard testimonial={review} />
                  </div>
                ))}
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
