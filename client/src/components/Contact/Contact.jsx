import React from 'react';
import ContactFormWrapper from '../ContactForm/ContactForm'; // Importing ContactFormWrapper
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <ContactFormWrapper /> {/* Using ContactFormWrapper here */}
    </div>
  );
}

export default Contact