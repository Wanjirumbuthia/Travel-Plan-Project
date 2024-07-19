import React from 'react';
import './sydneytripcard.css'
import About from '../../About/About';
import { Link } from 'react-router-dom';

const SydneyTripCard = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/17/39/cf/1739cf64f4aa4039470fe659c6b3835c.jpg',
      title: 'Relaxation',
      description: 'Category',
      price: '$6',
      link: '/plan',
      
      
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sightseeing',
      description: 'Category',
      price:'$5',
      link: '/plan',
      
      
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/15229717/pexels-photo-15229717/free-photo-of-aerial-view-of-the-sydney-harbour-bridge-under-blue-sky-sydney-australia.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Harbour Bridge',
      description: 'Activity',
      price:'$0',
      link: '/plan',
     
    },
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/635512/pexels-photo-635512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Cruise',
      description: 'Activity',
      price:'$7.6',
      link: '/plan',
      
    }
  ];

  return (
    <div className="wrapper">
      <p>CATEGORIES</p>
      <div className="cols">
        {cards.map((card, index) => (
          <div key={card.id} className="col" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${card.imageUrl})`,
                }}
              >
                <div className="inner">
                  <h4>{card.title}</h4>
                  <h6>{card.description}</h6>
                  <h10>{card.price}</h10>
                  <button onClick={(e) => window.location.href = card.link}>
  <span class="span-mother">
    <span>P</span>
    <span>L</span>
    <span>A</span>
    <span>N</span>
  </span>
  <span class="span-mother2">
    <span>P</span>
    <span>L</span>
    <span>A</span>
    <span>N</span>
  </span>
</button>

                </div>
              </div>
            
            </div>
          </div>
        ))}
        <About />
      </div>
    </div>
  );
};

export default SydneyTripCard;