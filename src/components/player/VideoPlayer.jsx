import React, { useRef, useState, useEffect } from "react";

export const VideoPlayer = () => {
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

  }, []);
  
  return <div>VideoPlayer</div>;
};
