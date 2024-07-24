import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar title="TextUtils" />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
