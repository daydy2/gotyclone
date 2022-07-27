import React, { useState } from 'react'
import '../sass/main.css'

const Modal = () => {
  const [input, setInput]= useState({
    email: '',
    passd: '',
})

  const handleInput = (event) => {
    const name = event.target.name;
    setInput({
      ...input,
      [name]: event.target.value
    })
    
  }

  return (
    <>
      <main>
          <section className="sectionmodal">
          <h4 className="sectionmodal__h4-modalHeader">Sign in to GotyTV</h4>
          <p className="sectionmodal__p-modalP">Just login and start streaming</p>
          <form action="/" className="modalForm" method='post' onSubmit={(e) => {e.preventDefault()}}>

            <input 
            type="text" 
            name='email'
            placeholder='Email/Username'
            onChange={handleInput} 
            value={input.email}              
            />
            <input 
            type="password"  
            name='passd' 
            placeholder='Password' 
            onChange={handleInput} 
            value={input.passd}              
            />

            <div className="modalForm__div-container">
              <div className="modalForm__div-container1">
                <input type="checkbox" id='checkbox' name='checkbox'/>
                <label for="checkbox">Remember me</label>
              </div>
              <div className="modalForm__div-container2">
                <span className="modalForm__span-forgetpass">Forgot your password?</span>
              </div>
              
              
            </div>

            <button type="submit" className='modalForm__button'>Login</button>
            <div className="divor">
              <div className="divor__hr"></div>
              <span className="divor__span-or">OR</span>
              <div className="divor__hr"></div>
            </div>

            <p className="Reg">
              <span className="reg__span-first">Don't have an account? </span>
              <span className="reg__span-second">Create an account</span>
            </p>

          </form>
          
          
          </section>
      
      </main>      
    </>
  )
}

export default Modal