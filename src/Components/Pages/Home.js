import React from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Timer';
import mr1 from '../../images/mr12.svg';

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='w-11/12 h-5/6 mx-auto my-10 mt-5 text-lg shadow-lg rounded-xl backdrop-filter backdrop-blur-md bg-lightBlue-200 bg-opacity-50 px-6 sm:px-8 lg:px-16 sm:h-5/6 sm:my-auto sm:-ml-4 lg:-ml-7 xl:-ml-10 text-center sm:text-left'>
        <h1 className='text-4xl text-white font-medium pt-8 pb-6 text-center'>
          Welcome to our festival website!
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          cupiditate doloribus, laborum quibusdam totam veniam ut neque nisi
          omnis ipsa quidem non voluptatum nulla velit, in iure dicta vero, ad
          accusantium dolores provident. Cumque optio ut inventore delectus
          nesciunt porro sint illo aliquam cupiditate vel!
        </p>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta
          blanditiis quam deleniti officia laboriosam rerum error vel magnam ea,
          aspernatur fuga quos consequatur dolor non numquam adipisci, obcaecati
          nemo.
        </p>
        {/* <h2 className='text-2xl text-white font-medium p-3'>Lorem, ipsum.</h2> */}
        <p className='px-10 text-left'></p>
        <Link
          to='/about'
          className='block font-medium sm:text-lg bg-white bg-opacity-80 py-1.5 sm:py-3 rounded-full shadow-lg w-32 sm:w-36 mx-auto sm:mx-0 my-6 ring-0 focus:outline-none hover:bg-opacity-100 text-center'
        >
          Read More
        </Link>
        <p className='font-medium text-4xl mt-10 sm:mt-8 mb-2 text-white text-center'>
          TIME TO START:
        </p>
        <div className='relative w-max mx-auto mb-12 rounded-xl shadow-lg border-2 backdrop-filter backdrop-blur-md'>
          <Timer />
          <div className='absolute w-full -z-10 h-full top-0 bg-gradient-to-br from-fuchsia-500 via-lightBlue-300 to-cyan-500 opacity-50 rounded-xl'></div>
        </div>
      </div>
      <img
        className='z-30 left-0 right-0 -mt-6 pb-6 w-52 mx-auto animate-updown filter drop-shadow-lg sm:w-40 md:w-64 lg:w-80 xl:w-96 sm:mt-0 sm:-ml-11 lg:-ml-16 xl:-ml-20 xl:mr-10'
        src={mr1}
        alt='mushroom'
      />
    </div>
  );
};

export default Home;
