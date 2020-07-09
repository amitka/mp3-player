import React, { useEffect } from "react";
import { AppContext } from "../AppContext";
import * as utils from "../utils/utils";
import { Howl, Howler } from "howler";

const useAppContext = () => {
  const [state, setState] = React.useContext(AppContext);

  const updatePlaylist = (files) => {
    files.forEach(async (file) => {
      const result = await utils.toBase64(file);
      file.base64 = result;
    });
    //
    const allFiles = [...state.playlist, ...files];
    setState((state) => ({ ...state, playlist: allFiles }));
  };

  const playTrack = () => {
    //console.log("play");
    const current = state.playlist[0];
    const sound = new Howl({
      src: current.base64,
    });

    // Clear listener after first call.
    sound.once("load", function () {
      sound.play();
    });

    // Fires when the sound finishes playing.
    sound.on("end", function () {
      console.log("Finished!");
    });
    console.log(sound);
  };

  return { updatePlaylist, playlist: state.playlist, playTrack };
};

export default useAppContext;
