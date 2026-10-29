import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import blogLocal from "../../../constants/blogData";
import { usePagina } from "../../../services/conteudo";
import { BlogCard } from "../../../components/blog/BlogCard";

/* Blogs.jsx — lista completa de artigos (rota /blogs, aberta pelo "Veja Todos" da home). Os artigos vêm da API. */
export const Blogs = () => {
  const { itens: artigos } = usePagina("blog", { itens: blogLocal });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen md:px-16 sm:px-10 px-4 md:py-20 py-12 space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-sky-800 ease-in-out duration-300"
      >
        <FaArrowLeft /> Voltar para a Home
      </Link>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">Artigos</h1>
        <p className="text-neutral-600">
          {artigos.length} artigos sobre tecnologia, carreira e comunidade, com fontes citadas.
        </p>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6">
        {artigos.map((artigo) => (
          <BlogCard key={artigo.id} {...artigo} />
        ))}
      </div>
    </div>
  );
};

/* Fim de Blogs.jsx */
