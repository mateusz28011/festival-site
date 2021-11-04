import React from 'react';
import { motion } from 'framer-motion';

function Section({ children }) {
  return (
    <motion.section className='relative w-11/12 xl:w-full mx-auto -mt-14 pt-14 sm:pt-24 sm:pb-16 shadow-2xl rounded-xl bg-lightBlue-200 bg-opacity-50'>
      {children}
    </motion.section>
  );
}

export default Section;
