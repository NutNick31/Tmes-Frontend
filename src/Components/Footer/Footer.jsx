import React from "react";
import gpt3Logo from "../../Assets/dummy_logo.jpg";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BottomNavigation } from "@mui/material";

const Footer = () => (
  <div className="container-fluid text-white-50 footer pt-5 mt-5 wow fadeIn">
    <div className="container py-5 text-white-50">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <Link className="btn btn-link text-white-50" to="/aboutus">
            About Us
          </Link>
          <Link className="btn btn-link text-white-50" to="/aboutus">
            Contact Us
          </Link>
          <Link className="btn btn-link text-white-50" to="/great-step/events">
            Events
          </Link>
          <Link className="btn btn-link text-white-50" to="/">
            Terms & Condition
          </Link>
        </div>
        <div className="col-lg-5 col-md-6">
          <h5 className="text-white mb-4">Get In Touch</h5>
          <p className="mb-2">
            <div className="fa fa-map-marker-alt me-3"></div>Department of
            Mining Engineering, IIT Kharagpur, Kharagpur, West-Bengal 721302
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3"></i>+91 1234567890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3"></i>help@tmesiitkgp.in
          </p>
          <div className="d-flex pt-2">
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <div
            className="position-relative mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container ">
      <div className="copyright">
        <div className="row ">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;
            <a
              className="border-bottom text-white-50"
              href="https://www.tmesiitkgp.in"
            >
              TMES
            </a>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <Link to="/">Home</Link>
              <Link to="">Help</Link>
              <Link to="">FQAs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
