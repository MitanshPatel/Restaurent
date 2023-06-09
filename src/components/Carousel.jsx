import React from 'react'
import carocss from '../astyles/carousel.module.css'

function Carousel() {
  return (
    <div id="carousel">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{"objectFit": "contain !important"}}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="https://img.freepik.com/free-photo/spices-tomatoes-near-spaghetti-garlic_23-2147849739.jpg?w=1380&t=st=1686315532~exp=1686316132~hmac=14177f0d517399535355f6fd60c5d2316e783a178572b2f6124cdbbbca66c263" className={`d-block w-100 ${carocss.imgh}`} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://img.freepik.com/free-photo/top-view-parmesan-pasta-wooden-table_23-2148305729.jpg?w=1380&t=st=1686041460~exp=1686042060~hmac=e9a1064fa813e8d16d7e187a6c7025d60e2f6a22edf82e90d7883cbd2adc4242" className={`d-block w-100 ${carocss.imgh}`} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234992.jpg?w=1380&t=st=1686041592~exp=1686042192~hmac=ba42b2b8230600f6adfdaf65e1d75561d409d27a2744cfbdf6e25b76590e21ce" className={`d-block w-100 ${carocss.imgh}`} alt="..." />
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
