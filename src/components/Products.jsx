
import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for making API calls

export default function Products() {
  const [products, setProducts] = useState([]); // State to store product data
  const [wishlist, setWishlist] = useState([]); // State to track wishlist items
  const [loading, setLoading] = useState(true); // State to show a loading indicator

  // Fetch product data from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetching data from the API
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Updating products state with API data
        setLoading(false); // Data loading complete
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Stop loading even if there is an error
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Function to toggle wishlist state for a product
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove from wishlist
        : [...prevWishlist, productId] // Add to wishlist
    );
  };

  // Show loading indicator while fetching data
  if (loading) {
    return <h1 className="text-center mt-8">Loading Products...</h1>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map over the products fetched from the API */}
        {products.map((product) => (
          <div
            key={product.id} // Unique key for each product
            className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
          >
            {/* Wishlist Icon */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => toggleWishlist(product.id)} // Toggle wishlist on click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={wishlist.includes(product.id) ? "red" : "none"} // Filled if in wishlist
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500 hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.8 7.33c0-2.36-1.92-4.27-4.28-4.27-1.43 0-2.78.66-3.67 1.68-.88-1.02-2.24-1.68-3.67-1.68-2.36 0-4.28 1.92-4.28 4.28 0 2.53 2.28 4.54 5.65 7.86.52.53 1.24.94 1.98 1.11.75-.17 1.46-.58 1.98-1.11 3.37-3.32 5.65-5.33 5.65-7.86z"
                />
              </svg>
            </div>

            {/* Product Image */}
            <img
              src={product.image} // Image from API
              alt={product.title} // Title as alt text
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Product Name */}
            <h2 className="text-lg font-medium mt-4">{product.title}</h2>

            {/* Product Price */}
            <p className="text-gray-500 mt-2">${product.price}</p>

            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

