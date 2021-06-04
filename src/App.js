import { React, useState, useEffect } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import Navbar from './Components/Navbar';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Dropdown toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default App;
