import React, { useEffect, useState, useRef } from "react";
import { AppContext } from "../AppContext";
import * as utils from "../utils/utils";
import { Howl, Howler } from "howler";

const useAppContext = () => {
  const [state, setState] = React.useContext(AppContext);

  let howlSound = useRef({});

  useEffect(() => {
    if (howlSound.current._src) {
      state.isPlaying ? howlSound.current.play() : howlSound.current.pause();
    }
  }, [state.isPlaying]);

  useEffect(() => {
    if (howlSound.current._src !== undefined) {
      console.log("unload");
      //howlSound.current.unload();
      Howler.unload();
    }
    const track = state.playlist[state.playIndex] || {};
    howlSound.current = new Howl({ src: [track.base64] });
    howlSound.current.once("load", function () {
      console.log("loaded");
      state.isPlaying && howlSound.current.play();
    });
    //
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
        const result = await utils.toBase64(file);
        file.base64 = result;
      })
    ).then(() => {
      const allFiles = [...state.playlist, ...files];
      console.log("update");
      setState((state) => ({ ...state, playlist: allFiles, playIndex: 0 }));
    });
  };

  return {
    playlist: state.playlist,
    playIndex: state.playIndex,
    updatePlaylist,
    togglePlay,
    changeTrack,
  };
};

export default useAppContext;
