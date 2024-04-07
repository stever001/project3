import React from 'react';
import './CustomFooter.css'; // You'll create this CSS file for footer-specific styles

function CustomFooter() {
  return (
    <div className="CustomFooter-wrapper">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} HealthSync. All rights reserved.</p>
        {/* Add any additional footer content here */}
      </div>
    </div>
  );
}

export default CustomFooter;