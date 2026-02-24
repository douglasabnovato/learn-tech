import { PageTopBanner } from "../../components/pageTop/PageTopBanner";
import { VideoPlayer } from "../../components/player/VideoPlayer";
import DemoVideo from "./../../assets/programs/1-demo.mp4";
import DemoPoster from "./../../assets/programs/1-demo-poster.jpg";
import { Description } from "./Description";
import { FaCheck, FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Quiz } from "./quiz/Quiz";
import { NotFound } from "../error/not-found";

import programsData from "../../constants/programsData";

export const EnrollPrograms = () => {
  const { category, id } = useParams();
  const programId = Number(id);
  const program =
    programsData.find(
      (p) =>
        p.id === programId &&
        String(p.categoryFilter).toLowerCase() === String(category).toLowerCase()
    ) || programsData.find((p) => p.id === programId);

  if (!program) return <NotFound />;

  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={program.title} />
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
          <div className="w-full md:col-span-2 col-span-5 space-y-8 sticky top-28">
            {/** progress */}
            <div className="w-full border border-neutral-300 md:p p-3 rounded-xl space-y-8">
              {/** title progress */}
              <div className="space-y-2">
                <h5 className="text-base text-neutral-600 font-medium">
                  Your Course Progress
                </h5>
                <div className="w-full bg-indigo-500/5 border border-indigo-200 rounded-xl p-4 space-y-2">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-neutral-600 font-medium">25%</p>
                    <p className="text-sm text-neutral-600 font-medium">
                      4 <span className="text-neutral-400">/20 Lessons</span>
                    </p>
                  </div>
                  <div className="relative h-2.5 bg-neutral-300 w-full mb-2 cursor-pointer rounded-full">
                    <div className="absolute h-full bg-indigo-500 w-[25%] rounded-full" />
                  </div>
                </div>
              </div>
              {/** videon tab link content */}
              <div className="space-y-2">
                <h5 className="text-base text-neutral-600 font-medium">
                  {program.curriculum}
                </h5>
                <div className="w-full space-y-1">
                  <Link
                    to="/"
                    className="w-full flex items-center gap-3 bg-indigo-100/20 hover:bg-indigo-500/10 p-3 rounded-lg ease-in-out duration-300"
                  >
                    <div className="flex items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/5 border border-indigo-200">
                        <FaCheck size={16} className="text-indigo-500" />
                      </div>
                      <h1 className="text-base text-neutral-800 font-semibold flex-1">
                        Introduction to Course
                      </h1>
                    </div>
                    <p className="text-sm text-neutral-800 font-medium"></p>
                  </Link>
                  <Link
                    to="/"
                    className="w-full flex items-center justify-between gap-3 bg-transparent hover:bg-indigo-500/5 p-3 rounded-lg ease-in-out duration-300"
                  >
                    <div className="flex items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/5 border border-indigo-200">
                        <FaPlay size={16} className="text-indigo-500" />
                      </div>
                      <h1 className="text-base text-neutral-800 font-semibold flex-1">
                        Basic of Fundamental Course
                      </h1>
                    </div>
                    <p className="text-sm text-neutral-800 font-medium"></p>
                  </Link>
                </div>
              </div>
            </div>
            {/** quiz */}
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};
