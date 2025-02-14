import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'; // Import Contact component

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link> {/* Add link to Contact page */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
      </Routes>
    </Router>
  );
};

export default App;
