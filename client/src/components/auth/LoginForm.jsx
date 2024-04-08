// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import {useMutation}  from '@apollo/client';
import {ADD_USER , LOGIN_USER}  from "../../utils/mutations.js";

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [addUser]= useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) {
        // Make API request to authenticate user
        const response = await axios.post('/login', {
          email,
          password,
        });
        // Handle success response
        console.log('Login successful:', response.data);
        // Redirect user to dashboard or another page
      } else {
       const {data} = await  addUser({variables:{email, password}});
       console.log(data);
      }
    } catch (err) {
      // Handle error response
      console.error(`${isLoginMode ? 'Login' : 'Signup'} failed:`, err.response.data);
      setError(err.response.data.message);
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    setError(null); // Clear any previous error messages
  };

  return (
    <div className="auth-container">
      <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        {isLoginMode ? 'Don\'t have an account? ' : 'Already have an account? '}
        <button onClick={toggleMode}>{isLoginMode ? 'Sign Up' : 'Login'}</button>
      </p>
    </div>
  );
}

export default Authentication;
