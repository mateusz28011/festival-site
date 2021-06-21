import React from 'react';

function Container({ children }) {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col justify-center max-w-screen-xl sm:min-h-screen mx-auto xl:w-11/12 pt-3 pb-7 sm:pb-3'>
        {children}
      </div>
    </div>
  );
}

export default Container;
