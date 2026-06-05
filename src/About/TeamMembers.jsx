import React from "react";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import card5 from "./card5.png";
import card6 from "./card6.png";
import Slider from "react-slick";

function TeamMembers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="team-section">
      <div className="pb-5">
        <h5 className="text-success fw-bold fs-5 ms-3">Our Team Members</h5>
        <h1 className="text-dark fw-bold  ms-3">
          Building A Smarter future
          <br /> Through IT
        </h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="project-card1">
              <img src={card1} alt="img9" className="rounded" />
              <div className="text-center bg-light px-5 py-2">
                <h2 className="fw-bold">Edoardo Romussi</h2>
                <p>UI/UX Designer </p>
              </div>
              <div className="overlay1">
                <div className="content">
                  <a href="https://www.facebook.com/">
                    <i className="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i className="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="project-card1">
              <img src={card2} alt="img9" class="rounded" />
              <div class="text-center bg-light px-5 py-2">
                <h2 class="fw-bold">Jessica James</h2>
                <p>Marketing manager</p>
              </div>
              <div class="overlay1">
                <div class="content">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="project-card1">
              <img src={card3} alt="img9" class="rounded" />
              <div class="text-center bg-light px-5 py-2">
                <h2 class="fw-bold">Adrian Williams</h2>
                <p>Web Designer </p>
              </div>
              <div class="overlay1">
                <div class="content">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="project-card1">
              <img src={card4} alt="img9" class="rounded" />
              <div class="text-center bg-light px-5 py-2">
                <h2 class="fw-bold">Laci Pletcher</h2>
                <p>Process Analyst </p>
              </div>
              <div class="overlay1">
                <div class="content">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="project-card1">
              <img src={card5} alt="img9" class="rounded" />
              <div class="text-center bg-light px-5 py-2">
                <h2 class="fw-bold">Alex Brown</h2>
                <p>Co-Founder </p>
              </div>
              <div class="overlay1">
                <div class="content">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="project-card1">
              <img src={card6} alt="img9" class="rounded" />
              <div class="text-center bg-light px-5 py-2">
                <h2 class="fw-bold">Rebecca Davis</h2>
                <p>Web Developer </p>
              </div>
              <div class="overlay1">
                <div class="content">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-light w-5"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-light"></i>
                  </a>
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default TeamMembers;
