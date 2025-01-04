import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rubik-vinyl-regular bg-sky-200 shadow-md ">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">E-Shop</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/Products" className="text-gray-700 hover:text-gray-900">
            Products
          </a>
        
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Whishlist
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Cart
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full z-50 bg-white shadow-md">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="/Products" className="text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cart
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
