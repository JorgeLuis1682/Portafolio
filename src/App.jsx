import React from 'react';
import Navbar from './components/navbar';
import About from './components/About';
import Trabajo from './components/Trabajo';
import Carrusel from './components/Carrusel';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';
const App = () => {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <Trabajo />
      <About />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;