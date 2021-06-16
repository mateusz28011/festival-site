import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import AudioVisualizerProvider from './Components/AudioVisualizerContext';
import AudioPlayer from './Components/AudioPlayer';
import Home from './Components/Home';
import EventListnersContextProvider from './Components/EventListnersContext';
import Footer from './Components/Footer';

const App = () => {
  return (
    <EventListnersContextProvider>
      <AudioVisualizerProvider>
        <Container>
          <Navbar />
          {/* <AudioPlayer /> */}
          <Home />
          {/* <Footer /> */}
        </Container>
      </AudioVisualizerProvider>
    </EventListnersContextProvider>
  );
};

export default App;
