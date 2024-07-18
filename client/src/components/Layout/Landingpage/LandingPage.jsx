import React from 'react';
import "./landingpage.css";
// import Home from './Home';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">TravelExplore</div>
        <nav className="nav">
          <ul>
            {/* <li><a href="#home">Home</a></li> */}
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most beautiful destinations with us.</p>
          <a href="#gallery" className="cta-button">Explore Now</a>
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