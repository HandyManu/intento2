
import React, { useState } from 'react';
import '../Pages/About.css'



function App() {
    return (
      <div className="App">
        <h1>Mi Tarjeta de Presentación</h1>
        <div className="card">
          <img
            src="https://i.pinimg.com/736x/28/4f/7f/284f7fc5e0b0848771670791c4b9c1e5.jpg"alt="Foto de perfil" className="card-image"/>
          <div className="card-content">
            <h2>Manuel Ortega</h2>
            <h3>Desarrollador Web </h3>
            <p>
              Soy un profesional apasionado por la tecnología y el diseño, con
              años de experiencia en crear soluciones digitales innovadoras. Mi
              objetivo es transformar ideas en realidades con código limpio y un
              diseño atractivo.
            </p>
            <p>
              <strong>Habilidades:</strong>
            </p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Redux, Node.js</li>
              <li>Figma, Adobe Photoshop, Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
