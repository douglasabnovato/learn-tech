import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-16 w-full min-h-screen flex flex-col pb-16">
      {/* Hero Section */}
      {/* Stats Section */}
      {/* Category Section */}
      {/* Programs Section */}
      {/* Quick Access Section */}
      {/* Blog Section */}
      Home of project
    </div>
  );
};
