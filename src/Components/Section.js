import React from 'react';
import { motion } from 'framer-motion';

function Section({ children }) {
  // const animationVariants = {
  //   animation: {
  //     y: ['-5vh', '0vh'],
  //     transition: {
  //       type: 'spring',
  //       when: 'beforeChildren',
  //     },
  //   },
  // };

  return (
    <motion.section
      layout
      className='relative w-11/12 xl:w-full mx-auto -mt-14 pt-14 sm:pt-24 sm:pb-16 shadow-2xl rounded-xl bg-lightBlue-200 bg-opacity-50'
      // initial={{ y: '-5vh' }}
      // animate='animation'
      // variants={animationVariants}
    >
      {children}
    </motion.section>
  );
}

export default Section;
