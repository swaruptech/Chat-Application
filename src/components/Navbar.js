import React, {  useEffect, useState } from "react";
import { auth, db } from "./apikey";
import firebase from "firebase";
import { ContextProvider } from "./ContextProvider";



const Navbar = () => {
  
  const [user, setUser] = useState(null);
const [loader, setLoader] = useState(false);
  const { register,  logout } = React.useContext(ContextProvider);
  const userRegister = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
            .signInWithPopup(provider)
             .then((result) => {
        firebase.auth().signInWithRedirect(provider);
      });
  };
  const userLogout = () => {
    auth.signOut().then(() => {
      setUser(null);



    });
  };
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });
    
  }, []);

  const checkUser = () => {
    return !loader ? (
      user ? (
        <div className="navbar__links">
          <li>
            <span className="navbar__img">
              <img src={user.photoURL} alt="user" />
            </span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userLogout}>
              LogOut
            </button>
          </li>{" "}
        </div>
      ) : (
        <div className="navbar__links">
          <li>
            <button className="navbar__btn" onClick={userRegister}>
              Login/Register
            </button>
          </li>
        </div>
      )
    ) : (
      "..."
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__container">       
       
        <div className="navbar__logo">i-Chat</div>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
