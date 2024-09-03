import Helllo from "./components/Helllo";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This imports Bootstrap JavaScript and Popper
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Helllo />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
