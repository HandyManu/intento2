
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Inicio from '../pages/Inicio'
import About from '../pages/About'
import Calculator from '../pages/Calculator'
import Components from '../pages/Components/Na'
import Nav from "./Components/Nav" 



function App() {
  return (
    <Router>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/components" element={<Components />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;