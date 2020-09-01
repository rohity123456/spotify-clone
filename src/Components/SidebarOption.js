import React from "react";
import "./CSS/SidebarOption.css";
import { useDataLayerValue } from "../common/DataLayer";
function SidebarOption({ title, Icon, PlayListId }) {
  const [{ spotify }, dispatch] = useDataLayerValue();
  const displayPlayList = () => {
    spotify.getPlaylist(PlayListId).then((playlist) =>
      dispatch({
        type: "SET_WEEKLY_PLAYLIST",
        playlist,
      })
    );
  };
  return (
    <div>
      {Icon ? (
        <div className="sidebar__option">
          {Icon && <Icon className="sidebarOption__Icon"></Icon>}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
      ) : (
        <div className="sidebar__option" onClick={displayPlayList}>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
