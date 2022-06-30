import React, { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import SongDetails from "./SongDetails";

const Player = ({ songs, currentSong, setCurrentSong, nextSong }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSong(() => {
        let temp = currentSong;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSong(() => {
        let temp = currentSong;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div className="player">
      <SongDetails
        songs={songs}
        currentSong={currentSong}
        nextSong={nextSong}
        setCurrentSong={setCurrentSong}
      />
      <audio ref={audioEl} src={songs[currentSong].src}></audio>
      <Controls
        SkipSong={SkipSong}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
      />
    </div>
  );
};

export default Player;
