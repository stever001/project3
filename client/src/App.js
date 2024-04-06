// /src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomHeader from './components/CustomHeader/CustomHeader';
import BackgroundSlider from './components/BackgroundSlider/BackgroundSlider';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/auth/LoginForm';
import Contact from './components/Contact/Contact';
import SignupForm from './components/auth/SignupForm';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BackgroundSlider />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* Add other routes as needed */}
      
      </Routes>
      
      {/* Other components */}
      <CustomHeader />
      <Home />
    
    </div>
  );
}

export default App;
