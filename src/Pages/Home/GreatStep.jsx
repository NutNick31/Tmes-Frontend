import React from "react";
import "./Home.scss";

import Brand from "./Brand";
import Prof from "./Prof";
import Swiper from "./Swiper_Scroll";
import Typewriter from "typewriter-effect";
import Prof2 from "./Prof2";
import SkillsSlider from "./Skill_slider";
import { C_Btn, Participants } from "../../Components";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => (
  <div id="home">
    <div className="header section__padding">
      <div className="header-content">
        <div className="header-image">
          {/* <img src={logo} /> */}
          <h2 className="text__tmes">TMES</h2>
        </div>
        <p style={{ fontSize: "1.6rem" }} className="gradient__text">
          Presents
        </p>
        <h1 className="gradient__text">
          <Typewriter
            options={{
              strings: ["GREAT STEP", "GREATEST DEPARTMENTAL FEST"],
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
        <div style={{ margin: "4rem 0 0 0" }}>
          <C_Btn txt="Register Now" link="/signup"></C_Btn>
        </div>
      </div>
    </div>
    <Brand />
    <Prof />
    <Prof2 />
    <Participants />
    <Swiper />
    <SkillsSlider />
  </div>
);

export default Header;
