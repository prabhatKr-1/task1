import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListingsPage from './pages/ListingsPage';
import RecommendationsPage from './pages/RecommendationsPage';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;