import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <FontAwesomeIcon icon={faPlane} /> 
          Travel Plan
        </h1>
        <nav>
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/plan">Plan</Link></li>
            
            <li><Link to="/About">About</Link></li>




          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;