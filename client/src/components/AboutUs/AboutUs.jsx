import React from 'react';
// Import the default export

import CardComponent from '../CardComponent/CardComponent';

// Or if you used named export, you would import like this:
// import { CardComponent } from '../CardComponent/CardComponent';

const AboutUs = () => {
  return (
    <div>
      {/* ... other AboutUs content ... */}
      
      <CardComponent />
    </div>
  );
};

export default AboutUs;
