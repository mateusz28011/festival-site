import React from 'react';

function Container({ children }) {
  return (
    <>
      <div className='max-w-screen-xl m-auto shadow-2xl bg-cyan-200 container-background'>
        <div className='backdrop-filter backdrop-blur-2xl'>{children}</div>
      </div>
      {/* <div className='absolute left-1/2 top-0'>
        <img
          className='relative -left-1/2 w-full max-w-screen-xl m-auto top-0 -z-20'
          src={background}
          alt='background'
        />
      </div> */}
    </>
  );
}

export default Container;
