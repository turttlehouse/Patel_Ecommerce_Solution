import React from 'react';
import HeroSection from '../HeroSection';
import FlashSales from './ForHome/FlashSales';
import BrowseByCategory from './ForHome/BrowseByCategory';
import BestSellingProduct from './ForHome/BestSellingProduct';
import ExploreOurProduct from './ForHome/ExploreOurProduct';
import Service from './ForHome/Service';


const Home = () => {


  return (
   <div>
    <HeroSection />
    <FlashSales />
    <BrowseByCategory />
    <BestSellingProduct />

    <ExploreOurProduct />
    
    <Service />
   </div>
  );
};

export default Home;