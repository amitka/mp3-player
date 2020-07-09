import React from "react";
import useAppContext from "../../hooks/useAppContext";

const Player = () => {
  const { playTrack } = useAppContext();
  return (
    <section>
      <div>
        Player
        <button onClick={playTrack}>Play</button>
      </div>
    </section>
  );
};

export default Player;
