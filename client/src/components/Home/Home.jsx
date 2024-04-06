import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css'; // Import the CSS file




const Home = () => {
  return (
    <div>
      <Navigation /> 
      <div className="Home"> 
        <h1>Welcome to the Home Page</h1>
        <p>Click on the links above to learn more about us, login, or sign up!</p>
      </div>
    </div>
  );
};

export default Home;
