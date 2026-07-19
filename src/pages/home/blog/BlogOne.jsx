import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaAnglesRight, FaClock, FaUser } from "react-icons/fa6";
import blogData from "../../../constants/blogData";
import { NotFound } from "../../error/not-found";

export const BlogOne = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const post = blogData.find((p) => p.id === id);
    if (!post) return <NotFound />;

    const hasFullContent = Boolean(post.lead && post.body);

    const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 3);

    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
        : null;

    return (
        <div className="w-full min-h-screen">
            {/* HERO — 1 coluna, capa em largura total */}
            <div className="relative w-full aspect-[16/7] overflow-hidden">
                <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/10" />
                <div className="absolute inset-0 flex flex-col justify-end md:px-16 sm:px-10 px-4 md:pb-14 pb-8">
                    <div className="max-w-3xl space-y-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 hover:text-white transition-colors w-fit"
                        >
                            <FaArrowLeft /> Voltar para a Home
                        </Link>
                        <span className="inline-block w-fit text-xs font-bold uppercase tracking-wide text-white bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 rounded-full px-3 py-1">
                            {post.tag}
                        </span>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                        {hasFullContent && (
                            <div className="flex items-center gap-4 text-sm text-neutral-300">
                                <span className="flex items-center gap-1.5">
                                    <FaUser size={12} /> {post.author}
                                </span>
                                <span>{formattedDate}</span>
                                <span className="flex items-center gap-1.5">
                                    <FaClock size={12} /> {post.readingTime} de leitura
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {!hasFullContent ? (
                /* Estado para os posts que ainda não têm conteúdo completo */
                <div className="w-full md:px-16 sm:px-10 px-4 py-20 text-center space-y-4">
                    <h2 className="text-xl font-bold text-neutral-800">
                        Este conteúdo está em preparação.
                    </h2>
                    <p className="text-neutral-600 max-w-md mx-auto">
                        Estamos escrevendo este artigo com o mesmo cuidado dos outros. Volte
                        em breve.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                    >
                        Voltar para a Home <FaAnglesRight />
                    </Link>
                </div>
            ) : (
                <article className="w-full md:px-16 sm:px-10 px-4 md:py-16 py-10 space-y-14">
                    {/* LIDE — 1 coluna, texto de abertura maior */}
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl font-medium text-neutral-700 leading-relaxed">
                            {post.lead}
                        </p>
                    </div>

                    {/* CORPO PRINCIPAL — 1 coluna, largura de leitura confortável */}
                    <div className="max-w-2xl mx-auto space-y-5">
                        {post.body.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-base text-neutral-600 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* DESTAQUES — grid de 3 colunas, quebra o ritmo de leitura */}
                    {post.highlights && (
                        <div className="max-w-4xl mx-auto space-y-6">
                            <h2 className="text-lg font-bold text-neutral-800 text-center">
                                Neste artigo, você vai entender
                            </h2>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                                {post.highlights.map((item) => (
                                    <div
                                        key={item.label}
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

                    {/* CITAÇÃO — 1 coluna, tratamento visual diferenciado */}
                    {post.quote && (
                        <div className="max-w-2xl mx-auto">
                            <blockquote className="relative border-l-4 border-sky-600 pl-6 py-2">
                                <span className="absolute -left-2 -top-4 text-6xl text-sky-200 font-serif select-none">
                                    "
                                </span>
                                <p className="text-xl md:text-2xl font-semibold text-neutral-800 leading-snug italic">
                                    {post.quote}
                                </p>
                            </blockquote>
                        </div>
                    )}

                    {/* CONTINUAÇÃO DO CORPO — 1 coluna */}
                    {post.bodyContinued && (
                        <div className="max-w-2xl mx-auto space-y-5">
                            {post.bodyContinued.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className="text-base text-neutral-600 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* ILUSTRAÇÃO — 1 coluna, largura total */}
                    {post.illustrationImg && (
                        <div className="max-w-3xl mx-auto space-y-2">
                            <img
                                src={post.illustrationImg}
                                alt={`Ilustração — ${post.title}`}
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>
                    )}

                    {/* FONTES — aparece só quando o post tiver o campo sources */}
                    {post.sources && post.sources.length > 0 && (
                        <div className="max-w-2xl mx-auto space-y-2 pt-6 border-t border-neutral-200">
                            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                                Fontes
                            </p>
                            <ul className="space-y-1.5">
                                {post.sources.map((source, idx) => (
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
                    )}
                </article>
            )}

            {/* ARTIGOS RELACIONADOS — grid de 3 colunas, convite a continuar lendo */}
            <div className="w-full bg-neutral-50 border-t border-neutral-200 md:px-16 sm:px-10 px-4 md:py-16 py-10">
                <h2 className="text-xl font-bold text-neutral-800 mb-8">
                    Continue lendo
                </h2>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {relatedPosts.map((related) => (
                        <Link
                            key={related.id}
                            to={related.blogURL}
                            className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-full aspect-video overflow-hidden">
                                <img
                                    src={related.img}
                                    alt={related.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                                    {related.tag}
                                </span>
                                <h3 className="text-sm font-bold text-neutral-800 leading-snug line-clamp-2">
                                    {related.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};