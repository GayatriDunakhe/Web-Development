import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* The "Not Found" route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;