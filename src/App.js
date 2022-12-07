import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './components/pages/Features';
import References from './components/pages/References';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Features' element={<Features/>} />
          <Route path='/References' element={<References/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;