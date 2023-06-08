import React from 'react'
import Cardcss from '../astyles/Card.module.css'

function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div className={Cardcss.carddisplay}>
      <div className={`card mt-3 ${Cardcss.cardi}`} style={{ "width": "18rem", "maxHeight": "360px" }}>    {/* mt-3 is margin top 3px */}
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">{props.desc}</p>
          <div className='container w-100'>  {/* container is mobile first appoarch, helps in breakpoints; w-100 use 100% width*/}
            <select className='m-2 h-100'>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1} >{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100'>
              {priceOptions.map((opt) => {
                return (
                  <option key={opt} value={opt}>{opt}</option>
                )
              })}
            </select>
            <span><p className='d-inline fs-5'>Total Price</p></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
