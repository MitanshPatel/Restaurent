import React from 'react'


function SignUp() {
  return (
    <div className='con'>
      <form className='form'>
        <label for='name'>Name</label>
        <input type='text' />
        <label for='email'>Email</label>
        <input type='text' />
        <label for='password'>Password</label>
        <input type='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp
