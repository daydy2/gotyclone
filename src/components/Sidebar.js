import React from 'react'
import '../sass/main.css';

const Sidebar = () => {
  return (
    <>
    <section className="section__sidebar">
        <h4 className="section__sidebar-header">Menu</h4>
        <ul className="section__sidebar-list">
            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-house fa-xl fa-icon"></i>
                <span className='listLink'>Home</span>
            </li>

            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-tv fa-xl fa-icon"></i>
                <span className='listLink'>TV shows</span>
            </li>

            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-film fa-2x fa-icon"></i>
                <span className="listLink">Movies</span>
            </li>

            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-clapperboard fa-2x fa-icon"></i>
                <span className="listLink">Anime</span>
            </li>

            <li className="section__sidebar-listItem">
                <i class="fa-brands fa-korvue fa-2x fa-icon"></i>
                <span className="listLink">Korean Drama</span>
            </li>

            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-star-and-crescent fa-2x fa-icon"></i>
                <span className="listLink">Turkish drama</span>
            </li>

        </ul>

        <h4 className="section__sidebar-header section__sidebar-headerNt">Extras</h4>
        <ul className="section__sidebar-list">
            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-filter fa-2x fa-icon"></i>
                <span className="listLink">Advanced Search</span>
            </li>
            
            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-message fa-2x fa-icon"></i>
                <span className="listLink">Support/Request</span>
                <i class="fa-solid fa-2x fa-chess-queen"></i>
            </li>
        </ul>

        <h4 className="section__sidebar-header section__sidebar-headerNt">General</h4>
        <ul className="section__sidebar-list">
            <li className="section__sidebar-listItem">
                <i class="fa-solid fa-circle-question fa-2x fa-icon"></i>
                <span className="listLink">FAQ</span>
            </li>
        </ul>
    </section>
        
    </>
  )
}

export default Sidebar