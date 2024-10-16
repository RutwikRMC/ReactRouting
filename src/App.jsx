import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      {/* Define the routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
