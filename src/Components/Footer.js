import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const iconStyle = 'w-6 h-6';
  const iconContainerStyle =
    'rounded-full p-2.5 bg-lightBlue-50 bg-opacity-75 shadow-xl backdrop-filter backdrop-blur-sm';
  return (
    <div className='flex mx-auto -mt-8 p-2 w-1/2 justify-between'>
      <a className={iconContainerStyle} href='javascript:void(0);'>
        <FaFacebookF className={iconStyle} />
      </a>
      <a className={iconContainerStyle} href='javascript:void(0);'>
        <FaTwitter className={iconStyle} />
      </a>
      <a className={iconContainerStyle} href='javascript:void(0);'>
        <FaInstagram className={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
