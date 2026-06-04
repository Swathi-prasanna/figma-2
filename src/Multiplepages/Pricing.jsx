import React from "react";
import brand1 from "./brand1.png";
import brand2 from "./brand2.png";
import brand3 from "./brand3.png";
import brand4 from "./brand4.png";
import brand5 from "./brand5.png";


export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="text-center">
        <p className="fs-5 text-success fw-bold">Our Pricing</p>
        <h1 className="fs-1 fw-bold">Find the Right Plan</h1>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="pricing-cards col-lg-4 mt-5 rounded">
            <h3 className="mt-5 text-center fw-bold">Basic Plan</h3>
            <h1 className="mt-3 text-center fw-bold">
              <sup className="fs-3">$</sup>110&nbsp;
              <sub className="text-success fs-5">/Per Month</sub>
            </h1>
            <button className="btn btn-outline-success fw-bold mt-5 ms-5 px-5 fs-5 text-dark text-center">
              Discover More
            </button>
            <div className="pricing-content mt-5">
              <ul type="none">
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Weekly Reporting
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Unlimited users
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mt-5 pricing-card1 rounded">
            <h3 className="mt-5 text-center text-light fw-bold">Popular</h3>
            <h1 className="mt-3 text-center text-light fw-bold">
              <sup className="fs-3">$</sup>210&nbsp;
              <sub className="text-success fs-5">/Per Month</sub>
            </h1>
            <button className="btn mt-5 ms-5 px-5 fs-4 text-light bg-success text-center">
              Discover More
            </button>
            <div className="pricing-content mt-5">
              <ul type="none">
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Weekly Reporting
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i className="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Unlimited users
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 pricing-cards mt-5 rounded">
            <h3 class="mt-5 text-center fw-bold">custom</h3>
            <h1 class="mt-3 text-center fw-bold">
              <sup class="fs-3">$</sup>310&nbsp;
              <sub class="text-success fs-5">/Per Month</sub>
            </h1>
            <button class="btn btn-outline-success mt-5 ms-5 px-5 fs-4 text-dark text-center">
              Discover More
            </button>
            <div class="pricing-content mt-5">
              <ul type="none">
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Weekly Reporting
                </li>
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Key Words Optimized
                </li>
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Top 10 Ranking Guarantee
                </li>
                <li>
                  <i class="bi bi-file-check-fill text-success"></i>
                  &nbsp;&nbsp;Unlimited users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-section">
        <div className="text-light text-center mt-5 p-5">
          <h5 className="mt-5 fw-bold">
            We have more than <span class="text-success">270+</span> Happy
            Customers
            <br /> with satisfaction
          </h5>
        </div>
        <div className="d-flex justify-content-evenly p-5 mb-5">
          <img src={brand1} alt="brand1" />
          <img src={brand2} alt="brand2" />
          <img src={brand3} alt="brand3" />
          <img src={brand4} alt="brand4" />
          <img src={brand5} alt="brand5" />
        </div>
      </div>
    </section>
  );
}
