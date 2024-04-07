
import React from 'react';
import './CustomHeader.css'; // Importing Header-specific styles
import Navigation from '../Navigation/Navigation';

function CustomHeader() {
  const logoUrl = process.env.PUBLIC_URL + '/assets/trans-logo.png'; // Get the absolute URL for the logo

  return (
    <div className="CustomHeader-wrapper">
      <div className="header-top"> {/* Container for the logo and the title */}
        <div className="header-logo">
          <a href="/">
            <img src={logoUrl} alt="HealthSync Logo" />
          </a>
        </div>
        <h1 className="header-title">HealthSync</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default CustomHeader;