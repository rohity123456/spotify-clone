import React from "react";
import "./CSS/SongRow.css";
import { useDataLayerValue } from "../common/DataLayer";
function SongRow({ track }) {
  const [{ spotify }, dispatch] = useDataLayerValue();
  const { name, artists, album, duration_ms } = track;
  const getforMatedDuration = (duration_ms) => {
    if (!duration_ms) return "2:30";
    const seconds = Math.round(duration_ms / 1000) % 60;
    return `${Math.floor(duration_ms / 1000 / 60)}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };
  const controlTrackPlay = () => {
    console.log(track);
    const options = {
      uris: [track.uri],
    };
    spotify.play(options);
  };
  return (
    <div className="songRow">
      <img src={album?.images[0]?.url} alt="" className="songRow__album" />
      <div className="songRow__info">
        <div className="songRow__InfoLeft">
          <h1>{name}</h1>
          <p>
            {artists.map((artist) => artist.name).join(", ")}
            <span className={"songRow__infoDot"}></span>
            {album.name}
          </p>
        </div>

        <h5>{getforMatedDuration(duration_ms)}</h5>
      </div>
    </div>
  );
}

export default SongRow;
