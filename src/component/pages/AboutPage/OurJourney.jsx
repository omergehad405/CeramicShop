import React from "react";

function OurJourney() {
  return (
    <div className=" mb-20 flex flex-wrap items-center justify-center gap-20 lg:flex-col px-5 py-5 bg-[#F1F4F1]">
      <img
        src="./about/our-journey.jpg"
        alt="our-journey"
        className="max-w-full"
      />
      <div>
        <h3 className="text-main uppercase text-base">Our Journey</h3>
        <h1 className="text-main text-6xl md:text-4xl py-5">
          Our Ceramic Odyssey <br /> Crafting Beauty and <br /> Quality.
        </h1>
        <p className="text-gray-500 text-lg md:text-sm leading-8 pb-10 w-[600px] md:w-full">
          Our company story is a testament to the enduring love for
          craftsmanship, where we combine our passion for ceramics with an{" "}
          unwavering commitment to quality and timeless beauty. Explore the{" "}
          journey that has led us to become a trusted source for exquisite{" "}
          ceramic products.We're proud to share our story, which mirrors the{" "}
          growth of a dream into a thriving destination for exceptional
          creations, reflecting artistry and innovation.
        </p>
        <p className="text-gray-500 text-lg md:text-sm leading-8  pb-10 w-[600px] md:w-full">
          Our dedication to crafting elegant, functional ceramic pieces that{" "}
          enhance everyday living is at the heart of our narrative, and it’s a{" "}
          story we’re excited to share with you.
        </p>
      </div>
    </div>
  );
}

export default OurJourney;
