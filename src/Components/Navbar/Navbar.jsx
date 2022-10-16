import React, { useState } from "react";
import { RiCloseLine, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../Assets/tmes.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuUnfoldFill
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <Link className="nav_li" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="nav_li" to="">
                  Events
                </Link>
              </p>
              <p>
                <Link className="nav_li" to="/aboutus">
                  AboutUs
                </Link>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p>
            <Link className="nav_li" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="nav_li" to="/Events">
              Events
            </Link>
          </p>
          <p>
            <Link className="nav_li" to="/aboutus">
              AboutUs
            </Link>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p className="nav_li">Sign in</p>
        <button type="button" className="nav_li">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
