import React from "react";
import { PageTopBanner } from "./../../components/pageTop/PageTopBanner";
import { PiBookOpenTextFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa6";

export const Detail = () => {
  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Program Detail"} />
      <div className="w-full space-y-16 md:px-16 sm:px-10 px-4">
        <div className="w-full grid md:grid-cols-5 grid-cols-1 md:gap-16 gap-10 grid-flow-row-dense items-start">
          {/* Left (title, image, other) */}
          <div className="w-full md:col-span-3 col-span-5 space-y-12">
            {/* title, image */}
            <div className="space-y-8">
              <div className="space-y-3 md:space-y-2">
                <h2 className="text-txl md:text-2xl font-bold text-neutral-800">
                  The best place to discover new earning resources, books and
                  courses
                </h2>
                <div className="w-full flex items-center gap-x-5 gap-y-2 px-1 flex-wrap">
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <FiClock size={16} className="text-neutral-500" />
                    40 hours
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <FaUserTie size={16} className="text-neutral-500" />
                    1500 students
                  </p>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <p className="text-sm text-neutral-800 font-medium flex items-center gap-x-1.5">
                    <PiBookOpenTextFill
                      size={16}
                      className="text-neutral-500"
                    />
                    Web Development
                  </p>
                </div>
              </div>
              <img
                src="https://cdn.pixabay.com/photo/2022/03/16/09/19/virtual-7071998_1280.png"
                alt="programs thumbnail"
                className="w-full object-cover aspect-[16/10] rounded-xl"
              />
            </div>
            {/* course overview contents */}
            <div className="space-y-10">
              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Overview
                </h3>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    Description
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    This comprehensive web development bootcamp takes you from
                    absolute beginner to profissional developer. You'll learn
                    all the tools and technologies you need to build full-stack
                    web applications.
                  </p>
                </div>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    What you'll learn
                  </h3>
                  <ul className="list-disc list-inside px-2">
                    <li className="text-neutral-600 text-base font-normal">
                      Learn to build full-stack web applications using HTML, CSS
                      and Javascript.
                    </li>
                    <li className="text-neutral-600 text-base font-normal">
                      Understand the fundamental of web development
                    </li>
                    <li className="text-neutral-600 text-base font-normal">
                      Core concepts of HTML, CSS and Javascript
                    </li>
                    <li className="text-neutral-600 text-base font-normal">
                      Build responsive and user-frindly interfaces, more...
                    </li>
                  </ul>
                </div>
              </div>
              {/* Curriculum */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Curriculum
                </h3>
                <div className="space-y-1 5">
                  <h3 className="text-xl text-neutral-700 font-semibold">
                    Introduction to Web Development
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    This comprehensive web development bootcamp takes you from
                    absolute beginner to profissional developer. You'll learn
                    all the tools and technologies you need to build full-stack
                    web applications.
                  </p>
                </div>
              </div>
              {/* Course Materials */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-neutral-800 border-b border-neutral-200 pb-2">
                  Course Materials
                </h3>
                <ul className="list-disc list-inside px-2">
                  <li className="text-neutral-600 text-base font-normal">
                    Complete Course Slides
                  </li>
                  <li className="text-neutral-600 text-base font-normal">
                    Source Code Repository
                  </li>
                  <li className="text-neutral-600 text-base font-normal">
                    Project Files
                  </li>
                  <li className="text-neutral-600 text-base font-normal">
                    Project Guidelines & Tips
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right (price, features, buttons)*/}
          <div className="w-full md:col-span-2 col-span-5 border-border-neutral-300 p-6 rounded-xl space-y-4 sticky top-28">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
};
