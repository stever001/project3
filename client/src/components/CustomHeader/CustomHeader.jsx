
import React from 'react';
import './CustomHeader.css'; // Importing Header-specific styles

import Navigation from '../Navigation/Navigation';

function CustomHeader() {
  return (
    <div className="CustomHeader-wrapper">
      <h1>HealthSync</h1>
      <Navigation />
    </div>
  );
}

export default CustomHeader;

