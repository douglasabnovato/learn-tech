import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlay } from "react-icons/fa6";
import { VideoModal } from "./VideoModal";

export const VideoGrid = ({ eyebrow, pageTitle, subtitle, items, accentGradient }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="w-full bg-zinc-950 pb-20">
      {/* Cabeçalho */}
      <div
        className={`w-full bg-gradient-to-tr ${accentGradient} md:px-16 sm:px-10 px-4 md:py-20 py-14`}
      >
        <div className="max-w-3xl space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
          >
            <FaArrowLeft /> Voltar para a Home
          </Link>

          {eyebrow && (
            <p className="text-sm font-semibold tracking-wide uppercase text-white/70">
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-base text-neutral-200 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Grid de vídeos */}
      <div className="md:px-16 sm:px-10 px-4 md:py-16 py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto">
          {items.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group text-left rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-neutral-600 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-neutral-800">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="text-neutral-900 ml-1" size={18} />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-white font-bold text-base leading-snug">
                  {video.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};