import React from 'react';

function Container({ children }) {
  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col justify-center max-w-screen-xl max-h-screen h-screen mx-auto'>
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
