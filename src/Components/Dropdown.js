import React from 'react';
import { Link } from 'react-router-dom';
import { useEventListners } from './EventListnersContext';

const Dropdown = () => {
  const linkStyle = 'py-1 text-glow';

  const { isMenuOpen, isNavbarScrolled } = useEventListners();

  return (
    <div
      className={
        'absolute -z-10 flex flex-col text-lg items-center uppercase font-aldrich w-full right-0 scale-0 origin-top top-24 ' +
        'text-white transition duration-300 transform backdrop-filter backdrop-blur-md  ' +
        (isMenuOpen ? 'translate-y-0 scale-100 ' : 'opacity-0 ')
        // (isNavbarScrolled ? 'backdrop-blur-xl ' : 'backdrop-blur ')
      }
    >
      <div
        id='dropDownBackground'
        className={
          'absolute w-full h-full -z-20 rounded-b-lg  bg-gradient-to-b from-cyan-500 to-lightBlue-500 opacity-50 '
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
