import React from "react";
import {
  FaAnglesRight,
  FaReact,
  FaFigma,
  FaNode,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../../components/category/CategoryCard";

export const Category = () => {
  return (
    <div className="w-full md:px-16 sm:px-10 px-4 space-y-8">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Top Categorias</h2>
        <div className="flex items-center gap-4">
          <Link
            to="/category"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
          >
            Veja todos <FaAnglesRight />
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
        <CategoryCard
          icon={<FaHtml5 />}
          gradientFrom={"from-indigo-500/20"}
          gradientVia={"via-sky-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Web"}
          description={
            "Explore o universo da web e domine as tecnologias que movem a internet."
          }
        />
        <CategoryCard
          icon={<FaReact />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-purple-700/20 via-20%"}
          gradientTo={"to-indigo-700/30"}
          title={"Frontend"}
          description={
            "Crie interfaces incríveis, rápidas e responsivas para usuários exigentes."
          }
        />
        <CategoryCard
          icon={<FaFigma />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"UX/UI"}
          description={
            "Aprenda a desenhar experiências marcantes com design intuitivo e criativo."
          }
        />
        <CategoryCard
          icon={<FaNode />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Backend"}
          description={
            "Estruture sistemas sólidos e escaláveis para dar vida às suas aplicações."
          }
        />
        <CategoryCard
          icon={<FaDatabase />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"DataBase"}
          description={
            "Organize e gerencie dados com segurança, eficiência e inteligência."
          }
        />
        <CategoryCard
          icon={<AiFillProduct />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Produtos Digitais"}
          description={
            "Transforme ideias em soluções digitais úteis, inovadoras e escaláveis."
          }
        />
        <CategoryCard
          icon={<FaProjectDiagram />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Projetos"}
          description={
            "Planeje, organize e execute projetos de tecnologia com sucesso garantido."
          }
        />
        <CategoryCard
          icon={<MdOutlineTranslate />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"English"}
          description={
            "Melhore seu inglês para crescer na programação e se conectar com o mundo."
          }
        />
      </div>
    </div>
  );
};
