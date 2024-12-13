import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from '../components/Auth/Logout';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="profile-page">
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <Logout />
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfilePage;