// src/components/MusicPlayer.js
import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <h2>Now Playing: {track.title}</h2>
      <audio src={track.url} controls autoPlay={isPlaying} />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
