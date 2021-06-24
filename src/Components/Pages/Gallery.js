import React, { useState, useRef, useEffect } from 'react';
import GalleryPreview from './GalleryPreview';

const Gallery = () => {
  const [showGalleryPreview, setShowGalleryPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      {showGalleryPreview !== false ? (
        <GalleryPreview
          images={images}
          imageIndex={showGalleryPreview}
          setShowGalleryPreview={setShowGalleryPreview}
        />
      ) : null}
      <div className='col-count-1 sm:col-count-2 lg:col-count-3 col-gap-0 px-7 mt-5 sm:mt-0 -mb-6'>
        {images.current.map((image, index) => (
          <div className='overflow-hidden mb-2 mx-1' key={index}>
            <img
              className='cursor-pointer transition duration-500 transform hover:scale-110 filter hover:hue-rotate-90 w-full'
              src={image.default}
              alt=''
              onClick={() => setShowGalleryPreview(index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
