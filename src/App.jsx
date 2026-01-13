import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetails from './pages/ProjectDetails';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen bg-white dark:bg-black text-purple-500 dark:text-lime-400 transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About theme={theme}/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path='/hobbies' element={<Hobbies/>}/>
        </Routes>
        <ScrollToTopButton/>
      </div>
    </Router>
  );
}

// ref sites : https://nakula.framer.website/ , https://portavia.framer.website/, https://motion.dev/examples?utm_source=chatgpt.com
export default App;
