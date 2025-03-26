
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Inicio from '../src/Pages/Inicio'
import About from '../src/Pages/About'
import Calculator from '../src/Pages/Calculator'
import Components from '../src/Pages/Components'
import Nav from "./Components/Nav" 



function App() {
  return (
    <Router>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/components" element={<Components />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;