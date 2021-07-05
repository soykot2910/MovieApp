import React, { useState } from "react";

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
        <a href="/">MovieApp</a>
      </h3>
      <ul>
        <li>
          <a href="/">Popular</a>
        </li>
        <li>
          <a href="/">Watch List</a>
        </li>
        <li>
          <a href="/">Watched</a>
        </li>
      </ul>
    </div>
  );
}
