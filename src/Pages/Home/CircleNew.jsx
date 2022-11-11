import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Sample from "../Sample/Sample";
import "./CircleNew.scss";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  const svg = document.querySelector("#svg");
  const img = document.querySelector("#img");
  const circle = document.querySelector("#circle");
  const pad = 4;

  let radius = +circle.getAttribute("r");
  let imgWidth, imgHeight;

  useEffect(() => {
    gsap.set(img, {
      scale: 2,
      xPercent: -50,
      yPercent: -50,
    });

    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".image-unmask",
          pin: true,
          start: "top top",
          end: "+=2500",
          //end: "bottom bottom",
          scrub: 0.2,
        },
        defaults: {
          duration: 1,
        },
      })
      .to(
        circle,
        {
          attr: {
            r: () => radius,
          },
        },
        0
      )
      .to(
        img,
        {
          scale: 1,
          opacity: 1,
        },
        0
      )
      .to(
        "#whiteLayer",
        {
          alpha: 0,
          ease: "power1.in",
          duration: 1 - 0.25,
        },
        0.25
      );
    window.addEventListener("load", init);
    window.addEventListener("resize", resize);

    function init() {
      imgWidth = img.naturalWidth;
      imgHeight = img.naturalHeight;

      resize();
    }

    function resize() {
      tl.progress(0);

      const r = svg.getBoundingClientRect();
      const rectWidth = r.width + pad;
      const rectHeight = r.height + pad;

      const rx = rectWidth / imgWidth;
      const ry = rectHeight / imgHeight;

      const ratio = Math.max(rx, ry);

      const width = imgWidth * ratio;
      const height = imgHeight * ratio;

      const dx = rectWidth / 2;
      const dy = rectHeight / 2;
      radius = Math.sqrt(dx * dx + dy * dy);

      gsap.set(img, { width, height });

      tl.invalidate();

      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <>
      <Sample />
      <section className="image-unmask">
        <svg id="svg">
          <defs>
            <mask id="mask">
              <rect width="100%" height="100%" fill="white"></rect>
              <circle
                id="circle"
                cx="50%"
                cy="50%"
                r="60"
                fill="black"
              ></circle>
            </mask>
          </defs>
          <rect id="whiteLayer" width="100%" height="100%" fill="white"></rect>
          <rect
            width="100%"
            height="100%"
            fill="black"
            mask="url(#mask)"
          ></rect>
        </svg>
      </section>
    </>
  );
};

export default Circle;
