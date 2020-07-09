import React from "react";
import useAppContext from "../hooks/useAppContext";
import Playlist from "../components/Playlist";
import Player from "../components/Player";

const Mp3Player = () => {
  const { msg, sayHello } = useAppContext();
  return (
    <main className="mp3-player-app">
      <Playlist />
      <Player />
    </main>
  );
};

export default Mp3Player;
