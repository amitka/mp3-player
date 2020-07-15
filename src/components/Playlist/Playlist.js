import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { v4 as uuidv4 } from "uuid";
import className from "classnames";
import threeDots from "../../assets/three-dots.svg";
import spinner from "../../assets/spinner.gif";

const Playlist = () => {
  const {
    playlist,
    playIndex,
    updatePlaylist,
    clearPlaylist,
    changeTrack,
    isLoading,
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
          <div className="load-btn">
            {isLoading ? <img src={spinner} alt="loader" /> : "Load..."}
          </div>
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
        {playlist.length === 0 ? (
          <div className="zero-msg">
            <span>Load Some Tracks First ...</span>
          </div>
        ) : (
          <ul className="track-list">
            {playlist.map((track, index) => (
              <li
                key={uuidv4()}
                onClick={() => changeTrack(index)}
                className={className("track-list-item", {
                  selected: index === playIndex,
                })}
              >
                <span className="item-counter">{index + 1}</span>
                <span className="item-title">{track.name.split(".")[0]}</span>
                <time className="item-duration" dateTime="hhmmss">
                  {track.duration ? track.duration : "00:00:00"}
                </time>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Playlist;
