import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./VideoBottomNav.css";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function VideoBottomNav() {
  return (
    <div className="videoFooter_nav">
      <div className="videoFooter_icon">
        <HomeIcon />
      </div>
      <div className="videoFooter_icon">
        <SearchIcon />
      </div>
      <div className="videoFooter_icon">
        <OndemandVideoIcon />
      </div>
      <div className="videoFooter_icon">
        <ShoppingBagIcon />
      </div>
      <div className="videoFooter_icon">
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default VideoBottomNav;
