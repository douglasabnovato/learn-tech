import React from "react";

export const Overview = () => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-1.5">
        <h1 className="text-xl font-semibold text-neutral-700">
          About the course
        </h1>
        <p className="text-sm font-normal text-neutral-600">
          This comprehensive web development bootcamp takes you from absolute
          beginner to profissional developer. You'll learn all the tools and
          technologies you need to build full-stack web applications.
        </p>
      </div>
      <div className="space-y-1 5">
        <h3 className="text-xl text-neutral-700 font-semibold">
          What you'll learn
        </h3>
        <ul className="list-disc list-inside px-2">
          <li className="text-neutral-600 text-base font-normal">
            Learn to build full-stack web applications using HTML, CSS and
            Javascript.
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
  );
};
