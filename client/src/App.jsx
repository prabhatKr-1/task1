import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingsPage from "./pages/ListingsPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import SignUp from "./components/Auth/SignUp";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
