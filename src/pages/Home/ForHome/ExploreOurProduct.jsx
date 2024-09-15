import React, { useState } from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';

const ExploreOurProduct = () => {

    // Product data
    const [Products] = useState([
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 120,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 2,
            name: 'Wireless Headphones',
            price: 120,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 3,
            name: 'Wireless Headphones',
            price: 120,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 4,
            name: 'Wireless Headphones',
            price: 120,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 5,
            name: 'Wireless Headphones',
            price: 120,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },

    ]);

    return (
        <div className="mx-28 mt-24">
            <div className="flex items-center">
                <div className='w-4 h-6 bg-red-600 rounded'></div>
                <div className='ml-2 font-inter font-semibold text-red-600'>Our Products</div>
            </div>

            <div className="flex items-center justify-between mt-2 mb-10">
                <div className='font-inter text-[rgb(0,0,0)] font-bold text-2xl mt-5'>
                    Explore Our Product
                </div>
                {/* Navigation Buttons */}
                <div className=" space-x-2 pt-4">
                    <button className="bg-gray-200 w-8 h-8 rounded-full "><i className="fa-solid fa-arrow-left bg-[(0,0,0)]" ></i></button>
                    <button className="bg-gray-200 w-8 h-8 rounded-full "><i className="fa-solid fa-arrow-right bg-[(0,0,0)]" ></i></button>
                </div>
            </div>

            {/* products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Products.map((product) => (
                    <div key={product.id} className="w-full h-60">
                        {/* Icons */}
                        <div className="relative">
                            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <FaHeart className="cursor-pointer text-black" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <FaEye className="cursor-pointer text-black" />
                                </div>
                            </div>
                        </div>

                        {/* Product Image Section */}
                        <div className="h-40 w-full bg-[rgb(245,245,245)] flex items-center justify-center">
                            <img className="h-full w-full object-cover rounded" src={product.imageUrl} alt={product.name} />
                        </div>

                        {/* Product Details Section */}
                        <div className="h-20 p-2">
                            <h2 className="text-sm font-semibold">{product.name}</h2>
                            <div className="text-gray-800 font-semibold">
                                <span className="line-through text-gray-500">${product.price}</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'} />
                                ))}
                                <span className="text-sm text-gray-600">[{product.ratingCount}]</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-8">
                <button className="font-inter h-10 w-56 bg-red-600 text-white">View All Products</button>
            </div>

        </div>
    );
}

export default ExploreOurProduct;
