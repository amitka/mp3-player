import React, { useEffect } from "react";

const defaultState = {
  playlist: [],
  playIndex: -1,
  isPlaying: false,
  isLoading: false,
};

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = ({ children }) => {
  const [state, setState] = React.useState(defaultState);

  useEffect(() => {
    console.log(state);
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
