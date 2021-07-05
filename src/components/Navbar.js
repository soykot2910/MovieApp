import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export default function Navbar() {
  const { watchList, watched } = useContext(MovieContext);
  const [scroll, setScroll] = useState(false);
  const [mbl, setMbl] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleMblMenu = () => {
    mbl ? setMbl(false) : setMbl(true);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className={scroll ? "navbar navbar-fixed" : "navbar"}>
      <h3>
        <Link to="/">MovieApp</Link>
      </h3>
      <ul>
        <li>
          <Link to="/watchList">
            WatchList <span>{watchList.length}</span>
          </Link>
        </li>
        <li>
          <Link to="/watched">
            Watched
            <span>{watched.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
