import React from 'react';
import './Contact.css'; // Import CSS for the Contact page styling

function ContactPage() {
  return (
    <div className="ContactPage">
      <header className="App-header">
        {/* Menu Bar */}
        <nav className="App-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="/contact">Contact</a></li> {/* Highlight the Contact tab */}
          </ul>
        </nav>
        <h1>Contact Us</h1>
        <div className="ContactContent">
          <p>
            Add your contact information here. This can include your address, phone number, email, contact form, or any other means through which users can reach out to you.
          </p>
          {/* Add more content as needed */}
        </div>
      </header>
    </div>
  );
}

export default ContactPage;