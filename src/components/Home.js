import React from "react";
import Products from "./Products"

function Home({search}) {
  return (
    <div className="hero">
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
