import React from "react";
import Products from "./Products"

function Home({search}) {
  return (
    <div className="hero">
      {/* <div className="card bg-dark text-white border-0 mt-5">
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
      </div> */}
      
       <div id="carouselExampleIndicators" className="carousel slide">
       <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/gallery/skincare.webp" className="d-block w-100 p-4" alt="skincare model" height="700px"/>
          
        </div>
        <div className="carousel-item">
          <img src="/gallery/back.jpg" className="d-block w-100 p-4" alt="skincare model" height="700px"/>
        </div>
        <div className="carousel-item">
          <img src="/gallery/skin.jpg" className="d-block w-100 p-4" alt="skincare model" height="700px"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
      <Products search={search}/>
    </div>
  );
}

export default Home;
