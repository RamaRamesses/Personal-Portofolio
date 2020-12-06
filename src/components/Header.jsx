import React from 'react'
import { Link } from 'react-router-dom';
import starfighter from '../assets/images/starfighter.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-lg-2" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand d-flex mr-auto rounded p-1 justify-content-center" href="#" style={{color: 'white', fontSize: '1.6rem'}}><i className="fas fa-user-astronaut mr-2 mt-1"></i>Hello There!</Link>
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item text-center">
            <a className="nav-link text-nowrap text-warning" style={{}}>MY PROJECTS</a>
          </li>
          <li className="nav-item text-center">
            <Link to="/swapi" className="nav-link text-nowrap text-info" style={{}}>SWAPI</Link>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link text-nowrap" style={{color: 'white'}}>ABOUT ME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
