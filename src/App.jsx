// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Products from './components/Products'

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <Products/>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <Router> {/* Wrap the app with Router to enable routing */}
      <div>
        {/* Navbar */}
        <Navbar />
        
        {/* Routes: Define what to display based on the path */}
        <Routes>
          {/* Home Route ("/"): Displays the Hero component */}
          <Route path="/" element={<Hero />} />
          
          {/* Products Route ("/products"): Displays the Products component */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
