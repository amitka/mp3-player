import React from "react";
import useAppContext from "../../hooks/useAppContext";

const Player = () => {
  const { togglePlay, changeTrack, playIndex, playlist } = useAppContext();

  return (
    <section>
      <div>
        Player <span>{playIndex}</span>
        <div>
          <button
            id="prev-btn"
            onClick={() => changeTrack(playIndex - 1)}
            disabled={playIndex <= 0}
          >
            Prev
          </button>
          <button
            id="play-btn"
            onClick={() => togglePlay()}
            disabled={playlist.length === 0}
          >
            Play
          </button>
          <button
            id="next-btn"
            onClick={() => changeTrack(playIndex + 1)}
            disabled={playIndex >= playlist.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Player;
