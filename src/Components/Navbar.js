import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useEventListners } from './EventListnersContext';
import Dropdown from './Dropdown';
import MenuToggle from './MenuToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const linkStyle = 'text-center text-glow hidden sm:block ';
  const linkBlockStyle = 'flex-1 justify-around sm:flex';
  const location = useLocation();

  const { isMenuOpen, toggleMenu } = useEventListners();

  return (
    <motion.nav
      layout
      className={
        'relative top-0 flex w-10/12 xl:w-11/12 max-w-6xl mx-auto justify-center items-center z-30 h-24 sm:h-20 lg:h-24 xl:h-28 uppercase text-white font-aldrich sm:text-sm md:text-base lg:text-xl xl:text-2xl '
      }
    >
      <AnimatePresence>
        {isMenuOpen ? <Dropdown location={location} /> : null}
      </AnimatePresence>
      <motion.div
        className={
          'absolute w-full h-full rounded-xl shadow-none -z-10 transition-all duration-1000 from-fuchsia-500 opacity-40 ' +
          (isMenuOpen
            ? 'bg-gradient-to-b to-cyan-500 rounded-b-none'
            : 'bg-gradient-to-r via-cyan-500 to-lightBlue-500 shadow-lg')
        }
      ></motion.div>
      <motion.div
        className={
          'absolute w-full h-full -z-10 transition-all duration-1000 backdrop-filter backdrop-blur-md rounded-xl ' +
          (isMenuOpen ? 'rounded-b-none' : '')
        }
      ></motion.div>
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
      <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{
          y: -8,
          opacity: 1,
          transition: { type: 'spring', duration: 1, bounce: 0.5 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        <Link id='logoContainer' to='/' className='py-2'>
          <img
            className={'invisible transition-all w-24 sm:w-20 lg:w-24 xl:w-28'}
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
            className='absolute py-2 top-0 opacity-0 transition-opacity ease-in-out duration-500 sm:hover:opacity-100 filter brightness-110'
            src={logo}
            alt='logo'
          />
        </Link>
      </motion.div>
      <div className={linkBlockStyle + ' relative'}>
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
        <MenuToggle isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
