import React, { useState, useEffect } from 'react';
import "./home.css";

function Home() {
  const photos = [
    {
      image: 'https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'France',
      title: 'Paris'
    },
    {
      image: 'https://images.pexels.com/photos/13201175/pexels-photo-13201175.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      location: 'New York',
      title: 'USA',
    },
    {
      image: 'https://images.pexels.com/photos/2482308/pexels-photo-2482308.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      location: 'Pyramids of Gaza',
      title: 'Egypt',
    },
    {
      image: 'https://images.pexels.com/photos/3123690/pexels-photo-3123690.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Sahara Desert',
      title: 'Morocco',
    },
    {
      image: 'https://images.pexels.com/photos/1536436/pexels-photo-1536436.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Opera House',
      title: 'Sydney',
    },
    {
      image: 'https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Rio de Janeiro',
      title: 'Brazil',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    for (let i = 0; i < panels.length; i++) {
      let base = 150;
      let duration = 1000;
      let delay = base + duration * i;
      let panel = panels[i];
      setTimeout(() => panel.classList.add('hover'), delay);
      setTimeout(() => panel.classList.remove('hover'), delay + duration * 0.8);
    }
  }, []);

  return (
    <div className="panels">
      {photos.map((photo, index) => (
        <div key={index} className={`panel ${index === currentIndex ? 'hover' : ''}`}>
          <div
            className="background"
            style={{
              backgroundImage: `url(${photo.image})`
            }}
          />
          <div className="text">
            <p className="location">{photo.location}</p>
            <p className="title">{photo.title}</p>
            <button className="link">VIEW TRIP</button>
          </div>
        </div>
      ))}
      <button
        className="next-btn"
        onClick={() => setCurrentIndex((currentIndex + 1) % photos.length)}
      >
        Next
      </button>
    </div>
  );
}

export default Home;
