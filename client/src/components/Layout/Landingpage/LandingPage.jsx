import React from 'react';
import "./landingpage.css";
import { Link } from "react-router-dom";
// import Home from './Home';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Travel Plan</div>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most beautiful destinations with us.</p>
          <Link to="/login" className="cta-button">Explore Now</Link>
        </div>
      </section>
      
      <section id="gallery">
        {/* <Home /> */}
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 TravelExplore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;