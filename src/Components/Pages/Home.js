import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Timer';
import mr1 from '../../images/mr12.svg';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const controlsMushroom = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsMushroom.start({
        x: 0,
        transition: { type: 'spring', duration: 1, delay: 0.25 },
      });
      await controlsMushroom.start({
        y: [0, -40],
        rotate: [0, -5],
        transition: { type: 'spring', duration: 2.5 },
      });
      return controlsMushroom.start({
        y: [-40, 40],
        rotate: [-5, 5],
        transition: {
          type: 'spring',
          ease: 'easeIn',
          repeatType: 'reverse',
          repeat: 'Infinity',
          duration: 5,
        },
      });
    };
    sequence();
  }, [controlsMushroom]);

  return (
    <div className='flex flex-col sm:flex-row'>
      <motion.div
        className='w-11/12 mx-auto my-10 mt-5 container-page sm:my-auto sm:-ml-4 lg:-ml-7 xl:-ml-10 text-center sm:text-left'
        initial={{ x: '-100vw' }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
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
        <p className='px-10 text-left'></p>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to='/about'
          className='block font-medium text-2xl sm:text-lg bg-white bg-opacity-80 py-3 rounded-full shadow-lg w-44 sm:w-36 mx-auto sm:mx-0 my-6 ring-0 focus:outline-none hover:bg-opacity-100 text-center'
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
      </motion.div>
      <motion.img
        className='z-30 left-0 right-0 -mt-12 mb-10 sm:my-0 w-52 mx-auto filter drop-shadow-lg sm:w-40 md:w-64 lg:w-80 xl:w-96 sm:mt-0 sm:-ml-11 lg:-ml-16 xl:-ml-20 xl:mr-10'
        src={mr1}
        alt='mushroom'
        initial={{ x: '100vw' }}
        animate={controlsMushroom}
        exit={{ x: '100vw', opacity: 0 }}
      />
    </div>
  );
};

export default Home;
