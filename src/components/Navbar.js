import React, { useState } from 'react';
import '../sass/main.css'
import LOGO from '../images/logo_dark.png';
import ModalLogin from './LoginReg/ModalLogin';
import ModalReg from './LoginReg/ModalReg';
// import LoginDialog from './dump/LoginDialog';


  const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [reg, setReg] = useState(false)

  const handleOpen = () => {
    setOpen(preOpen => !preOpen  )
  }

  const handleReg = () => {
    
      setReg(preReg => !preReg)
    
  }
  
    
  return (
    <div>
        <nav className='nav'>
            <div className="nav__logo">
              <img className='nav__logo-img' src={LOGO} alt="goty tv brand" />
            </div>
            <div className="nav__search">
              <form method='post' action='/' className='nav__search-form'>
                <i class="fa-solid fa-magnifying-glass fa-sm"></i>
                <input type="text" name='search' placeholder='Search...' />
                <select className='nav__search-formselect' >
                  <option value='series'>Series</option>
                  <option value='movies'>Movies</option>
                  <option value='anime'>Anime</option>
                  <option value='kdrama'>KDrama</option>
                  <option value='turkish'>Turkish</option>
                </select>
              </form>
            </div>
            <div className="nav__login">
              <span className="nav__login-button nav__login-common" onClick={handleOpen}>Login</span>
              <span className='nav__login-or'>or</span>
              <span className="nav__login-reg nav__login-common" onClick={handleReg}>Register</span>
            </div>
        </nav>
        <section className="nav__modal">
        {open && <ModalLogin closeModal={handleOpen}/>}
        {reg && <ModalReg handleReg={handleReg}/>}
        </section>
        {/* <LoginDialog open={open} handleOpen={handleOpen}/> */}
        
    </div>
  )
}

export default Navbar