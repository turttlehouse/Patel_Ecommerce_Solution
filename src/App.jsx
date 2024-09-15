import React from 'react';
import './App.css';

import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Contact from './pages/Contact';
import LocationTrace from './pages/LocationTrace';
import FlashSales from './pages/Home/ForHome/FlashSales';
import BrowseByCategory from './pages/Home/ForHome/BrowseByCategory';
import BestSellingProduct from './pages/Home/ForHome/BestSellingProduct';
import ExploreOurProduct from './pages/Home/ForHome/ExploreOurProduct';
import Service from './pages/Home/ForHome/Service';
import Wishlist from './pages/Wishlist/Wishlist';






const App = () => {
  return (
    <>
     <Router>
      <Banner />
      <Navbar />
      

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/location" element={<LocationTrace />} />
        <Route path="/flashsales" element={<FlashSales />} />
        <Route path="/category" element={<BrowseByCategory />} />
        <Route path="/bestselling" element={<BestSellingProduct />} />
        <Route path="/products" element={<ExploreOurProduct />} />
        <Route path="/service" element={<Service />} />
        <Route path="/wishlist" element={<Wishlist />} />

        
      </Routes>

      <Footer />
      
      </Router>
      

      

       
    </>
  )
}

export default App