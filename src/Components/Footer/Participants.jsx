import React from "react";
import "./Footer.scss";

const Participants = () => {
  return (
    <>
      <div className="footer-heading">
        <div>
          <h1 className="gradient__text">340+</h1>
          <h3 className="gradient__text">Partners </h3>
        </div>
        <div>
          <h1 className="gradient__text">20000+</h1>
          <h3 className="gradient__text">Attendees </h3>
        </div>
        <div>
          <h1 className="gradient__text">12</h1>
          <h3 className="gradient__text">Events </h3>
        </div>
      </div>

      <div className="footer-btn">
        <p>Register Now</p>
      </div>
    </>
  );
};

export default Participants;
