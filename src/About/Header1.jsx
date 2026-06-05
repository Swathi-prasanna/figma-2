import React from 'react'
import logo from "./logo1.png"

function Header1() {
  return (
    <header className="header">
      <div className="top-bar text-light">
        <div className="row align-items-start p-3">
          <div className="col-lg-8">
            <span className="me-3">
              <i className="bi bi-geo-alt-fill text-light me-1"></i>
              Jones Street, New York, USA |
            </span>
            <i className="bi bi-envelope text-light me-1"></i>
            <a
              href="mailto:info@example.com"
              className="text-white text-decoration-none me-3"
            >
              Info@example.com
            </a>
            |<i className="bi bi-telephone-fill text-light me-1 ms-2"></i>
            <a
              href="tel:+9876543210"
              className="text-white text-decoration-none"
            >
              + 70 264 566 579
            </a>
          </div>
          <div className="col-lg-4 align-items-center">
            <a href="https://www.facebook.com/">
              <i className="bi bi-facebook text-light fs-5 me-3"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="bi bi-linkedin text-light me-3"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="bi bi-twitter text-light me-3"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="bi bi-instagram text-light me-3"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top py-3 rounded mx-4">
        <div className="container">
          <img src={logo} alt="logo"></img>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fs-5" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn bg-success text-light fs-5 px-3 py-2">
            Get a Free Quote
          </button>
        </div>
      </nav>
      <div className='d-flex justify-content-between pt-5'>
        <h1 className='text-light py-2 pt-5'>About</h1>
        <div className='py-5 pe-5'>
        <a href="./" className='text-light  text-decoration-none fs-5'>Home-</a>
        <a href="./" className='text-light   text-decoration-none fs-5'>About</a>
        </div>
      </div>
      </header>
  )
}

export default Header1