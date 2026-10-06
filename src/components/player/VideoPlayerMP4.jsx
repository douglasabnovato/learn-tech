import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaCompress } from "react-icons/fa";
import { FaExpand, FaPlay, FaPause } from "react-icons/fa6";

export const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  /** Carregar metadados e listeners principais */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  /** Atualizar tempo do vídeo */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  /** Detectar mudanças no fullscreen */
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  /** Play/Pause */
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused);
  };

  /** Volume */
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  /** Progresso */
  const handleProgressClick = (e) => {
    if (!videoRef.current) return;

    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  /** Fullscreen */
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  /** Formatador de tempo */
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto border border-neutral-600 bg-black group rounded-xl cursor-pointer overflow-hidden"
    >
      {/** Vídeo */}
      <video
        ref={videoRef}
        className="w-full aspect-video"
        onClick={togglePlayPause}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/** Controles */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/60 to-neutral-900/5 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {/** Barra de progresso */}
        <div
          className="relative h-2 bg-neutral-300 w-full mb-4 cursor-pointer rounded-full"
          onClick={handleProgressClick}
        >
          <div
            className="absolute h-full bg-indigo-600 rounded-full"
            style={{
              width: duration ? `${(currentTime / duration) * 100}%` : "0%",
            }}
          />
        </div>

        {/** Controles principais */}
        <div className="flex items-center justify-between space-x-4 text-neutral-50">
          <div className="flex items-center space-x-4">
            <button onClick={togglePlayPause} className="cursor-pointer">
              {isPlaying ? (
                <FaPause className="w-6 h-6" />
              ) : (
                <FaPlay className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMute} className="cursor-pointer">
                {isMuted ? (
                  <FaVolumeMute className="w-5 h-5" />
                ) : (
                  <FaVolumeUp className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                value={volume}
                onChange={handleVolumeChange}
                min="0"
                max="1"
                step="0.1"
                className="w-24 h-2 rounded-full bg-neutral-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <button onClick={toggleFullScreen} className="cursor-pointer">
              {isFullScreen ? (
                <FaCompress className="w-5 h-5" />
              ) : (
                <FaExpand className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
