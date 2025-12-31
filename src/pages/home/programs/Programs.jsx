import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProgramsCard } from "../../../components/programs/ProgramsCard";

import programsData from "./../../../constants/programsData";

export const Programs = () => {
 
  const featuredPrograms = programsData.reduce((acc, current) => { 
    const x = acc.find(item => item.categoryFilter === current.categoryFilter);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div id="section-programs" className="w-full md:px-15 sm:px-10 px-4 space-y-8">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">
          Top Projetos 
        </h2>
        <div>
          <Link
            to="/programs"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-sky-800 cursor-pointer ease-in-out duration-300"
          >
            Veja todos <FaAnglesRight />
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-colds-1 md:gap-10 gap-5">
        {featuredPrograms.map((program) => (
          <ProgramsCard key={program.id} {...program} />
        ))}
      </div>
    </div>
  );
};
