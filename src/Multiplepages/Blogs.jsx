import React from 'react';
import blogcard1 from "./aboutcard1.png";
import blogcard2 from "./blogcard2.png";
import blogcard3 from "./blogcard3.png";
import blogcard4 from "./blogcard4.png";

export default function Blogs() {
  return (
    <section className='blog-section'>
        <h5 className="text-success mt-5 fs-5">Our Blogs</h5>
        <h1 className="fw-bold fs-1">Let's Checkout Our All<br/> Latest News</h1>
        <div className="row">
            <div className="col-lg-6 ">
                <img src={blogcard1} alt="image9" width="600px" height="700px" className="rounded  mt-5 mb-3"/><br/>
                <a href="#" className=" text-decoration-none text-dark fs-5 me-3"><i
                        className="bi bi-person text-success"></i>&nbsp;Admin</a>
                <a href="#" className=" text-decoration-none text-dark fs-5"><i
                        className="bi bi-calendar3 text-success"></i>&nbsp;October 2, 2023</a>
                <h2><a href="#" className="fs-2 fw-bold text-decoration-none  text-dark">Everything you need to learn about
                        IT Solution for your Company.
                    </a></h2>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={blogcard2} alt="image19" className="rounded mt-5 ms-5"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-around">
                            <a href="#" className=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    class="bi bi-person text-success"></i>&nbsp;Admin</a>&nbsp;
                            <a href="#" className=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    className="bi bi-calendar3 text-success"></i>&nbsp;December 27, 2023</a>
                        </div>
                        <h6><a href="#" className="fs-5 mt-3 fw-bold text-decoration-none  text-dark">Everything you need to
                                learn about
                                IT Solution for your Company.</a></h6>
                        <a href="#" className="fs-4 text-decoration-none text-success fw-bold">Read More </a>
                    </div>
                </div>
                <hr className="mx-5"></hr>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={blogcard3} alt="image20" class="rounded mt-5 ms-5"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-around">
                            <a href="#" className=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    className="bi bi-person text-success"></i>&nbsp;Admin</a>&nbsp;
                            <a href="#" className=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    className="bi bi-calendar3 text-success"></i>&nbsp;December 27, 2023</a>
                        </div>
                        <h6><a href="#" className="fs-5 mt-3 fw-bold text-decoration-none  text-dark">Everything you need to
                                learn about
                                IT Solution for your Company.</a></h6>
                        <a href="#" className="fs-4 text-decoration-none text-success fw-bold">Read More</a>
                    </div>
                </div>
                <hr className="mx-5"></hr>
                <div class="row">
                    <div class="col-lg-6">
                        <img src={blogcard4} alt="image21" class="rounded mt-5 ms-5"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="d-flex justify-content-around">
                            <a href="#" class=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    class="bi bi-person text-success"></i>&nbsp;Admin</a>&nbsp;
                            <a href="#" class=" text-decoration-none text-dark fs-5 mt-5 mb-3"><i
                                    class="bi bi-calendar3 text-success"></i>&nbsp;December 27, 2023</a>
                        </div>
                        <h6><a href="#" class="fs-5 mt-3 fw-bold text-decoration-none  text-dark">Everything you need to
                                learn about
                                IT Solution for your Company.</a></h6>
                        <a href="#" class="fs-4 text-decoration-none text-success fw-bold">Read More</a>
                    </div>
                </div>
                </div>
            </div>
    </section>
  )
}
