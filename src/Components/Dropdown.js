import React from 'react';
import { Link } from 'react-router-dom';
import { useEventListners } from './EventListnersContext';

const Dropdown = () => {
  const linkStyle = 'py-1 text-glow';

  const { isMenuOpen, isNavbarScrolled } = useEventListners();

  return (
    <div
      id='dropDown'
      className={
        'absolute -z-10 flex flex-col text-lg items-center uppercase font-aldrich w-44 right-0 scale-0 origin-top-right top-20 ' +
        'text-white transition duration-300 transform backdrop-filter ' +
        (isMenuOpen ? 'translate-y-0 scale-100 ' : '') +
        (isNavbarScrolled ? 'backdrop-blur-xl ' : 'backdrop-blur ')
      }
    >
      <div
        className={
          'absolute w-full h-full -z-20 rounded-bl-lg bg-gradient-to-b from-black to-lightBlue-500 transition-opacity duration-1000 ' +
          (isNavbarScrolled ? 'opacity-75 ' : '')
        }
      ></div>
      <Link to='/about' className={linkStyle}>
        about
      </Link>
      <Link to='/program' className={linkStyle}>
        program
      </Link>
      <Link to='/gallery' className={linkStyle}>
        gallery
      </Link>
      <Link to='/info' className={linkStyle}>
        info
      </Link>
      <Link to='/partnership' className={linkStyle}>
        partnership
      </Link>
      <Link to='/contact' className={linkStyle + ' pb-2'}>
        contact
      </Link>
    </div>
  );
};

export default Dropdown;
