import React from "react";
import "./Home.scss";
import hodtalks from "./hodtalks.mp4";
const Prof = () => (
  <div className="Prof section__padding" style={{ height: "fit-content" }}>
    <video src={hodtalks} controls />
  </div>
);

export default Prof;
