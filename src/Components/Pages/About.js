import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import bootlemoon from '../../images/bootlemoon.svg';
import planet from '../../images/planet.png';

const About = () => {
  const controlsPlanet = useAnimation();
  controlsPlanet.start(async () => {
    try {
      await controlsPlanet.start({
        y: 0,
        transition: { type: 'spring', duration: 1 },
      });
      await controlsPlanet.start({
        x: [0, -40],
        transition: { type: 'spring', duration: 3 },
      });
    } catch {
      return;
    }
    controlsPlanet.start({
      x: [-40, 40],
      transition: {
        type: 'spring',
        repeatType: 'reverse',
        repeat: 'Infinity',
        duration: 5,
      },
    });
  });

  return (
    <motion.div className='flex flex-col sm:flex-row items-center mx-0.5 my-5'>
      <motion.div
        className='w-11/12 sm:w-1/2 h-5/6 container-page sm:-ml-4 lg:-ml-7 xl:-ml-10 z-10'
        initial={{ x: '-100vw' }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          voluptatum. Minus necessitatibus ipsa, assumenda, adipisci quasi rerum
          perferendis repellendus commodi, recusandae voluptatibus sapiente.
          Dolore asperiores fuga, quaerat esse reprehenderit sunt reiciendis
          consequuntur perferendis nam aliquid magnam quibusdam molestiae illum
          repellendus corrupti explicabo eligendi debitis eaque neque unde nemo
          possimus. Ducimus!
        </p>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          animi voluptatibus dolorem vel, voluptatum fugiat similique sunt
          ullam, ipsam aut quae facere velit inventore impedit perspiciatis
          libero magni numquam. Laborum omnis deleniti saepe laboriosam facilis
          magni quas culpa cumque qui.
        </p>
      </motion.div>

      <motion.div
        className='w-11/12 sm:w-5/12 md:w-1/2 mx-auto md:-ml-12 lg:-ml-16 md:mb-20'
        initial={{ x: '-100vw' }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1.5 },
        }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
        <div className='w-full container-page my-4 md:pl-24 lg:pl-28 bg-cyan-200 bg-opacity-30'>
          <h1 className='text-4xl text-white font-medium pb-6 text-center'>
            Our goal
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptatum ipsam animi aspernatur, quia nam mollitia doloremque
            similique eius autem voluptas repellat accusamus, voluptatem
            assumenda, rerum enim officia? Ipsam, dignissimos?
          </p>
          <p className='mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cum
            omnis harum dolor in consequatur.
          </p>
        </div>
      </motion.div>
      {/* <motion.img
        drag
        className='absolute z-20 sm:inset-0 ml-auto sm:m-auto w-24 md:w-28 lg:w-36 filter drop-shadow-lg transform lg:-translate-x-5'
        src={bootlemoon}
        alt='bootle with moon inside'
        animate={{
          y: ['0%', '-25%', '0%', '25%'],
          transition: {
            type: 'spring',
            repeatType: 'reverse',
            repeat: 'Infinity',
            duration: 12,
          },
        }}
      /> */}
      <motion.img
        className='w-72 lg:w-80 sm:absolute inset-x-0 mx-auto sm:mr-2 md:mr-8 lg:mr-16 xl:mr-20 bottom-8 md:bottom-10 filter drop-shadow-lg z-20'
        src={planet}
        alt='planet'
        initial={{ y: '100vh' }}
        animate={controlsPlanet}
        exit={{ x: '100vh', opacity: 0 }}
      />
    </motion.div>
  );
};

export default About;
