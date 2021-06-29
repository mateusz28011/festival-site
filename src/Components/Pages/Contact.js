import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import InView from 'react-intersection-observer';
import hand from '../../images/hand.png';

const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setIsSent(true);
  };

  const handleFormChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const controlsHand = useAnimation();

  const sequence = async () => {
    await controlsHand.start({
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', duration: 0.75 },
    });
    await controlsHand.start({
      x: ['0%', '30%'],
      rotate: [0, -10],
      transition: { type: 'spring', duration: 5 },
    });
    return controlsHand.start({
      x: ['30%', '-30%'],
      rotate: [-10, 10],
      transition: {
        type: 'spring',
        repeatType: 'reverse',
        repeat: 'Infinity',
        duration: 10,
      },
    });
  };

  return (
    <div className='flex flex-col sm:flex-row'>
      <motion.div
        className='container-page mx-auto w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 mt-4 mb-2 sm:-ml-4 lg:-ml-7 xl:-ml-10'
        initial={{ x: '-50%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-50%', opacity: 0 }}
      >
        {isSent ? (
          <div className='text-white font-medium'>
            <h1 className='text-4xl text-center mb-6 mt-32 pt-10'>
              Message sent!
            </h1>
            <FaRegCheckCircle className='h-36 w-36 m-auto text-green-300 filter drop-shadow-md' />
            <h1 className='text-center mt-6 mb-32 pb-10 text-xl'>
              We will replay to you as fast as possbile.
            </h1>
          </div>
        ) : (
          <form
            action='post'
            className='flex flex-col font-medium '
            onSubmit={handleSubmit}
          >
            <h1 className='text-4xl text-white font-medium text-center uppercase my-2'>
              Contact us
            </h1>
            <label className='mt-3 mb-0.5 text-left' htmlFor='email'>
              E-mail:
            </label>
            <input
              className='text-base shadow-md pl-1 bg-white bg-opacity-80 rounded outline-none ring-1 ring-violet-300 focus:ring-2 focus:ring-violet-500'
              type='email'
              name='email'
              id='email'
              placeholder='E-mail'
              required
              onChange={handleFormChange}
            />
            <label className='mt-3 mb-0.5 text-left' htmlFor='name'>
              Full name:
            </label>
            <input
              className='text-base shadow-md pl-1 bg-white bg-opacity-80 rounded outline-none ring-1 ring-violet-300 focus:ring-2 focus:ring-violet-500'
              type='text'
              name='name'
              id='name'
              placeholder='Full name'
              required
              onChange={handleFormChange}
            />
            <label className='mt-3 mb-0.5 text-left' htmlFor='subject'>
              Subject:
            </label>
            <input
              className='text-base shadow-md pl-1 bg-white bg-opacity-80 rounded outline-none ring-1 ring-violet-300 focus:ring-2 focus:ring-violet-500'
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
              required
              onChange={handleFormChange}
            />
            <label className='mt-3 mb-0.5 text-left' htmlFor='message'>
              Message:
            </label>
            <textarea
              className='text-base shadow-md pl-1 bg-white bg-opacity-80 rounded outline-none ring-1 ring-violet-300 focus:ring-2 focus:ring-violet-500'
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'
              required
              onChange={handleFormChange}
            ></textarea>
            <button
              type='submit'
              className='w-min mx-auto mt-6 px-5 py-1 rounded-full shadow-lg font-medium bg-white focus:outline-none active:bg-gray-100'
            >
              SUBMIT
            </button>
          </form>
        )}
      </motion.div>
      <InView
        threshold={0.2}
        rootMargin='-50px 0px'
        triggerOnce
        onChange={(inView) => {
          console.log(inView);
          if (inView) sequence();
        }}
      >
        {({ inView, ref }) => (
          <motion.img
            ref={ref}
            src={hand}
            alt='hand'
            className='h-80 sm:h-full my-4 sm:-ml-4 mx-auto sm:my-auto z-10 filter drop-shadow-lg'
            initial={{ x: '50%', opacity: 0 }}
            animate={controlsHand}
            exit={{ x: '50%', opacity: 0 }}
          />
        )}
      </InView>
    </div>
  );
};

export default Contact;
