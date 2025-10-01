import React from "react";
import { Link } from "react-router-dom";
import { FaAnglesRight, FaStar, FaTag, FaUserTie } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBookOpenTextFill } from "react-icons/pi";

export const ProgramsCard = ({
  id,
  image,
  category,
  categoryFilter,
  rating,
  title,
  lessons,
  students,
  duration,
  price,
}) => {
  return (
    <div className="w-full rounded-xl border border-neutral-200 space-y-2 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[16/10] object-cover object-center"
      />
      <div className="md:p-4 p-3 space-y-5">
        <div className="w-full flex items-center justify-between">
          <p className="w-fit text-sm text-sky-800 bg-sky-800/10 rounded-full px-3 py-1 flex items-center gap-x-1.5">
            <FaTag size={15} className="text-sky-700" />
            {category}
          </p>
          <div className="flex items-center gap-x-3">
            <p className="text-sm text-yellow-500 border border-yellow-200 rounded-full px-3 py-1 flex items-center gap-x-1">
              <FaStar />
              {rating}
            </p>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <IoMdHeartEmpty size={24} />
            </button>
          </div>
        </div>
        {/* Title section */}
        <Link
          to={`/program/detail`}
          className="relative text-xl font-semibold text-neutral-950 line-clamp-2 text-ellipsis
             cursor-pointer after:content-[''] after:block after:w-full after:h-[2px] after:bg-sky-700
             after:scale-x-0 after:origin-left after:transition-transform after:duration-300
             hover:after:scale-x-100"
        >
          {title}
        </Link>
        {/* lessons, students and duration */}
        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          {/* lessons and students */}
          <div className="flex items-center gap-x-3">
            <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
              <PiBookOpenTextFill size={16} className="text-neutral-500" />
              {lessons}
            </p>
            <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
            <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
              <FaUserTie size={16} className="text-neutral-500" />
              {students}
            </p>
          </div>
          {/* duration */}
          <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
            <FiClock size={16} className="text-neutral-500" />
            {duration}
          </p>
        </div>
        {/* separator */}
        <div className="w-full h-px bg-neutral-200"></div>
        {/* price and button */}
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-bold text-neutral-900 flex items-center gap-x-1.5">
            {price}
          </p>
          <Link
            to={`/program/${categoryFilter}/${id}`}
            className="w-fit text-sky-900 text-sm font-medium flex items-center justify-center gap-2 hover:text-sky-800 transition-all ease-in-out duration-300"
          >
            Aprenda
            <FaAnglesRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
