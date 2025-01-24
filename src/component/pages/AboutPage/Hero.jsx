import React from "react";

function Hero() {
  return (
    <div className="bg-main text-white py-20 px-10 flex lg:flex-col items-center justify-center h-[70vh] mb-20 gap-5">
      {/* Text Section */}
      <div className="w-[60%] md:w-full md:text-center">
        <h6 className="text-7xl md:text-4xl font-bold mb-6 lg:mb-4 ">
          About Us
        </h6>
        <p className="text-lg md:text-sm leading-relaxed">
          Welcome to the world of CeramicShop, where artistry and innovation
          come together to craft stunning ceramic pieces. Discover our story,
          the passion that drives us, and our commitment to delivering timeless
          beauty and quality.
        </p>
      </div>
      {/* Image Section */}
      <div className="w-[40%] md:w-full mt-10 lg:mt-0 flex justify-center relative">
        <img
          src="./about/about-03.jpg"
          alt="Ceramic Artwork"
          className="w-[60%] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Hero;
