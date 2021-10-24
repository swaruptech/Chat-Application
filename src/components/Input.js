import React, { useState, useContext } from "react";
import { ContextProvider } from "./ContextProvider";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const Input = () => {


  const { sendMessage } = useContext(ContextProvider);
  const [msg, setMsg] = useState("");



  const sendMsg = (e) => {
    e.preventDefault();
    sendMessage(msg);
    setMsg("");
  };




  return (
    
    <div className="input__form">
          <span className="copyright">
                          Copyright © 2021, All rights reserved.
                
              
                 </span>
                 
                 <br></br>
      <form onSubmit={sendMsg}>
      
        <input
          type="text"
          name=""
          className="input__control"
          placeholder="Type a message..."
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          required
        />
      </form>
      <span>
   

</span>
    </div>
  );
};

export default Input;



