import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Header />
      {/* Define the routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

