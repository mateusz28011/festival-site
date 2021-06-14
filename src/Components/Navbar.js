import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { GiMushroomsCluster } from 'react-icons/gi';
import { useAudio } from './AudioVisualizerContext';
import { useEventListners } from './EventListnersContext';
import Dropdown from './Dropdown';

const Navbar = () => {
  const linkStyle = 'text-center text-glow px-1.5 hidden sm:block';
  const linkBlockStyle = 'flex-1 justify-around sm:flex';

  const { bassMultiplier } = useAudio();
  const { isMenuOpen, toggleMenu, isNavbarScrolled } = useEventListners();

  useEffect(() => {
    if (bassMultiplier) {
      let logo1 = document.getElementById('logo');
      let logo2 = document.getElementById('logoTransition');
      let bassMultiplierAdjusted = (bassMultiplier - 1) / 2 + 1;
      logo1.style.transform = `scale(${bassMultiplierAdjusted})`;
      logo2.style.transform = `scale(${bassMultiplierAdjusted})`;
    }
  }, [bassMultiplier]);

  const triggerLogoAnimationForTouchScreen = (e) => {
    const logoContainer = document.getElementById('logoContainer');
    const logoTransition = document.getElementById('logoTransition');
    if (logoTransition.classList.contains('animate-logomobileopacity')) {
      logoTransition.classList.remove('animate-logomobileopacity');
      logoContainer.classList.remove('animate-logomobilescale');
      setTimeout(() => {
        logoTransition.classList.add('animate-logomobileopacity');
        logoContainer.classList.add('animate-logomobilescale');
      }, 1);
    } else {
      logoTransition.classList.add('animate-logomobileopacity');
      logoContainer.classList.add('animate-logomobilescale');
    }
  };

  return (
    <>
      <nav
        className={
          'sticky flex justify-center items-center top-0 z-20 h-20 sm:h-auto ' +
          'uppercase text-white font-aldrich sm:text-sm md:text-base lg:text-xl xl:text-2xl '
        }
      >
        <div
          className={
            'absolute w-full h-full -z-10 transition-opacity duration-1000 bg-gradient-to-r from-fuchsia-500 via-black ' +
            (isNavbarScrolled ? 'opacity-75  ' : '') +
            (isMenuOpen ? 'to-black' : 'to-lightBlue-500')
          }
        ></div>
        <div
          className={
            'absolute w-full h-full -z-10 backdrop-filter backdrop-blur-xl '
          }
        ></div>
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
          id='logoContainer'
          to='/'
          className='py-2 transition duration-500 ease-in-out transform sm:hover:scale-110'
          onClick={triggerLogoAnimationForTouchScreen}
        >
          <img
            className={
              'invisible transition-all w-44 md:w-52 lg:w-60 xl:w-72'
              // (isNavbarScrolled
              //   ? 'md:w-40 lg:w-40 xl:w-40'
              //   : 'md:w-52 lg:w-60 xl:w-72')
            }
            src={logo}
            alt='logo'
          />
          <img
            id='logo'
            className='absolute py-2 top-0'
            src={logo}
            alt='logo'
          />
          <img
            id='logoTransition'
            className='absolute py-2 top-0 opacity-0 transition-opacity ease-in-out duration-500 sm:hover:opacity-100 filter hue-rotate-90'
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
        <Dropdown />
        {/* <div className='absolute h-full w-full -z-20 text-black'> aa 22</div> */}
      </nav>
    </>
  );
};

export default Navbar;
