import React from 'react'
import { Link } from 'react-router-dom';

const BrowseByCategory = () => {
    return (
        <div className="mx-28 mt-24">

            <div className="flex items-center">
                <div className='w-4 h-6 bg-red-600 rounded'></div>
                <div className='ml-2 font-inter font-semibold text-red-600'>Categories</div>
            </div>


            <div className="flex items-center justify-between mt-2 mb-10">
                <div className='font-inter text-[rgb(0,0,0)] font-bold text-2xl mt-5'>
                    Browse By Category
                </div>
                {/* Navigation Buttons */}
                <div className=" space-x-2 pt-4">
                    <button className="bg-gray-200 w-8 h-8 rounded-full "><i class="fa-solid fa-arrow-left bg-[(0,0,0)]" ></i></button>
                    <button className="bg-gray-200 w-8 h-8 rounded-full "><i class="fa-solid fa-arrow-right bg-[(0,0,0)]" ></i></button>
                </div>
            </div>

            <div className="flex mt-10">

                <Link to='/Phones' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)]  ">
                    <i class="fa-solid fa-mobile-screen-button fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> Phones</p>
                </Link>

                <Link to='/computers' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)] ml-6 ">
                    <i class="fa-solid fa-desktop fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> Computers</p>
                </Link>

                <Link to='/stopwatch' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)] ml-6 ">
                    <i class="fa-solid fa-mobile-screen-button fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> StopWatch</p>
                </Link>

                <Link to='/camera' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)] ml-6 ">
                    <i class="fa-solid fa-mobile-screen-button fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> Camera</p>
                </Link>

                <Link to='/headphones' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)] ml-6 ">
                    <i class="fa-solid fa-mobile-screen-button fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> HeadPhones</p>
                </Link>

                <Link to='/gaming' className="w-44 h-24 border-2 border-[rgb(217,217,217)] hover:bg-[rgb(219,68,68)] ml-6 ">
                    <i class="fa-solid fa-mobile-screen-button fa-2x pl-16 pt-4"></i>
                    <p className="font-inter text-xs pl-14 pt-4 "> Gaming</p>
                </Link>


            </div>
        </div>

    )
}

export default BrowseByCategory;