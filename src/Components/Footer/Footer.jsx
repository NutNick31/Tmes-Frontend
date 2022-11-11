import React from "react";
import gpt3Logo from "../../Assets/dummy_logo.jpg";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BottomNavigation } from "@mui/material";

const Footer = () => (
  <footer>
    {/* <BottomNavigation /> */}
    <div className="foot section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            @2022 Technology Mining Engineering Society <br /> All Rights
            Reserved
          </p>
        </div>
        <div className="footer-links_div footer-links_div">
          <h4>Contact</h4>
          <Link to="">
            Department of Mining Engineering, IIT Kharagpur,West Bengal, 721302
          </Link>
          <Link to="">Phone no: +91XXXXXXXX</Link>
          <Link to="">Email: tmes@example.com</Link>
        </div>
        <div className="footer-links_div2">
          <h4>Links</h4>
          <a
            href="https://www.facebook.com/profile.php?id=100054504698718"
            target="blank"
          >
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/tmes_iitkgp/" target="blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/technology-mining-engineering-society-iit-kharagpur-tmes/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* <div className="footer-links_div">
          <h4>Get in touch</h4>
          <Link to="">Crechterwoord K12 182 DK Alknjkcb</Link>
          <Link to="">085-132567</Link>
          <Link to="">info@payme.net</Link>
        </div> */}
      </div>
      <div className="footer-copyright">
        <p>@2022 TMES. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
