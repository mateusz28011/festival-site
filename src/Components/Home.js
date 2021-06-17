import React from 'react';
import { Link } from 'react-router-dom';
import mr1 from '../images/mr12.svg';

const Home = () => {
  return (
    <>
      <div className='w-11/12 h-5/6 mx-auto my-10 mt-5 text-lg shadow-lg rounded-xl backdrop-filter backdrop-blur-md bg-lightBlue-200 bg-opacity-50 text-center sm:h-5/6 sm:my-auto sm:-ml-4 lg:-ml-7 xl:-ml-10'>
        <h1 className='text-3xl text-white font-medium pt-5 pb-3'>
          Welcome to our website!
        </h1>
        <p className='px-10 text-left'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          assumenda incidunt accusantium reiciendis cumque maxime ab eveniet, ex
          quam sapiente adipisci repellat, unde architecto nulla iusto inventore
          minus laboriosam id! Excepturi adipisci deserunt delectus possimus?
          Inventore amet nobis dicta ducimus. Blanditiis, harum doloribus
          veritatis placeat non architecto totam corrupti repellat iste adipisci
          veniam facere recusandae laudantium fugiat provident nihil unde?
        </p>
        <h2 className='text-2xl text-white font-medium p-3'>Lorem, ipsum.</h2>
        <p className='px-10 text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          provident nihil ipsum voluptatem culpa cupiditate eligendi,
          dignissimos doloribus quibusdam natus minima quisquam accusantium
          consequatur, excepturi quae optio esse molestias vel hic. Quis cum
          deleniti quia sunt illo, fugit molestias? Reprehenderit iure doloribus
          eveniet itaque, sint quisquam facilis. Optio, nisi cumque.
        </p>
        <Link
          to='/about'
          className='block font-medium sm:text-lg bg-white bg-opacity-80 py-1.5 sm:py-3 rounded-full shadow-lg w-32 sm:w-36 mx-auto sm:mr-0 my-6 sm:ml-16 ring-0 focus:outline-none hover:bg-opacity-100'
        >
          Read More
        </Link>
      </div>
      <img
        className='z-30 left-0 right-0 -mt-6 pb-6 w-52 mx-auto animate-updown filter drop-shadow-lg sm:w-60 md:w-72 lg:w-80 xl:w-96 sm:mt-0 sm:-ml-12 xl:-ml-12 xl:mr-10'
        src={mr1}
        alt='mushroom'
      />
    </>
  );
};

export default Home;
