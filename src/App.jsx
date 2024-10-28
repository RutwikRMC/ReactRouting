import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import GitHub, {fetchGitApiDataLoader} from './components/GitHub/GitHub';
import User from "./User/User";
function App() {
  return (
    <Router>
      <Header />
      {/* Define the routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route loader={fetchGitApiDataLoader} path="/github" element={<GitHub />} /> 
        <Route path="/user/:userId" element={<User />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
