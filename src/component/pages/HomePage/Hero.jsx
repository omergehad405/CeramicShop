import React from "react";

function Hero() {
  return (
    <div className="bg-main container mx-auto py-10 flex flex-wrap justify-evenly items-center px-10 text-white">
      <div className="w-[50%] md:w-full md:text-center">
        <h6 className="uppercase text-sm pb-10 md:pb-5">
          Welcome to Ceramic Shop
        </h6>
        <h1 className="capitalize font-bold text-6xl leading-tight pb-5 md:text-5xl">
          Elevate Your Space with Ceramic Elegance.
        </h1>
        <p className="text-2xl capitalize pb-10">Starting from just $149.00</p>
        <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border border-2  hover:text-main hover:bg-white hover:border-main">
          shop now
        </button>
      </div>
      <div className="md:w-full">
        <div className="relative  mx-auto pt-10 ">
          <img src="./home/hero-01.jpg" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
