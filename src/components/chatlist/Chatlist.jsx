import React, { useState } from "react";
import AddUser from "./addUser/addUser";
import "./chatlist.css";
const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" name="" id="" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Sumit</span>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Sumit</span>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Sumit</span>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  );
};

export default Chatlist;