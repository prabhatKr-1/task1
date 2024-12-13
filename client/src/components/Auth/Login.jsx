import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import '../../css/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bdeploy.onrender.com/api/auth/login', { email, password });
      const data = response.data;
      if (data.success) {
        localStorage.setItem('token', data.token);
        alert('Login Successful!');
      } else {
        alert('Login Failed!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>LogIn</h2>
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
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>
          New here?{' '}
          <Link to="/signup" className="link-signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
