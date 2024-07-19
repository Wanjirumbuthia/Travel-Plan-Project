import React from 'react';
import './newyorktripcard.css'
import About from '../../About/About';
import { Link } from 'react-router-dom';

const NewyorkTripCard = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/0a/30/72/0a30724a9c46cb22b94412a86442d0f5.jpg',
      title: 'Central Park',
      description: 'Category',
      price: '$6',
      link: '/plan',
      
      
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Historic Tour',
      description: 'Category',
      price:'$5',
      link: '/plan',
      
      
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Empire state Building',
      description: 'Activity',
      price:'$0',
      link: '/plan',
     
    },
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/80/6c/0b/806c0b6e22e117b637843bfe9b9825f7.jpg',
      title: 'Statue of Liberty tour',
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

export default NewyorkTripCard;