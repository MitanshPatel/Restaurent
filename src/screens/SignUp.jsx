import React, { useState } from 'react'
import css from '../astyles/signup.module.css'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate();
  const [details, setDetails] = useState({name:"", email:"", password:"", location:""})

  const handleSubmit = async(event) =>{
    event.preventDefault();         //will keep the value entered in the forms event after submitting
    const res = await fetch("http://localhost:5000/api/createuser",{
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
      <svg id={css.wave} style={{ "transform": "rotate(0deg)", "transition": "0.3s" }} viewBox="0 0 1440 400" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(8, 174, 234, 1)" offset="0%"></stop><stop stop-color="rgba(42, 245, 152, 1)" offset="100%"></stop></linearGradient></defs><path style={{ "transform": "translate(0, 0px)", "opacity": "1" }} fill="url(#sw-gradient-0)" d="M0,120L48,133.3C96,147,192,173,288,153.3C384,133,480,67,576,80C672,93,768,187,864,226.7C960,267,1056,253,1152,226.7C1248,200,1344,160,1440,140C1536,120,1632,120,1728,120C1824,120,1920,120,2016,100C2112,80,2208,40,2304,46.7C2400,53,2496,107,2592,106.7C2688,107,2784,53,2880,40C2976,27,3072,53,3168,113.3C3264,173,3360,267,3456,280C3552,293,3648,227,3744,173.3C3840,120,3936,80,4032,53.3C4128,27,4224,13,4320,6.7C4416,0,4512,0,4608,0C4704,0,4800,0,4896,33.3C4992,67,5088,133,5184,173.3C5280,213,5376,227,5472,213.3C5568,200,5664,160,5760,173.3C5856,187,5952,253,6048,233.3C6144,213,6240,107,6336,113.3C6432,120,6528,240,6624,273.3C6720,307,6816,253,6864,226.7L6912,200L6912,400L6864,400C6816,400,6720,400,6624,400C6528,400,6432,400,6336,400C6240,400,6144,400,6048,400C5952,400,5856,400,5760,400C5664,400,5568,400,5472,400C5376,400,5280,400,5184,400C5088,400,4992,400,4896,400C4800,400,4704,400,4608,400C4512,400,4416,400,4320,400C4224,400,4128,400,4032,400C3936,400,3840,400,3744,400C3648,400,3552,400,3456,400C3360,400,3264,400,3168,400C3072,400,2976,400,2880,400C2784,400,2688,400,2592,400C2496,400,2400,400,2304,400C2208,400,2112,400,2016,400C1920,400,1824,400,1728,400C1632,400,1536,400,1440,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"></path></svg>
    </div>
  )
}

export default SignUp
