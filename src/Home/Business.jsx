import React from "react";
import businesscard from "./businesscard.png";
import colloboration from "./collaboration.png";
import aggrement from "./aggrement.jpg";
import teamwork from "./teamwork.jpg";

export default function Business() {
  return (
    <section className="business-section">
      <div className="row">
        <div className="col-lg-7">
          <h4 className="ms-5 text-success mt-5">Business Process</h4>
          <h1 className="ms-5 fs-1 mt-3 fw-bold">
            Easy Way Build Success your Buisness Pla
          </h1>
          <p className="ms-5 fs-5 mt-4">
            Solve Business Problems And Automate Workflows With Artificial
            Intelligence-Based Solutions. Unlock The Hidden Power Of The Data
            You Already Have And Hand.
          </p>
          <div className="ms-5">
            <h5 className="mb-4">Productivity</h5>
            <div className="progress mb-5 ">
              <div className="progressbar1 progress-bar rounded bg-success position-relative">
                <span className=" text-light  fs-4">80%</span>
              </div>
            </div>
            <h5 className="mb-4">Digital Marketing</h5>
            <div className="progress mb-5 ">
              <div className="progressbar2 progress-bar rounded bg-success position-relative">
                <span className=" text-light  fs-4">75%</span>
              </div>
            </div>
            <h5 className="mb-4">Technology</h5>
            <div className="progress mb-5">
              <div className="progressbar3 progress-bar rounded bg-success position-relative">
                <span className="text-light  fs-4">90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mt-5">
          <img
            src={businesscard}
            alt="businesscard"
            className="rounded mt-5"
            width="500px"
          />
        </div>
      </div>
      <div className="container">
        <div className="business-card rounded-2">
          <div className="row">
            <div className="col-lg-4 border-end ">
              <div className="d-flex justify-content-evenly g-5 p-4">
                <img
                  src={colloboration}
                  width="50px"
                  height="50px"
                  className="ms-5 my-5"
                />
                <div className="text-light mt-4">
                  <h1 className="fw-bold fs-1">200+</h1>
                  <p className="fw-bold fs-4">Team Member</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 border-end">
              <div className="d-flex justify-content-evenly g-5 p-4">
                <img
                  src={aggrement}
                  width="50px"
                  height="50px"
                  className="ms-5 my-5"
                />
                <div className="text-light mt-4">
                  <h1 className="fw-bold fs-1">25k+</h1>
                  <p className="fw-bold fs-4">Complete Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-evenly g-5 p-4">
                <img
                  src={teamwork}
                  width="50px"
                  height="50px"
                  className="ms-5 my-5"
                />
                <div className="text-light mt-4">
                  <h1 className="fw-bold fs-1">18k+</h1>
                  <p className="fw-bold fs-4">Client Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
