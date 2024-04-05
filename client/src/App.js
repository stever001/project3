// /src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import BackgroundSlider from './components/BackgroundSlider/BackgroundSlider';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/auth/LoginForm';
import Contact from './components/Contact/Contact';
import SignupForm from './components/auth/SignupForm';
// ... import other components you need routes for
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation /> {/* Include the Navigation component */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* Add other routes as needed */}
      </Routes>
      <BackgroundSlider />
      {/* Your header and other components */}
    </div>
  );
}

export default App;
