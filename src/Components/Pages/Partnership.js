import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moon from '../../images/moon1.svg';
import mushroom from '../../images/mr3.svg';

const Partnership = () => {
  const itemStyle =
    'text-2xl text-white container-page my-1.5 sm:my-4 p-8 pt-5';
  const itemContainerStyle = 'flex flex-col sm:flex-row';
  const paragraphStyle = 'text-lg text-black mt-1';

  const controlsMushroom = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsMushroom.start({
        x: ['100vw', '0vw'],
        transition: { type: 'spring', duration: 0.5 },
      });
      await controlsMushroom.start({
        y: ['0%', '50%'],
        rotate: -5,
        transition: { type: 'spring', duration: 5 },
      });
      return controlsMushroom.start({
        y: ['50%', '-50%'],
        rotate: [-5, 8],
        transition: {
          type: 'spring',
          repeatType: 'reverse',
          repeat: 'Infinity',
          duration: 10,
        },
      });
    };
    sequence();
  }, [controlsMushroom]);

  return (
    <>
      <motion.div
        className='relative container-page bg-teal-300 bg-opacity-20 backdrop-filter-none w-11/12 sm:w-9/12 lg:w-8/12 mx-auto lg:ml-11 mt-4 sm:mt-0'
        initial={{ x: '-100vw' }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
        <h1 className='text-4xl text-white text-center mb-5 uppercase font-medium'>
          Become part of the story
        </h1>
        <div className=''>
          <div className={itemContainerStyle}>
            <motion.div
              className={itemStyle + ' sm:mr-14 sm:-ml-20 md:-ml-24'}
              initial={{ x: '-100vw' }}
              animate={{
                x: 0,
                transition: { type: 'spring', duration: 1, delay: 0.2 },
              }}
              exit={{ x: '-100vw', opacity: 0 }}
            >
              Volunteering
              <p className={paragraphStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                distinctio libero explicabo cum labore amet deleniti a ipsam ad
                nisi.
              </p>
            </motion.div>
            <motion.div
              className={itemStyle + ' sm:-mr-16 md:-mr-24'}
              initial={{ x: '-100vw' }}
              animate={{
                x: 0,
                transition: { type: 'spring', duration: 1, delay: 0.4 },
              }}
              exit={{ x: '-100vw', opacity: 0 }}
            >
              Workshops
              <p className={paragraphStyle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, dolorum est. Expedita consectetur fugit placeat.
              </p>
            </motion.div>
          </div>
          <motion.img
            className='sm:absolute w-32 lg:w-36 z-10 inset-0 -top-12 md:-top-14 xl:-top-4 right-24 md:right-32 lg:right-36 xl:right-40 animate-leftright sm:animate-none m-auto filter drop-shadow-lg'
            src={moon}
            alt='moon'
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
              transition: { type: 'spring', duration: 1, delay: 0.7 },
            }}
            exit={{ x: '-100vw', opacity: 0 }}
          />
          <div className={itemContainerStyle}>
            <motion.div
              className={itemStyle + ' sm:mr-14 sm:-ml-20'}
              initial={{ x: '-100vw' }}
              animate={{
                x: 0,
                transition: { type: 'spring', duration: 1, delay: 0.6 },
              }}
              exit={{ x: '-100vw', opacity: 0 }}
            >
              Artists
              <p className={paragraphStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                iure quaerat obcaecati earum eligendi soluta accusantium, neque
                voluptatem!
              </p>
            </motion.div>
            <motion.div
              className={itemStyle + ' sm:-mr-20 md:-mr-24 lg:-mr-20 xl:-mr-32'}
              initial={{ x: '-100vw' }}
              animate={{
                x: 0,
                transition: { type: 'spring', duration: 1, delay: 0.8 },
              }}
              exit={{ x: '-100vw', opacity: 0 }}
            >
              Gastronomy
              <p className={paragraphStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis quae natus alias eaque quod, saepe porro ad sequi, sint
                illo, numquam consequatur minima neque voluptatum aliquid?
                Tenetur beatae repellat voluptate.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{
            x: 0,
            transition: { type: 'spring', duration: 1, delay: 1 },
          }}
          exit={{ x: '-100vw', opacity: 0 }}
        >
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to='/contact'
            className='block font-medium text-2xl sm:text-lg bg-white bg-opacity-80 py-3 rounded-full shadow-lg w-44 sm:w-40 mx-auto mt-7 sm:mt-4 ring-0 focus:outline-none hover:bg-opacity-100 text-center'
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
      <motion.img
        className='hidden lg:block absolute w-64 xl:w-72 inset-y-0 right-9 xl:right-11 my-auto filter drop-shadow-lg'
        src={mushroom}
        alt='mushroom'
        initial={{ x: '100vw' }}
        animate={controlsMushroom}
        exit={{ x: '100vw', opacity: 0 }}
      />
    </>
  );
};

export default Partnership;
