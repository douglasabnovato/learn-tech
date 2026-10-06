import { Link } from "react-router-dom";
import { FaAnglesRight, FaTag, FaLock, FaLockOpen } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { PiBookOpenTextFill } from "react-icons/pi";
import PropTypes from "prop-types";

export const ProgramsCard = ({
  id,
  image,
  category,
  categoryFilter,
  title,
  lessons,
  duration,
  access,
  accessType,
  status,
}) => {
  const isMembers = accessType === "membros";
  const isNovidade = status === "novidade";

  return (
    <div
      className="group w-full rounded-xl border border-neutral-200 space-y-2 overflow-hidden bg-white
                    hover:shadow-xl hover:shadow-sky-900/10 hover:-translate-y-2 
                    transition-all duration-500 ease-in-out"
    >
      {/* Imagem com efeito Zoom */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full aspect-[16/10] object-cover object-center
           transition-transform duration-500 ease-in-out
           ${isNovidade ? "grayscale" : "group-hover:scale-110"}`}
        />
      </div>

      <div className="md:p-4 p-3 space-y-5">
        <div className="w-full flex items-center justify-between">
          <p className="w-fit text-sm text-sky-800 bg-sky-800/10 rounded-full px-3 py-1 flex items-center gap-x-1.5 font-medium">
            <FaTag size={14} className="text-sky-700" />
            {category}
          </p>
        </div>

        <h3
          className="relative text-xl font-semibold text-neutral-950 line-clamp-2 text-ellipsis
    block
    after:content-[''] after:block after:w-full after:h-[2px] after:bg-sky-700
    after:scale-x-0 after:origin-left after:transition-transform after:duration-300
    group-hover:after:scale-x-100"
        >
          {title}
        </h3>

        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-x-3">
            <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
              <PiBookOpenTextFill size={16} className="text-neutral-500" />
              {lessons}
            </p>
          </div>
          <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
            <FiClock size={16} className="text-neutral-500" />
            {duration}
          </p>
        </div>

        <div className="w-full h-px bg-neutral-200"></div>

        {/* access badge and button */}
        <div className="w-full flex items-center justify-between">
          <p
            className={`text-sm font-semibold rounded-full px-3 py-1.5 flex items-center gap-x-1.5 ${
              isMembers
                ? "text-indigo-700 bg-indigo-50 border border-indigo-200"
                : "text-emerald-700 bg-emerald-50 border border-emerald-200"
            }`}
          >
            {isMembers ? <FaLock size={12} /> : <FaLockOpen size={12} />}
            {access}
          </p>
          {isNovidade ? (
            <span
              className="w-fit bg-neutral-800 text-white px-4 py-2 rounded-lg
               text-sm font-medium flex items-center justify-center"
            >
              Em breve
            </span>
          ) : (
            <Link
              to={`/program/${categoryFilter}/${id}`}
              className="w-fit bg-sky-800 text-white px-4 py-2 rounded-lg text-sm font-medium
               flex items-center justify-center gap-2
               group-hover:bg-sky-700 transition-all ease-in-out duration-300"
            >
              Aprenda
              <FaAnglesRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

ProgramsCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
  accessType: PropTypes.string,
  status: PropTypes.string.isRequired,
};