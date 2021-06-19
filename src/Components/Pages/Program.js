import React from 'react';
import mushroom from '../../images/mr2.svg';

const importRawImages = (r) => {
  return r.keys().map(r);
};

const prepareImages = (imagesRaw) => {
  return imagesRaw.map((file) => {
    const name = file.default.split('/')[3].split('.')[0];
    return { src: file.default, name: name };
  });
};

const Program = () => {
  const imagesRaw = importRawImages(
    require.context('../../images/artists', false, /\.(png|jpe?g|svg)$/)
  );
  const images = prepareImages(imagesRaw);

  return (
    <div className='flex flex-col items-center mx-0.5 my-5'>
      <div className='container-page p-4 pb-0 sm:self-start sm:ml-16 lg:ml-24 -mb-8 z-10 bg-fuchsia-300 bg-opacity-25'>
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          Lineups
        </h1>
      </div>
      <div className='container-page sm:px-8 w-11/12'>
        <img
          className='w-44 mx-auto mt-8 sm:absolute sm:right-0 md:right-10 lg:right-20 xl:right-36 sm:-top-20 animate-leftright'
          src={mushroom}
          alt='mushroom'
        />
        <h1 className='text-4xl text-white font-medium pb-4 pt-6 sm:py-5 text-center'>
          First day
        </h1>
        <div className='flex flex-row flex-wrap items-baseline justify-center'>
          <div></div>
          {images.map(({ name, src }) => {
            return (
              <div className='w-24 sm:w-44 py-3 mx-4 sm:m-8 md:m-10' key={name}>
                <img className='rounded-full border-4' src={src} />
                <p className='text-center font-aldrich pt-3 text-base sm:text-2xl'>
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='container-page'>
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          Second day
        </h1>
      </div>
    </div>
  );
};

export default Program;

// <p className=''>Astral Projection</p>
//         <p className=''>Astrix</p>
//         <p className=''>GMS</p>
//         <p className=''>Space Tribe</p>
//         <p className=''>Carbon Based Lifeforms</p>
//         <p className=''>Egorythmia</p>
//         <p className=''>Infected Mushroom</p>
//         <p className=''>Talamasca</p>
