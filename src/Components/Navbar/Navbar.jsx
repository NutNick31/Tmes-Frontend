import React, { useState } from "react";
import { RiCloseLine, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../Assets/tmes.png";
import "./Navbar.scss";
import C_btn from "../../Components/Button/Button";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
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
                <div className="nav_dropdown">
                       <ul>
                        <div></div>
                        <li>
                          Offline events 
                        
                          <div className="nav_dropdown2">
                            <ul>
                              <li>Geobotics</li>
                              <li>Safety Hunt</li>
                              <li>Industrial Design Problem</li>
                              <li>Safety Data Analytics</li>
                              <li>Mineac</li>
                              <li>National Mining Innovation Challenge</li>
                              <li>Mineo Case Study</li>
                              <li>Petro Case Study</li>
                              <li>Enviro Case Study</li>
                            </ul>
                          </div>
                        </li>
                        
                        <li>Online events
                        <div className="nav_dropdown2">
                        <ul>
                              <li>Quiz Spell</li>
                              <li>T-Shirt Design</li>
                              <li>Mine Shot</li>
                            </ul>
                        </div>
                        </li>
                       </ul>
                  </div>
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
          <C_btn txt="Sign Up" link="/signup"></C_btn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
