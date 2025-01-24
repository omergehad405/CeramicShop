import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function GetInTouch() {
  return (
    <div className="flex flex-wrap justify-center my-20 gap-20">
      <div className="w-[35%] lg:w-full px-10">
        <h1 className="text-main text-6xl capitalize mb-5">Get in touch</h1>
        <p className="w-[400px] md:w-full text-gray-500 leading-7 mb-5">
          Share some details here. This is Flexible section where you can share
          anything you want. It could be details or some information.
        </p>
        <div>
          <div className="flex gap-3 mb-5 border-b pb-5">
            <span className="text-main text-xl">
              <FaLocationDot />
            </span>
            <div>
              <h6 className="text-main tracking-widest uppercase ">Address</h6>
              <p className="text-gray-500">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-5 border-b pb-5">
            <span className="text-main text-xl">
              <FaPhoneAlt />
            </span>
            <div>
              <h6 className="text-main tracking-widest uppercase ">Phone</h6>
              <p className="text-gray-500">(+91) 987 654 321</p>
            </div>
          </div>
          <div className="flex gap-3 mb-5 border-b pb-5">
            <span className="text-main text-xl">
              <MdEmail />
            </span>
            <div>
              <h6 className="text-main tracking-widest uppercase ">Email</h6>
              <p className="text-gray-500">info@contact.com</p>
            </div>
          </div>
          <div>
            <h1 className="text-main tracking-widest uppercase pb-5">Follow</h1>
            <ul className="flex items-center space-x-5 text-lg uppercase">
              <li>
                <a href="" className="text-main text-xl">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="" className="text-main text-xl">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="" className="text-main text-xl">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="" className="text-main text-xl">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <form className="bg-[#F1F4F1] w-[35%] lg:w-full p-10">
        <label className="font-bold" htmlFor="">
          Name <span className="text-[#ff0000]">*</span>
        </label>
        <div className="flex gap-5 justify-center mb-5">
          <input
            className="w-[48%] py-3 px-2 focus:outline-none"
            type="text"
            placeholder="first name"
          />
          <input
            className="w-[48%] py-3 px-2 focus:outline-none"
            type="text"
            placeholder="last name"
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="">
            Email <span className="text-[#ff0000] focus:outline-none">*</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="block w-full py-3 px-3"
          />
        </div>

        <div className="my-5">
          <label className="font-bold" htmlFor="">
            comment or message
          </label>
          <textarea name="" id="" rows={4} className="block w-full focus:outline-none p-3"></textarea>
        </div>

        <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border border-2  hover:text-main hover:bg-white hover:border-main">
          submit
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
