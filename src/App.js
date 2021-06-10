import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import { AudioVisualizerProvider } from './Components/AudioVisualizerContext';
import AudioPlayer from './Components/AudioPlayer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640) setIsMenuOpen(false);
    };
    const hideMenuClick = (e) => {
      if (e.target.id !== 'dropDown') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener('resize', hideMenu);
      window.addEventListener('click', hideMenuClick);

      return () => {
        window.removeEventListener('resize', hideMenu);
        window.removeEventListener('click', hideMenuClick);
      };
    }
  });

  return (
    <AudioVisualizerProvider>
      <Container>
        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Dropdown toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <AudioPlayer />
      </Container>
    </AudioVisualizerProvider>
  );
};

export default App;
