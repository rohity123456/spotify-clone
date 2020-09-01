import React from "react";
import "./CSS/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../common/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import EmptyMessageContainer from "./EmptyMessageContainer";

function Body({ spotify }) {
  const [{ weeklyPlaylist }, dispatch] = useDataLayerValue();
  const alternateImg =
    "https://cdn2.iconfinder.com/data/icons/apple-inspire-black/100/Apple-40-512.png";
  return (
    <div className="Body">
      <Header />

      <div className="body__info">
        <img src={weeklyPlaylist?.images[0]?.url || alternateImg} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{weeklyPlaylist?.name}</h2>
          <p>{weeklyPlaylist?.description}</p>
        </div>
      </div>
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__iconsShuffle" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>
      <div className="body__songs">
        {weeklyPlaylist?.tracks?.items.length ? (
          weeklyPlaylist?.tracks?.items.map((item) => (
            <SongRow track={item?.track} />
          ))
        ) : (
          <EmptyMessageContainer />
        )}
      </div>
    </div>
  );
}

export default Body;
