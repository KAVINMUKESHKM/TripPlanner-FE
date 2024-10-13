// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripForm from '../src/components/form'
import AttractionsPage from './components/Attractions'
import AttractionDescriptionPage from './components/Attractions_Description';
import './index.css';
import ShortestPathPage from './components/ShortestPath';
import 'leaflet/dist/leaflet.css';

// import AttractionsPage from './components/Attractions_Description'
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<TripForm />} />
              <Route path="/attractions" element={<AttractionsPage />} />
              <Route path="/attractions_description" element={<AttractionDescriptionPage />} />
              <Route path="/shortest-path" element={<ShortestPathPage />} />
          </Routes>
      </Router>
  );
}


// A simple placeholder component for navigation

export default App;

