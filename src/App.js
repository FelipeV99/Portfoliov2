import './App.css';
import './base.css'
import React, { useRef } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudy from './components/caseStudy/CaseStudy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
// import { useFontFaceObserver } from "use-font-face-observer";
import { FontFaceObserver } from "font-face-observer"

function App() {
  const FontFaceObserver = require('fontfaceobserver');

  const font = new FontFaceObserver('IDGSemi');

font.load().then(function () {
  console.log('Output Sans has loaded.');
}).catch(function () {
  console.log('Output Sans failed to load.');
});


  return (



      <div className="App">
          <Router>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study" element={<CaseStudy />} />
            </Routes>
          </Router>

      </div>

  );
}

export default App;
