import './App.css';
import './base.css'
import React, { useRef, useState } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudy from './components/caseStudy/CaseStudy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { FontFaceObserver } from "font-face-observer"

function App() {
  const FontFaceObserver = require('fontfaceobserver');

  const font = new FontFaceObserver('IDGSemi');

  const [fontLoaded, setFontLoaded] = useState(false)

  font.load().then(function () {
    setFontLoaded(true);
  }).catch(function () {
    console.log('Output Sans failed to load.');
  });




  return (
      < div >
      {fontLoaded ?
      <div className="App">
        < Router >
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study" element={<CaseStudy />} />
          </Routes>
        </Router >

      </div >
      :
      <div>
        spinner spinning
      </div>}
  </div >
      

  );
}

export default App;
