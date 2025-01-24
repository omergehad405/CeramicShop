import React from "react";

function Ourstory() {
  return (
    <div className="mb-20 flex items-center justify-center gap-10 lg:flex-col px-5">
      <div className="lg:text-center">
        <h2 className="text-main py-2 uppercase text-lg">Our Story</h2>
        <h1 className="text-main py-2 text-6xl lg:text-4xl">
          Explore CeramicShop <br />
          and Our Ceramic Artistry
        </h1>
      </div>
      <div className="">
        <p className="leading-8 text-lg text-gray-500 w-[600px] md:w-full max-w-full lg:text-base md:text-sm">
          Step into the world of CeramicShop, where we’re dedicated to crafting{" "}
          elegant, functional ceramics that elevate your everyday life. Our{" "}
          journey is a testament to the artistry and craftsmanship that infuse{" "}
          each unique piece. Discover our story, meet the talented artisans who{" "}
          bring these creations to life, and experience the exceptional beauty{" "}
          that our ceramics add to your surroundings. Explore the heart and soul{" "}
          of our store, where every piece is a work of art, designed to make{" "}
          your moments more beautiful and special.
        </p>
      </div>
    </div>
  );
}

export default Ourstory;
