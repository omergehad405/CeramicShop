import React from "react";

function Add() {
  return (
    <div className="container bg-[#f1f4f1] h-[50vh] relative my-10">
      <div className="bg-white w-[50%] md:w-[80%] h-[40vh] flex flex-col justify-center mx-auto absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center p-10">
        <h1 className="text-center text-main text-4xl md:text-3xl">
          Begin Your Ceramic Journey Explore <br /> Our Stunning Collections
        </h1>
        <p className="text-main p-5 text-2xl md:text-xl">
          Starting from just $149.00
        </p>
        <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border border-2  hover:text-main hover:bg-white hover:border-main">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Add;
