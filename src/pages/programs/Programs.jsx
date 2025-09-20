import React from "react";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";

export const Programs = () => {
  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Programs"} />
      {/* Programs contends */}
      <div className="space-y-8 w-full md:px-16 sm:px-10 px-4">
        {/* Programs search and filter section */}
        <div className="w-full flex items-center gap-6">
          {/* Search section */}
          <input
            type="text"
            placeholder="Search programs..."
            className="max-w-sm w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 border border-neutral-300 focus:border-sky-500 outliine-none ease-in-out duration-300"
          />
          {/* Filter or sort section */}
        </div>
      </div>
    </div>
  );
};
