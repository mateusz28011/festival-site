import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { GiMushroomsCluster } from 'react-icons/gi';

const Navbar = ({ toggleMenu }) => {
  const linkStyle = 'text-center text-glow hidden sm:block';
  const sideLinksStyle = 'flex-1 justify-around sm:flex';

  const changeBackground = (e) => {
    // let nav = e.target.parentElement.parentElement;
    // console.log(e.target.parentElement);
    // nav.classList.toggle('animate-pulse');
    // e.target.parentElement.classList.toggle('delay-1000');
    // e.target.parentElement.classList.toggle('animate-pulse');
    // e.target.parentElement.parentElement.classList.toggle('transition-all');
    // e.target.parentElement.parentElement.classList.toggle('ease-in-out');
    // e.target.parentElement.parentElement.classList.toggle('duration-500');
    // e.target.parentElement.parentElement.classList.toggle('via-black');
    // e.target.parentElement.parentElement.classList.toggle('via-black');
    // e.target.parentElement.parentElement.classList.toggle('via-blue-300');
    //
  };

  return (
    <nav
      className='min-w-full flex justify-center items-center 
    bg-gradient-to-r from-primary-700 via-black to-secondary-700 
    uppercase text-white font-semibold tracking-wide sm:text-sm md:text-base'
    >
      <div className={sideLinksStyle}>
        <Link to='/about' className={linkStyle}>
          about
        </Link>
        <Link to='/program' className={linkStyle}>
          program
        </Link>
        <Link to='/info' className={linkStyle}>
          info
        </Link>
      </div>
      <Link
        to='/'
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackground}
        className='transition duration-500 ease-in-out transform hover:scale-110'
      >
        <img className='py-2 w-44 md:w-52' src={logo} alt='logo' />
        <img
          className='py-2 absolute w-44 md:w-52 opacity-0 transition ease-in-out duration-500 hover:opacity-100 filter hue-rotate-90 top-0'
          src={logo}
          alt='logo'
        />
      </Link>
      <div className={sideLinksStyle}>
        <Link to='/gallery' className={linkStyle}>
          gallery
        </Link>
        <Link to='/partnership' className={linkStyle}>
          partnership
        </Link>
        <Link to='/contact' className={linkStyle}>
          contact
        </Link>
        <GiMushroomsCluster
          className='ml-auto mr-6 w-8 h-auto sm:hidden cursor-pointer'
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
