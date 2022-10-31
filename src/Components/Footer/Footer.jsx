import React from "react";
import gpt3Logo from "../../Assets/dummy_logo.jpg";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

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
          <a
            href="https://www.facebook.com/profile.php?id=100054504698718"
            target="blank"
          >
            <FaFacebook />
          </a>
          <Link to="">Social Media</Link>
          <Link to="">Counters</Link>
          <Link to="">Contact</Link>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <Link to="">Terms & Conditions </Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Contact</Link>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <Link to="">Crechterwoord K12 182 DK Alknjkcb</Link>
          <Link to="">085-132567</Link>
          <Link to="">info@payme.net</Link>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2022 TMES. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
