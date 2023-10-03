import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';
import Gayatri from './Gayatri';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/gayatri">Gayatri</Link>
            </li>
          </ul>
        </nav>

        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/gayatri" element={<Gayatri/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;