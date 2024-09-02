// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="bg-black text-white text-center font-sans py-2 flex justify-between items-center px-4">
//       <div className="text-center flex-grow">
//         Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!&nbsp;
//         <a 
//           href="" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="underline hover:underline-offset-4 "
//         >
//           ShopNow
//         </a>
//       </div>
//       <div className="flex-none mr-32">
//         <select className="bg-black text-white border-none ">
//           <option value="en">English</option>
//           <option value="ने">नेपाली</option>
//           <option value="es">Español</option>
//           <option value="fr">Français</option>
//           <option value="de">Deutsch</option>
//         </select>
//       </div>

      
//     </div>
//   );
// }

// export default Banner;

import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black text-white text-center font-sans py-2 flex flex-col sm:flex-row justify-between items-center px-4">
      <div className="text-center flex-grow mb-2 sm:mb-0">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!&nbsp;
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:underline-offset-4"
        >
          Shop Now
        </a>
      </div>
      <div className="flex-none sm:mr-32">
        <select className="bg-black text-white border-none">
          <option value="en">English</option>
          <option value="ने">नेपाली</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  );
}

export default Banner;
