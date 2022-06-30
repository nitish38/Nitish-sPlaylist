import React from "react";

const SongDetails = ({ songs, currentSong, setCurrentSong, nextSong }) => {
  return (
    <div className="songDetails">
      <h2>Now Playing</h2>
      <img src={songs[currentSong].image} alt="" />
      <h3>{songs[currentSong].title}</h3>
      <h4>by</h4>
      <h3>{songs[currentSong].singer}</h3>
    </div>
  );
};

export default SongDetails;
