import './App.css';
// import './base.css'
import React, { useRef, useState, useEffect } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudyNew from './components/caseStudyNew/CaseStudyNew';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { FontFaceObserver } from "font-face-observer";
import Lottie from 'react-lottie';
import PreloaderAnimation from "../src/assets/PreloaderAnimation.json";
import { hotjar } from 'react-hotjar';

export const AppTagContext = React.createContext();

function App() {
  hotjar.initialize(4961378, 6);

  const FontFaceObserver = require('fontfaceobserver');
  const font = new FontFaceObserver('IDGSemi');
  const fontGothic = new FontFaceObserver('CGothic');
  const [fontLoaded, setFontLoaded] = useState(false);

  let idLoaded = false;
  let gothicLoaded = false;




  const appRef = useRef();

  font.load().then(function () {
    idLoaded = true;
    if (idLoaded == true && gothicLoaded == true && fontLoaded == false) {
      setFontLoaded(true);
    }
  }).catch(function () {
    console.log('ID Grotesk Font failed to load.');
  });

  fontGothic.load().then(function () {
    gothicLoaded = true;
    if (idLoaded == true && gothicLoaded == true && fontLoaded == false) {
      setFontLoaded(true);
    }
  }).catch(function () {
    console.log('Century Gothic Font failed to load.');
  });

  // const ref = useRef(null);

  // const options = {
  //   smooth: true,
  // } 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PreloaderAnimation
  }

  return (
    <>
      {fontLoaded ?
        <AppTagContext.Provider value={appRef}>
          <Hotjar />
          <div className="App" ref={appRef}>
            <Router>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study/olabNew" element={<CaseStudyNew />} />

              </Routes>
            </Router >
          </div >
        </AppTagContext.Provider>
        :
        <div>
          <div className="pr-overlay">
            <Lottie options={defaultOptions} height={37} width={166} />
          </div>
        </div>}
    </>
  );
};

export default App;
