// BackgroundSlider.js
import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css'; // Make sure you have the CSS file

const images = [
  './assets/health2.jpeg',
  './assets/medical-center.jpeg',
  './assets/health.jpeg',
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
    <div className="background-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{ opacity: index === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export default BackgroundSlider;