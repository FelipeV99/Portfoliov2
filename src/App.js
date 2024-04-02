import './App.css';
import './base.css'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CaseStudy from './components/caseStudy/CaseStudy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop';


function App() {

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