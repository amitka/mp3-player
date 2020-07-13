import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { v4 as uuidv4 } from "uuid";
import className from "classnames";

const Playlist = () => {
  const {
    playlist,
    playIndex,
    updatePlaylist,
    clearPlaylist,
    changeTrack,
  } = useAppContext();
  const inpRef = React.useRef();

  const onPlaylistChange = (e) => {
    e.preventDefault();
    updatePlaylist(Object.values(e.target.files));
    inpRef.current.value = "";
  };

  return (
    <aside className="mp3-app-playlist">
      <div className="playlist-controls">
        <div className="load-btn-wrapper">
          <div className="load-btn">Load...</div>
          <input
            id="fileInput"
            type="file"
            multiple
            accept="audio/*"
            ref={inpRef}
            onChange={onPlaylistChange}
          />
        </div>
        <div className="clear-btn" onClick={() => clearPlaylist()}>
          Clear All
        </div>
        <div className="tracks-counter">
          {playlist.length > 0 ? `${playlist.length} Tracks` : "None"}
        </div>
      </div>
      <div className="track-list-wrapper">
        <ul className="track-list">
          {playlist.map((track, index) => (
            <li
              key={uuidv4()}
              onClick={() => changeTrack(index)}
              className={className("track-list-item", {
                selected: index === playIndex,
              })}
            >
              <span className="item-counter">{index + 1}. </span>
              <span className="item-title">{track.name}</span>
              <span className="item-duration">{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Playlist;
