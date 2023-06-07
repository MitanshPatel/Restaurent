import React from 'react'

function Card() {
  return (
    <div className='carddisplay'>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>    {/* mt-3 is margin top 3px */}
        <img src="https://cdn.tasteatlas.com//images/dishes/d8cf5af177274c3d9760ed59e92d3ec0.jpg?w=905&h=510" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lasagne alla Bolognese</h5>
          <p className="card-text">Imp text hai ye.</p>
          <div className='container w-100'>  {/* container is mobile first appoarch, helps in breakpoints; w-100 use 100% width*/}
            <select className='m-2 h-100'>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1} >{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100'>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <span><p className='d-inline fs-5'>Total Price</p></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
