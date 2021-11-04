import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
// import AudioVisualizerProvider from './Components/AudioVisualizerContext';
// import AudioPlayer from './Components/AudioPlayer';
import EventListnersContextProvider from './Components/EventListnersContext';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Program from './Components/Pages/Program';
import Gallery from './Components/Pages/Gallery';
import Info from './Components/Pages/Info';
import Partnership from './Components/Pages/Partnership';
import Contact from './Components/Pages/Contact';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <EventListnersContextProvider>
      {/* <AudioVisualizerProvider>
        <AudioPlayer />
      </AudioVisualizerProvider> */}
      {/* <AnimateSharedLayout> */}
      <Container>
        <Navbar />
        <Section>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>
          <Footer />
        </Section>
      </Container>
      {/* </AnimateSharedLayout> */}
    </EventListnersContextProvider>
  );
};

export default App;
