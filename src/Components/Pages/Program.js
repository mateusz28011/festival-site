import React from 'react';
import mushroom from '../../images/mr2.svg';
import moon from '../../images/moon2.svg';

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
  const images = loadImages();

  return (
    <div className='flex flex-col items-center mx-0.5 my-5'>
      <div className='container-page p-4 pb-0 sm:self-start sm:ml-6 md:ml-10 lg:ml-12 xl:ml-16 -mb-8 z-10 bg-fuchsia-300 bg-opacity-25'>
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          Lineups
        </h1>
      </div>
      <div className='container-page sm:px-8 sm:-ml-20 md:-ml-24 lg:-ml-36 xl:-ml-48 w-11/12'>
        <img
          className='w-28 sm:w-52 md:w-60 lg:w-72 xl:w-80 top-0 bottom-0 my-auto absolute -right-14 sm:-right-28 md:-right-32 lg:-right-44 xl:-right-56 animate-updown'
          src={mushroom}
          alt='mushroom'
        />
        <h1 className='text-4xl text-white font-medium pb-4 pt-6 sm:py-5 text-center'>
          First day
        </h1>
        <div className='flex flex-row flex-wrap items-baseline justify-center'>
          <div></div>
          {images.first.map(({ name, src }) => {
            return (
              <div
                className='w-24 sm:w-44 py-3 mx-4 sm:mx-8 sm:my-2 md:mx-10'
                key={name}
              >
                <img className='rounded-full border-4' src={src} />
                <p className='text-center font-aldrich pt-3 text-base sm:text-2xl'>
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='container-page sm:px-8 w-11/12 mt-14 sm:-mr-20 md:-mr-24 lg:-mr-36 xl:-mr-48'>
        <img
          className='w-28 sm:w-52 md:w-60 lg:w-72 xl:w-80 top-0 bottom-0 my-auto absolute -left-14 sm:-left-28 md:-left-32 lg:-left-48 xl:-left-56 animate-updown'
          src={moon}
          alt='moon'
        />
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          Second day
        </h1>
        <div className='flex flex-row flex-wrap items-baseline justify-center'>
          <div></div>
          {images.second.map(({ name, src }) => {
            return (
              <div
                className='w-24 sm:w-44 py-3 mx-4 sm:mx-8 sm:my-2 md:mx-10'
                key={name}
              >
                <img className='rounded-full border-4' src={src} />
                <p className='text-center font-aldrich pt-3 text-base sm:text-2xl'>
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Program;
