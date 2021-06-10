import React, { useState, useEffect, useContext } from 'react';

const initializeVisualizer = () => {
  const audio = document.getElementById('audioPlayer');
  const audioContext = new AudioContext();
  const audioSource = audioContext.createMediaElementSource(audio);
  const analyzer = audioContext.createAnalyser();
  analyzer.fftSize = 1024;
  audioSource.connect(analyzer);
  audioSource.connect(audioContext.destination);
  audio.volume = 0.2;
  return { audio, analyzer };
};

const AudioVisualizerContext = React.createContext();

export const useAudio = () => {
  return useContext(AudioVisualizerContext);
};

export const AudioVisualizerProvider = ({ children }) => {
  const [audio, setAudio] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [analyzer, setAnalyzer] = useState('');
  const [frequenciesBands, setFrequenciesBands] = useState('');

  const startVisualizer = () => {
    if (!analyzer) {
      const { audio, analyzer } = initializeVisualizer();
      setAudio(audio);
      setAnalyzer(analyzer);
      toggleIsPlaying();
    }
  };

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (analyzer && isPlaying) {
      const calculateBands = (timestamp) => {
        const frequencies = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(frequencies);

        // let freqBands = new Uint8Array(8);
        // let count = 0;
        // for (let i = 0; i < 8; i++) {
        //   let average = 0;
        //   let sampleCount = Math.pow(2, i) * 2;
        //   if (i === 7) sampleCount += 2;
        //   for (let j = 0; j < sampleCount; j++) {
        //     average += frequencies[count] * (count + 1);
        //     count++;
        //   }
        //   average /= count;
        //   freqBands[i] = average * 10;
        // }

        // setFrequenciesBands(freqBands);
        setFrequenciesBands(frequencies);
        if (isPlaying) requestAnimationFrame(calculateBands);
      };
      window.requestAnimationFrame(calculateBands);
    }
  }, [analyzer, isPlaying]);

  return (
    <AudioVisualizerContext.Provider
      value={{ startVisualizer, toggleIsPlaying, frequenciesBands }}
    >
      {children}
    </AudioVisualizerContext.Provider>
  );
};

// useEffect(() => {
//   const interval = setInterval(() => {
//     if (analyzer) {
//       const frequencies = new Uint8Array(analyzer.frequencyBinCount);
//       analyzer.getByteFrequencyData(frequencies);

//       let freqBands = new Uint8Array(8);
//       let count = 0;
//       for (let i = 0; i < 8; i++) {
//         let average = 0;
//         let sampleCount = Math.pow(2, i) * 2;
//         if (i === 7) sampleCount += 2;
//         for (let j = 0; j < sampleCount; j++) {
//           average += frequencies[count] * (count + 1);
//           count++;
//         }
//         average /= count;
//         freqBands[i] = average;
//       }

//       setFrequenciesBands(freqBands);
//       console.log(frequenciesBands);
//     }
//   }, 500);
//   return () => clearInterval(interval);
// }, [analyzer, frequenciesBands]);
