import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SkinCareApp from './components/SkinCareApp';
import LandingPage from './components/LandingPage';
import SeoWriter from './components/seo_writer';

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/skinCare" element={<SkinCareApp />} />
      <Route path="/seoWriter" element={<SeoWriter />} />
    </Routes>
  </Router>
  );
}

export default App;