import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} /> 
          Travel App 
        </h1>
        <nav>
          <ul>
            <li> Home </li>
            <li>Plan</li>
            <li>Profile </li>
            <li>About </li>




          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;