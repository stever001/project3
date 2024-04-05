
// /src/App.js
import AboutUs from './components/AboutUs/AboutUs'; 
// Assuming AboutUs is in the components folder

import React from 'react';
import './App.css';
import BackgroundSlider from './components/BackgroundSlider/BackgroundSlider.js'; 
// Step 2: Import BackgroundSlider
// import AboutUs from './AboutUs'; // Import AboutUs component
import Contact from './components/Contact/Contact'; 
// Import Contact component

function App() {
  return (
    <div className="App">

      {/* Include the AboutUs component */}
      <AboutUs />

      <BackgroundSlider /> {/* Step 3: Include BackgroundSlider here */}
      <header className="App-header">
        {/* Menu Bar */}
        <nav className="App-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <img src={process.env.PUBLIC_URL + './assets/trans-logo.png'} className="App-logo" alt="HealthSync Logo" />
        <h1>Welcome to HealthSync</h1>
        <p>
          Syncing Lives, One Beat at a Time.
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Schedule an appointment today!
        </a>
      </header>
      {/* Add other components like MainContent, Footer, etc. */}

    </div>
  );
}


export default App;


