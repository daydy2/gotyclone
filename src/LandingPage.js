import React from 'react';
import './sass/main.css'
import LOGO from './images/logo_dark.png';

const LandingPage = () => {
  return (
    <>
        <nav className='nav'>
            <div className="nav__logo">
              <img className='nav__logo-img' src={LOGO} alt="goty tv brand" />
            </div>
            <div className="nav__search">
              <form method='post' action='/' className='nav__search-form'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" name='search' placeholder='Search...' />
                <select className='nav__search-select' >
                  <option value='series'>Series</option>
                  <option value='movies'>Movies</option>
                  <option value='anime'>Anime</option>
                  <option value='kdrama'>KDrama</option>
                  <option value='turkish'>Turkish</option>
                </select>
              </form>
            </div>
            <div className="nav__login">
              lorem login
            </div>
        </nav>
    </>
  )
}

export default LandingPage