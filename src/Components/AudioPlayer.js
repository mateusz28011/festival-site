import React from 'react';
import { useAudio } from './AudioVisualizerContext';

const AudioPlayer = () => {
  const { playAudio, frequenciesBands } = useAudio();

  return (
    <>
      <button onClick={playAudio}>CLICK</button>
      {frequenciesBands ? frequenciesBands : ''}
    </>
  );
};

export default AudioPlayer;
