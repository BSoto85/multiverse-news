import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="head">
      <div className="headerobjectswrapper">
        <div className="weatherforcastbox">
          <span style={{ fontStyle: "italic" }}>
            Weather forecast for the next 24 hours: Plenty of Sunshine
          </span>
          <br />
          <span>Wind: 7km/h SSE; Ther: 71°F; Hum: 82%</span>
        </div>
        <Link to="/" className="title-link">
          <header>Mutiverse News</header>
        </Link>
        <Link to="/index" className="button-10">
          Get Started
        </Link>
        <Link to="/about" className="button-10">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
