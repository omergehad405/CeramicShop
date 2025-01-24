import React from "react";

function About() {
  return (
    <div className="my-[8rem] px-10 ">
      <div className="w-[70%] mx-auto md:w-full">
        <h4 className="uppercase text-main mb-5">About Ceramic Shop</h4>
        <h1 className="text-main leading-snug text-5xl md:text-4xl">
          The versatility of ceramics is what makes them truly remarkable, with
          their presence in various forms such as stoneware and porcelain.
        </h1>
      </div>

      <div className="w-[70%] md:w-full mx-auto flex md:flex-col items-center justify-evenly gap-5 mt-20">
        <div className="md:hidden">
          <img src="./home/about-01.jpg" alt="" />
        </div>
        <div className="w-[50%] md:w-full text-center">
          <img src="./home/about-02.jpg" alt="" />
          <h1 className="text-main leading-snug text-2xl py-5">
            Welcome to Ceramic Shop, where passion meets craftsmanship to bring
            you a world of timeless <br /> beauty and creativity.
          </h1>
          <p className="text-gray-500 pb-5">
            Our journey is steeped in the art of ceramics, where each piece
            tells a <br /> unique story. Get to know the heart and soul behind
            our store.
          </p>
          <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border border-2  hover:text-main hover:bg-white hover:border-main">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
