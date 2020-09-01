import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./CSS/Player.css";
function Player({ spotify }) {
  return (
    <div>
      <div className="player__body">
        <Sidebar />
        <Body spotify />
      </div>

      <Footer />
      {/* Footer */}
    </div>
  );
}

export default Player;
