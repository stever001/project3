import React from 'react';
import ContactFormWrapper from '../ContactForm/ContactForm'; // Importing ContactFormWrapper
import './Contact.css'; // Importing CSS

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2> {/* Added class here */}
      <ContactFormWrapper /> {/* Using ContactFormWrapper here */}
    </div>
  );
}

export default Contact;
