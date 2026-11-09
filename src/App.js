import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Games from './Games';
import MouseEffect from './MouseEffect';
import Game1 from './Game1';

function App() {
  return (
    <Router>
      <MouseEffect />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game1" element={<Game1 />} />
      </Routes>
    </Router>
  );
}

export default App;
