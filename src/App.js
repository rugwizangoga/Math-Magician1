import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/pages/calculator';
import Quote from './components/pages/Quote';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
