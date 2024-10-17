import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import GitHub from "./components/GitHub/GitHub";

function App() {
  return (
    <Router>
      <Header />
      {/* Define the routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<GitHub />} /> {/* Fixed closing tag */}
      </Routes>
      <Footer /> {/* Moved Footer inside Router */}
    </Router>
  );
}

export default App;
