import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => { 
      const threshold = window.innerWidth < 768 ? 500 : 300;
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed z-[99] 
                 /* Mobile: menor e mais no canto */
                 bottom-4 right-4 p-2 
                 /* Desktop: maior e mais afastado */
                 md:bottom-10 md:right-10 md:p-3
                 bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700 
                 text-white rounded-full shadow-2xl 
                 hover:scale-110 active:scale-95
                 transition-all duration-300 ease-in-out
                 border border-white/10
                 cursor-pointer"
    >
      <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};
