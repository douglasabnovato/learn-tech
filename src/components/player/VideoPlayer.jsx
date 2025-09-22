import React, { useRef, useState, useEffect } from "react";

export const VideoPlayer = ({src}) => {
  const videoRef = React.useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  /** Load video metadata and event listeners */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListenner("loadedmetadata", () => {
        setDuration(video.duration);
      });
      video.addEventListenner("ended", () => {
        setIsPlaying(false);
      });
    }
  }, []);

  /** Update time while playing */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListenner("timeupdate", () => {
        setCurrentTime(video.currentTime);
      });
    }
  }, [currentTime]);
  
  /** Handle fullscreen changes */
  useEffect(() => {
    const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () {
        document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
    setIsPlaying(!video.paused);
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  }

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
    setVolume(isMuted ? 0 : 1);
  }

  const handleProgressClick = (e) => {
    const react = e.target.getBoundingClientReact();
    const pos = (e.clientX - react.left) / react.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  }

  const toggleFullScreen = () => {
    if(!document.fullscreenElement){
        containerRef.current.requestFullscreen();
    }else {
        document.exitFullscreen();
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <div
        ref={containerRef}
        className="relative w-full mx-auto border border-neutral-600 bg-transparent group rounded-xl cursor-pointer overflow-hidden">
        {/** Video */}
        <video 
        ref={videoRef}
        className="w-full aspect-video"
        onClick={togglePlayPause}>
            <source src={src} type="video/mp4"/>
        </video>
        {/** Controls */}
    </div>
    );
};
