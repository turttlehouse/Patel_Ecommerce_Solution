import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-5 gap-4">
        {/* First Div - Exclusive Section */}
        <div className="p-4">
          <a href="/" className="text-lg font-bold hover:underline">Exclusive</a><br/>
          <a href="/link" className="text-sm font-semibold hover:underline">Subscribe</a>
          <p className="text-sm">Get 10% OFF your First Order</p>
          <div className="flex w-full mt-2">
            <input 
              type="email" 
              placeholder="Enter Your E-mail" 
              className="flex-grow py-1 px-2 text-gray-700"
            />
            <button className="bg-blue-500 text-white px-3 flex items-center">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        {/* Second Div - Support Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          <p className="text-sm">
            111 Bijay Saruni, Dhaka <br/> DH1515, Bangladesh<br />
            exclusive@gmail.com<br />
            +88015 88888 9999
          </p>
        </div>

        {/* Third Div - Account Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <ul className="space-y-1">
            <li><a href="/my-account" className="hover:underline">My Account</a></li>
            <li><a href="/login" className="hover:underline">Login/Register</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
            <li><a href="/wishlist" className="hover:underline">Wishlist</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Fourth Div - Quick Links Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Fifth Div - Placeholder */}
        <div className="p-4 bg-gray-700">
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; Copyright Rimal {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
