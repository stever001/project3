import React, { useState, useEffect } from 'react';
import './ContactForm.css'; // Standard CSS import

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="cf-container"> {/* This className was adjusted for consistency */}
      {submitted ? (
        <p className="cf-submission-confirmation">Form submitted successfully!</p>
      ) : (
        <div className="form-container"> {/* Properly applying styles to this container */}
          <form onSubmit={handleSubmit} className="cf-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="cf-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="cf-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="cf-textarea"
              ></textarea>
            </div>
            <button type="submit" className="cf-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

function ContactFormWrapper() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ContactForm />
    </div>
  );
}

export default ContactFormWrapper;
