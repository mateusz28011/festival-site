import React from 'react';
import { Link } from 'react-router-dom';
import { useEventListners } from './EventListnersContext';

const Dropdown = ({ location }) => {
  const linkStyle = 'pt-3 text-glow ';

  const { isMenuOpen } = useEventListners();

  return (
    <div
      className={
        'absolute -z-10 flex flex-col text-lg items-center uppercase font-aldrich w-full right-0 scale-0 origin-top top-24 text-white transition duration-300 transform backdrop-filter backdrop-blur-md shadow-lg rounded-b-lg ' +
        (isMenuOpen ? 'translate-y-0 scale-100 ' : 'opacity-0 ')
      }
    >
      <div
        id='dropDownBackground'
        className={
          'absolute w-full h-full -z-20 rounded-b-lg  bg-gradient-to-b from-cyan-500 to-lightBlue-500 opacity-40 '
        }
      ></div>
      <Link
        to='/about'
        className={
          linkStyle +
          (location.pathname === '/about' ? 'border-b-2 border-white' : '')
        }
      >
        about
      </Link>
      <Link
        to='/program'
        className={
          linkStyle +
          (location.pathname === '/program' ? 'border-b-2 border-white' : '')
        }
      >
        program
      </Link>
      <Link
        to='/gallery'
        className={
          linkStyle +
          (location.pathname === '/gallery' ? 'border-b-2 border-white' : '')
        }
      >
        gallery
      </Link>
      <Link
        to='/info'
        className={
          linkStyle +
          (location.pathname === '/info' ? 'border-b-2 border-white' : '')
        }
      >
        info
      </Link>
      <Link
        to='/partnership'
        className={
          linkStyle +
          (location.pathname === '/partnership'
            ? 'border-b-2 border-white'
            : '')
        }
      >
        partnership
      </Link>
      <Link
        to='/contact'
        className={
          linkStyle +
          'mb-3' +
          (location.pathname === '/contact' ? 'border-b-2 border-white' : '')
        }
      >
        contact
      </Link>
    </div>
  );
};

export default Dropdown;
