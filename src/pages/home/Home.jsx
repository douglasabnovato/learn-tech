import { useEffect } from "react";
import { Hero } from "./hero/Hero";
import { Stats } from "./stats/Stats";
import { Category } from "./category/Category";
import { Programs } from "./programs/Programs";
import { QuickAccess } from "./quickaccess/QuickAccess";
import { TrilhasHome } from "./trilhas/TrilhasHome";
import { Blog } from "./blog/Blog";
import { Seo } from "../../components/common/Seo";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-16 w-full min-h-screen flex flex-col pb-16">
      <Seo caminho="/" />
      <Hero />
      <div className="!-mt-16">
        <Stats />
      </div>
      <Category />
      <TrilhasHome />
      <Programs />
      <QuickAccess />
      <Blog />
    </div>
  );
};
