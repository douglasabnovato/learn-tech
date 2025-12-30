import React from "react";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import blogData from "./../../../constants/blogData";
import { BlogCard } from "../../../components/blog/BlogCard";

export const Blog = () => {
  return (
    <div className="w-full md:px-16 sm:px-10 px-4 space-y-8">
      {/** Top Section */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Top Artigos</h2>
        <div>
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
          >
            Veja Todos <FaAnglesRight />
          </Link>
        </div>
      </div>
      {/** Programs section */}
      <div className="w-full grid md:grid-cols-3 grid-colds-1 md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-8">
        {/** Display the data */}
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};
