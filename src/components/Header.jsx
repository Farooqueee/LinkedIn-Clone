import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import AvatarImage from "../Icons/avatar.jpg";
import LinkedInIcons from "../Icons/icons8-linkedin-48.png";
import "../components/header.css";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedInIcons} alt="LinkedInIcons" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messagin" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions avatar={AvatarImage} title="Me" />
      </div>
    </div>
  );
}

export default Header;
