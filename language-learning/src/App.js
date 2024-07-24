// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import English from './pages/English';
import French from './pages/French';
import Chinese from './pages/Chinese';
import German from './pages/German';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/german" element={<German />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
