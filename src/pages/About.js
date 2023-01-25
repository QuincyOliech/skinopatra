import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h5 className="about-title">Welcome To Skinopatra</h5>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <p className="about-text fs-4 fst-italic mt-5">
              Skinopatra is a cautiously created idea of conveying nature to
              your doorstep.We trust that nobody ought to need to trade off
              their wellbeing for beauty. Together with our brands, we are
              standing firm AGAINST TOXINS in close-to-home consideration,
              declining to make do with anything other than the most secure,
              best items. We are moving the attitudes — and building a network of
              activists who need a superior sort of beauty.
            </p>
          </div>
          <div className="col">
            <img className="about-image" src="/gallery/about.svg" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
