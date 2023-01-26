import React from "react";
import Products from "./Products"

function Home({search}) {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0 mt-5">
        <img
          src="/gallery/skin.jpg"
          className="card-img"
          alt="Background"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="home-container">
            <h5 className="card-title display-5 fw-bolder mb-3">DISCOVER SKINOPATRA</h5>
            <p className="card-text fs-5 fw-bold ">
              Developed with your needs in mind,
            </p>
            <p className="card-text fs-5 fw-bold ">
              delivering on our promise to
              provide nature-based affordable skincare solutions
            </p>
          </div>
        </div>
      </div>
      <Products search={search}/>
    </div>
  );
}

export default Home;
