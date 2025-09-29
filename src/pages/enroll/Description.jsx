import React from "react";
import { TabContent } from "./tabContent/TabContent";

export const Description = () => {
  return (
    <div className="w-full space-y-16">
      {/* Title Section */}
      <div className="w-full space-y-2">
        <p className="text-sm text-neutral-600 font-normal bg-neutral-200/60 border border-neutral-100 rounded-full w-fit px-3 py-1">
          Web Development
        </p>
        <h1 className="text-2xl text-neutral-800 font-semibold">
          The best place to discover new learning resources, books, and courses.
        </h1>
      </div>
      {/* Tab Section */}
      <TabContent />
    </div>
  );
};
