import React from 'react';
import './paristripcard.css'
import About from '../../About/About';
import { Link } from 'react-router-dom';

const ParisTripCard = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/42/17/a5/4217a50a083a984755576cfc08429f73.jpg',
      title: 'Sightseeing',
      description: 'Category',
      price: '$150',
      link: '/plan',
      
      
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/474x/bc/02/ac/bc02acd737e86ad48986757bd5e717bc.jpg',
      title: 'Tour Guide',
      description: 'Category',
      price:'$6.5',
      link: '/plan',
      
      
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/17189976/pexels-photo-17189976/free-photo-of-tourist-posing-under-eiffel-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Eiffel Tower visit',
      description: 'Activity',
      price:'$0',
      link: '/plan',
     
    },
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/2775742/pexels-photo-2775742.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Seine River Cruise',
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

export default ParisTripCard;