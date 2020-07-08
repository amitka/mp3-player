import React from "react";

const defaultState = {
  msg: "Hello from default state",
};

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = ({ children }) => {
  const [state, setState] = React.useState(defaultState);
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
