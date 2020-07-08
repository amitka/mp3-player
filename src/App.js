import React from "react";
import { AppContextProvider } from "./AppContext";
import Mp3Player from "./main";

const App = () => {
  return (
    <AppContextProvider>
      <Mp3Player />
    </AppContextProvider>
  );
};

export default App;
