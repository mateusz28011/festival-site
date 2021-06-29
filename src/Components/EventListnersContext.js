import React, { useEffect, useState, useContext } from 'react';

const EventListnersContext = React.createContext();

export const useEventListners = () => {
  return useContext(EventListnersContext);
};

const EventListnersContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleIsSmallScreen = () => {
    setIsSmallScreen((prev) => !prev);
  };

  // const toggleIsNavbarScrolled = () => {
  //   const nav = document.getElementsByTagName('nav')[0];
  //   if (nav.offsetHeight < window.scrollY && isNavbarScrolled == false) {
  //     setIsNavbarScrolled(true);
  //   } else if (nav.offsetHeight > window.scrollY && isNavbarScrolled) {
  //     setIsNavbarScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', toggleIsNavbarScrolled);
  //   return () => {
  //     window.removeEventListener('scroll', toggleIsNavbarScrolled);
  //   };
  // });

  useEffect(() => {
    const checkIsSmallScreen = () => {
      const check = window.innerWidth <= 640 ? true : false;
      if (isSmallScreen !== check) {
        toggleIsSmallScreen();
      }
    };

    checkIsSmallScreen();
    window.addEventListener('resize', checkIsSmallScreen);
    return () => {
      window.removeEventListener('resize', checkIsSmallScreen);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640) setIsMenuOpen(false);
    };

    const hideMenuClick = (e) => {
      if (
        !['path1', 'path2', 'path3', 'dropDownBackground', 'menuBar'].includes(
          e.target.id
        )
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);
    window.addEventListener('click', hideMenuClick);
    return () => {
      window.removeEventListener('resize', hideMenu);
      window.removeEventListener('click', hideMenuClick);
    };
  }, []);

  return (
    // <EventListnersContext.Provider
    //   value={{ isMenuOpen, toggleMenu, isNavbarScrolled }}
    // >
    <EventListnersContext.Provider
      value={{ isSmallScreen, isMenuOpen, toggleMenu }}
    >
      {children}
    </EventListnersContext.Provider>
  );
};

export default EventListnersContextProvider;
