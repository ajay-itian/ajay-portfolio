
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">

     <Hero/>
     <About/>
     <Skills/>
    <Experience/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
