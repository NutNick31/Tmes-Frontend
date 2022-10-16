import React from "react";
import "./TMES.scss";
import Brand from "./Brand";
import Prof from "./Prof";
import Typewriter from "typewriter-effect";

const TMES = () => (
  <>
    <div className="header section__padding" id="home">
      <div className="header-content">
        {/* <div className="header-image">
          <img src={logo} />
          <h1 className="gradient__text">TMES</h1>
        </div>
        <p style={{ fontSize: "1.6rem" }} className="gradient__text">
          Presents
        </p> */}
        <h1 className="gradient__text">
          <Typewriter
            options={{
              strings: ["WELCOME TO TMES"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa iusto
          placeat soluta veritatis sequi, dicta aut in voluptatum quaerat nam
          nemo, voluptate, molestias uuntur nisi iure ea qui.
        </p>

        <div className="header-content__input">
          <button type="button">Register Now</button>
        </div>
      </div>

      <div className="header-image">
        <img src="https://source.unsplash.com/pGSgYmTDdvk" />
      </div>
    </div>
    <Brand />
    <Prof />
  </>
);

export default TMES;
