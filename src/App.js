import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import AudioVisualizerProvider from './Components/AudioVisualizerContext';
import AudioPlayer from './Components/AudioPlayer';
import Home from './Components/Home';
import EventListnersContextProvider from './Components/EventListnersContext';
import Footer from './Components/Footer';
import Section from './Components/Section';

const App = () => {
  return (
    <EventListnersContextProvider>
      <AudioVisualizerProvider>
        {/* <AudioPlayer /> */}
        <Container>
          <Navbar />
          <Section>
            <Home />
            <Footer />
          </Section>
        </Container>
      </AudioVisualizerProvider>
    </EventListnersContextProvider>
  );
};

export default App;
