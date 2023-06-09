import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navcss from '../astyles/Navbar.module.css'
import Model from '../Model'
import Cart from '../screens/Cart'
import { useCart, useDispatchCart } from '../components/contextReducer';

function Navbar() {
  let data = useCart();                  //data which is sent to other components
  let dispatch = useDispatchCart();      //used to dispatch data to other components thru contextRouter


  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();
  const handleLog = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <div>
      <svg id="wave" className={navcss.wavi} style={{ "transform": "rotate(180deg)", "transition": "0.3s" }} viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 215, 0, 1)" offset="0%"></stop><stop stop-color="rgba(255, 215, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{ "transform": "translate(0, 0px)", "opacity": "1" }} fill="url(#sw-gradient-0)" d="M0,104L13.3,95.3C26.7,87,53,69,80,82.3C106.7,95,133,139,160,130C186.7,121,213,61,240,69.3C266.7,78,293,156,320,169C346.7,182,373,130,400,125.7C426.7,121,453,165,480,177.7C506.7,191,533,173,560,147.3C586.7,121,613,87,640,82.3C666.7,78,693,104,720,130C746.7,156,773,182,800,173.3C826.7,165,853,121,880,95.3C906.7,69,933,61,960,86.7C986.7,113,1013,173,1040,199.3C1066.7,225,1093,217,1120,195C1146.7,173,1173,139,1200,134.3C1226.7,130,1253,156,1280,169C1306.7,182,1333,182,1360,151.7C1386.7,121,1413,61,1440,56.3C1466.7,52,1493,104,1520,125.7C1546.7,147,1573,139,1600,143C1626.7,147,1653,165,1680,147.3C1706.7,130,1733,78,1760,69.3C1786.7,61,1813,95,1840,95.3C1866.7,95,1893,61,1907,43.3L1920,26L1920,260L1906.7,260C1893.3,260,1867,260,1840,260C1813.3,260,1787,260,1760,260C1733.3,260,1707,260,1680,260C1653.3,260,1627,260,1600,260C1573.3,260,1547,260,1520,260C1493.3,260,1467,260,1440,260C1413.3,260,1387,260,1360,260C1333.3,260,1307,260,1280,260C1253.3,260,1227,260,1200,260C1173.3,260,1147,260,1120,260C1093.3,260,1067,260,1040,260C1013.3,260,987,260,960,260C933.3,260,907,260,880,260C853.3,260,827,260,800,260C773.3,260,747,260,720,260C693.3,260,667,260,640,260C613.3,260,587,260,560,260C533.3,260,507,260,480,260C453.3,260,427,260,400,260C373.3,260,347,260,320,260C293.3,260,267,260,240,260C213.3,260,187,260,160,260C133.3,260,107,260,80,260C53.3,260,27,260,13,260L0,260Z"></path></svg>
      <nav className={` navbar navbar-expand-lg navbar-dark bg-light ${navcss.navbari}`}>
        <div className="container-fluid ">
          <Link className={`navbar-brand fs-2 ${navcss.brand}`} to='/'>La Cuisine Magique</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className={`nav-link active fs-5 ${navcss.home}`} aria-current="page" to='/'>Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className={`nav-link active fs-5 ${navcss.home}`} aria-current="page" to='/'>My Orders</Link>
                </li>

                : ""}
            </ul>

            {(!localStorage.getItem("authToken")) ?
              <div className={`d-flex ${navcss.logbtns}`}>
                <Link className={navcss.log} to='/login'>Login</Link>
                <Link className={navcss.sign} to='/createuser'>Sign Up</Link>
              </div>
              :
              <div className={`d-flex ${navcss.logbtns}`}>
                <button onClick={() => setCartView(true)} className={navcss.cart} to='/cart'>My Cart<h6>
                  <span className="badge bg-dark">{data.length}</span></h6></button>
                {cartView ? <Model onClose={() => setCartView(false)}>
                  <Cart />
                </Model> : null}
                <Link className={navcss.logout} to='/login' onClick={handleLog}>Logout</Link>
              </div>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
