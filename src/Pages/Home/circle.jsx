import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Sample from "../Sample/Sample";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".circle",
          pin: true,
        },
      })
      .to("#circlesvg", {
        scrollTrigger: {
          trigger: "#circlesvg",
          scrub: true,
        },
        scale: 70,
      });
  }, []);

  return (
    <>
      <Sample />
      <div className="circle">
        <div id="circlesvg"></div>
      </div>
    </>
  );
};

export default Circle;
