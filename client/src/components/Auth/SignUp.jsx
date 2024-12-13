import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Auth.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (emailError) {
      alert('Please fix the errors before submitting.');
      return;
    }
    try {
      const response = await axios.post('/api/auth/signup', { name, email, password });
      if (response.data.success) {
        alert('Sign-Up Successful! You can now log in.');
      } else {
        alert('Sign-Up Failed!');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
