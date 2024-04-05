import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to create a new user
      const response = await axios.post('/api/signup', {
        email,
        password,
        confirmPassword,
      });
      
      // Handle success response
      console.log('Signup successful:', response.data);
      // Redirect user to dashboard or another page
    } catch (err) {
      // Handle error response
      console.error('Signup failed:', err.response.data);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignupForm;
