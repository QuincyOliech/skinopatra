import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    // <div className="about">
    //   <h3 className="about-title">About Us</h3>
    //   <div className="container text-center">
    //     <div className="row align-items-start">
    //       <div className="col">
    //         <p className="about-text fs-5 fst-italic mt-5">
    //           Skinopatra is a cautiously created idea of conveying nature to
    //           your doorstep.We trust that nobody ought to need to trade off
    //           their wellbeing for beauty. Together with our brands, we are
    //           standing firm AGAINST TOXINS in close-to-home consideration,
    //           declining to make do with anything other than the most secure,
    //           best items. We are moving the attitudes — and building a network of
    //           activists who need a superior sort of beauty.
    //         </p>
    //       </div>
    //       <div className="col">
    //         <img className="about-image" src="/gallery/about.svg" alt="about" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
    <div className="container py-4 my-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-warning fw-bold mb-4">About Us</h2>
          <p className="lead">
          Skinopatra is a cautiously created idea of conveying nature to
          your doorstep.We trust that nobody ought to need to trade off
          their wellbeing for beauty. Together with our brands, we are
          standing firm AGAINST TOXINS in close-to-home consideration,
          declining to make do with anything other than the most secure,
          best items. We are moving the attitudes — and building a network of
          activists who need a superior sort of beauty.
          </p>
          <NavLink to="/contact" className="btn btn-outline-dark mt-5 px-3">Contact Us</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img className="about-image" src="/gallery/about.svg" alt="About Us" height="500px" width="500px"/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default About;
