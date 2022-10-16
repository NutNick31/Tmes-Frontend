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
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuUnfoldFill
            color="black"
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
                <Link className="nav_li" to="/great-step">
                  GreatStep
                </Link>
              </p>
              <p>
                <Link className="nav_li" to="/great-step/events">
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
              <p>
                <Link to="/signin"> Sign In</Link>
              </p>
              <button>
                <Link to="/signup"> Sign up</Link>
              </button>
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
            <Link className="nav_li" to="/great-step">
              GreatStep
            </Link>
          </p>
          <p>
            <Link className="nav_li" to="/great-step/events">
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
        <p>
          <Link to="/signin"> Sign In</Link>
        </p>
        <button>
          <Link to="/signup"> Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
