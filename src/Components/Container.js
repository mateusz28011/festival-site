import React from 'react';

function Container({ children }) {
  return (
    <div className='overflow-hidden py-10'>
      <div className='flex flex-col justify-center max-w-screen-xl sm:min-h-screen  mx-auto xl:w-11/12'>
        {children}
        {/* <div className='absolute left-1/2 top-0'>
            <img
              className='relative -left-1/2 w-full max-w-screen-xl m-auto top-0 -z-20'
              src={background}
              alt='background'
            />
          </div> */}
      </div>
    </div>
  );
}

export default Container;
