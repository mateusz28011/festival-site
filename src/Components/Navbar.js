import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi';
import { useEventListners } from './EventListnersContext';
import Dropdown from './Dropdown';
import { isTouchDevice } from './Utils';

const Navbar = () => {
  const linkStyle = 'text-center text-glow hidden sm:block ';
  const linkBlockStyle = 'flex-1 justify-around sm:flex';
  const location = useLocation();

  const { isMenuOpen, toggleMenu } = useEventListners();

  const triggerLogoAnimationForTouchScreen = (e) => {
    const logoContainer = document.getElementById('logoContainer');
    const logoTransition = document.getElementById('logoTransition');
    if (logoTransition.classList.contains('animate-opacity')) {
      logoTransition.classList.remove('animate-opacity');
      logoContainer.classList.remove('animate-scale');
      setTimeout(() => {
        logoTransition.classList.add('animate-opacity');
        logoContainer.classList.add('animate-scale');
      }, 1);
    } else {
      logoTransition.classList.add('animate-opacity');
      logoContainer.classList.add('animate-scale');
    }
  };

  return (
    <nav
      className={
        'sticky top-0 flex w-10/12 xl:w-11/12 max-w-6xl mx-auto justify-center items-center z-30 h-24 sm:h-auto uppercase text-white font-aldrich sm:text-sm md:text-base lg:text-xl xl:text-2xl '
      }
    >
      <div
        className={
          'absolute w-full h-full rounded-xl shadow-none -z-10 transition-all duration-1000 from-fuchsia-500 opacity-40 ' +
          (isMenuOpen
            ? 'bg-gradient-to-b to-cyan-500 rounded-b-none'
            : 'bg-gradient-to-r via-cyan-500 to-lightBlue-500 shadow-lg')
        }
      ></div>
      <div
        className={
          'absolute w-full h-full -z-10 backdrop-filter backdrop-blur-md rounded-xl '
        }
      ></div>
      <div className={linkBlockStyle}>
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
      </div>
      <Link
        id='logoContainer'
        to='/'
        className='py-2 transition duration-500 ease-in-out transform sm:hover:scale-110'
        onClick={isTouchDevice() ? triggerLogoAnimationForTouchScreen : null}
      >
        <img
          className={'invisible transition-all w-24 sm:w-20 lg:w-24 xl:w-28'}
          src={logo}
          alt='logo'
        />
        <img id='logo' className='absolute py-2 top-0' src={logo} alt='logo' />
        <img
          id='logoTransition'
          className='absolute py-2 top-0 opacity-0 transition-opacity ease-in-out duration-500 sm:hover:opacity-100 filter brightness-110'
          src={logo}
          alt='logo'
        />
      </Link>
      <div className={linkBlockStyle}>
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
            (location.pathname === '/contact' ? 'border-b-2 border-white' : '')
          }
        >
          contact
        </Link>
        {isMenuOpen ? (
          <HiX
            className={
              'ml-auto mr-5 w-10 h-auto sm:hidden cursor-pointer transition-transform duration-300 transform hover:scale-110 '
            }
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className={
              'ml-auto mr-5 w-10 h-auto sm:hidden cursor-pointer transition-transform duration-300 transform hover:scale-110 '
            }
            onClick={toggleMenu}
          />
        )}
      </div>
      <Dropdown location={location} />
    </nav>
  );
};

export default Navbar;
