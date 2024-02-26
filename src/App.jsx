import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import './App.css';

//Importaciones de los modulos
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects"


function App() {
  return (
    <div className="portfolioDiv">
      <h1 className="h1Portfolio">Este es el portfolio de Iván Ramirez </h1>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
