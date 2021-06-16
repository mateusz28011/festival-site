import React from 'react';
import mr1 from '../images/mr12.svg';

const Home = () => {
  return (
    <section className='flex w-11/12 xl:w-full h-5/6 sm:h-3/4 mx-auto -mt-14 pt-14 shadow-2xl rounded-xl bg-lightBlue-200 bg-opacity-50'>
      <div className='z-20 w-2/3 h-4/6 ml-8 mr-auto  my-10 shadow-lg rounded-xl backdrop-filter backdrop-blur-md'>
        <h1 className='text-3xl text-white p-5 text-center'>
          Welcome to our website!
        </h1>
      </div>
      <img
        className='absolute z-10 self-center left-0 -right-64 pb-36 w-80 mx-auto animate-updown'
        src={mr1}
        alt='mushroom'
      />
      {/* <div className='absolute w-11/12 xl:w-full h-2/4 mx-auto mt-14 top-0 bg-lightBlue-100 bg-opacity-30 transform rotate-6 translate-x-80'></div> */}
    </section>
  );
};

export default Home;
