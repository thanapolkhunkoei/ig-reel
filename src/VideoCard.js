import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader.js";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";
import VideoBottomNav from "./VideoBottomNav.js";

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <>
      <div className="videoCard">
        <VideoHeader />
        <video
          ref={videoRef}
          autoPlay
          onClick={onVideoPress}
          className="video_player"
          src="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259643/videos/cat_jbece4.mp4"
          alt="IG REEL"
          loop
        />
        <VideoFooter />
        <div className="navbar">
          <VideoBottomNav />
        </div>
        <VideoSidebar />
      </div>
    </>
  );
}

export default VideoCard;
