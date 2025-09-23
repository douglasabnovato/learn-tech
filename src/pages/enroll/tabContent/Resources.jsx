import React from "react";

export const Resources = () => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-1.5">
        <h1 className="text-xl font-semibold text-neutral-700">
          Course Materials
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
        <ul className="list-disc list-outside px-6">
          <li className="text-neutral-600 text-base font-normal">
            <strong>Course Slides:</strong>
            Downloadable slides from each lesson to help you review key points.
          </li>
          <li className="text-neutral-600 text-base font-normal">
            <strong>Course Slides:</strong>
            Downloadable slides from each lesson to help you review key points.
          </li>
          <li className="text-neutral-600 text-base font-normal">
            <strong>Course Slides:</strong>
            Downloadable slides from each lesson to help you review key points.
          </li>
          <li className="text-neutral-600 text-base font-normal">
            <strong>Course Slides:</strong>
            Downloadable slides from each lesson to help you review key points.
          </li>
        </ul>
      </div>
      <p className="text-sm font-normal text-neutral-600">
        Be Sure to make full use of resources as they will help you master the
        course materials more effectively.
      </p>
    </div>
  );
};
