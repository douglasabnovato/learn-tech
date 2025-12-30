import React from "react";
import { Link } from "react-router-dom";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaAnglesRight } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";

export const QuickAccess = () => {
  return (
    <div className="w-full bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-8 md:py-20 py-10 md:px-16 sm:px-10 px-4">
        {/** First Card */}
        <div className="w-full md:p-10 p-6 rounded-3xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-between">
          {/** - */}
          <div className="space-y-8 z-20">
            <div className="space-y-3">
              <h6 className="text-lg font-normal text-neutral-300">
                Comportamentos
              </h6>
              <h1 className="text-3xl font-bold text-sky-600 uppercase tracking-wider">
                Soft Skills
              </h1>
            </div>
            <Link
              to="/programs"
              className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 text-base font-semibold flex items-center gap-x-2 group ease-in-out duration-300"
            >
              Veja agora
              <FaAnglesRight
                className="pt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 group-hover:translate-x-1 ease-in-out duration-300"
                style={{ fill: "url(#gradient)" }}
              />
              <svg width="0" height="0">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                  <stop offset="50%" style={{ stopColor: "#0369a1" }} />
                  <stop offset="100%" style={{ stopColor: "#7e22ce" }} />
                </linearGradient>
              </svg>
            </Link>
          </div>
          {/** Icon */}
          <div className="space-y-3 relative z-10">
            <LiaCertificateSolid className="text-amber-600 md:text-[10rem] text-8xl absolute md:relative -bottom-12 -right-4 md:bottom-auto md:right-auto" />
          </div>
        </div>
        {/** Second Card */}
        <div className="w-full md:p-10 p-6 rounded-3xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-between">
          <div className="space-y-8 z-20">
            <div className="space-y-3">
              <h6 className="text-lg font-normal text-neutral-300">Prêmios</h6>
              <h1 className="text-3xl font-bold text-sky-600 uppercase tracking-wider">
                Mentorias
              </h1>
            </div>
            <Link
              to="/programs"
              className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 text-base font-semibold flex items-center gap-x-2 group ease-in-out duration-300"
            >
              Veja agora
              <FaAnglesRight
                className="pt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 group-hover:translate-x-1 ease-in-out duration-300"
                style={{ fill: "url(#gradient)" }}
              />
              <svg width="0" height="0">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                  <stop offset="50%" style={{ stopColor: "#0369a1" }} />
                  <stop offset="100%" style={{ stopColor: "#7e22ce" }} />
                </linearGradient>
              </svg>
            </Link>
          </div>
          {/** Icon */}
          <div className="space-y-3 relative z-10">
            <GiTrophyCup className="text-amber-600 md:text-[10rem] text-8xl absolute md:relative -bottom-12 -right-4 md:bottom-auto md:right-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
