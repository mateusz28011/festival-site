import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState, useRef } from 'react';
import GalleryPreview from './GalleryPreview';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [showGalleryPreview, setShowGalleryPreview] = useState(false);
  const { ref, inView } = useInView();

  const importImages = (r) => {
    return r.keys().map(r);
  };

  const images = useRef(
    importImages(
      require.context('../../images/gallery', false, /\.(png|jpe?g|svg)$/)
    )
  );

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
      <div className='col-count-1 sm:col-count-2 lg:col-count-3 col-gap-0 px-7 mt-5 sm:mt-0 -mb-6'>
        {images.current.map((image, index) => (
          <motion.div
            ref={ref}
            className='overflow-hidden mb-2 mx-1'
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1,
                delay: `${(index + 1) * 0.1}`,
              },
            }}
            exit={{ y: -25, opacity: 0 }}
          >
            <motion.img
              layoutId={`image-${index}`}
              // layout
              className='cursor-pointer transition duration-500 transform hover:scale-110 filter hover:hue-rotate-90 w-full'
              src={image.default}
              alt=''
              onClick={() => setShowGalleryPreview(index)}
              // initial={{ scale: 1 }}
              // animate={{
              //   scale: 1,
              //   opacity: 1,
              //   transition: {
              //     type: 'spring',
              //     duration: 1,
              //   },
              // }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
