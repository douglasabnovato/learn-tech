import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ blogURL, img, title, tag }) => {
  return (
    <Link
      to={blogURL}
      className="w-full aspect-[16/10] rounded-xl overflow-hidden relative group ease-in-out duration-300"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:rotate-4 ease-in-out duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900/40 to-transparent flex items-end justify-start p-4">
        <div className="space-y-2">
          <h1 className="text-lg text-neutral-50 font-semibold line-clamp-2">
            {title}
          </h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full p-4">
        <p className="w-fit text-sm font-normal text-sky-500 bg-sky-500/10 border border-sly-400/40 background-blur-md round-full px-3 py-1 inline-block">{tag}</p>
      </div>
    </Link>
  );
};
