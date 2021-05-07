import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "./apikey";
import firebase from "firebase";
export const ContextProvider = createContext();

const Ctp = (props) => {
  
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const [allMsg, setAllMsg] = useState([]);


  const sendMessage = (msg) => {
    db.collection("messages").add({
      msg,
      photo: user.photoURL,
      username: user.displayName,


      email: user.email,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });

    
    db.collection("messages")
      .orderBy("currentTime", "asc")
      .onSnapshot((snp) => {
        console.log("all message", snp.docs);
        setAllMsg(
          snp.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, []);



  console.log(allMsg);
  return (
    <ContextProvider.Provider
      value={{  user, loader, sendMessage, allMsg }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Ctp;
