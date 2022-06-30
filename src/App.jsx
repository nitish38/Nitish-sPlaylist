import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Kesariya",
      singer: "Arijit Singh",
      src: "songs/Kesariya.mp3",
      image: "images/Kesariya.jpg",
    },
    {
      title: "Dhokha",
      singer: "Arijit Singh",
      src: "songs/Dhokha.mp3",
      image: "images/Dhokha.jpg",
    },
  ]);

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);
  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [currentSong]);
  return (
    <div className="App">
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        nextSong={nextSong}
      />
    </div>
  );
}

export default App;
