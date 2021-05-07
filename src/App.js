import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContextFun from "./components/ContextProvider";
import Ctp from "./components/ContextProvider";
function App() {
  return (
    <Ctp>
      <Navbar />
      <Home />
    </Ctp>
  );
}

export default App;
