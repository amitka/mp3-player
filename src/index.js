import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./AppContext";

import "./styles/reset.css";
import "./styles/init.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
