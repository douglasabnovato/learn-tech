import { useEffect } from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import fundoP from "./../../assets/page-top-bg-800.webp";
import fundoM from "./../../assets/page-top-bg-1600.webp";
import fundoG from "./../../assets/page-top-bg-2560.webp";

/* O fundo é o LCP do programa e das listas (D19, 20/11/2026). Antes era um background-image de 11520 px (140 KB);
   agora é uma <img> com srcset de 800 a 2560 px (de 1 a 7 KB), que o navegador prioriza. O original fica em
   assets/originals/page-top-bg.webp. */
export const PageTopBanner = ({ pageTitle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full md:aspect-[16/4] aspect-auto flex justify-center flex-col md:pt-16 pt-28 md:pb-0 md:px-16 sm:px-10 px-4 relative overflow-hidden">
      <img
        src={fundoM}
        srcSet={`${fundoP} 800w, ${fundoM} 1600w, ${fundoG} 2560w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-zinc-50 via-zinc-100/40 to-zinc-950/60 opacity-50 z-10"></div>
      <div className="space-y-3 z-20 relative py-3">
        <h1 className="text-4xl font-bold text-zinc-50">{pageTitle}</h1>
        <Breadcrumb />
      </div>
    </div>
  );
};
