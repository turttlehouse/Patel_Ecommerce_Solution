import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
    return (
        <div className="flex items-center">
            {/* Left Section */}
            <div className="mt-14 mb-24 w-750 h-520 bg-custom bg-cover bg-center" >

            </div>

            {/* Right Section */}
            <div className="ml-28 w-356">
                    <h2 className=" font-inter text-2xl  font-bold leading-10 text-[rgb(32,32,32,)]">
                        Log in to Exclusive
                    </h2>
                    <h2 className="font-inter text-xs  font-normal pt-2 pb-6 text-[rgb(32,32,32,)]">Enter your details below</h2>

                    <form>
                        <div className="flex flex-col mb-4">
                            <div className="space-y-6">

                                <div className="relative mb-6">
                                    <input
                                        className="peer w-full border-b-2 border-gray-300 text-grey-700 py-2 px-0 leading-tight focus:outline-none focus:border-blue-500"
                                        id="Email or PhoneNumber"
                                        type="Email or PhoneNumber"
                                        placeholder=" "
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-700"
                                        htmlFor="Email or PhoneNumber"
                                    >
                                        Email or PhoneNumber
                                    </label>
                                </div>


                                <div className="relative mb-6">
                                    <input
                                        className="peer w-2/5 border-b-2 border-gray-300 text-grey-700 py-2 px-0 leading-tight focus:outline-none focus:border-blue-500"
                                        id="password"
                                        type="password"
                                        placeholder=" "
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-700"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-8 '>


                                <button className=" w-2/5 bg-[rgb(224,117,117)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600 transition duration-200">
                                    Login
                                </button>


                                <p className='font-inter text-xs '>
                                    <Link to="/forgetpassword" className=" text-red-600 hover:text-blue-500">Forget Password?</Link>

                                </p>

                            </div>






                        </div>






                    </form>
            </div>
        </div>
    );
};

export default Signup;
