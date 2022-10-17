import React from "react";
import gpt3Logo from "../../Assets/dummy_logo.jpg";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="foot section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            @2022 Technology Mining Engineering Society <br /> All Rights
            Reserved
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2022 TMES. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
