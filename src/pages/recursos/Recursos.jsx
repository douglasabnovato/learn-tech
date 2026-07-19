import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FaRoute,
    FaTrophy,
    FaCircleQuestion,
    FaLockOpen,
    FaVideo,
    FaBookOpen,
    FaUserGroup,
    FaCertificate,
    FaLayerGroup,
    FaComments,
    FaArrowRight,
} from "react-icons/fa6";

const liveFeatures = [
    {
        icon: FaRoute,
        title: "Trilhas com conteúdo real",
        description:
            "Cada módulo tem passo a passo, código de exemplo e explicação do porquê — não só o quê fazer.",
        gradient: "from-indigo-500 via-sky-600 to-sky-700",
    },
    {
        icon: FaTrophy,
        title: "Progresso gamificado",
        description:
            "Marque cada passo concluído dentro do módulo e veja o selo de conclusão aparecer — progresso que você sente, não só um número.",
        gradient: "from-pink-500 via-purple-600 to-indigo-600",
    },
    {
        icon: FaCircleQuestion,
        title: "Quiz que ensina",
        description:
            "Cada resposta vem com explicação — errar também ensina, não é só ✅ ou ❌.",
        gradient: "from-amber-500 via-orange-600 to-red-600",
    },
    {
        icon: FaLockOpen,
        title: "Curadoria em acesso livre",
        description:
            "Conteúdo público, com fonte creditada e a nossa resolução prática em cima — sem barreira para começar a aprender.",
        gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    },
    {
        icon: FaVideo,
        title: "Soft Skills e Mentorias",
        description:
            "Conversas reais sobre comunicação, PDI e desenvolvimento de carreira — não só código.",
        gradient: "from-sky-500 via-blue-600 to-indigo-700",
    },
    {
        icon: FaBookOpen,
        title: "Blog com profundidade",
        description:
            "Artigos que explicam o porquê por trás da tecnologia, com fonte citada — não resumo raso.",
        gradient: "from-purple-500 via-fuchsia-600 to-pink-600",
    },
];

const roadmapFeatures = [
    {
        icon: FaLayerGroup,
        title: "Área de membros",
        description:
            "Conteúdo autoral, produzido por nós, para quem quer ir além da curadoria aberta.",
    },
    {
        icon: FaCertificate,
        title: "Certificado de conclusão",
        description:
            "Um registro real de que você terminou uma trilha do início ao fim.",
    },
    {
        icon: FaUserGroup,
        title: "Novas trilhas todo mês",
        description:
            "Mais programas completos, no mesmo padrão de profundidade do primeiro.",
    },
    {
        icon: FaComments,
        title: "Comunidade",
        description:
            "Um espaço para tirar dúvida e trocar experiência com quem está na mesma jornada.",
    },
];

export const Recursos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* HERO */}
            <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
                <div className="max-w-3xl space-y-6">
                    <p className="text-lg md:text-xl font-medium text-neutral-600">
                        O que a learnTECH entrega
                    </p>
                    <h1 className="md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.15]">
                        Recursos pensados para quem quer aprender fazendo
                    </h1>
                    <p className="text-lg font-normal text-neutral-800 max-w-2xl">
                        Não é uma lista de vídeos. É uma trilha estruturada, com progresso
                        de verdade, avaliação que ensina, e conteúdo que respeita o seu
                        tempo.
                    </p>
                </div>
            </div>

            {/* O QUE JÁ ESTÁ NO AR */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                        Já no ar
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                        O que você já encontra hoje
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {liveFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div
                                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-tr ${feature.gradient}`}
                                >
                                    <Icon className="text-white text-xl" />
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-base font-bold text-neutral-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* PARA ONDE ESTAMOS INDO */}
            <div className="w-full bg-neutral-50 border-y border-neutral-200 md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                        Em construção
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                        Para onde estamos indo
                    </h2>
                    <p className="text-base text-neutral-600 max-w-2xl">
                        Estes recursos ainda não existem — são o próximo passo da
                        plataforma, e vale saber que estão a caminho.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    {roadmapFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="flex items-start gap-4 rounded-2xl border border-dashed border-neutral-300 bg-white/60 p-5"
                            >
                                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">
                                    <Icon size={18} />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-bold text-neutral-800">
                                            {feature.title}
                                        </h3>
                                        <span className="text-[10px] font-bold uppercase tracking-wide text-neutral-400 border border-neutral-300 rounded-full px-2 py-0.5">
                                            Em breve
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FECHO / CTA */}
            <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <div className="max-w-2xl space-y-6">
                    <h2 className="md:text-3xl text-2xl font-bold text-neutral-800 leading-tight">
                        O melhor jeito de conhecer é começando.
                    </h2>
                    <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300 hover:opacity-90"
                    >
                        Explorar os programas <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};