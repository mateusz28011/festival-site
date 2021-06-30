import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import InView from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import moon from '../../images/moon1.svg';
import mushroom from '../../images/mr3.svg';
import { useEventListners } from '../EventListnersContext';

const Partnership = () => {
  const itemStyle =
    'text-2xl text-white container-page my-1.5 sm:my-4 p-8 pt-5';
  const itemContainerStyle = 'flex flex-col sm:flex-row';
  const paragraphStyle = 'text-lg text-black mt-1';

  const { isSmallScreen } = useEventListners();

  const controlsMushroom = useAnimation();
  const sequence = async () => {
    await controlsMushroom.start({
      x: '0%',
      opacity: 1,
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

  const controlsMoon = useAnimation();
  const sequenceMoon = async () => {
    await controlsMoon.start({
      x: '0%',
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: isSmallScreen ? 0 : 0.7,
      },
    });

    return controlsMoon.start({
      rotate: [0, -10, 0, 10],
      transition: {
        type: 'spring',
        repeatType: 'reverse',
        repeat: 'Infinity',
        duration: 8,
      },
    });
  };

  return (
    <>
      <motion.div
        className='relative container-page bg-teal-300 bg-opacity-20 backdrop-filter-none w-11/12 sm:w-9/12 lg:w-8/12 mx-auto lg:ml-11 mt-4 sm:mt-0'
        initial={{ x: '-50%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-50%', opacity: 0 }}
      >
        <h1 className='text-4xl text-white text-center mb-5 uppercase font-medium'>
          Become part of the story
        </h1>
        <div>
          <div className={itemContainerStyle}>
            <motion.div
              className={itemStyle + ' sm:mr-14 sm:-ml-20 md:-ml-24 z-10'}
              initial={{ x: '-50%', opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
                  delay: isSmallScreen ? 0 : 0.2,
                },
              }}
              exit={{ x: '-50%', opacity: 0 }}
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
              initial={{ x: '-50%', opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
                  delay: isSmallScreen ? 0 : 0.4,
                },
              }}
              exit={{ x: '-50%', opacity: 0 }}
            >
              Workshops
              <p className={paragraphStyle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, dolorum est. Expedita consectetur fugit placeat.
              </p>
            </motion.div>
          </div>
          <motion.img
            className='sm:absolute w-32 lg:w-36 z-20 inset-0 -top-12 md:-top-14 xl:-top-4 right-24 md:right-32 lg:right-36 xl:right-40 animate-leftright sm:animate-none m-auto filter drop-shadow-lg'
            src={moon}
            alt='moon'
            onLoad={sequenceMoon}
            initial={{ x: '-50%', opacity: 0 }}
            animate={controlsMoon}
            exit={{ x: '-50%', opacity: 0 }}
          />
          <div className={itemContainerStyle}>
            <InView threshold={0.2} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className={itemStyle + ' sm:mr-14 sm:-ml-20 z-10'}
                  initial={{ x: '-50%', opacity: 0 }}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            duration: 1,
                            delay: isSmallScreen ? 0 : 0.6,
                          },
                        }
                      : ''
                  }
                  exit={{ x: '-50%', opacity: 0 }}
                >
                  Artists
                  <p className={paragraphStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo iure quaerat obcaecati earum eligendi soluta
                    accusantium, neque voluptatem!
                  </p>
                </motion.div>
              )}
            </InView>
            <InView threshold={0.2} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className={
                    itemStyle + ' sm:-mr-20 md:-mr-24 lg:-mr-20 xl:-mr-32'
                  }
                  initial={{ x: '-50%', opacity: 0 }}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            duration: 1,
                            delay: isSmallScreen ? 0 : 0.8,
                          },
                        }
                      : ''
                  }
                  exit={{ x: '-50%', opacity: 0 }}
                >
                  Gastronomy
                  <p className={paragraphStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quae natus alias eaque quod, saepe porro ad sequi,
                    sint illo, numquam consequatur minima neque voluptatum
                    aliquid? Tenetur beatae repellat voluptate.
                  </p>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
        <motion.div
          initial={{ x: '-50%', opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1,
              delay: isSmallScreen ? 0 : 1,
            },
          }}
          exit={{ x: '-50%', opacity: 0 }}
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
        onLoad={sequence}
        initial={{ x: '50%', opacity: 0 }}
        animate={controlsMushroom}
        exit={{ x: '50%', opacity: 0 }}
      />
    </>
  );
};

export default Partnership;
