import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import FindDoctors from './Pages/FindDoctors/FindDoctors';
import MyBookings from './Pages/MyBookings/MyBookings';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/find-doctors" element={<FindDoctors/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
