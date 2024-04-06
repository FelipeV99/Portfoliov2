import './App.css';
import './base.css'
import React, { useRef } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudy from './components/caseStudy/CaseStudy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Preloader from './components/preloader/Preloader';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";


function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>


    <div className="App" data-scroll-container ref={ref}>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/preloader" element={<Preloader />} />
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
      </Router>
    </div>
    </LocomotiveScrollProvider>

  );
}

export default App;
