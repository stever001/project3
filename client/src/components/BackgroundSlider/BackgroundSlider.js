// BackgroundSlider.js
import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css'; // Standard CSS import

const images = [
  './assets/slider1.jpg',
  './assets/slider2.jpg',
  './assets/slider4.jpg',
  './assets/slider6.jpg',
  // Add more images as needed
];

function BackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bs-background-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === current ? 'bs-slide bs-slide-active' : 'bs-slide'}
        />
      ))}
    </div>
  );
}

export default BackgroundSlider;
