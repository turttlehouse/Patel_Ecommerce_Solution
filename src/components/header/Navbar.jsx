import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation ();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const noIconsPaths = ['/login', '/signup']

  return (
    <nav className=" pl-28 pr-28 bg-white   border border-[rgb(236,236,236)]">
     <div className="h-20 flex items-end pb-4 justify-between ">
      <div className="font-inter text-xl font-bold text-[rgb(0,0,0)]">
      <Link to="/" className="  hover:text-gray-400">Exclusive</Link>
      </div>
      <div className=" space-x-12 justify-between font-inter text-sm text-[rgb(0,0,0)]">
        <Link to="/" className="hover:text-gray-400 pl-16">Home</Link>
        <Link to="/contact" className="hover:text-gray-400 ">Contact</Link>
        <Link to="/about" className="hover:text-gray-400 ">About</Link>
        <Link to="/signup" className="hover:text-gray-400 ">Signup</Link>
      </div>


      <div className="flex items-center space-x-6  bg-white  ">
        <div className="relative ">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[rgb(245,245,245)] text-[rgb(153,153,153)]  pl-4 pr-12 py-1 focus:outline-none w-64" // Increased width with w-64
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black h-4" // Moved to right
          />
        </div>

        {!noIconsPaths.includes(location.pathname) && (
          <>
              <FontAwesomeIcon 
              icon={faHeart} 
              className="h-6 w-6  cursor-pointer hover:text-gray-400 "
            />
            <FontAwesomeIcon 
              icon={faShoppingCart} 
              className="h-6 w-6 cursor-pointer hover:text-gray-400"
            />
            {isLoggedIn && (
            <FontAwesomeIcon 
              icon={faUser} 
              className="h-6 w-6 cursor-pointer hover:text-gray-400"
            />
            )}
          </>
          )}

      </div>
     </div> 
      
    </nav>
  );
};

export default Navbar;

