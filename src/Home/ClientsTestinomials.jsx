import React from 'react';
import Slider from "react-slick";
import testcard1 from "./testcard1.png";
import testcard2 from "./testcard2.png";
import testcard3 from "./testcard3.png";

export default function ClientsTestinomials() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className='testinomials-section '>
        <h5 className="text-center text-success fs-5 fw-bold">Clients Testimonials</h5>
        <h1 className="fw-bold text-center fw-bold">What Our Customers Say</h1>
        <div className="slider-container mt-5">
      <Slider {...settings}>
        <div>
          <div className="testinomials-card p-5 rounded">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard1} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h4>Joshua Liddel</h4>
                            <p class="fs-5">Company Owner</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="testinomials-card p-5 rounded">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard2} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h4>Arush Aggarwal</h4>
                            <p class="fs-5">Senior Manager</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="testinomials-card p-5 rounded gap-3">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard3} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h5>Rosy Flower Gaggero</h5>
                            <p class="fs-5">Ceo And Founder</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="testinomials-card p-5 rounded">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard1} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h4>Joshua Liddel</h4>
                            <p class="fs-5">Company Owner</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="testinomials-card p-5 rounded">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard2} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h4>Arush Aggarwal</h4>
                            <p class="fs-5">Senior Manager</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
          <div className="testinomials-card p-5 rounded gap-3">
                    <div className="d-flex justify-content-between">
                        <div className="mt-5">
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                            <i className="bi bi-star-fill text-success"></i>
                        </div>
                        <div className="mt-5">
                            <i className="bi bi-chat-right-quote text-success"></i>
                        </div>
                    </div>
                    <p className="mt-5 fs-5">"requested a Ul update gig and received job excellent from Maria! talented
                        young UI/UX
                        designer who will beat your expectation! and quick feedback. Will definitely work with
                        again!"</p>
                    <div className="bg-success d-flex justify-content-around px-4 py-3 g-2">
                        <div>
                            <img src={testcard3} alt="image15"/>
                        </div>
                        <div className="text-light">
                            <h5>Rosy Flower Gaggero</h5>
                            <p class="fs-5">Ceo And Founder</p>
                        </div>
                    </div>
                </div>
        </div>
      </Slider>
      </div>
    </section>
  )
}
