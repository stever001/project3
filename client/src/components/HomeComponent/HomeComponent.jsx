import React from 'react';
import './HomeComponent.css'; // Updated file name for specificity
import ModalComponent from '../ModalComponent/ModalComponent';

const HomeComponent = () => {
  return (
    
      <div className="homeContent"> 
        <h1 className="homeHeading">Welcome to HealthSync</h1>
        <p className="homeParagraph">Synch up with our world-class team of healthcare providers
         </p>
        <ModalComponent />
      </div>
  );
};

export default HomeComponent;

