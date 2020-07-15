// General helper functions
import { Howl, Howler } from "howler";

export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    //
    reader.readAsDataURL(file);
  });
};

export function sec2min(duration) {
  var pad = function (num, size) {
      return ("000" + num).slice(size * -1);
    },
    time = parseFloat(duration).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60);
  //milliseconds = time.slice(-3);

  return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
}

export const getTrackDuration = (value) => {
  return new Promise((resolve, reject) => {
    let howlObj = new Howl({ src: [value] });
    if (howlObj._state === "loaded") {
      resolve(sec2min(howlObj.duration()));
      howlObj.unload();
      howlObj = null;
    }
    howlObj.on("load", function () {
      resolve(sec2min(howlObj.duration()));
    });
  });
};
