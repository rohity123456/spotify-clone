import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import Login from "./Login";
import { getTokenFromURI } from "../common/spotify";
import spotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../common/DataLayer";
import Player from "./Player";
const spotify = new spotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const accessToken = getTokenFromURI()?.access_token;
    window.location.hash = "";
    // console.log("A TOKEN IS HERE : ", accessToken);
    if (accessToken) {
      spotify.setAccessToken(accessToken);
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });
      dispatch({
        type: "SET_SPOTIFY_OBJECT",
        spotify,
      });
      spotify.getMe().then((user) =>
        dispatch({
          type: "SET_USER",
          user,
        })
      );
      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      );
      spotify.getPlaylist("0YdTjGzCQonM7CdXymix2G").then((playlist) =>
        dispatch({
          type: "SET_WEEKLY_PLAYLIST",
          playlist,
        })
      );
    }
  }, []);
  //console.log("USER :", user);
  return <div className="App">{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
