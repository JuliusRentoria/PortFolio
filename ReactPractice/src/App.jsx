import Nav from "./components/Nav";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
