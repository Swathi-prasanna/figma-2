import React from "react";
import logo from "./logo1.png";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import card5 from "./card5.png";
import image1 from "./image1.png";
import subject from "./subject.png";


function Header() {
  return (
    <div className="header">
      <div className="top-bar text-light">
        <div className="row align-items-start p-3">
          <div className="col-lg-8">
            <span className="me-3">
              <i className="bi bi-geo-alt-fill text-light me-1"></i>
              Jones Street, New York, USA |
            </span>
            <i className="bi bi-envelope text-light me-1"></i>
            <a
              href="mailto:info@example.com"
              className="text-white text-decoration-none me-3"
            >
              Info@example.com
            </a>
            |<i className="bi bi-telephone-fill text-light me-1 ms-2"></i>
            <a
              href="tel:+9876543210"
              className="text-white text-decoration-none"
            >
              + 70 264 566 579
            </a>
          </div>
          <div className="col-lg-4">
            <a href="https://www.facebook.com/">
              <i className="bi bi-facebook text-light fs-5 me-3"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="bi bi-linkedin text-light me-3"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="bi bi-twitter text-light me-3"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="bi bi-instagram text-light"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top py-3 rounded mx-4">
        <div className="container">
          <img src={logo} alt="logo"></img>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn bg-success text-light fs-5 px-3 py-2">
            Get a Free Quote
          </button>
        </div>
      </nav>
      <div className="hero-section">
        <div className="row g-3">
          <div className="col-lg-6 ps-3">
            <p className="fs-5 p-0 text-success">
              IT solutions for the new era
            </p>
            <h1 className="text-light">
              Beautiful IT services for your success
            </h1>
            <p className="fs-5 text-light">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews terative approaches bring table survival.
            </p>
            <button className="btn bg-success text-light fs-5 px-4 py-3 rounded me-3">
              Read More
            </button>
            <a
              href="#"
              className="text-decoration-none text-success fs-1 fw-bold me-2"
            >
              <i className="bi bi-file-play"></i>
            </a>
            <span className="text-light fs-5 fw-bold">Play Intro</span>
            <div className="hero-cards d-flex justify-content-start g-5 py-3 ps-2 mt-5">
              <div className="me-5">
                <img src={card1} alt="card1"></img>
                <img src={card2} alt="card2"></img>
                <img src={card3} alt="card3"></img>
                <img src={card4} alt="card4"></img>
                <img src={card5} alt="card5"></img>
              </div>
              <div>
                <h2 className="text-light">36K+</h2>
                <p className="text-light fw-bold fs-5">Team Members</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-3">
            <div className="hero-img">
              <img src={image1} alt="image1" width="600px" height="600px"></img>
            </div>
            <div className="subject-card">
                <img src={subject} alt="subject"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
