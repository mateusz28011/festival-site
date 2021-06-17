import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import AudioVisualizerProvider from './Components/AudioVisualizerContext';
import AudioPlayer from './Components/AudioPlayer';
import Home from './Components/Home';
import EventListnersContextProvider from './Components/EventListnersContext';
import Footer from './Components/Footer';
import Section from './Components/Section';
import About from './Components/About';
import Program from './Components/Program';
import Gallery from './Components/Gallery';
import Info from './Components/Info';
import Partnership from './Components/Partnership';
import Contact from './Components/Contact';

const App = () => {
  return (
    <EventListnersContextProvider>
      <AudioVisualizerProvider>
        {/* <AudioPlayer /> */}
        <Container>
          <Navbar />
          <Section>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/program'>
                <Program />
              </Route>

              <Route exact path='/gallery'>
                <Gallery />
              </Route>
              <Route exact path='/info'>
                <Info />
              </Route>
              <Route exact path='/partnership'>
                <Partnership />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Section>
        </Container>
      </AudioVisualizerProvider>
    </EventListnersContextProvider>
  );
};

export default App;
