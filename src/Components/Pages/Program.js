import React, { useState } from 'react';
import mushroom from '../../images/mr2.svg';
import moon from '../../images/moon2.svg';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const importRawImages = (r) => {
  return r.keys().map(r);
};

const prepareImages = (imagesRaw) => {
  return imagesRaw.map((file) => {
    const name = file.default.split('/')[3].split('.')[0];
    return { src: file.default, name: name };
  });
};

const loadImages = () => {
  let imagesRaw = importRawImages(
    require.context(
      '../../images/artists/firstday',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images1 = prepareImages(imagesRaw);
  imagesRaw = importRawImages(
    require.context(
      '../../images/artists/secondday',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images2 = prepareImages(imagesRaw);

  return { first: images1, second: images2 };
};

const Program = () => {
  const [images] = useState(loadImages());
  const [loadedImages, setLoadedImages] = useState({});

  const controlsMushroom = useAnimation();
  const controlsMoon = useAnimation();
  const sequence = async (controler, initial) => {
    await controler.start({
      x: [initial, '0%'],
      opacity: 1,
      transition: { type: 'spring', duration: 0.5 },
    });
    await controler.start({
      y: ['0%', '50%'],
      rotate: -3,
      transition: { type: 'spring', duration: 5 },
    });
    return controler.start({
      y: ['50%', '-50%'],
      rotate: [-3, 3],
      transition: {
        type: 'spring',
        repeatType: 'reverse',
        repeat: 'Infinity',
        duration: 10,
      },
    });
  };

  return (
    <div className='flex flex-col items-center mx-0.5 my-5'>
      <motion.div
        className='container-page p-4 pb-0 sm:self-start sm:ml-6 md:ml-10 lg:ml-12 xl:ml-16 -mb-8 z-10 bg-fuchsia-300 bg-opacity-25'
        initial={{ x: '-300%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: 'spring', duration: 1.2 },
        }}
        exit={{ x: '-300%', opacity: 0 }}
      >
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          Lineups
        </h1>
      </motion.div>
      <motion.div
        className='container-page sm:px-8 sm:-ml-20 md:-ml-24 lg:-ml-36 xl:-ml-48 w-11/12'
        initial={{ x: '-50%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: 'spring', duration: 1 },
        }}
        exit={{ x: '-50%', opacity: 0 }}
      >
        <motion.img
          className='w-28 sm:w-52 md:w-60 lg:w-72 xl:w-80 top-0 bottom-0 my-auto absolute -right-14 sm:-right-28 md:-right-32 lg:-right-44 xl:-right-56 filter drop-shadow-lg z-30'
          src={mushroom}
          alt='mushroom'
          onLoad={() => {
            sequence(controlsMushroom, '-50%');
          }}
          initial={{ x: '-50%', opacity: 0 }}
          animate={controlsMushroom}
        />
        <h1 className='text-4xl text-white font-medium pb-4 pt-6 sm:py-5 text-center'>
          First day
        </h1>
        <div className='flex flex-row flex-wrap items-baseline justify-center'>
          {images.first.map(({ name, src }) => {
            return (
              <InView key={name} threshold={0.2} triggerOnce>
                {({ inView, ref }) => (
                  <motion.a
                    ref={ref}
                    className='w-24 sm:w-44 py-3 mx-4 sm:mx-8 sm:my-2 md:mx-10 transition duration-500'
                    href={`https://www.youtube.com/results?search_query=${name}`}
                    target='_blank'
                    rel='noreferrer'
                    initial={{ x: -50, opacity: 0 }}
                    animate={
                      inView && loadedImages.hasOwnProperty(name)
                        ? { x: '0vw', opacity: 1 }
                        : ''
                    }
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      className='rounded-full border-4 cursor-pointer transition duration-500 filter hover:hue-rotate-180'
                      src={src}
                      alt={name}
                      onLoad={() => {
                        setLoadedImages((prev) => {
                          return { ...prev, [name]: true };
                        });
                      }}
                    />
                    <p className='text-center font-aldrich pt-3 text-base sm:text-2xl'>
                      {name}
                    </p>
                  </motion.a>
                )}
              </InView>
            );
          })}
        </div>
      </motion.div>

      <InView threshold={0.05} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className='container-page sm:px-8 w-11/12 mt-14 sm:-mr-20 md:-mr-24 lg:-mr-36 xl:-mr-48'
            initial={{ x: '50%', opacity: 0 }}
            animate={
              inView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { type: 'spring', duration: 1 },
                  }
                : ''
            }
            exit={{ x: '50%', opacity: 0 }}
          >
            <motion.img
              className='w-28 sm:w-52 md:w-60 lg:w-72 xl:w-80 top-0 bottom-0 my-auto absolute -left-14 sm:-left-28 md:-left-32 lg:-left-48 xl:-left-56 filter drop-shadow-lg z-30'
              src={moon}
              alt='moon'
              onLoad={() => {
                sequence(controlsMoon, '50%');
              }}
              initial={{ x: '50%', opacity: 0 }}
              animate={controlsMoon}
            />
            <h1 className='text-4xl text-white font-medium pb-6 text-center'>
              Second day
            </h1>
            <div className='flex flex-row flex-wrap items-baseline justify-center'>
              {images.second.map(({ name, src }) => {
                return (
                  <InView key={name} threshold={0.2} triggerOnce>
                    {({ inView, ref }) => (
                      <motion.a
                        ref={ref}
                        className='w-24 sm:w-44 py-3 mx-4 sm:mx-8 sm:my-2 md:mx-10 transition duration-500 transform'
                        href={`https://www.youtube.com/results?search_query=${name}`}
                        target='_blank'
                        rel='noreferrer'
                        initial={{ x: -50, opacity: 0 }}
                        animate={
                          inView && loadedImages.hasOwnProperty(name)
                            ? { x: '0vw', opacity: 1 }
                            : ''
                        }
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          className='rounded-full border-4 cursor-pointer transition duration-500 filter hover:hue-rotate-180'
                          src={src}
                          alt={name}
                          onLoad={() => {
                            setLoadedImages((prev) => {
                              return { ...prev, [name]: true };
                            });
                          }}
                        />
                        <p className='text-center font-aldrich pt-3 text-base sm:text-2xl'>
                          {name}
                        </p>
                      </motion.a>
                    )}
                  </InView>
                );
              })}
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Program;
