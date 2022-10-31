import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import SkillCard from "./SkillCard";

function SkillsSlider() {
  return (
    <section className="section__padding ">
      <h1 className="gradient__text" style={{ fontSize: "4rem" }}>
        Our Sponsers
      </h1>
      <Section>
        <Marquee
          style={{ margin: "0 1rem" }}
          pauseOnHover={true}
          speed={100}
          gradient={false}
        >
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
          <SkillCard img="https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg" />
        </Marquee>
      </Section>
    </section>
  );
}

const Section = styled.div`
  margin: 2rem 0;
  width: 100%;
  overflow: hidden;
`;

export default SkillsSlider;
