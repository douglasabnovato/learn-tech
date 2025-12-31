import React, { useState, useEffect } from "react";

import DevImg1 from "./dev-4.JPG";
import DevImg2 from "./dev-5.JPG";
import DevImg3 from "./dev-6.JPG";
import DevImg4 from "./dev-7.JPG";

const images = [DevImg1, DevImg2, DevImg3, DevImg4];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:h-screen h-auto bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 flex items-end justify-center md:px-16 sm:px-10 px-4 md:pt-0 md:pb-0 pt-[8ch] pb-4">
      <div className="w-full flex-1 flex items-center justify-between md:gap-16 gap-4 md:flex-nowrap flex-wrap md:flex-row flex-col-reverse">
        <div className="pt-[4ch] md:w-[45%] w-full h-auto md:space-y-8 space-y-6">
          <div className="space-y-2">
            <p className="text-lg md:text-2xl font-medium text-neutral-600">
              Aprendizagem Online para Você
            </p>
            <h1 className="md:text-[5rem] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.3]">
              Comece a aprender
            </h1>
          </div>
          <p className="text-lg font-normal text-neutral-800 md:pr-16 pr-0">
            O melhor lugar para descobrir novos recursos de aprendizagem, livros
            e cursos.
          </p>
          <div className="w-full flex items-center gap-6">
            <button
              onClick={() =>
                document
                  .getElementById("section-programs")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="md:w-first w-1/2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 cursor-pointer py-3 px-8 rounded-full font-semibold ease-in-out duration-300"
            >
              Comece Agora
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("section-stats")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="md:w-first w-1/2 border border-neutral-800 cursor-pointer py-3 px-8 text-neutral-800 rounded-full font-semibold ease-in-out duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="md:w-[50%] w-full aspect-square flex items-center justify-center p-4 relative">
          <div className="absolute w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <img
            src={images[currentIndex]}
            alt={`Desenvolvedora new TECH - Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover shadow-2xl
                       rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
                       border-2 border-indigo-500/30 
                       transition-opacity duration-1000 ease-in-out"
            key={currentIndex}
          />
          <div className="absolute bottom-8 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-indigo-600 w-6" : "bg-indigo-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
