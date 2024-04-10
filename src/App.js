import './App.css';
import './base.css'
import React, { useRef, useState } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudy from './components/caseStudy/CaseStudy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { FontFaceObserver } from "font-face-observer";
import Lottie from 'react-lottie';
import PreloaderAnimation from "../src/assets/PreloaderAnimation.json";

function App() {
  const FontFaceObserver = require('fontfaceobserver');
  const font = new FontFaceObserver('IDGSemi');
  const [fontLoaded, setFontLoaded] = useState(false)

  font.load().then(function () {
    setTimeout(() => {
      setFontLoaded(true);
    }, 1000);
    
  }).catch(function () {
    console.log('Font failed to load.');
  });


  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData: PreloaderAnimation
}



  return (
      <>
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
        
        <div className="pr-overlay">
            <Lottie options={defaultOptions} height={37} width={166} />



            </div>
      </div>}
  </>
      

  );
}

export default App;
