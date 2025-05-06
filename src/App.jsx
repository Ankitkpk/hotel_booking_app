import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Allrooms from './pages/Allrooms.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import Mybookings from './pages/Mybookings.jsx';
import HotelReg from './components/HotelReg.jsx';

function AppContent() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <HotelReg/>
      <div className='min-h-[70vh]'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/rooms" element={<Allrooms/>} />
      <Route path="/rooms/:id" element={<RoomDetails/>}/>
      <Route path="/my-book" element={<Mybookings/>}  />
      </Routes>
      <Footer/>
      </div>
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
