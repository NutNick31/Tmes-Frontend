import React from "react";
import "./Home.scss";

import Brand from "./Brand";
import Prof from "./Prof";
import Swiper from "./Swiper_Scroll";
import Typewriter from "typewriter-effect";
import Prof2 from "./Prof2";
import SkillsSlider from "./Skill_slider";
import { C_Btn, Participants } from "../../Components";
import { motion } from "framer-motion";

const homeVariants = {
  hidden : {
    opacity: 0,
    x: "-100vw"
  },
  visible : {
    opacity : 1,
    x: "0vw",
    transition: {
      type: "spring",
      duration: 1
    }
  },
}

const Header = () => (
  <motion.div
    variants={homeVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    id="home"
  >
    <motiondiv className="header section__padding">
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
          Upholding the esteem of being the antecedent, the Department of Mining
          Engineering, IIT Kharagpur has always believed in the flow of
          practical knowledge with innovation as inspiration, which has
          rejuvenated the ancestral engineering ideals into the modern facts.
        </p>
        <p>
          With this vision as guidance and zeal to keep pace with the
          developments in the Mining and Geology industries, the Department of
          Mining engineering initiated GREATSTEP (acronym for Geo-Resource
          Engineering and Technology Students' Teachers' and Employers'
          Partnership) in 2008 to create a common platform for all the budding
          Mining engineers. The last seven editions were filled with mind
          churning challenges, several informative guest lectures and workshops
          aimed at the expansion of thoughts into the unexplored realms of the
          field.
        </p>
        <div style={{ margin: "4rem 0 0 0" }}>
          <C_Btn txt="Register Now" link="/signup"></C_Btn>
        </div>
      </div>
    </motiondiv>
    <Brand />
    <Prof />
    <Prof2 />
    <Participants />
    <Swiper />
    <SkillsSlider />
  </motion.div>
);

export default Header;
