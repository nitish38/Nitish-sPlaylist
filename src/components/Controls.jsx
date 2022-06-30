import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
const Controls = ({ isPlaying, setIsplaying, SkipSong }) => {
  return (
    <div className="controls">
      <button
        className="skip-btn"
        onClick={() => {
          SkipSong(false);
        }}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => {
          setIsplaying(!isPlaying);
        }}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button
        className="skip-btn"
        onClick={() => {
          SkipSong(true);
        }}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default Controls;
