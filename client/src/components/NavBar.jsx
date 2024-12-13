import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Auth/Logout';
import "../css/NavBar.css";

function NavBar() {
  // Check if the JWT token is available in localStorage or sessionStorage
  const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token')

  const isAuthenticated = token ? true : false;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </div>
      <div className="navbar-center">
        {isAuthenticated ? (
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        ) : null} 
      </div>
      <div className="navbar-right">
        {isAuthenticated ? (
          <Logout />
        ) : (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
