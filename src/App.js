
import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/HERO';

function App() {
  return (
    <Router>
    <GlobalStyle/>

    <Hero/>
    </Router>
  );
}

export default App;
