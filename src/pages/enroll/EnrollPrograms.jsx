import React from "react";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { VideoPlayer } from "../../components/player/VideoPlayer";

import DemoVideo from "./../../assets/demo.mp4";
import DemoPoster from "./../../assets/demo-poster.jpg";
import { Description } from "./Description";

export const EnrollPrograms = () => {
  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Enroll Programs"} />
      {/* Programs contents */}
      <div className="w-full space-y-16 md:px-16 sm:px-10 px-4">
        <div className="w-full grid md:grid-cols-5 grid-cols-1 md:gap-12 gap-10 grid-row-dense items-start">
          {/** Video and Description */}
          <div className="w-full md:col-span-3 col-span-5 space-y-12">
            {/** Video player */}
            <VideoPlayer src={DemoVideo} poster={DemoPoster} />
            {/** Description */}
            <Description />
          </div>
          {/** Course Progress and quiz section */}
          <div className="w-full md:col-span-2 col-span-5 space-y-8 sticky top-28"></div>
        </div>
      </div>
    </div>
  );
};
