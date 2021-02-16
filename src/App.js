import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CV from './components/CV';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div>
    <NavBar/>
    <HomePage/>
    <About/>
    <Skills/>
    <Projects/>
    <CV/>
    <Contact/>
    </div>
    
    
    
  );
}

export default App;
