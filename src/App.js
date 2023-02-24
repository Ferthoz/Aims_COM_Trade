import React from 'react';
import './App.css';
import "./index.css";
import Home from './Routes/Home';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
