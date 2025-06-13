import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/my-bookings" element={""} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
