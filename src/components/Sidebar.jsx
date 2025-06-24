import { Avatar } from "@mui/material";
import React from "react";
import "../components/sidebar.css";
import AvatarImage from "../Icons/avatar.jpg";
import BackgroundImg from "../Icons/wallpaper.png";

function Sidebar() {
  const recentItem = (topic) =>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={BackgroundImg} alt="" />
        <Avatar src={AvatarImage}className="sidebar__avatar" />
        <h2>Farooq Ahmed</h2>
        <h4>Hello.farooq@outlook.com</h4>
      </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,253</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,444</p>
          </div>
        </div>
      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItem("Programming")}
        {recentItem("HTML")}
        {recentItem("CSS")}
        {recentItem("JavaScript")}
        {recentItem("React.Js")}
      </div>
    </div>
  );
}

export default Sidebar;
