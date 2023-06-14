import React from 'react'
import carocss from '../astyles/carousel.module.css'
import img1 from '../images/carousel-1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'

function Carousel() {
  return (
    <div id="carousel">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{"objectFit": "contain !important"}}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={img1} className={`d-block w-100 ${carocss.imgh}`} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={img2} className={`d-block w-100 ${carocss.imgh}`} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={img3} className={`d-block w-100 ${carocss.imgh}`} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Carousel
