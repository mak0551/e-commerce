import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WIshlist from './components/WIshlist';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path='/wishlist' element ={<WIshlist/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
