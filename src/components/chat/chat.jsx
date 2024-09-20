import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  })
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    // setOpen(false)
  };
  // console.log(text)
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />

          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="text">
          <img src="https://picsum.photos/id/237/200/" alt="" />
            <p>
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              ratione.
            </p>
            <span>a moment ago</span>
          </div>
        </div>
        <div ref={endRef} ></div>
      </div>
      <div className="bottom">
        <img src="./img.png" alt="" />
        <img src="./camera.png" alt="" />
        <img src="./mic.png" alt="" />
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
