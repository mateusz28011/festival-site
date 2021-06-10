import React from 'react';
import { useAudio } from './AudioVisualizerContext';
import sound from '../audio/tocame.mp3';

const AudioPlayer = () => {
  const { startVisualizer, toggleIsPlaying, frequenciesBands } = useAudio();

  return (
    <>
      {Array.from(frequenciesBands).map((freq, index) => {
        return (
          <div
            key={index}
            className='bg-secondary-500 w-10'
            style={{ width: `${frequenciesBands[index]}px` }}
          >
            {index}
          </div>
        );
      })}

      <audio
        id='audioPlayer'
        src={sound}
        controls
        onPlay={frequenciesBands ? toggleIsPlaying : startVisualizer}
        onPause={toggleIsPlaying}
      ></audio>
    </>
  );
};

export default AudioPlayer;
