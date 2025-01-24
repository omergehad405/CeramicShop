import React from "react";
import { IoIosStar } from "react-icons/io";

function Testimonial() {
  return (
    <div className="container ">
      <div className="bg-[#f1f4f1]">
        <div className="w-[60%] mx-auto md:w-full py-[5rem] md:text-center">
          <h4 className="uppercase text-main mb-5">Testimonial</h4>
          <h1 className="text-main leading-snug text-5xl md:text-4xl font-bold">
            What Our Customers Say
          </h1>

          <div className="flex justify-center gap-5 items-center mt-10 flex-wrap ">
            <div className="bg-white p-10 md:p-5 w-[550px] md:w-[400px] md:text-left">
              <div className="text-[#FB8C24] flex text-2xl gap ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>

              <p className="text-[#596160] py-3">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div className="flex items-center gap-5">
                <img
                  src="./home/testimonial-skip-01.jpg"
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <h6 className="text-main">Wade Warren</h6>
                  <span className="text-[#596160]">Business Man</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 md:p-5 w-[550px] md:w-[400px] md:text-left">
              <div className="text-[#FB8C24] flex text-2xl gap ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>

              <p className="text-[#596160] py-3">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div className="flex items-center gap-5">
                <img
                  src="./home/testimonial-skip-02.jpg"
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <h6 className="text-main">Mila Kunis</h6>
                  <span className="text-[#596160]">Fashion Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col ">
        <img src="./footer-cta.jpg" alt="" className="w-[50%] lg:w-full" />
        <div className="bg-main p-10 text-white w-[50%] lg:w-full md:h-[400px] h-[550px] ">
          <div className="md:text-center relative w-full h-full ">
            <div className="absolute top-[50%] transform translate-y-[-50%] lg:left-[50%] lg:translate-x-[-50%]">
              <h1 className="text-5xl lg:text-3xl leading-snug pb-10 w-[550px] lg:w-[450px]">
                Uncover the World of Ceramic Artistry Start Your Journey Here!
              </h1>
              <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border border-2  hover:text-main hover:bg-white hover:border-main">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
