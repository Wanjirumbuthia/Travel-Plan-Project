import React from 'react';
import './tokyotipcard.css'

const TokyoTripCard = () => {
  return (
    <div className="wrapper">
      <h1>Parallax Flipping Cards</h1>
      <div className="cols">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div key={index} className="col" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(https://unsplash.it/50${index + 1}/50${index + 1}/)`,
                }}
              >
                <div className="inner">
                  <p>Card {index + 1}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokyoTripCard;