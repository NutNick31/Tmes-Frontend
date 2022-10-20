import React from "react";
import "./Quiz.scss";

/* 
T-shirt design:
Pull your creative skills out and design an eye-catching T-shirt based on the GREAT STEP theme.

Participants are required to submit a T-shirt design based on the theme of GREAT STEP. 
It should be submitted online in the website. 
The top 3 winners would be awarded with cash prizes worth 6k. */

const T_Shirt_Design = () => {
  return (
    <div className="quiz_container">
      <h1>T-Shirt Design</h1>
      <p>Upload your design</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfZcfxU8dlkV1PECCCvhFCEGLZ8BKWuT5Y0SpWxURsvSp_UxQ/viewform?usp=sf_link"
        target="_blank"
      >
        <button class="btn">Upload</button>
      </a>
    </div>
  );
};

export default T_Shirt_Design;
