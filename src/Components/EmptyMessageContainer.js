import React from "react";
import "./CSS/EmptyMessageContainer.css";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";
function EmptyMessageContainer() {
  return (
    <div className="EmptyMessageContainer">
      <AlbumOutlinedIcon fontSize="large" />
      <h1>It's a bit empty here...</h1>
      <h5>Let's find some songs for your playlist</h5>
      <button>NEW RELEASES</button>
    </div>
  );
}

export default EmptyMessageContainer;
