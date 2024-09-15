import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Icons for call and message
import LocationTrace from './LocationTrace';

const Contact = () => {
  return (
    <div className=''>
      <LocationTrace />
      <div className="flex mx-28 mt-12 mb-20">
        {/* box1 */}
        <div className="w-80 border-4 border-[rgb(250,250,250)] bg-[rgb(255,255,255)] pt-6 pb-8 px-8">
          {/* Call to Us Section */}
          <div className="mb-6">
            <div className="flex items-center ">
              <div className="bg-red-400 text-white p-2  rounded-3xl mb-2">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </div>
              <p className="ml-3 text-lg font-bold">Call to Us</p>
            </div>
            <p className="font-inter text-sm mb-2">We are available 24/7, 7 days a week</p>
            <p className="text-sm font-inter">Phone : +123-456-7890</p>
          </div>

          {/* Dashed Line */}
          <hr className="border-solid pt-4  border-black " />

          {/* Write to Us Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-400 text-white p-2 rounded-3xl mb-2">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <p className="ml-3 text-lg font-bold">Write to Us</p>
            </div>
            <p className="text-sm mb-2">Fill out the form and we will contact <br /> you within 24 hours</p>
            <p className="text-sm font-inter mb-2">Email: customers@exclusive.com</p>
            <p className="text-sm font-inter">Email: supports@exclusive.com</p>
          </div>
        </div>

        {/* box-2 */}
        <div className="ml-12 border-4 border-[rgb(250,250,250)] w-[760px] h-76 pt-6 pb-8 px-8 ">
          <form>
            <div className="flex relative">
              {/* Name field with red asterisk */}
              <div className="relative w-56">
                <input
                  className="border-0 w-full h-8 bg-[rgb(245,245,245)] text-[rgb(153,153,153)] pb-1 pl-3 pr-2 peer"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <span className="absolute left-24  top-1/2 transform -translate-y-1/2 peer-placeholder-shown:block hidden text-red-500">*</span>
              </div>
              
              {/* Email field with red asterisk */}
              <div className="relative w-56 ml-2">
                <input
                  className="border-0 w-full h-8 bg-[rgb(245,245,245)] text-[rgb(153,153,153)] pb-1 pl-3 pr-2 peer"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <span className="absolute right-32 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:block hidden text-red-500">*</span>
              </div>

              {/* Phone field with red asterisk */}
              <div className="relative w-56 ml-2">
                <input
                  className="border-0 w-full h-8 bg-[rgb(245,245,245)] text-[rgb(153,153,153)] pb-1 pl-3 pr-2 peer"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone"
                  required
                />
                <span className="absolute left-24 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:block hidden text-red-500">*</span>
              </div>
            </div>
             
            {/* message */}
            <div className="mt-8">
              <input
                className="border-0 w-full h-44 bg-[rgb(245,245,245)] text-[rgb(153,153,153)] pb-36 pl-3 pr-2"
                id="message"
                type="input"
                placeholder="Your Message"
                required
              />
              
            </div>

            <button className='w-52 h-10 mt-4 ml-482 bg-[rgb(224,117,117)] text-white'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
