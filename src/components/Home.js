import React from "react";
import Wlcmmsg from "./Wlcmmsg";
import Messages from "./Messages";
import { ContextProvider } from "./ContextProvider";

const Home = () => {
  const { loader, user } = React.useContext(ContextProvider);
  return (

    <div>{!loader ? user ? <Messages /> : <Wlcmmsg /> : "loading..."}</div>
  );
};

export default Home;
