import React from 'react';
import './Home.css'; // Import the CSS file, even though it's empty for now
import ModalComponent from '../ModalComponent/ModalComponent';

const Home = () => {
  return (
    <div>
      
      <div className="Home"> 
        <h1>Welcome to the Home Page</h1>
        <p>Click on the links above to learn more about us, login, or sign up!</p>
        <ModalComponent />
      </div>
    </div>
  );
};

export default Home;
