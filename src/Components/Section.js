import React from 'react';

function Section({ children }) {
  return (
    <section className='relative w-11/12 xl:w-full h-5/6 sm:h-3/4 mx-auto -mt-14 pt-14 sm:pt-24 sm:pb-16 shadow-2xl rounded-xl bg-lightBlue-200 bg-opacity-50'>
      {children}
    </section>
  );
}

export default Section;
