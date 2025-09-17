import React from "react";
import HeroImg from "../../../assets/hero-1.png";

export const Hero = () => {
  return (
    <div className="w-full md:h-screen h-auto bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 flex items-end justify-center md:px-16 sm:px-10 px-4 md:pt-0 md:pb-0 pt-[10ch] pb-8">
      <div className="w-full flex-1 flex items-center justify-between md:gap-16 gap-4 md:flex-nowrap flex-wrap md:flex-row flex-col-reverse">
        <div className="md:w-[45%] w-full h-auto md:space-y-8 space-y-6">
          <div className="space-y-2">
            <p className="text-lg md:text-2x1 font-medium text-neutral-600">
              The Leader in Online Learning
            </p>
            <h1 class="md:text-[5rem] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.3]">
              Join Today & Start Learning
            </h1>
          </div>
          <p className="text-lg font-normal text-neutral-800 md:pr-16 pr-0">
            The best place to discover new learning resources, books, and
            courses.
          </p>
          <div className="w-full flex items-center gap-6">
            <button className="md:w-first w-1/2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300">
              Get Started
            </button>
            <button className="md:w-first w-1/2 border border-neutral-800 cursor-pointer py-3 px-8 text-neutral-800 rounded-full font-semibold ease-in-out duration-300">
              Learn More
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="md:w-[50%] w-full aspect-squate flex items-end justify-end">
          <img src={HeroImg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};
