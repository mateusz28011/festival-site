import React, { useState, useEffect, useContext, useRef } from 'react';

const initializeVisualizer = () => {
  const audio = document.getElementById('audioPlayer');
  const audioContext = new AudioContext();
  const audioSource = audioContext.createMediaElementSource(audio);
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 1024;
  analyser.minDecibels = -60;
  analyser.maxDecibels = -15;
  audioSource.connect(analyser);
  audioSource.connect(audioContext.destination);
  audio.volume = 0.2;
  audio.currentTime = 200;
  return { audio, analyser: analyser };
};

const AudioVisualizerContext = React.createContext();

export const useAudio = () => {
  return useContext(AudioVisualizerContext);
};

const AudioVisualizerProvider = ({ children }) => {
  const [audio, setAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [analyser, setAnalyzer] = useState();
  const [bassMultiplier, setBassMultiplier] = useState();
  const requestRef = useRef();

  const startVisualizer = () => {
    if (!analyser) {
      const { audio, analyser } = initializeVisualizer();
      setAudio(audio);
      setAnalyzer(analyser);
      toggleIsPlaying();
    }
  };

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  const calculateBands = () => {
    const frequencies = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencies);

    let bassMultiplierBuff = 0;
    for (let i = 0; i < 2; i++) {
      bassMultiplierBuff += frequencies[i];
    }

    bassMultiplierBuff /= 2;
    bassMultiplierBuff /= 256;

    setBassMultiplier(1 + bassMultiplierBuff);

    requestRef.current = window.requestAnimationFrame(calculateBands);
  };

  const smoothAnimationEnding = () => {
    setBassMultiplier((prev) => {
      if (prev > 1.0) {
        requestRef.current = window.requestAnimationFrame(
          smoothAnimationEnding
        );
        return prev - 0.005;
      } else {
        window.cancelAnimationFrame(requestRef.current);
        return 1;
      }
    });
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = window.requestAnimationFrame(calculateBands);
    } else if (requestRef.current) {
      window.cancelAnimationFrame(requestRef.current);
      requestRef.current = window.requestAnimationFrame(smoothAnimationEnding);
    }
  }, [isPlaying]);

  return (
    <AudioVisualizerContext.Provider
      value={{ startVisualizer, toggleIsPlaying, bassMultiplier }}
    >
      {children}
    </AudioVisualizerContext.Provider>
  );
};

export default AudioVisualizerProvider;
