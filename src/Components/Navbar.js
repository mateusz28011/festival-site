import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { GiMushroomsCluster } from 'react-icons/gi';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const linkStyle = 'text-center text-glow px-1.5 hidden sm:block';
  const linkBlockStyle = 'flex-1 justify-around sm:flex';

  return (
    <nav
      className={
        'max-w-screen-2xl flex justify-center items-center transition-all' +
        'uppercase text-white font-aldrich sm:text-sm md:text-base lg:text-xl xl:text-2xl ' +
        'bg-gradient-to-r from-fuchsia-700 via-black  relative z-10 transition-all transform ' +
        (isMenuOpen ? 'to-black' : 'to-secondary-600')
      }
    >
      <div className={linkBlockStyle}>
        <Link to='/about' className={linkStyle}>
          about
        </Link>
        <Link to='/program' className={linkStyle}>
          program
        </Link>
        <Link to='/gallery' className={linkStyle}>
          gallery
        </Link>
      </div>
      <Link
        to='/'
        className='transition duration-500 ease-in-out transform hover:scale-110'
      >
        <img
          className='py-2 w-44 md:w-52 lg:w-60 xl:w-72'
          src={logo}
          alt='logo'
        />
        <img
          className='py-2 absolute w-44 md:w-52 lg:w-60 xl:w-72 opacity-0 transition ease-in-out duration-500 hover:opacity-100 filter hue-rotate-90 top-0'
          src={logo}
          alt='logo'
        />
      </Link>
      <div className={linkBlockStyle}>
        <Link to='/info' className={linkStyle}>
          info
        </Link>
        <Link to='/partnership' className={linkStyle}>
          partnership
        </Link>
        <Link to='/contact' className={linkStyle}>
          contact
        </Link>
        <GiMushroomsCluster
          className={
            'ml-auto mr-6 w-8 h-auto sm:hidden cursor-pointer transition-transform duration-1000 transform hover:scale-110 ' +
            (isMenuOpen ? 'text-secondary-600 animate-hue' : '')
          }
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
