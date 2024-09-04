import React from 'react';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Signup from './pages/signup';
import HeroSection from './pages/HeroSection';





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
        <Route path="/herosection" element={<HeroSection />} />
        
      </Routes>

      <Footer />
      
      </Router>
      

      

       
    </>
  )
}

export default App