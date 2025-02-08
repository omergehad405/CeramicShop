import React from "react";

function AimingTo() {
  return (
    <div>
      <div className="p-5 flex flex-wrap justify-center items-center gap-5">
        <div className="">
          <h2 className="text-main uppercase text-2xl pb-5 font-bold">
            Our Vision
          </h2>
          <p className="text-grey-500 leading-7 w-[550px] md:w-full">
            Our vision is to infuse every home with the timeless beauty and
            functionality of ceramics. We are dedicated to creating elegant,
            handcrafted ceramic pieces that elevate everyday living, whether
            it's enjoying a meal, decorating a space, or finding the perfect
            gift. Our mission is to inspire and bring artistry into daily life,
            providing a canvas of creativity through ceramics.
          </p>
        </div>
        <div className="">
          <h2 className="text-main uppercase text-2xl pb-5 font-bold">
            Our Goals
          </h2>
          <p className="text-grey-500 leading-7 w-[550px] md:w-full">
            Our values are the foundation upon which Your Ceramicis built. We
            prioritize craftsmanship, quality, and creativity in all that we do.
            Integrity, authenticity, and sustainability are at the core of our
            values, ensuring that our products reflect not just beauty, but also
            ethical and environmental responsibility. We believe in the power of
            ceramics to connect people, transform spaces, and create lasting
            memories.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col">
        <img src="./footer-cta.jpg" alt="" className="w-[50%] lg:w-full" />
        <div className="bg-main p-10 text-white w-[50%] lg:w-full md:h-[400px] h-[550px] ">
          <div className="md:text-center relative w-full h-full ">
            <div className="absolute top-[50%] transform translate-y-[-50%] lg:left-[50%] lg:translate-x-[-50%]">
              <h1 className="text-5xl lg:text-3xl leading-snug pb-10 w-[550px] lg:w-[300px]">
                Uncover the World of Ceramic Artistry Start Your Journey Here!
              </h1>
              <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border-2  hover:text-main hover:bg-white hover:border-main">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AimingTo;
