import React from 'react';
import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='white'
    strokeLinecap='round'
    {...props}
  />
);

const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <motion.button
      className='focus:outline-none ml-auto mr-8 block sm:hidden transform scale-150'
      onClick={toggle}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <svg id='menuBar' width='23' height='23' viewBox='0 0 23 23'>
        <Path
          id='path1'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          id='path2'
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          id='path3'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuToggle;
