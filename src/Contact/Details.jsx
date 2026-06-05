import React from 'react'

function Details() {
  return (
    <div className="details-section container">
            <div className="row mt-5">
                <div className="col-lg-6 pe-5">
                    <h1 className="fw-bold">Get A Quote</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" placeholder="Enter Name" className="px-5 py-3 my-4 rounded"/>
                            <input type="text" placeholder="Enter Subject" className="px-5 py-3 rounded"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Enter Email" className="px-5 py-3 my-4 rounded"/>
                            <input type="text" placeholder="Enter Phone" className="px-5 py-3 rounded"/>
                        </div>
                    </div>
                    <textarea placeholder="Enter Message ..." rows="5" cols="60" className="px-5 rounded mt-3"></textarea>
                    <button className="btn bg-success text-light fw-bold mt-4 px-5 py-3 fs-5">Send Message</button>
                </div>
                <div className="col-lg-6 ps-5">
                    <h1 className="fw-bold">Get In Touch</h1>
                    <p className="fs-5">These are the phrases we stay via way of means of in the whole lotwe do. Each brand
                        we build, and
                        we create.</p>
                    <div className="d-flex">
                        <i className="bi bi-geo-alt text-success fs-1"></i>&nbsp;&nbsp;
                        <div>
                            <h5 className="">Location</h5>
                            <a href="#" className="fs-5 text-dark text-decoration-none">7 Green Lake Street Crawfordsville,
                                IN 47933</a>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <i className="bi bi-telephone-fill text-success fs-1"></i>&nbsp;&nbsp;
                        <div>
                            <h5 className="">Call Now</h5>
                            <a href="tel:+9876543210" className="fs-5 text-dark text-decoration-none">+ 9876543210</a>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <i className="bi bi-envelope text-success fs-1"></i>&nbsp;&nbsp;
                        <div>
                            <h5 className="">Email Us</h5>
                            <a href="mailto:dev@gmail.com"
                                className="fs-5 text-dark text-decoration-none">info@example.com</a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <i className="bi bi-facebook fs-1 text-success"></i>&nbsp;&nbsp;
                        <i className="bi bi-linkedin fs-1 text-success"></i>&nbsp;&nbsp;
                        <i className="bi bi-twitter fs-1 text-success"></i>&nbsp;&nbsp;
                        <i className="bi bi-instagram fs-1 text-success"></i>&nbsp;&nbsp;
                    </div>
                </div>
                </div>
                </div>
  )
}

export default Details