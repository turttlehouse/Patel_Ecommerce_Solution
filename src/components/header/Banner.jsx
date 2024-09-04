import React from 'react';
import { Link } from 'react-router-dom';
{/* <div className="bg-black text-[rgba(255,255,255,0.9)] font-sans font-normal text-[12px] leading-[16px] py-3  flex justify-between items-center pl-10 pr-2"> */}


const Banner = () => {
  return (
<div className="flex bg-black text-[rgba(255,255,255,0.9)] h-8 font-inter text-[12px] items-center ]">
   <div className="text-center flex-grow space-x-1  ml-28 ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!&nbsp;
        <Link 
          to="" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:underline-offset-4 "
        >
          ShopNow
        </Link>
      </div>
      <div className="flex-none text-center mr-28 ">
        <select className="bg-black text-white border-none ">
          <option value="en">English</option>
          <option value="ने">नेपाली</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      
    </div>
  )
}

export default Banner;

