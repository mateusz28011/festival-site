import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ toggleMenu, isMenuOpen }) => {
  const linkStyle = 'py-1 text-glow';

  return (
    <div
      id='dropDown'
      className={
        'flex flex-col items-center uppercase font-aldrich w-1/3 ml-auto bg-gradient-to-b scale-0 origin-top-right' +
        ' from-black to-secondary-600 text-white rounded-bl-lg transition-transform duration-300 transform -translate-y-full' +
        (isMenuOpen ? 'translate-y-0 scale-100' : '')
      }
      // className={
      //   isMenuOpen
      //     ? 'flex flex-col items-center uppercase font-aldrich w-1/3 ml-auto bg-gradient-to-b from-black to-secondary-600 text-white rounded-bl-lg animate-eject '
      //     : 'hidden'
      // }
    >
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
