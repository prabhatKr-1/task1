import React from 'react';
import '../../css/Auth.css';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;