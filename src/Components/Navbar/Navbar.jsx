import React from "react";
import "./Navbar.scss";
import { dummy } from "../../Assets";

import { Link } from "react-router-dom";

const link = "https://www.google.com";

const Navbar = () => {
  const [logo, setLogo] = React.useState("logo_light");

  return (
    <nav className="nav">
      <div class="nav_blur"></div>
      <div className="nav_container">
        <ul className="nav_links">
          <li className="nav_links_li">
            <Link to="aboutus">Events</Link>
          </li>
          <li className="nav_links_li">
            <Link to="aboutus">login</Link>
          </li>
        </ul>
        <div className="nav_logo">
          <a href={link} target="blank">
            <img src={dummy} alt="logo" />
          </a>
        </div>
        <ul className="nav_links">
          <li className="nav_links_li">
            <Link to="aboutus">About Us</Link>
          </li>
          <li className="nav_links_li">
            <Link to="aboutus">login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
