import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      // Set a timer to reset the form after 5 seconds
      const timer = setTimeout(() => {
        setSubmitted(false); // Reset the submitted state
        setFormData({ name: '', email: '', message: '' }); // Clear the form inputs
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [submitted]); // Effect depends on the `submitted` state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    // alert('Form submitted!'); // Placeholder for submission action
    setSubmitted(true); // Set submitted state to true without clearing formData here
  };

  return (
    <div className="form-container">
      {submitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
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





