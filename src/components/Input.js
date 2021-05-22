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

 const addEmoji = (e) => {
   
  let emoji = e.native;
      setMsg(setMsg+emoji)
    
  };


  return (
    <div className="input__form">
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
   <Picker onSelect={addEmoji} />
</span>
    </div>
  );
};

export default Input;



