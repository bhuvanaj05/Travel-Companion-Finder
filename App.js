import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'; // Import About page
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import Packages from './Components/Packages/Packages';
import News from './Components/News/News';
import Filters from './Components/Filters/Filters';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Corrected root route */}
        <Route path="/" element={
          <>
            <Home />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Filters" element={<Filters/>} />

        {/* Define other routes */}
      </Routes>
    </Router>
  );
};

export default App;
