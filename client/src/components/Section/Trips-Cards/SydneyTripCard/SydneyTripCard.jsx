import React from 'react';
import './sydneytripcard.css'
import About from '../../About/About';

const SydneyTripCard = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/17/39/cf/1739cf64f4aa4039470fe659c6b3835c.jpg',
      title: 'Relaxation',
      description: 'Category',
      price: '$6',
      
      
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sightseeing',
      description: 'Category',
      price:'$5'
      
      
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Empire state Building',
      description: 'Activity',
      price:'$0'
     
    },
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/80/6c/0b/806c0b6e22e117b637843bfe9b9825f7.jpg',
      title: 'Statue of Liberty tour',
      description: 'Activity',
      price:'$7.6'
      
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
                  <button>
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