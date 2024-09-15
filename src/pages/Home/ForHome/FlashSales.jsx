import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';


const FlashSales = () => {
    // Timer functionality
    const saleEndDate = new Date('2024-09-15T23:59:59').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    useEffect(() => {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const difference = saleEndDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(countdown);
                alert("Flash Sale Ended!");
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [saleEndDate]);

    // Product data
    const [products] = useState([
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 120,
            discount: 10,
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
            discount: 10,
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
            discount: 10,
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
            discount: 10,
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
            discount: 10,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 6,
            name: 'Wireless Headphones',
            price: 120,
            discount: 10,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        {
            id: 7,
            name: 'Wireless Headphones',
            price: 120,
            discount: 10,
            imageUrl: 'https://example.com/headphones.jpg',
            loveCount: 200,
            watchCount: 1500,
            rating: 4.5,
            ratingCount: 500,
        },
        // Add more products here...
    ]);

    const scrollRef = useRef(null);
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const calculateDiscountedPrice = (price, discount) => {
        return (price - (price * discount) / 100).toFixed(2);
    };

    return (
        <div className="ml-28 mt-24">
            {/* Row 1: Red box and "Today's" text */}
            <div className="flex items-center">
                <div className='w-4 h-6 bg-red-600 rounded'></div>
                <div className='ml-2 font-inter font-semibold text-red-600'>Today's</div>
            </div>

            {/* Row 2: "Flash Sales", Timer, and navigation buttons */}
            <div className="flex justify-between items-center mt-2 mb-6">
                <div className="flex">
                    <div className='font-inter text-[rgb(0,0,0)] font-bold text-2xl mt-5'>
                        Flash Sales
                    </div>

                    <div className="flex items-center space-x-4 ml-20 ">
                        {/* Timer */}
                        <div className="flex space-x-2 items-center">
                            <div className="flex flex-col items-center">
                                <span className="text-sm">Days</span>
                                <span className="text-xl font-bold text-gray-900">{formatTime(timeLeft.days)}</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 pt-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-sm">Hours</span>
                                <span className="text-xl font-bold text-gray-900">{formatTime(timeLeft.hours)}</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 pt-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-sm">Minutes</span>
                                <span className="text-xl font-bold text-gray-900">{formatTime(timeLeft.minutes)}</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 pt-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-sm">Seconds</span>
                                <span className="text-xl font-bold text-gray-900">{formatTime(timeLeft.seconds)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="flex space-x-2 mr-28">
                    <button onClick={scrollLeft} className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">{'<'}</button>
                    <button onClick={scrollRight} className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">{'>'}</button>
                </div>

            </div>

            {/* products */}

            <div className=" overflow-x-auto hide-scroll-bar overflow-y-hidden scroll-smooth mb-10">
                <div className="flex space-x-4">
                    {products.map((product) => {
                        const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
                        return (
                            <div key={product.id} className="w-64 h-60 flex-shrink-0 ">
                                {/* Discount Badge and Icons */}
                                <div className="relative">
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                                        {product.discount}%
                                    </div>
                                    
                                    <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                            <i className="fa-solid fa-heart cursor-pointer text-black"></i>
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
                                        <span className="text-red-600">${discountedPrice}</span>{' '}
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
                        );
                    })}
                </div>
            </div>




            {/* Row 4: "View All Products" button */}
            <div className="flex justify-center items-center mt-8">
                <button className="font-inter h-10 w-56 bg-red-600 text-white">View All Products</button>
            </div>
        </div>
    );
};

export default FlashSales;



