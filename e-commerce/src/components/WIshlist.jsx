// Import required modules
import React, { useState } from "react";

// Sample data for the wishlist
const initialWishlist = [
  { id: 1, name: "Wireless Headphones", price: "$120" },
  { id: 2, name: "Smartwatch", price: "$150" },
  { id: 3, name: "Gaming Chair", price: "$300" },
];

// Wishlist Component
const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  // Remove item from wishlist
  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul className="space-y-4">
          {wishlist.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 text-lg">Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default WishlistPage;
