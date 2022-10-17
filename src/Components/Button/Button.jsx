import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {
  const { txt, link, bg_color } = props;
  return (
    <button className="custom_btn" style={{ background: `${bg_color}` }}>
      <Link to={link}>{txt}</Link>
    </button>
  );
};

export default Button;
