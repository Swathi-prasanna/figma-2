import React from "react";
import aboutcard1 from "./aboutcard1.png";
import aboutcard2 from "./aboutcard2.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="row px-3">
        <div className="col-lg-6">
          <div className="hero-card1">
            <img src={aboutcard1} alt="about image" height="600px"></img>
            <div className="hero-card2">
              <img src={aboutcard2} alt="about image2"></img>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 ps-5">
          <p className="text-success fs-5 fw-bold">About Your Company</p>
          <h1 className="fw-bold">
            We Execute Our ideas From The Start to Finish
          </h1>
          <p className="fs-5 text-secondary">
            Solve Business Problems And Automate Workflows With Artificial Work
            Intelligence-Based Solutions. Unlock The Hidden Power Of The Data
            You Already Have And Hand Hampers The Creativity.
          </p>
          <p className="fs-5 fw-bold">
            <i className="bi bi-check-square text-success fs-5 me-3"></i>Development
            of Financial Models
          </p>
          <p className="fs-5 fw-bold">
            <i className="bi bi-check-square text-success fs-5 me-3"></i>Nifty team
            is a diverse network of consultants
          </p>
          <p className="fs-5 fw-bold">
            <i className="bi bi-check-square text-success fs-5 me-3"></i>Industry
            professionals with a global mindset
          </p>
          <button className="btn bg-success text-light px-4 py-3 rounded mt-4 fw-bold fs-5">Read More</button>
        </div>
      </div>
    </section>
  );
}
