import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import GeneticMarkers from './pages/GeneticMarkers';
import EnvironmentalCorrelation from './pages/EnvironmentalCorrelation';
import BreedingTool from './pages/BreedingTool';
import About from './pages/About';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genetic-markers" element={<GeneticMarkers />} />
            <Route path="/environmental-correlation" element={<EnvironmentalCorrelation />} />
            <Route path="/breeding-tool" element={<BreedingTool />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
