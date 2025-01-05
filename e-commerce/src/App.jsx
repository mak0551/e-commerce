import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Wishlist from "./components/WIshlist";
import { WishlistProvider } from "./components/WishlistProvider";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
