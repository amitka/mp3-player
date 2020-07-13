import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { v4 as uuidv4 } from "uuid";

const Playlist = () => {
  const { playlist, updatePlaylist, changeTrack } = useAppContext();
  const inpRef = React.useRef();

  const onPlaylistChange = (e) => {
    updatePlaylist(Object.values(e.target.files));
    inpRef.current.value = "";
  };

  return (
    <aside>
      <div>Playlist</div>
      <label htmlFor="fileInput">Load some files</label>
      <input
        id="fileInput"
        type="file"
        multiple
        accept="audio/*"
        ref={inpRef}
        onChange={onPlaylistChange}
      />
      <div>
        <ul>
          {playlist.map((track, index) => (
            <li key={uuidv4()} onClick={() => changeTrack(index)}>
              <span>{index + 1}. </span>
              <span>{track.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Playlist;
