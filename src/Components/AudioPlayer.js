import React from 'react';
import { useAudio } from './AudioVisualizerContext';
import sound from '../audio/im-headofnasa.mp3';

const AudioPlayer = () => {
  const { startVisualizer, toggleIsPlaying, bassMultiplier } = useAudio();

  return (
    <>
      {/* <div
        className='bg-secondary-500 w-10'
        style={{ width: `${20 * bassMultiplier}px` }}
      >
        {bassMultiplier}
      </div> */}
      {/* seeking triggers toggle!!! */}
      <audio
        className='absolute z-30'
        id='audioPlayer'
        src={sound}
        controls
        onPlay={bassMultiplier ? toggleIsPlaying : startVisualizer}
        onPause={toggleIsPlaying}
      ></audio>
    </>
  );
};

export default AudioPlayer;
