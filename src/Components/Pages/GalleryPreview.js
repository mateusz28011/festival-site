import React, { useState, useEffect } from 'react';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const GalleryPreview = ({ images, imageIndex, setShowGalleryPreview }) => {
  const [index, setIndex] = useState(imageIndex);

  const nextImage = () => {
    setIndex((prev) => prev + 1);
  };
  const previousImage = () => {
    setIndex((prev) => prev - 1);
  };

  const keyPressed = (e) => {
    if (e.keyCode === 37 && index !== 0) {
      previousImage();
    } else if (e.keyCode === 39 && index !== images.current.length - 1) {
      nextImage();
    } else if (e.keyCode === 27) {
      setShowGalleryPreview(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPressed);
    return () => {
      window.removeEventListener('keydown', keyPressed);
    };
  });

  return (
    <div className='fixed h-19/20 w-19/20 max-w-screen-2xl inset-0 z-40 m-auto text-white shadow-lg rounded-xl bg-lightBlue-400 border-2 border-violet-400 backdrop-filter backdrop-blur-2xl bg-opacity-50'>
      <HiX
        className='absolute w-10 h-10 sm:w-14 sm:h-14 mr-3 mt-3 top-0 right-0 z-50 cursor-pointer transition-transform transform hover:scale-110'
        onClick={() => setShowGalleryPreview(false)}
      />
      {index !== 0 ? (
        <HiChevronLeft
          className='absolute z-50 w-14 h-14 sm:w-20 sm:h-20 my-auto top-0 bottom-0 -ml-3 sm:-ml-2.5 cursor-pointer transition-transform transform hover:scale-110'
          onClick={previousImage}
        />
      ) : null}
      {index !== images.current.length - 1 ? (
        <HiChevronRight
          className='absolute z-50 w-14 h-14 sm:w-20 sm:h-20 my-auto top-0 bottom-0 right-0 -mr-3 sm:-mr-2.5 cursor-pointer transition-transform transform hover:scale-110'
          onClick={nextImage}
        />
      ) : null}
      <img
        className='relative h-full w-full object-contain max-w-72xl mx-auto top-1/2 transform -translate-y-1/2 z-40 p-8 sm:p-16'
        src={images.current[index].default}
        alt=''
      />
      <div className='absolute right-0 bottom-0 mr-4 mb-4 text-xl sm:text-3xl'>{`${
        index + 1
      } of ${images.current.length}`}</div>
    </div>
  );
};

export default GalleryPreview;
