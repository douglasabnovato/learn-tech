import React from "react";

export const CategoryCard = ({
  icon: Icon,           
  gradientFrom,
  gradientVia,
  gradientTo,
  title,
  description,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-8 rounded-2xl bg-gradient-to-tr hover:bg-gradient-to-tl ${gradientFrom} ${gradientVia} ${gradientTo} px-10 py-12 transition-all ease-in-out duration-300 cursor-pointer`}
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700">
        <span className="text-4xl font-bold text-neutral-50">
          <Icon />          
        </span>
      </div>
      <div className="space-y-3 w-full text-center">
        <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
        <p className="text-base text-neutral-700 text-center line-clamp-3 text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};