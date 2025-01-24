import React from "react";

function ProductsCategory() {
  return (
    <div className="bg-[#F1F4F1]">
      <div className="md:container w-[70%]  mx-auto py-20 flex flex-wrap items-center justify-evenly md:justify-center gap-10 md:text-center">
        <div className="w-[40%] md:w-[70%]">
          <h5 className="text-main">THE BEST OR CERMAICS</h5>
          <h1 className="text-5xl py-5 text-[#424B4A]">
            Our Products Category
          </h1>
          <p className="leading-normal pb-5 text-[#424B4A]">
            Explore our exquisite collection of ceramic treasures that elevate
            your spaces and celebrate the artistry of craftsmanship. From
            dinnerware to decor, each piece in our product range is a testament
            to quality, style, and the timeless beauty of ceramics.
          </p>
          <div className="relative ">
            <img src="./home/category-01.jpg" alt="" />
            <div className="bg-white p-5 absolute bottom-10 w-[95%] left-[50%] transform -translate-x-1/2">
              <h3 className="text-[#424B4A] py-2 text-2xl">
                Stylish Ceramic Home Decor
              </h3>
              <p className="text-[#424B4A]">Starting from just $99.00</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] md:w-[70%] ">
          <div className="relative my-5">
            <img src="./home/category-02.jpg" alt="" />
            <div className="bg-white p-5 absolute bottom-10 w-[95%] left-[50%] transform -translate-x-1/2">
              <h3 className="text-[#424B4A] py-2 text-2xl">
                Trending Ceramic Dinnerware
              </h3>
              <p className="text-[#424B4A]">Starting from just $299.00</p>
            </div>
          </div>
          <div className="relative my-5">
            <img src="./home/category-03.jpg" alt="" />
            <div className="bg-white p-5 absolute bottom-10 w-[95%] left-[50%] transform -translate-x-1/2">
              <h3 className="text-[#424B4A] py-2 text-2xl">
                Garden and Outdoor Accents
              </h3>
              <p className="text-[#424B4A]">Starting from just $149.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCategory;
