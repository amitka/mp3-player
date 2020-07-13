import React from "react";
import Playlist from "../components/Playlist";
import Player from "../components/Player";

const Mp3Player = () => {
  return (
    <main className="mp3-player-app">
      <Playlist />
      <Player />
    </main>
  );
};

export default Mp3Player;
