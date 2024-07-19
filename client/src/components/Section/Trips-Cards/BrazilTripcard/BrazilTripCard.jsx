import React from 'react';
import './braziltripcard.css'
import About from '../../About/About';

const BrazilTripCard = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/6580700/pexels-photo-6580700.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Helly Experience',
      description: 'Category',
      price: '$200',
      
      
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/2599136/pexels-photo-2599136.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Off-shore',
      description: 'Category',
      price:'$6.5'
      
      
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/564x/fe/c3/04/fec304a220500dacb82501a27181915d.jpg',
      title: 'Christ the Redeemer visit',
      description: 'Activity',
      price:'$0'
     
    },
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/474x/6b/03/87/6b0387a4052641c690839808d6709655.jpg',
      title: 'Sugarloaf Mountain cable car',
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

export default BrazilTripCard;