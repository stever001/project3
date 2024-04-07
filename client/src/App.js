import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomHeader from './components/CustomHeader/CustomHeader';
import CustomFooter from './components/CustomFooter/CustomFooter'; // Make sure to create this component
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
      <CustomHeader />  {/* Header should be at the top */}
      <BackgroundSlider />
      
      {/* The main content of your app should be rendered within Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* Add other routes as needed */}
      </Routes>
      
      <CustomFooter />  {/* Footer should be at the bottom */}
    </div>
  );
}

export default App;