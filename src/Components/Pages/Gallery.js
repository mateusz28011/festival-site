import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import GalleryPreview from './GalleryPreview';

const importImages = (r) => {
  console.log('load');
  return r.keys().map(r);
};

const Gallery = () => {
  const [showGalleryPreview, setShowGalleryPreview] = useState(false);
  const [images] = useState(
    importImages(
      require.context('../../images/gallery', false, /\.(png|jpe?g|svg)$/)
    )
  );
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <>
      <AnimatePresence>
        {showGalleryPreview !== false ? (
          <GalleryPreview
            images={images}
            imageIndex={showGalleryPreview}
            setShowGalleryPreview={setShowGalleryPreview}
          />
        ) : null}
      </AnimatePresence>
      <div className='col-count-1 sm:col-count-2 lg:col-count-3 col-gap-0 px-7 mt-5 sm:mt-0 '>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className='overflow-hidden mb-2 mx-1'
            initial={{ y: -25, opacity: 0 }}
            animate={
              loadedImages.hasOwnProperty(index)
                ? {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      duration: 0.5,
                      delay: `${(index + 1) * 0.1}`,
                    },
                  }
                : ''
            }
            exit={{
              y: -25,
              opacity: 0,
              transition: {
                type: 'spring',
                duration: 0.5,
              },
            }}
          >
            <motion.img
              className='cursor-pointer transition duration-500 transform hover:scale-110 filter hover:hue-rotate-90 w-full'
              src={image.default}
              alt=''
              onClick={() => setShowGalleryPreview(index)}
              onLoad={() => {
                setLoadedImages((prev) => {
                  return { ...prev, [index]: true };
                });
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
