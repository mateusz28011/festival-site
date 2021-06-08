import React from 'react';

function Container({ children }) {
  return (
    <div className='max-w-screen-xl h-screen m-auto shadow-xl bg-trueGray-50'>
      {children}
    </div>
  );
}

export default Container;
