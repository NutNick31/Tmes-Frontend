import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Brand from "./Brand";

import Prof from "./Prof";
import Swiper from "./Swiper_Scroll";
import Prof2 from "./Prof2";
import SkillsSlider from "./Skill_slider";
import Circle from "./CircleNew";
import Header from "./Header";
import Participants from "../../Components/Participants/Participants";

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
    <Swiper />
    <Prof />
    {/* <Prof2 /> */}
    {/* <Participants /> */}
    <SkillsSlider />
  </motion.div>
);

export default GreatStep;
