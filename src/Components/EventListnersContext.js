import React, { useEffect, useState, useContext } from 'react';

const EventListnersContext = React.createContext();

export const useEventListners = () => {
  return useContext(EventListnersContext);
};

const EventListnersContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIsNavbarScrolled = () => {
    const nav = document.getElementsByTagName('nav')[0];
    if (nav.offsetHeight < window.scrollY && isNavbarScrolled == false) {
      setIsNavbarScrolled(true);
    } else if (nav.offsetHeight > window.scrollY && isNavbarScrolled) {
      setIsNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleIsNavbarScrolled);
    return () => {
      window.removeEventListener('scroll', toggleIsNavbarScrolled);
    };
  });

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640) setIsMenuOpen(false);
    };
    const hideMenuClick = (e) => {
      if (e.target.id !== 'dropDownBackground') setIsMenuOpen(false);
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
    <EventListnersContext.Provider
      value={{ isMenuOpen, toggleMenu, isNavbarScrolled }}
    >
      {children}
    </EventListnersContext.Provider>
  );
};

export default EventListnersContextProvider;
