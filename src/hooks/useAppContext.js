import React from "react";
import { AppContext } from "../AppContext";

const useAppContext = () => {
  const [state, setState] = React.useContext(AppContext);

  const sayHello = () => {
    setState((state) => ({ msg: "hello again" }));
  };

  return { sayHello, msg: state.msg };
};

export default useAppContext;
