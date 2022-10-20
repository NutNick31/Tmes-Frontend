import React from "react";

/* 
MineShot:
Mineshot is one of the online events organized in GREAT STEP. Mineshot is a photography competition.

It is an online event that witnesses enormous participation from across the country, 
including mining as well as non-mining students/colleges. This photography competition 
requires the participants to upload a photograph related to Mine. The winner is decided 
by judging the photograph’s significance and the number of Likes the student gets on 
Facebook. This event was introduced and hence carried on since GREAT STEP 2014.

*/

const Mine_Shot = () => {
  return (
    <div className="quiz_container">
      <h1>Mineshot</h1>
      <p>Upload your photos</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfZcfxU8dlkV1PECCCvhFCEGLZ8BKWuT5Y0SpWxURsvSp_UxQ/viewform?usp=sf_link"
        target="_blank"
      >
        <button class="btn">Upload</button>
      </a>
    </div>
  );
};

export default Mine_Shot;
