import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import LocationTrace from './LocationTrace';


const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className=''>
      <LocationTrace />
      <div className="flex items-center justify-between">
        <div className='ml-28 mr-28 items-center space-y-6 '>
          <h1 className='font-inter text-4xl  font-bold text-[rgb(32,32,32,)] pt-5'>Our Story</h1>
          <p className='font-inter text-sm  font-normal leading-2 text-[rgb(32,32,32,)]'>
            Lunched in 2015,Exclusive is South Asia's premier online shopping <br />
            makterplace with an active presence in Bangladesh, Supported<br />
            by wide range of tailored marketing, data and service solutions,<br />
            Exclusive has 10,500 sallers and 300 brands and serves 3<br />
            millions customers across the region.<br /> <br />
            Exclusive has more than 1 million products to offer, growing at a<br />
            very fast. Exclusive offers a diverse assortment in categories<br />
            ranging from consumer.

          </p>
        </div>

        <div className="mt-8 mr-28 w-650 h-406 bg-Shopping bg-cover bg-center" >

        </div>
      </div>

      {/* Box1 sellers attending */}
      <section className='flex mx-28 mt-24 mb-32  '>

        <div className="w-64 h-40 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center">
          <div className="relative">

            <div className=" w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-solid fa-store text-[rgb(255,255,255)]"></i>
              </div>
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-black">10.5k</p>
          <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Sellers active in our site</p>
        </div>


        <div className="w-64 h-40  border-2 border-[rgb(217,217,217)] bg-red-700 flex flex-col items-center justify-center ml-32">
          <div className="relative  ">

            <div className=" w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-white rounded-full flex items-center justify-center">

                <i className="fa-sharp fa-regular fa-dollar-sign text-[rgb(3,1,1)] "></i>
              </div>
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-black">10.5k</p>
          <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Monthly product sale</p>
        </div>


        <div className="w-64 h-40 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center ml-32">
          <div className="relative">

            <div className=" w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-brands fa-shopify text-[rgb(255,255,255)]"></i>
              </div>
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-black">10.5k</p>
          <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Customers active our site</p>
        </div>


        <div className=" w-64 h-40 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center ml-32">
          <div className="relative">

            <div className=" w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-solid fa-magnifying-glass-dollar text-[rgb(255,255,255)] "></i>
              </div>
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-black">10.5k</p>
          <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Annual gross sale in our site</p>
        </div>
      </section>

      {/* box2 stakeholders */}
      <section className="">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={100000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className=" flex mx-28 mb-10 justify-between">
            <div className=''>
              <div className="w-352 h-400 bg-rajnish bg-cover bg-center ">
              </div>
              <h1 className='font-inter text-xl font-semibold mt-4'>Rajnish Mandal</h1>
              <p className='font-inter text-xs font-normal'>Founder and chairman</p>
              <div className="flex space-x-4">
                <><a href="https://www.twitter.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-twitter"></i>
                </a></>
                <><a href="https://www.instagram.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-instagram"></i>
                </a></>
                <><a href="https://www.linkedin.com" target="_blank" className=" hover:text-blue-500">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a></>
              </div>
            </div>


            <div className=''>
              <div className="w-352 h-400 bg-vishal bg-cover bg-center ">
              </div>
              <h1 className='font-inter text-xl font-semibold mt-4'>Vishal Jimee</h1>
              <p className='font-inter text-xs font-normal'>Managing Director</p>
              <div className="flex space-x-4">
                <><a href="https://www.twitter.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-twitter"></i>
                </a></>
                <><a href="https://www.instagram.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-instagram"></i>
                </a></>
                <><a href="https://www.linkedin.com" target="_blank" className=" hover:text-blue-500">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a></>
              </div>
            </div>


            <div className=''>
              <div className="w-352 h-400 bg-sakar bg-cover bg-center ">
              </div>
              <h1 className='font-inter text-xl font-semibold mt-4'>Sakar Pokhrel</h1>
              <p className='font-inter text-xs font-normal'>Product Designer</p>
              <div className="flex space-x-4 ">
                <><a href="https://www.twitter.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-twitter"></i>
                </a></>
                <><a href="https://www.instagram.com" target="_blank" className="  hover:text-blue-500">
                  <i class="fa-brands fa-instagram "></i>
                </a></>
                <><a href="https://www.linkedin.com" target="_blank" className=" hover:text-blue-500">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a></>
              </div>
            </div>

          </div>


          <div
            className=""

          ></div>


          <div
            className=""

          ></div>


          <div
            className=""

          ></div>


          <div
            className=" "

          ></div>
        </Carousel>
      </section>


      <section>
        <div className="flex my-24 mx-48  justify-between ">


          <div className="relative flex flex-col items-center">

            <div className=" w-12 h-12 bg-[rgb(193,193,193)] rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-solid fa-truck-fast text-[rgb(255,255,255)]"></i>
              </div>
            </div>


            <p className="mt-4 text-base font-bold text-black">FREE AND FAST DELIVERY</p>
            <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Free delivery for all orders over $140 </p>
          </div>


          <div className="relative  flex flex-col items-center ">

            <div className=" w-12 h-12 bg-[rgb(193,193,193)] rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-solid fa-headphones text-[rgb(255,255,255)]"></i>
              </div>
            </div>

            <p className="mt-4 text-base font-bold text-black">24/7 CUSTOMER SERVICE</p>
            <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">Friendly 24/7 customer support</p>
          </div>


          <div className="relative flex flex-col items-center  ">

            <div className=" w-12 h-12 bg-[rgb(193,193,193)] rounded-full flex items-center justify-center">

              <div className=" w-8 h-8 bg-black rounded-full flex items-center justify-center">

                <i class="fa-solid fa-shield text-[rgb(255,255,255)]"></i>
              </div>
            </div>


            <p className="mt-4 text-base font-bold text-black">MONEY BACK GURANTEE</p>
            <p className="font-inter text-xs   text-[rgba(255, 255, 255, 0.9)] my-2">We return money within 30 days </p>
          </div>



        </div>
      </section>


    </div>


  );
};

export default About;


