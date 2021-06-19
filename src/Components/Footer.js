import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const iconStyle = 'w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8';
  const iconContainerStyle =
    'rounded-full p-2.5 bg-white bg-opacity-80 shadow-xl backdrop-filter backdrop-blur-sm hover:bg-opacity-100';
  return (
    <div className='flex sm:absolute sm:right-0 sm:top-1/2 sm:bottom-1/2 sm: mx-auto mt-auto -mb-7 p-2 w-1/2 justify-between sm:flex-col sm:w-16 sm:-mr-8 sm:my-auto sm:h-52 sm:items-center z-30'>
      <a className={iconContainerStyle} href='/'>
        <FaFacebookF className={iconStyle} />
      </a>
      <a className={iconContainerStyle} href='/'>
        <FaTwitter className={iconStyle} />
      </a>
      <a className={iconContainerStyle} href='/'>
        <FaInstagram className={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
