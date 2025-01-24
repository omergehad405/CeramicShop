import React from "react";

function Hero() {
  return (
    <div className="bg-main text-white py-20 px-10 flex lg:flex-col items-center justify-center h-[60vh] mb-20 gap-5">
      <div className=" md:w-full md:text-center">
        <h6 className="text-7xl md:text-4xl font-bold mb-6 lg:mb-4 ">
          Contact Us
        </h6>
        <p className="text-lg md:text-sm leading-relaxed w-[700px] max-w-full">
          We're here to assist you in any way we can. Whether you have questions
          about our products, need personalized recommendations, or simply want
          to connect with our team, don't hesitate to reach out
        </p>
      </div>

      <div className="w-[35%] md:w-full mt-10 lg:mt-0 flex justify-center relative">
        <img
          src="./contact-01.jpg"
          alt="Ceramic Artwork"
          className="w-[60%] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Hero;
