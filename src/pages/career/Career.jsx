import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {
    heroContent,
    planningPoints,
    platforms,
    closingText,
} from "../../constants/careerData";

export const Carreiras = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* HERO */}
            <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
                <div className="max-w-3xl space-y-6">
                    <p className="text-lg md:text-xl font-medium text-neutral-600">
                        {heroContent.eyebrow}
                    </p>
                    <h1 className="md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.15]">
                        {heroContent.title}
                    </h1>
                    <p className="text-lg font-normal text-neutral-800 max-w-2xl">
                        {heroContent.subtitle}
                    </p>
                </div>
            </div>

            {/* PLANEJAMENTO DE CARREIRA */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                    Planejar antes de acumular conteúdo
                </h2>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {planningPoints.map((point) => (
                        <div
                            key={point.title}
                            className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-2"
                        >
                            <h3 className="text-base font-bold text-neutral-800">
                                {point.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-700/10 to-purple-700/10 p-6">
                    <p className="text-sm text-neutral-700">
                        Quer entender o PDI (Plano de Desenvolvimento Individual) com mais
                        profundidade — a metodologia SMART e o modelo 70/20/10?{" "}
                        <Link
                            to="/mentorias"
                            className="font-semibold text-indigo-700 hover:underline"
                        >
                            Veja as mentorias sobre o tema.
                        </Link>
                    </p>
                </div>
            </div>

            {/* PLATAFORMAS DE VAGAS */}
            <div className="w-full bg-neutral-50 border-y border-neutral-200 md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                        Onde buscar oportunidades reais
                    </h2>
                    <p className="text-base text-neutral-600 max-w-2xl">
                        Seis plataformas com propósitos diferentes — do nicho técnico
                        brasileiro ao mercado remoto internacional.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {platforms.map((platform) => {
                        const Icon = platform.icon;
                        return (
                            <div
                                key={platform.name}
                                className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-600 to-purple-600">
                                        <Icon className="text-white text-lg" />
                                    </div>
                                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                                        {platform.tag}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-neutral-800">
                                    {platform.name}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {platform.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div> 

            {/* DESTAQUE — CONVITE AO CAREER */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:pb-20 pb-14">
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 p-10 md:p-14 text-center space-y-6">
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wide">
                        Isso foi só uma introdução
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                        15 empresas · 16 oportunidades · 12 mentores
                    </h2>
                    <p className="text-white/90 text-base max-w-xl mx-auto">
                        Catalogados e atualizados, em um espaço feito só para isso.
                    </p>
                    <a
                        href="https://douglasabnovato.github.io/career/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors duration-300"
                    >
                        Explorar o Career
                        <FaArrowRight />
                    </a>
                </div>
            </div>
            {/* FECHO */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <p className="text-xl md:text-2xl font-semibold text-neutral-800 leading-snug">
                        {closingText}
                    </p>
                    <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300 hover:opacity-90"
                    >
                        Construir a base técnica <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};