import React from "react";

export const Reviews = () => {
  return (
    <div className="w-full space-y-6">
      <div className="w-full flex items-center justify-between gap-4 py-4 border-b border-neutral-300 md:flex-nowrap flex-wrap">
        <h1 className="text-xl font-semibold text-neutral-800">
          Want to share your experience with us?
        </h1>
        <button className="md:w-first w-1/2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300">
          Sign In to Share
        </button>
      </div>
      <div className="space-y-1 5">
        <h3 className="text-xl font-semibold text-neutral-700">
          What Our Students Say
        </h3>
        <p className="text-base text-neutral-600 font-normal">
          Here are some reviews from our satisfied students
        </p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {/** Make a reviewcard */}
      </div>
    </div>
  );
};
