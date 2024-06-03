// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>MusicStream</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/artists">Artists</Link></li>
          <li><Link to="/old-songs">Old Songs</Link></li>
          <li><Link to="/new-songs">New Songs</Link></li>
          <li><Link to="/recently-played">Recently Played</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
