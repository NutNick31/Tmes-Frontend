import React from "react";
import "./TMES.scss";
import Prof from "./Prof";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { C_Btn } from "../../Components";
import tmes_home from "../../Assets/tmes_home.jpg";
import Posters from "../../Components/Posters/Posters";
import list from "./image";
import Swiper_Scroll from "../../Pages/Home/Swiper_Scroll";

const homeVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    transition: {
      // delay: 0.4,
      type: "spring",
      duration: 1,
    },
  },
  // exit: {
  //   x: "-100vh",
  //   transition: { ease: 'easeInOut' }
  // }
};

const TMES = () => (
  <>
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="tmes"
    >
      <div className="header section__padding">
        <div className="header-content">
          <h1 className="text__tmes">WELCOME TO TMES</h1>
          <p>
            Technology Mining Engineering Society (TMES) aims at bringing a
            closer association among the students and faculty members in the
            department. It has initiated Social Cultural and Sports Events,
            which brings them together for a closer interaction.
          </p>

          <div style={{ margin: "4rem 0 0 0" }}>
            <C_Btn txt="Register Now" link="/signup"></C_Btn>
          </div>
        </div>

        <div className="header-image">
          <img
            src={tmes_home}
            style={{ borderRadius: "1rem", height: "400px" }}
            alt=""
          />
        </div>
      </div>
      {/* <Brand /> */}
      <Prof />
      <Swiper_Scroll imgs={list} />
    </motion.div>
  </>
);

export default TMES;
