import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {

    return (
        <div className="flex items-center ">
            {/* Left Section */}
            <div className="mt-14 mb-24 w-750 h-520 bg-custom bg-cover bg-center" >
                {/* Add any content here if needed */}
            </div>

            {/* Right Section */}
                <div className="ml-28 w-356">
                    <h2 className="font-inter text-2xl  font-weight-600  text-[rgb(32,32,32,)]">
                        Create an account
                    </h2>
                    <h2 className="font-inter text-xs  font-normal pt-2 pb-6 text-[rgb(32,32,32,)]">Enter your details below</h2>

                    <form>
                        <div className="flex flex-col mb-4">
                            <div className="space-y-6">

                                <div className="relative mb-6">
                                    <input
                                        className="peer w-full border-b-2 border-gray-300 text-grey-700 py-2 px-0 leading-tight focus:outline-none focus:border-blue-500"
                                        id="Username"
                                        type="Username"
                                        placeholder=" "
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-700"
                                        htmlFor="Username"
                                    >
                                        Name
                                    </label>
                                </div>


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
                                        className="peer w-full border-b-2 border-gray-300 text-grey-700 py-2 px-0 leading-tight focus:outline-none focus:border-blue-500"
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

                                <button className="w-full bg-[rgb(224,117,117)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600 transition duration-200">
                                    Create Account
                                </button>

                            </div>

                            {/* Sign up with Google Button */}
                            <button className="w-full flex items-center justify-center bg-white text-[rgb(80,80,80)] border border-gray-300 font-semibold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100 transition duration-200">
                                {/* Google Icon */}
                                <svg
                                    className="w-5 h-5 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#EA4335"
                                        d="M24 9.5c3.29 0 6.25 1.17 8.57 3.1l6.3-6.29C34.73 3.53 29.62 1.5 24 1.5 14.88 1.5 7.19 6.99 4.24 14.5l7.5 5.84C13.44 14.01 18.27 9.5 24 9.5z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M24 46.5c5.33 0 10.05-1.77 13.82-4.8l-6.32-5.15c-2.06 1.34-4.69 2.14-7.5 2.14-6.65 0-12.29-4.51-14.31-10.58L4.2 32.49c2.99 7.62 10.32 13.01 19.8 13.01z"
                                    />
                                    <path
                                        fill="#4A90E2"
                                        d="M43.64 24.64c0-1.38-.13-2.71-.36-4H24v8.14h11.06c-.48 2.26-1.83 4.16-3.72 5.45l6.32 5.15c2.82-2.64 4.6-6.53 4.6-11.74z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M10.5 28.18C9.7 25.94 9.7 23.06 10.5 20.82l-7.5-5.84C.37 17.21 0 20.52 0 24s.37 6.79 1.24 9.92l7.5-5.84z"
                                    />
                                </svg>
                                {/* Button Text */}
                                Sign up with Google
                            </button>

                            <p>
                                Already have an account? <Link to="/login" className="  text-customWhite underline underline-offset-4 hover:text-blue-500">Log in</Link>

                            </p>




                        </div>






                    </form>
            </div>
        </div>
    );
};

export default Signup;
