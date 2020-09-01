import React, { useState, useEffect } from "react";
import "./CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../common/DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  const [showBlack, setshowBlack] = useState(false);
  const Body = document.querySelector(".body__info");

  const IntersecObserver = () => {
    if (Body) {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "-70px 0px 0px 0px",
        threshold: 1.0,
      };
      //console.log("BODY", Body);
      let observer = new IntersectionObserver((entries, observer) => {
        //console.log("ENTRIES", entries);
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) setshowBlack(false);
          else setshowBlack(true);
        });
      }, options);
      observer.observe(Body);
    }
  };
  document.onreadystatechange = IntersecObserver;
  return (
    <div className="header">
      <div
        className={
          showBlack ? "header__black header__black_visible" : "header__black"
        }
      ></div>
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artist, Songs or Albums" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RY" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
