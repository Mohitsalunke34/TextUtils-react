// src/components/ArtistProfile.js
import React from 'react';
import './ArtistProfile.css';

const ArtistProfile = ({ artist }) => {
  return (
    <div className="artist-profile">
      <img src={artist.image} alt={artist.name} />
      <h3>{artist.name}</h3>
      <img src="/assets/images/artist.jpg" alt="Music" className="artist-image" />
      <p>{artist.bio}</p>
    </div>
  );
};

export default ArtistProfile;