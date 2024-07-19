import React from 'react';
import './about.css'; 
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Router } from 'react-router-dom';

function About() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              We're passionate travel enthusiasts who believe everyone deserves the perfect trip. Our frustration with unorganized itineraries and missed experiences fueled the creation of this travel planner. Built using React, a powerful JavaScript library, our tool empowers travelers of all levels to plan stress-free, personalized adventures that capture their unique travel dreams.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by 
              <a href="#"> Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://facebook.com"><FaFacebook /></a></li>
              <li><a className="twitter" href="https://twitter.com"><FaTwitter /></a></li>
              <li><a className="dribbble" href="https://dribbble.com"><FaDribbble /></a></li>
              <li><a className="linkedin" href="https://linkedin.com"><FaLinkedin /></a></li>   
              <li><a className="instagram" href="https://instagram.com"><FaInstagram /></a></li>   
              <li><a className="github" href="https://github.com"><FaGithub /></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default About;