import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../../components/category/CategoryCard";
import categoriesData from "../../../constants/categoriesData";

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
            Veja todas <FaAnglesRight />
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
        {categoriesData.map((category) => (
          <CategoryCard key={category.slug} {...category} />
        ))}
      </div>
    </div>
  );
};