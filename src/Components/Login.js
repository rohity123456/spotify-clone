import React, { useEffect } from "react";
import "./CSS/Login.css";
import { loginUrl, getTokenFromURI } from "../common/spotify";
import { useDataLayerValue } from "../common/DataLayer";

function Login() {
  const [{ spotify }, dispatch] = useDataLayerValue();
  useEffect(() => {
    localStorage.setItem("SET_ORIGIN", window.origin);
  }, []);
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
