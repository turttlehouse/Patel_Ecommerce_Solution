import React from 'react'

const Service = () => {
  return (

    <div className="flex mt-24 mx-48  justify-between ">


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
  

  )
}

export default Service;