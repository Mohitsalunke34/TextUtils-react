// src/pages/Artists.js
import React from 'react';
import ArtistProfile from '../components/ArtistProfile';
import './artist.css'


const Artists = () => {
  const artists = [
    {
      name: 'Artist 1',
      image: 'path/to/artist1.jpg',
      bio: 'Biography of artist 1.'
    },
    {
      name: 'Artist 2',
      image: 'path/to/artist2.jpg',
      bio: 'Biography of artist 2.'
    }
  ];

  return (
    <div>
      <h2>Artists</h2>
      {artists.map(artist => (
        <ArtistProfile key={artist.name} artist={artist} />
      ))}
        <img src="/assets/images/artist.jpg" alt="Music" className="artist-image" />

    </div>
  );
};

export default Artists;
