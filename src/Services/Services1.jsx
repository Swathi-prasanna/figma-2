import React from "react";
import servicecard1 from "./servicecard1.png";
import servicecard2 from "./servicecard2.png";
import servicecard3 from "./servicecard3.png";
import servicecard4 from "./servicecard4.png";
import servicecard5 from "./servicecard5.png";
import servicecard6 from "./servicecard6.png";
import automation from "./automation.png";
import lock from "./lock.jpg";
import test from "./test.png";

function Services1() {
  return (
    <section className="service-section">
      <div className="text-center">
        <p className="text-success fs-4 fw-bold">What We Do</p>
        <h1 className=" fw-bold pb-4">
          Services That Help You
          <br /> Grow
        </h1>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4">
            <img
              src={servicecard1}
              alt="img2"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Content Management
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More{" "}
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={automation}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 bg-light">
            <img
              src={servicecard2}
              alt="img3"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Information Security
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={lock}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={servicecard3}
              alt="img4"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Software Development
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More{" "}
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={test}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4 ">
            <img
              src={servicecard4}
              alt="img2"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Content Management
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={automation}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 bg-light">
            <img
              src={servicecard5}
              alt="img3"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Digital Marketing
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={lock}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={servicecard6}
              alt="img4"
              width="350px"
              className="rounded"
            />
            <div className="row">
              <div className="col-lg-9">
                <h5 className="fw-bold   mt-5">
                  <a href="#" className="text-decoration-none text-dark fs-5">
                    Tech Support Pro
                  </a>
                </h5>
                <p className="text-secondary fs-6">
                  We focus on the best practices it solutions and for services.
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-success mt-5 fw-bold fs-5"
                >
                  Read More{" "}
                </a>
              </div>
              <div className="col-lg-3">
                <img
                  src={test}
                  alt="automation"
                  width="70px"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-7 mt-2">
          <img src={servicecard1} height="400px" width="800px" />
        </div>
        <div className="service-data col-lg-5 mt-2">
          <h1 className="text-light ms-5 mt-5">Subscribe to Our Newsletter</h1>
          <p className="fs-5  text-light mt-2 ms-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="ms-5 mt-4 rounded py-3 px-3"
          />
          <button className="btn btn-success text-light rounded ms-3  py-3 px-5">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services1;
