import React from "react";
import { PageTopBanner } from "../../components/pageTop/PageTopBanner";

export const EnrollPrograms = () => {
  return (
    <div className="w-full min-h-screen flex-col space-y-16 pb-16">
      {/* Page Top Banner section */}
      <PageTopBanner pageTitle={"Enroll Programs"} />
      {/* Programs contents */}
      <div className="w-full space-y-16 md:px-16 sm:px-10 px-4">
        Enroll Programs
      </div>
    </div>
  );
};
