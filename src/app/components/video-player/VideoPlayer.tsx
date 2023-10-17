import React from "react";
import "./video-player.scss";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface VideoPlayerProps {
  id: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id, title, onClose }) => {
  return (
    <div className="video-player fill-view d-flex-center">
      <div className="layer-close fill-view" onClick={onClose} />
      <div className="player">
        <button className="player-btn-close" onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
        </button>
        <LiteYouTubeEmbed
          aspectHeight={10}
          aspectWidth={16}
          playlist={false}
          id={id}
          title={title}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
