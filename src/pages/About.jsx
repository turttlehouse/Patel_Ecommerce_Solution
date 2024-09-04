import React from 'react';


const about = () => {

  const navigate = useNavigate ()

  return (
    <div className='flex'>
      <div className=" flex items-center">
        <div className='w-750'>
          <h1 className='font-inter text-4xl  font-bold leading-10 text-[rgb(32,32,32,)] ml-28'>Our Story</h1><br/> <br/>
          <p className='font-inter text-sm  font-normal leading-2 text-[rgb(32,32,32,)] ml-28'>
            Lunched in 2015,Exclusive is South Asia's premier online shopping <br/> makterplace with an active presence in Bangladesh, Supported <br/> by wide range of tailored marketing, data and service solutions,<br/> Exclusive has 10,500 sallers and 300 brands and serves 3 <br/> millions customers across the region. <br/> <br/>
            Exclusive has more than 1 million products to offer, growing at a <br/> very fast. Exclusive offers a diverse assortment in categories <br/> ranging from consumer.
          </p>
        </div>

        <div className="mt-10 mb-16 w-800 h-600 bg-shopping bg-cover bg-center" >
          {/* Add any content here if needed */}
        </div>
      </div>

           {/* sellers customers information */}
      <div className=' my-6 ml-28 '>

        <div className="pt-6 w-44 h-44 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center">
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


        <div className="pt-6 w-44 h-44  border-2 border-[rgb(217,217,217)] bg-red-700 flex flex-col items-center justify-center ml-32">
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


        <div className="pt-6 w-44 h-44 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center ml-32">
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


        <div className="pt-6 w-44 h-44 border-2 border-[rgb(217,217,217)] flex flex-col items-center justify-center ml-32">
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



      </div>
    </div>


  );
};

export default about;


