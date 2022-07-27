import React from 'react';
import '../sass/main.css'
import LOGO from '../images/logo_dark.png';

const Navbar = () => {
  return (
    <>
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
              <span className="nav__login-button nav__login-common">Login</span>
              <span className='nav__login-or'>or</span>
              <span className="nav__login-reg nav__login-common">Register</span>
            </div>
        </nav>
    </>
  )
}

export default Navbar