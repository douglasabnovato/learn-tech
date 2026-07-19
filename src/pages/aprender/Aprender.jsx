import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {
    heroContent,
    techniques,
    closingQuote,
    sources,
} from "../../constants/aprenderData";

export const Aprender = () => {
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

            {/* AS 4 TÉCNICAS */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 text-center">
                    Quatro técnicas, com base real
                </h2>

                <div className="space-y-10">
                    {techniques.map((technique, index) => {
                        const Icon = technique.icon;
                        const isLast = index === techniques.length - 1;
                        return (
                            <div key={technique.number} className="relative">
                                <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
                                    <div className="flex flex-col items-center gap-2 shrink-0">
                                        <div
                                            className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr ${technique.gradient}`}
                                        >
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <span className="text-xs font-bold text-neutral-400">
                                            {technique.number}
                                        </span>
                                    </div>
                                    <div className="space-y-2 md:text-left text-center max-w-xl">
                                        <h3 className="text-xl font-bold text-neutral-800">
                                            {technique.title}
                                        </h3>
                                        <p className="text-base text-neutral-600 leading-relaxed">
                                            {technique.description}
                                        </p>
                                    </div>
                                </div>
                                {!isLast && (
                                    <div className="md:block hidden absolute left-8 top-16 w-px h-10 bg-neutral-200" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CITAÇÃO */}
            <div className="w-full bg-neutral-900 md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <blockquote className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-6xl text-neutral-700 font-serif select-none leading-none">
                        "
                    </span>
                    <p className="text-2xl md:text-3xl font-semibold text-white leading-snug -mt-8">
                        {closingQuote}
                    </p>
                </blockquote>
            </div>

            {/* FONTES */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-14 py-10">
                <div className="max-w-2xl mx-auto space-y-2">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                        Fontes
                    </p>
                    <ul className="space-y-1.5">
                        {sources.map((source, idx) => (
                            <li key={idx} className="text-xs text-neutral-500">
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sky-700 underline"
                                >
                                    {source.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA FINAL */}
            <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <div className="max-w-2xl space-y-6">
                    <h2 className="md:text-3xl text-2xl font-bold text-neutral-800 leading-tight">
                        Método certo aplicado ao conteúdo certo.
                    </h2>
                    <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300 hover:opacity-90"
                    >
                        Ver os programas <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};