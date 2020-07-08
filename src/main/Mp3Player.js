import React from "react";
import useAppContext from "../hooks/useAppContext";

const Mp3Player = () => {
  const { msg, sayHello } = useAppContext();
  return (
    <main className="mp3-player-app">
      <h1>Mp3 Player</h1>
      <h2>{msg}</h2>
    </main>
  );
};

export default Mp3Player;
