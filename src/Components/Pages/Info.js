import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import mushroom from '../../images/mr7.svg';

const Info = () => {
  const controlsMushroom = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsMushroom.start({
        x: 0,
        transition: { type: 'spring', duration: 1, delay: 0.25 },
      });
      await controlsMushroom.start({
        y: [0, -35],
        rotate: [0, 0],
        transition: { type: 'spring', duration: 2.5 },
      });
      return controlsMushroom.start({
        y: [-35, 35],
        rotate: [0, 7],
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
    <>
      <div className='flex flex-col sm:flex-row relative items-center'>
        <motion.div
          className='container-page w-11/12 sm:w-5/12 mb-2.5 my-5 sm:my-0 sm:-ml-4 lg:-ml-7 xl:-ml-10 '
          initial={{ x: '-100vw' }}
          animate={{
            x: 0,
            transition: { type: 'spring', duration: 1 },
          }}
          exit={{ x: '-100vw', opacity: 0 }}
        >
          <h1 className='text-4xl text-white mb-6'>Tickets</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            unde ratione asperiores enim aliquid beatae saepe delectus
            accusantium iste quod animi esse hic eius. Sit neque minus nesciunt
            aut veritatis, suscipit ea similique est, iusto facilis, eaque vel
            laudantium quis?
          </p>
          <div className='block font-medium sm:text-lg bg-white bg-opacity-80 rounded-full shadow-lg w-32 sm:w-36 mx-auto sm:mx-0 ring-0 focus:outline-none hover:bg-opacity-100 text-center py-2 mt-7 cursor-pointer'>
            Buy Ticket
          </div>
        </motion.div>
        <motion.div
          className='container-page w-11/12 sm:w-5/12 my-2.5 sm:my-0 sm:ml-auto sm:-mr-4 rg:-mr-7 xl:-mr-10 z-20'
          initial={{ x: '100vw' }}
          animate={{
            x: 0,
            transition: { type: 'spring', duration: 1 },
          }}
          exit={{ x: '100vw', opacity: 0 }}
        >
          <h1 className='text-4xl text-white mb-6 break-words'>
            Accommodation
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi
            nobis illum molestiae numquam voluptates corrupti quia molestias
            maiores modi voluptas odio facilis temporibus rem doloremque, omnis
            dolorum officia cupiditate.
          </p>
          <p className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            provident.
          </p>
        </motion.div>
        <motion.img
          className='sm:absolute w-32 mb-2 sm:mb-0 sm:w-40 md:w-48 lg:w-56 xl:w-60 sm:inset-0 animate-leftrightsm:animate-updown sm:m-auto z-20 filter drop-shadow-lg'
          src={mushroom}
          alt='mushroom'
          initial={{ x: '100vw' }}
          animate={controlsMushroom}
          exit={{ x: '100vw', opacity: 0 }}
        />
      </div>
      <motion.div
        className='container-page w-11/12 sm:w-1/2 my-2.5 sm:mt-5 md:-mt-8 sm:-mb-5 mx-auto z-10'
        initial={{ x: '-100vw' }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
        <h1 className='text-4xl text-white mb-6'>Location</h1>
        <iframe
          className='w-full h-80 rounded-xl shadow-lg'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152138.3421380367!2d14.484542056157155!3d53.42981887197169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093800d3a759%3A0xa95adc4e5f8ac4f3!2sSzczecin!5e0!3m2!1spl!2spl!4v1624538421312!5m2!1spl!2spl'
        ></iframe>
      </motion.div>
    </>
  );
};

export default Info;
