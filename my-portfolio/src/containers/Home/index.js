import React from 'react';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './styles.css';

export default function Hoom() {
  return (
    <div className="home-container">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
