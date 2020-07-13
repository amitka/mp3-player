import React, { useEffect, useRef } from "react";
import { AppContext } from "../AppContext";
import * as utils from "../utils/utils";
import { Howl, Howler } from "howler";
import usePrevious from "./usePrevious";

const useAppContext = () => {
  const [state, setState] = React.useContext(AppContext);
  const howlSound = useRef({});
  const prevState = usePrevious(state);

  useEffect(() => {
    if (howlSound.current._src) {
      state.isPlaying ? howlSound.current.play() : howlSound.current.pause();
    }
  }, [state.isPlaying]);

  useEffect(() => {
    // Unload and destroy all currently loaded Howl objects.
    if (howlSound.current._src !== undefined) {
      Howler.unload();
    }
    // Load NEW track (Howl object) at index
    if (state.playIndex !== -1) {
      const track = state.playlist[state.playIndex] || {};
      howlSound.current = new Howl({ src: [track.base64] });
      // On track Load
      howlSound.current.once("load", function () {
        console.log(`Track ${track.name} is loaded ...`);
        state.isPlaying && howlSound.current.play();
      });
      // On track End
      howlSound.current.on("end", function () {
        console.log(`Track ${track.name} finished !`);
        if (state.playIndex + 1 < state.playlist.length) {
          changeTrack(state.playIndex + 1);
        }
      });
    }
    //
  }, [state.playIndex]);

  const changeTrack = (index) => {
    setState((state) => ({ ...state, playIndex: index }));
  };

  const togglePlay = () => {
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  };

  const updatePlaylist = (files) => {
    Promise.all(
      files.map(async (file) => {
        const base64 = await utils.toBase64(file);
        file.base64 = base64;
      })
    ).then(() => {
      const allFiles = [...state.playlist, ...files];
      setState((state) => ({ ...state, playlist: allFiles, playIndex: 0 }));
    });
  };

  const clearPlaylist = () => {
    setState((state) => ({ ...state, playlist: [], playIndex: -1 }));
  };

  return {
    playlist: state.playlist,
    playIndex: state.playIndex,
    updatePlaylist,
    clearPlaylist,
    togglePlay,
    changeTrack,
  };
};

export default useAppContext;
