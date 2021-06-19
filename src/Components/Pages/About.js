import React from 'react';
import bootlemoon from '../../images/bootlemoon.svg';
import planet from '../../images/planet.png';

const About = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center mx-0.5 my-5'>
      <div className='w-11/12 sm:w-1/2 h-5/6 container-page sm:-ml-4 lg:-ml-7 xl:-ml-10'>
        <h1 className='text-4xl text-white font-medium pb-6 text-center'>
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          voluptatum. Minus necessitatibus ipsa, assumenda, adipisci quasi rerum
          perferendis repellendus commodi, recusandae voluptatibus sapiente.
          Dolore asperiores fuga, quaerat esse reprehenderit sunt reiciendis
          consequuntur perferendis nam aliquid magnam quibusdam molestiae illum
          repellendus corrupti explicabo eligendi debitis eaque neque unde nemo
          possimus. Ducimus!
        </p>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          animi voluptatibus dolorem vel, voluptatum fugiat similique sunt
          ullam, ipsam aut quae facere velit inventore impedit perspiciatis
          libero magni numquam. Laborum omnis deleniti saepe laboriosam facilis
          magni quas culpa cumque qui.
        </p>
      </div>

      <div className='relative w-11/12 sm:w-4/12 mx-auto'>
        <div className='w-full container-page my-4'>
          <h1 className='text-4xl text-white font-medium pb-6 text-center'>
            Our goal
          </h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptatum ipsam animi aspernatur, quia nam mollitia doloremque
            similique eius autem voluptas repellat accusamus, voluptatem
            assumenda, rerum enim officia? Ipsam, dignissimos?
          </p>
        </div>
        <img
          className='absolute z-20 -top-full sm:top-0 sm:bottom-0 my-auto -right-16 w-24 lg:w-32 animate-updown filter drop-shadow-lg'
          src={bootlemoon}
          alt='bootle with moon inside'
        />
      </div>
      <img
        className='w-72 lg:w-80 sm:absolute sm:mb-28 md:mb-24 mx-auto sm:ml-auto sm:mr-0 md:mr-12 lg:mx-auto lg:-mb-4 right-0 left-0 -bottom-20 animate-leftright filter drop-shadow-lg'
        src={planet}
        alt='planet'
      />
    </div>
  );
};

export default About;
