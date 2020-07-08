import React from "react";
import useAppContext from "./hooks/useAppContext";

const App = () => {
  const { msg, sayHello } = useAppContext();

  return (
    <div>
      <h1>Hello</h1>
      <h2>{msg}</h2>
      <button onClick={() => sayHello()}>Click</button>
    </div>
  );
};

export default App;
