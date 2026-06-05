import React from "react";
import logo1 from "./logo2.png";
import footercard1 from "./footercard1.png";
import footercard2 from "./footercard2.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-lg-3 my-5">
          <img src={logo1} alt="image" />
          <p className="fs-5 my-5 text-light">
            Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat
            nequ puru rhoncu tincidunt odio ultrices. Sed odio feugiat feugiat
            felis.
          </p>
          <a href="https://www.facebook.com/">
            <i className="bi bi-facebook text-light w-5 me-3"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="bi bi-linkedin text-light me-3"></i>
          </a>
          <a href="https://x.com/">
            <i className="bi bi-twitter text-light me-3"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="bi bi-instagram text-light"></i>
          </a>
        </div>
        <div className="footer-card col-lg-3 my-5">
          <h3 className="text-light mb-5">Our Services</h3>
          <a href="#" className="text-light text-decoration-none fs-5">
            Tech Solutions
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Digital Marketing
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Web Development
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            IT Consulting
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Data Analytics
          </a>
        </div>
        <div className="footer-card col-lg-3 my-5">
          <h3 className="text-light mb-5">Useful Links</h3>
          <a href="#" className="text-light text-decoration-none fs-5">
            What We Do
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Our Team
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Our Projects
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Faq ask
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Contact Us
          </a>
          <br />
          <a href="#" className="text-light text-decoration-none fs-5">
            Blog
          </a>
        </div>
        <div className="col-lg-3 my-5">
          <h3 className="text-light mb-5">Recent Post</h3>
          <div className="row">
            <div className="col-lg-5 mb-4">
              <img src={footercard1} alt="image22" className="rounded" />
            </div>
            <div className="col-lg-7">
              <a
                href="#"
                className=" text-decoration-none text-light fs-6 mt-5 mb-4"
              >
                <i className="bi bi-calendar3 text-success"></i>&nbsp;December 27,
                2023
              </a>
              <br></br>
              <a href="#" className="text-light text-decoration-none fs-6 fw-bold">
                Efficiency redefined through technology.
              </a>
            </div>
            <div className="col-lg-5">
              <img src={footercard2} alt="image22" className="rounded" />
            </div>
            <div className="col-lg-7">
              <a
                href="#"
                className=" text-decoration-none text-light fs-6 mt-5 mb-4"
              >
                <i className="bi bi-calendar3 text-success"></i>&nbsp;December 27,
                2023
              </a>
              <br></br>
              <a href="#" className="text-light text-decoration-none fs-6 fw-bold">
                Efficiency redefined through technology.
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      <div className="text-light text-center fs-5 py-4">
        &copy;<span className="text-success"> Qubohub</span> 2024. All Rights
        Reserved
      </div>
    </footer>
  );
}
