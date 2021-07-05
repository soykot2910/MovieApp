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

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className={scroll ? "navbar navbar-fixed" : "navbar"}>
      <h3>
        <Link to="/" onClick={(e) => setMbl(false)}>
          MovieApp
        </Link>
      </h3>
      <i className="bi bi-list" onClick={(e) => setMbl(!mbl)}></i>
      <ul className={mbl ? "mbl" : "nav"}>
        <li>
          <Link to="/watchList" onClick={(e) => setMbl(!mbl)}>
            WatchList <span className="total">{watchList.length}</span>
          </Link>
        </li>
        <li>
          <Link to="/watched" onClick={(e) => setMbl(!mbl)}>
            Watched
            <span className="total">{watched.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
