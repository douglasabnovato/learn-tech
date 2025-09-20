import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProgramsCard } from "../../../components/programs/ProgramsCard";

import programsData from "./../../../constants/programsData";

export const Programs = () => {
  return (
    <div className="w-full md:px-15 sm:px-10 px-4 space-y-8">
      {/** Top Section */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">
          Featured Programs
        </h2>
        <div>
          <Link
            to="/category"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
          > 
            View All <FaAnglesRight />
          </Link>
        </div>
      </div>
      {/** Programs section */}
      <div className="w-full grid md:grid-cols-3 grid-colds-1 md:gap-10 gap-5">
        {/** Display the data */}
        {programsData.map((programs, index) => (
          <ProgramsCard key={index} {...programs} />
        ))}
      </div>
    </div>
  );
};
