import React, { useState, useEffect, useContext } from 'react';
import sound from '../audio/tocame.mp3';

const initializeVisualizer = () => {
  const audio = new Audio(sound);
  const audioContext = new AudioContext();
  const audioSource = audioContext.createMediaElementSource(audio);
  const analyzer = audioContext.createAnalyser();
  analyzer.fftSize = 1024;
  audioSource.connect(analyzer);
  audioSource.connect(audioContext.destination);
  audio.volume = 0.2;
  return {
    audio: audio,
    analyzer: analyzer,
  };
  // return {
  //   audio: audio,
  //   ctx: ctx,
  //   audioSource: audioSource,
  //   analyzer: analyzer,
  // };
};

const AudioVisualizerContext = React.createContext();

export const useAudio = () => {
  return useContext(AudioVisualizerContext);
};

export const AudioVisualizerProvider = ({ children }) => {
  const [audio, setAudio] = useState('');
  const [analyzer, setAnalyzer] = useState('');
  const [frequenciesBands, setFrequenciesBands] = useState('');

  const playAudio = () => {
    if (audio) {
      audio.play();
      audio.currentTime = 100;
    } else {
      const { audio, analyzer } = initializeVisualizer();
      setAudio(audio);
      setAnalyzer(analyzer);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio) {
        const frequencies = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(frequencies);

        let freqBands = new Uint8Array(8);
        let count = 0;
        for (let i = 0; i < 8; i++) {
          let average = 0;
          let sampleCount = Math.pow(2, i) * 2;
          if (i === 7) sampleCount += 2;
          for (let j = 0; j < sampleCount; j++) {
            average += frequencies[count] * (count + 1);
            count++;
          }

          average /= count;

          freqBands[i] = average;
        }

        setFrequenciesBands(freqBands);
        console.log(frequenciesBands);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [audio, analyzer, frequenciesBands]);

  return (
    <AudioVisualizerContext.Provider value={{ playAudio, frequenciesBands }}>
      {children}
    </AudioVisualizerContext.Provider>
  );
};
