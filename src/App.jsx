import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>
    </Router>
  );
}

// ref sites : https://nakula.framer.website/ , https://portavia.framer.website/, https://motion.dev/examples?utm_source=chatgpt.com
export default App;
