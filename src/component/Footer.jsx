import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="static bottom-0 w-full bg-[#F1F4F1]">
      <div className="flex justify-evenly items-center p-10 flex-wrap md:gap-10 bg-[#F1F4F1]">
        <div>
          <h1 className="text-main text-2xl">CeramicShop</h1>
        </div>
        <div>
          <ul className="flex flex-wrap md:flex-col md:justify-evenly items-center md:space-x-0 space-x-10 uppercase">
            <li>
              <Link className="text-main" to="/CeramicShop/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-main" to="/CeramicShop//about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-main" to="/CeramicShop/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="text-main" to="/CeramicShop/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center space-x-5 text-lg uppercase">
            <li>
              <a href="" className="text-main">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="" className="text-main">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="" className="text-main">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="" className="text-main">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-evenly items-center p-10 flex-wrap md:gap-10 bg-[#F1F4F1]">
        <span className="text-main">Copyright © 2025</span>
        <span className="text-main">All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
