import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/watchList">WatchList</Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
      </ul>
    </div>
  );
}
