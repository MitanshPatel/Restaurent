import React, { useState } from 'react'
import css from '../astyles/signup.module.css'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate();
  const [details, setDetails] = useState({name:"", email:"", password:"", location:""})

  const handleSubmit = async(event) =>{
    event.preventDefault();         //will keep the value entered in the forms event after submitting
    const res = await fetch("https://lacuisinemagique.onrender.com/api/createuser",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name: details.name, email: details.email, location: details.location, password: details.password})
    });

    const json = await res.json();     //server will send if success:true or not
    console.log(json);

    if(!json.success){
      alert("Enter valid details")
    }
    else if(json.success){
      alert("Account created, please login");
      navigate("/login");
    }
  } 

  const setChange= (event)=>{
    setDetails({...details, [event.target.name]: event.target.value})
  }

  return (
    <div className={css.sign}>
      <div className={css.con}>
        <form className={css.formula} onSubmit={handleSubmit}>
          <h1 style={{"color":"#f7d702", "fontWeight":"bolder"}}>Sign Up</h1>

          <label htmlFor='name' className={css.labelo}>Name</label>
          <input type='text' name="name" value={details.name} onChange={setChange}/>

          <label htmlFor='email' className={css.labelo}>Email</label>
          <input type='text' name="email" value={details.email} onChange={setChange}/>

          <label htmlFor='location' className={css.labelo}>Address</label>
          <input type='text' name="location" value={details.location} onChange={setChange}/>

          <label htmlFor='password' className={css.labelo}>Password</label>
          <input type='password' name="password" value={details.password} onChange={setChange}/>

          <button type='submit' className={css.btno}>Submit</button>
          <Link to="/login" className={css.btnol}>Already a user</Link>
        </form>
      </div>
      <svg  id={css.wave}style={{"transform":"rotate(0deg)", "transition": "0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 215, 0, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{"transform":"translate(0, 0px)", "opacity":"1"}} fill="url(#sw-gradient-0)" d="M0,147L17.1,130.7C34.3,114,69,82,103,81.7C137.1,82,171,114,206,130.7C240,147,274,147,309,179.7C342.9,212,377,278,411,302.2C445.7,327,480,310,514,285.8C548.6,261,583,229,617,245C651.4,261,686,327,720,294C754.3,261,789,131,823,106.2C857.1,82,891,163,926,220.5C960,278,994,310,1029,277.7C1062.9,245,1097,147,1131,89.8C1165.7,33,1200,16,1234,32.7C1268.6,49,1303,98,1337,138.8C1371.4,180,1406,212,1440,212.3C1474.3,212,1509,180,1543,163.3C1577.1,147,1611,147,1646,138.8C1680,131,1714,114,1749,138.8C1782.9,163,1817,229,1851,212.3C1885.7,196,1920,98,1954,81.7C1988.6,65,2023,131,2057,179.7C2091.4,229,2126,261,2160,228.7C2194.3,196,2229,98,2263,49C2297.1,0,2331,0,2366,24.5C2400,49,2434,98,2451,122.5L2468.6,147L2468.6,490L2451.4,490C2434.3,490,2400,490,2366,490C2331.4,490,2297,490,2263,490C2228.6,490,2194,490,2160,490C2125.7,490,2091,490,2057,490C2022.9,490,1989,490,1954,490C1920,490,1886,490,1851,490C1817.1,490,1783,490,1749,490C1714.3,490,1680,490,1646,490C1611.4,490,1577,490,1543,490C1508.6,490,1474,490,1440,490C1405.7,490,1371,490,1337,490C1302.9,490,1269,490,1234,490C1200,490,1166,490,1131,490C1097.1,490,1063,490,1029,490C994.3,490,960,490,926,490C891.4,490,857,490,823,490C788.6,490,754,490,720,490C685.7,490,651,490,617,490C582.9,490,549,490,514,490C480,490,446,490,411,490C377.1,490,343,490,309,490C274.3,490,240,490,206,490C171.4,490,137,490,103,490C68.6,490,34,490,17,490L0,490Z"></path></svg>
    </div>
  )
  
}

export default SignUp
