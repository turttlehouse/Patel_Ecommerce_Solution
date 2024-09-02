// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   return (
//     <nav className="bg-#FFFAF0 border-black p-4 flex items-center justify-between">
//       {/* Left Side - Company Name */}
//       <div className="text-black text-xl font-bold mx-10">
//       <a href="/" className="  hover:text-gray-400">Exclusive</a>
//       </div>

//       {/* Center - Navigation Links */}
//       <div className="flex space-x-6 text-black">
//         <a href="/" className="hover:text-gray-400">Home</a>
//         <a href="/contact" className="hover:text-gray-400">Contact</a>
//         <a href="/about" className="hover:text-gray-400">About</a>
//         <a href="/signup" className="hover:text-gray-400">Signup</a>
//       </div>

//       {/* Right Side - Search Bar, Heart, Cart, User */}
//       <div className="flex items-center space-x-6  bg-white ml-5 pr-20">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="bg-gray-200 text-black rounded-full pl-4 pr-12 py-1 focus:outline-none w-64" // Increased width with w-64
//           />
//           <FontAwesomeIcon 
//             icon={faSearch} 
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black h-4" // Moved to right
//           />
//         </div>
//         <FontAwesomeIcon 
//           icon={faHeart} 
//           className="h-6 w-6  cursor-pointer hover:text-gray-400 "
//         />
//         <FontAwesomeIcon 
//           icon={faShoppingCart} 
//           className="h-6 w-6 cursor-pointer hover:text-gray-400"
//         />
//         <FontAwesomeIcon 
//           icon={faUser} 
//           className="h-6 w-6 cursor-pointer hover:text-gray-400"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-#FFFAF0 border-black p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Company Name */}
      <div className="text-black text-xl font-bold mb-2 md:mb-0">
        <a href="/" className="hover:text-gray-400">Exclusive</a>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-black mb-2 md:mb-0">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/signup" className="hover:text-gray-400">Signup</a>
      </div>

      {/* Right Side - Search Bar, Heart, Cart, User */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-200 text-black rounded-full pl-4 pr-10 py-1 focus:outline-none w-full"
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black h-4"
          />
        </div>
        <FontAwesomeIcon 
          icon={faHeart} 
          className="h-6 w-6 cursor-pointer hover:text-gray-400"
        />
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          className="h-6 w-6 cursor-pointer hover:text-gray-400"
        />
        <FontAwesomeIcon 
          icon={faUser} 
          className="h-6 w-6 cursor-pointer hover:text-gray-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
