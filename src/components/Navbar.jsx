import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navcss from '../astyles/Navbar.module.css'

function Navbar() {
  const navigate = useNavigate();
  const handleLog=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
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
              
            : "" }
          </ul>

          {(!localStorage.getItem("authToken")) ?
            <div className={`d-flex ${navcss.logbtns}`}>
              <Link className={navcss.log} to='/login'>Login</Link>
              <Link className={navcss.sign} to='/createuser'>Sign Up</Link>
            </div>
          :
          <div className={`d-flex ${navcss.logbtns}`}>
          <Link className={navcss.cart} to='/login'>My Cart</Link>
          <Link className={navcss.logout} to='/login' onClick={handleLog}>Logout</Link>
          </div>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
