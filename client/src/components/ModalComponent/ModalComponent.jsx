import React, { useState } from 'react';
import './ModalComponent.css'; // Assuming you're using CSS file for styling

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return (
    <>
      <button onClick={toggleModal}>Login/Signup</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            {isLoginForm ? (
              <form id="loginForm">
                <h2>Login</h2>
                <input type="text" placeholder="Username" name="username" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit">Login</button>
                <p>Not registered? <a href="#!" onClick={toggleForm}>Sign Up</a></p>
              </form>
            ) : (
              <form id="signupForm">
                <h2>Signup</h2>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit">Signup</button>
                <p>Already registered? <a href="#!" onClick={toggleForm}>Login</a></p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
