import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

function AppContent() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
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
