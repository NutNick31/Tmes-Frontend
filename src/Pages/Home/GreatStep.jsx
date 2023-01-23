import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Prof from "./Prof";
import Swiper from "./Swiper_Scroll";
import SkillsSlider from "./Skill_slider";
import Header from "./Header";

import images from "./images";

const homeVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const GreatStep = () => (
  <motion.div
    variants={homeVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    id="home"
  >
    {/* <Circle /> */}
    <Header />
    <Swiper imgs={images} />
    <Prof />
    {/* <Prof2 /> */}
    {/* <Participants /> */}
    <SkillsSlider />
  </motion.div>
);

export default GreatStep;
