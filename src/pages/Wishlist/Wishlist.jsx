import React, { useState } from 'react';
import { FaTrash, FaCartPlus } from 'react-icons/fa'; // Import Font Awesome icons

const ProductList = () => {
  const [Products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 120,
      discount: 10,
      imageUrl: 'https://example.com/headphones.jpg',
      addToCart: false,
      delete: false,
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 500,
      discount: 15,
      imageUrl: 'https://example.com/smartphone.jpg',
      addToCart: false,
      delete: false,
    },
    {
      id: 3,
      name: 'Laptop',
      price: 1000,
      discount: 20,
      imageUrl: 'https://example.com/laptop.jpg',
      addToCart: false,
      delete: false,
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 250,
      discount: 5,
      imageUrl: 'https://example.com/smartwatch.jpg',
      addToCart: false,
      delete: false,
    },
  ]);

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Products.map((product) => {
        const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
        return (
          <div key={product.id} className="w-full h-72 p-4 border relative">
            {/* Delete Icon */}
            <div className="absolute top-0 right-0 m-2">
              <FaTrash className="cursor-pointer text-red-600 text-lg" />
            </div>

            {/* Product Image Section */}
            <div className="h-40 w-full bg-gray-100 flex items-center justify-center">
              <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="h-20 p-2">
              <h2 className="text-sm font-semibold">{product.name}</h2>
              <div className="text-gray-800 font-semibold">
                <span className="text-red-600">${discountedPrice}</span>{' '}
                <span className="line-through text-gray-500">${product.price}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="w-full flex justify-center mt-2">
              <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md">
                <FaCartPlus className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
