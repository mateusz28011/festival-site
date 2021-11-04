import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
  let difference = new Date('4/01/2022') - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function Timer() {
  const [timeLeft, setTimeleft] = useState(calculateTimeLeft());

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTimeleft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className='flex py-2.5 sm:p-5 text-center justify-center'>
      {Object.entries(timeLeft).map((x) => {
        return (
          <div key={x[0]} className='flex flex-col mx-2.5 sm:mx-4  font-medium'>
            <span className='text-2xl sm:text-3xl text-white font-aldrich'>
              {x[1]}
            </span>
            <span className='uppercase text-xs sm:text-sm'>{x[0]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Timer;
