import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Prof from "./Prof";
import Swiper from "./Swiper_Scroll";
import SkillsSlider from "./Skill_slider";
import Header from "./Header";

const images = [
  "https://drive.google.com/uc?id=1u5X90QgOnMncgNkr1MDuJBeZNoIgvIty",
  "https://drive.google.com/uc?id=12S046ewz6QS9xXsRdUx9yh4emC2Fr_pu",
  "https://drive.google.com/uc?id=1iv_UlbFTu7jtzmeILnDdLpfWZHCuV0OO",
  "https://drive.google.com/uc?id=1ItMXEMiDEXtXfV4wjHCmRMPKynx6b0k8",
  "https://drive.google.com/uc?id=1rwikovZxKRTn95sobcKe2jDlloslrYSS",
  "https://drive.google.com/uc?id=1v7FG_uGMPXiWciU7HiaFCgbBBLDvFxjt",
  "https://drive.google.com/uc?id=1qWtD-nStAIkk0rqmAuSn_IjKuxzskP_i",
  "https://drive.google.com/uc?id=1PcKV5ZeVnYtHUqFDW0xhah6KmyRXumRd",
  "https://drive.google.com/uc?id=1TkbuyJHZVHtsPCOrQA595ntjbENthYA3",
  "https://drive.google.com/uc?id=1nEZeKIidyfTh2rzTvaunfv03eEw74cEe",
];

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
