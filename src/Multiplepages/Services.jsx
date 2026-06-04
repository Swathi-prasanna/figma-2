import React from "react";
import software from "./testing.png";
import dataanalysis from "./data analysis.png";
import appdevelopment from "./app development.png";
import servicescard from "./servicescard.png";

export default function Services() {
  return (
    <section className="services-section">
      <div className="row my-5">
        <div className="col-lg-6">
          <p className="text-success fs-4 fw-bold mt-5">Our Latest Services</p>
          <h1 className="fw-bold">Our clients are the best at IT Management</h1>
          <p className="text-secondary mt-4 fs-5">
            Our Custom Software Design And Development Teams Can Design, Build,
            Test, And Deliver A Product That Fits Both Your Vision And With
            Market Demand. With Our Support, You Will Find Customers, Build
            Income And Attract New Investors.
          </p>
          <button className="text-light bg-success rounded fw-bold fs-5 px-4 py-3 mt-4">
            View All Services
          </button>
        </div>
        <div className="col-6 ">
          <div className="d-flex gap-4 mt-5 ms-4 mb-5">
            <img src={software} width="60px" />
            <div>
              <h3>Software Development</h3>
              <p className="fs-5 text-secondary">
                Indeed vanity excuse or mr lovers of on.
              </p>
            </div>
            <div>
              <a href="# " className="text-decoration-none text-dark fs-4"><i className="bi bi-arrow-up-right fs-2"></i></a>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-4 mt-5 ms-4 mb-5">
            <img src={dataanalysis} width="60px" />
            <div>
              <h3>Data Analysis</h3>
              <p className="fs-5 text-secondary">
                Indeed vanity excuse or mr lovers of on.
              </p>
            </div>
            <div>
              <a href="# " className="text-decoration-none text-dark fs-4"><i className="bi bi-arrow-up-right fs-2"></i></a>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-4 mt-5 ms-4 mb-5">
            <img src={appdevelopment} width="60px" />
            <div>
              <h3>App Development</h3>
              <p className="fs-5 text-secondary">
                Indeed vanity excuse or mr lovers of on.
              </p>
            </div>
            <div>
             <a href="# " className="text-decoration-none text-dark fs-4"> <i className="bi bi-arrow-up-right fs-2"></i></a>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-4 mt-5 ms-4 mb-5">
            <img src={software} width="60px" />
            <div>
              <h3>Software Development</h3>
              <p className="fs-5 text-secondary">
                Indeed vanity excuse or mr lovers of on.
              </p>
            </div>
            <div className="arrow-btn">
              <a href="# " className="text-decoration-none text-dark fs-4"><i className="bi bi-arrow-up-right fs-2"></i></a>
            </div>
          </div>
          <hr className="mb-5" />
        </div>
      </div>
      <div className="row my-5">
            <div className="col-lg-7 mt-2">
                <img src={servicescard} height="400px" width="800px"/>
            </div>
            <div className="service-data col-lg-5 mt-2">
                <h1 className="text-light ms-5 mt-5">Subscribe to Our Newsletter</h1>
                <p className="fs-5  text-light mt-2 ms-5">It is a long established fact that a reader will be distracted by
                    the readable
                    content of a page when looking at its layout.</p>
                <input type="text" placeholder="Enter Your Email" className="ms-5 mt-4 rounded py-3 px-3"/>
                <button className="btn btn-success text-light rounded ms-3  py-3 px-5">Subscribe Now</button>
            </div>
        </div>
    </section>
  );
}
