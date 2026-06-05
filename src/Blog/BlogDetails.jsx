import React from "react";
import blogcard from "./blogcard.png";
import blogcard2 from "./blogcard2.png";
import blogcard3 from "./blogcard3.jpg";
import blogcard4 from "./blogcard4.jpg";
import blogcard5 from "./blogcard5.png";
import blogcard6 from "./blogcard6.png";

function BlogDetails() {
  return (
    <section className="blogdetails-section">
      <div class="row mb-5">
        <div class="col-lg-9">
          <img src={blogcard} alt="img2" class="rounded  mb-3" width="900px" />
          <br />
          <i class="bi bi-person text-success fs-4 "></i> &nbsp;
          <a href="#" class="text-decoration-none text-dark fs-5 ">
            Admin
          </a>
          &nbsp;
          <i class="bi bi-calendar text-success fs-5"></i> &nbsp;
          <a href="#" class="text-decoration-none text-dark fs-5 ">
            October 2, 2023
          </a>
          &nbsp;
          <i class="bi bi-chat text-success fs-5"></i> &nbsp;
          <a href="#" class="text-decoration-none text-dark fs-5 ">
            Comment (03)
          </a>
          <h1>
            <a href="#" class="text-dark  text-decoration-none mt-5">
              Everything you need to learn about IT Solution
              <br /> for your Company.
            </a>
          </h1>
          <p class="text-dark fs-5 mt-5">
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies
            <br /> in the . Our small, flexible, agile and design-led structures
            and processes allow us to be highly
            <br /> responsive and innovative. We’re made of passionate leaders,
            strategists, managers, developers,
            <br /> animators designer who work gether under one umbrella. We are
            a digitally-led, full-service creative
            <br /> agency.
          </p>
          <p class="text-dark fs-5">
            The European languag are member of the same family. Their separate
            existence is a myth. Europe <br /> same science, music, sport, etc,
            Europe uses the same vocabulary. The languages only differ in their
            <br /> grammar, their samepronunciation and their most common words.
          </p>
          <div class="blog-inner mt-5 p-4 fs-5 me-5">
            <p>
              Majority have suffered alteration in some form, by injected
              humour, or randomised words which
              <br />
              don’t look even slightly believable ”
            </p>
          </div>
          <p class="text-dark fs-5 mt-5">
            Everyone realizes why a new common language would be desirable: one
            could refuse to necessary have uniform translators. To achieve this,
            it would be necessary to have uniform grammar, pronunciation and
            <br /> more words. If several languages coalesce, the grammar of the
            resulting language is simple and regular <br />
            than that of the individual languages. The new common language will
            be more simple and regular than
            <br /> the existin languages samepronunciation and their most common
            words.
          </p>
          <h2 class="fw-bold mt-5">Perfect From Beginning to End</h2>
          <p class="text-dark fs-5 mt-4">
            Transfer details Choose the amount you want to send abroad, select
            how your receiver wants to get the money, and lastly, how you want
            to pay. You will always see our fees upfront, the final amount you
            will
            <br /> pay, and the exact amount your receiver will get.
          </p>
          <i class="bi bi-dot text-success fs-2"></i>
          <span class="text-dark fs-5">
            Aliquam Eros Justo, Posuere Loborti Robart That
          </span>
          <br />
          <i class="bi bi-dot text-success fs-2"></i>
          <span class="text-dark fs-5">
            Fermentum Ullamcorper Viverra Laoreet
          </span>
          <br />
          <i class="bi bi-dot text-success fs-2"></i>
          <span class="text-dark fs-5">
            Lobortis, Viverra Laoreet Augue Attis Hrculies
          </span>
          <br />
          <i class="bi bi-dot text-success fs-2"></i>
          <span class=" fs-5">Fermentum Ullamcorper Viverra Laoreet</span>
          <hr class="me-5" />
          <div className="d-flex justify-content-between">
            <div>
              <span class="my-5 fw-bold fs-5">Tag:</span>
              <a
                href="#"
                class="text-success fs-5 text-decoration-none"
              >
                #Technology
              </a>
              &nbsp;
              <a
                href="#"
                class="text-success fs-5 text-decoration-none"
              >
                #IT Business
              </a>
            </div>
            <div className="me-5">
              <span class="fs-5 text-align-end">Share:</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/">
                <i class="bi bi-facebook text-dark fs-4"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.com/">
                <i class="bi bi-linkedin text-dark fs-4"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://x.com/">
                <i class="bi bi-twitter text-dark fs-4"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/">
                <i class="bi bi-instagram text-dark fs-4"></i>
              </a>
            </div>
          </div>
          <hr class="me-5"></hr>
          <div class="blog-inner mt-5 p-4 fs-5 me-5">
            <div class="d-flex align-items-center">
              <img src={blogcard2} alt="img30" />
              <div class="d-flex justify-content-between w-100">
                <div>
                  <h5>Ronald Richards</h5>
                  <p class="fs-5">Founder & CEO</p>
                </div>
                <div>
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook text-dark fs-4"></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/">
                    <i class="bi bi-linkedin text-dark fs-4"></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://x.com/">
                    <i class="bi bi-twitter text-dark fs-4"></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram text-dark fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
            Delicate and specialty items are handled with the utmost care. We
            have specialized processes for such items to ensure they are cleaned
            gently and returned to you in pristine condition.
          </div>
          <h1 className="mb-3 mt-5">Comments(03)</h1>
          <hr class="me-5 "></hr>
          <div className="my-2">
            <div class="d-flex align-items-center">
              <img src={blogcard3} alt="img30" />
              <div class="d-flex justify-content-between w-75">
                <div>
                  <h5>Brooklyn Simmons</h5>
                  <p class="fs-5">
                    <i class="bi bi-calendar3 text-success"></i>28 April, 2023
                  </p>
                </div>
                <div>
                  <button class="btn bg-success text-light">
                    Reply<i class="bi bi-reply-fill text-light"></i>
                  </button>
                </div>
              </div>
            </div>
            There are many different types of roofing materials to choose from,
            including asphalt shingles, Metal roofing, wood shakes,
            <br /> clay tiles, and slate. Each material has its
          </div>
          <hr class="me-5" />
          <div class="ms-5 my-2">
            <div class="d-flex align-items-center">
              <img src={blogcard4} alt="img30" />
              <div class="d-flex justify-content-between w-75">
                <div>
                  <h5>Marvin McKinney</h5>
                  <p class="fs-5">
                    <i class="bi bi-calendar3 text-success"></i>20 October, 2023
                  </p>
                </div>
                <div>
                  <button class="btn bg-success text-light">
                    Reply<i class="bi bi-reply-fill text-light"></i>
                  </button>
                </div>
              </div>
            </div>
            Is a statement that highlights the importance of providing
            high-quality auto repair services. It suggests that the
            <br /> company or individual
          </div>
          <hr class="me-5"></hr>
          <div>
            <div class="d-flex align-items-center">
              <img src={blogcard4} alt="img30" />
              <div class="d-flex justify-content-between w-75">
                <div>
                  <h5>Ronald Richards</h5>
                  <p class="fs-5">
                    <i class="bi bi-calendar3 text-success"></i>06 June, 2023
                  </p>
                </div>
                <div>
                  <button class="btn bg-success text-light">
                    Reply<i class="bi bi-reply-fill text-light"></i>
                  </button>
                </div>
              </div>
            </div>
            There are many different types of roofing materials to choose from,
            including asphalt shingles, Metal roofing, wood shakes,
            <br /> clay tiles, and slate. Each material has its
          </div>
          <hr class="me-5" />
          <div class="blog-formcard ps-3 me-5">
            <h2 class="mt-4">Add Your Comment</h2>
            <p class="text-secondary fs-5">
              Get in touch with us to see how we can help you with your project
            </p>
            <input
              type="text"
              placeholder="Enter Name"
              class="fs-4 px-5 rounded"
            />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Enter Email"
              class="fs-4 px-5 rounded"
            />
            <br />
            <textarea
              rows="5"
              cols="65"
              class="my-5 fs-4 rounded"
              placeholder="Enter Message ..."
            ></textarea>
            <br />
            <button
              type="submit"
              class="px-5 py-2 text-light bg-success rounded fs-5 mb-5"
            >
              Submit Now
            </button>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog-formcard1 me-5 py-4 px-3">
            <h4>Search</h4>
            <input
              type="search"
              class="form-control fs-5 py-4 bi bi-search"
              placeholder="Search Here ..."
            />
          </div>
          <div class="blog-innercontent me-5 mt-5 px-2">
            <h3>Categories</h3>
            <div class="blog-innercontent mt-3 px-2 d-flex justify-content-around">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Content Management
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
            <div class="blog-innercontent px-2 d-flex justify-content-around">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Information Security
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
            <div class="blog-innercontent px-2 d-flex justify-content-around">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Software Development
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
            <div class="blog-innercontent px-2 d-flex justify-content-around">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Web Analysis
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
            <div class="blog-innercontent px-2 d-flex justify-content-around">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Digital Marketing
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
            <div class="blog-innercontent px-2 d-flex justify-content-around mb-4">
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                Tech Support Pro
              </a>
              <a
                href="#"
                class="text-dark text-decoration-none p-3 fs-5 fw-bold"
              >
                =&gt;
              </a>
            </div>
          </div>
          <div class="blog-innercontent">
            <h3 class="text-dark my-3">Recent Post</h3>
            <div class="row mb-3">
              <div class="col-lg-5 mb-4">
                <img src={blogcard5} alt="image22" class="rounded" />
              </div>
              <div class="col-lg-7">
                <a
                  href="#"
                  class=" text-decoration-none text-dark fs-6 mt-5 mb-4"
                >
                  <i class="bi bi-calendar3 text-success"></i>&nbsp;December 27,
                  2023
                </a>
                <a href="#" class="text-dark text-decoration-none fs-6 fw-bold">
                  Efficiency redefined through technology.
                </a>
              </div>
              <div class="col-lg-5">
                <img src={blogcard6} alt="image22" class="rounded" />
              </div>
              <div class="col-lg-7">
                <a
                  href="#"
                  class=" text-decoration-none text-dark fs-6 mt-5 mb-4"
                >
                  <i class="bi bi-calendar3 text-success"></i>&nbsp;December 27,
                  2023
                </a>
                <a href="#" class="text-dark text-decoration-none fs-6 fw-bold">
                  Efficiency redefined through technology.
                </a>
              </div>
            </div>
          </div>
          <div class="blog-innercontent py-4">
                    <h4 class="my-4">Tags</h4>
                    <a href="#" class="bg-success p-2 rounded fs-5 text-decoration-none text-light">Interiour</a>&nbsp;
                    <a href="#" class="bg-success p-2 rounded fs-5 text-decoration-none text-light">Software</a>&nbsp;
                    <a href="#" class="bg-success p-2 rounded fs-5 text-decoration-none text-light">Design</a>&nbsp;<br/><br/>
                    <a href="#" class="bg-success p-2 rounded fs-5 text-decoration-none text-light">Web Planting</a>&nbsp;<br/><br/>
                    <a href="#" class="bg-success p-2 rounded fs-5 text-decoration-none text-light mb-4">Daily Inspiration</a>&nbsp;
                </div>
            
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
