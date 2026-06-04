import React from "react";
import projectcard1 from "./projectcard1.png";
import projectcard2 from "./projectcard2.png";
import projectcard3 from "./projectcard3.png";
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="project-section px-5">
      <h5 className="text-success fs-5">Latest Project</h5>
      <h1>
        Let’s Looks Our Global <br />
        Projects
      </h1>
      <div className="slider-container mt-5">
        <Slider {...settings}>
          <div>
            <div className="project-card">
              <img src={projectcard1} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-evenly px-4 py-2">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <button className="btn btn-success">
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="project-card">
              <img src={projectcard2} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-between px-5">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project-card">
              <img src={projectcard3} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-between px-5">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project-card">
              <img src={projectcard1} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-evenly px-4 py-2">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <button className="btn btn-success">
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="project-card">
              <img src={projectcard2} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-between px-5">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project-card">
              <img src={projectcard3} width="350px" className="rounded" />
              <div className="card-content d-flex justify-content-between px-5">
                <div className="hero-inner">
                  <h6 className="mb-1">Project Development</h6>
                  <small>IT Management</small>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
