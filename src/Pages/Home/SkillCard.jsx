import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./SkillCard.scss";

function SkillCard({ img, name, use }) {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  return (
    <div className="skillcard_container">
      <motion.div
        className="skillCard_image"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
}

export default SkillCard;
