import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { ProductsContext } from "./Context/ProductsContext";
import { FaTrash } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeProduct, increaseQuantity, decreaseQuantity } =
    useContext(ProductsContext);
  const isCartPage = window.location.pathname === "/CeramicShop/cart";
  const isCheckoutPage = window.location.pathname === "/CeramicShop/checkout";
  return (
    <div>
      <div className="md:hidden flex items-center justify-between px-10 py-10 bg-main">
        <Link className="text-white text-3xl" to="/">
          CeramicShop
        </Link>

        <ul className="flex items-center space-x-5 uppercase">
          <li>
            <Link
              className="text-white hover:text-black transition-text duration-700 ease-in-out"
              to="/CeramicShop/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black transition-text duration-700 ease-in-out"
              to="/CeramicShop/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black transition-text duration-700 ease-in-out"
              to="/CeramicShop/shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black transition-text duration-700 ease-in-out"
              to="/CeramicShop/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="relative">
          <button
            className="text-white text-lg"
            onClick={() => setShowCart(true)}
            disabled={isCartPage || isCheckoutPage}
          >
            <FaShoppingCart />
          </button>

          <div
            className={`${
              showCart === false ? "right-[-150rem]" : "right-0"
            } w-[550px] min-h-[1000px] bg-white fixed z-10 p-5 top-0 transition-right duration-500 ease`}
          >
            <button
              className="absolute top-5 right-5 text-black text-2xl"
              onClick={() => setShowCart(false)}
            >
              <FiX />
            </button>

            {cart.length === 0 ? (
              <p className="font-bold capitalize text-center relative top-[25rem] text-black">
                there is no items in the cart
              </p>
            ) : (
              <div className="">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-10 mt-10 mb-5"
                  >
                    <img
                      src={item.mainImage}
                      alt="productImg"
                      className="w-[75px]"
                    />
                    <div className="grow">
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="text-main font-bold">{item.name}</h6>
                        <button
                          className="hover:text-red-500 transition-text duration-300"
                          onClick={() => removeProduct(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <button
                            className="border py-1 px-3 text-gray-500"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="border py-1 px-3 text-gray-500">
                            {item.quantity}
                          </span>
                          <button
                            className="border py-1 px-3 text-gray-500"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <span className="text-second font-bold">
                          ${item.priceAfterSale * item.quantity}.00
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <div className="flex flex-col items-center mt-10  fixed top-[45rem]">
                    <Link
                      to="/CeramicShop/cart"
                      className="w-[510px] hover:text-white hover:bg-main transtition-text duration-500 text-center py-2 text-main border border-main my-2 font-bold uppercase tracking-widest"
                    >
                      view cart
                    </Link>
                    <Link
                      to="/CeramicShop/checkout"
                      className="w-[510px] hover:text-white hover:bg-main transtition-text duration-500 text-center py-2 text-main border border-main my-2 font-bold uppercase tracking-widest"
                    >
                      checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="hidden text-white text-lg md:block">
          <FaBars />
        </button>
      </div>

      <div
        className={`${
          showMenu ? "mb-[12rem]" : ""
        } hidden relative md:flex items-center justify-between px-10 py-10 bg-main `}
      >
        <Link className="text-white text-3xl" to="/CeramicShop/">
          CeramicShop
        </Link>

        <ul
          className={`${
            showMenu ? "block" : "hidden"
          } flex flex-col absolute top-[100%] bg-white w-full left-0 uppercase transition duration-500`}
        >
          <li className="w-full pl-5 py-3">
            <NavLink className="text-black" to="/CeramicShop/">
              Home
            </NavLink>
          </li>
          <li className="w-full pl-5 py-3">
            <NavLink className="text-black" to="/CeramicShop/about">
              About
            </NavLink>
          </li>
          <li className="w-full pl-5 py-3">
            <NavLink className="text-black" to="/CeramicShop/shop">
              Shop
            </NavLink>
          </li>
          <li className="w-full pl-5 py-3">
            <NavLink className="text-black" to="/CeramicShop/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex space-x-5">
          <div className="relative ">
            <button
              className="text-white text-lg"
              onClick={() => setShowCart(true)}
              disabled={isCartPage || isCheckoutPage}
            >
              <FaShoppingCart />
            </button>

            <div
              className={`${
                showCart === false ? "right-[-150rem]" : "right-0"
              } w-full h-[100vh] bg-white fixed z-10 py-5 top-0 transition-right duration-500 ease`}
            >
              <button
                className="absolute top-5 right-5 text-black text-2xl"
                onClick={() => setShowCart(false)}
              >
                <FiX />
              </button>

              {cart.length === 0 ? (
                <p className="font-bold capitalize text-center relative top-[25rem] text-black">
                  there is no items in the cart
                </p>
              ) : (
                <div className="w-[90%] h-[75vh] mx-auto relative">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-10 mt-10 mb-5"
                    >
                      <img
                        src={item.mainImage}
                        alt="productImg"
                        className="w-[75px]"
                      />
                      <div className="grow">
                        <div className="flex justify-between items-center mb-2">
                          <h6 className="text-main font-bold">{item.name}</h6>
                          <button
                            className="hover:text-red-500 transition-text duration-300"
                            onClick={() => removeProduct(item.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <button
                              className="border py-1 px-3 text-gray-500"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <span className="border py-1 px-3 text-gray-500">
                              {item.quantity}
                            </span>
                            <button
                              className="border py-1 px-3 text-gray-500"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>

                          <span className="text-second font-bold">
                            ${item.priceAfterSale * item.quantity}.00
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="absolute top-[100%] w-full">
                    <Link
                      to="/CeramicShop/cart"
                      className="w-full block hover:text-white hover:bg-main transtition-text duration-500 text-center py-2 text-main border border-main my-2 font-bold uppercase tracking-widest"
                    >
                      view cart
                    </Link>
                    <Link
                      to="/CeramicShop/checkout"
                      className="w-full block hover:text-main text-white bg-main hover:bg-main transtition-text duration-500 text-center py-2 border border-main my-2 font-bold uppercase tracking-widest"
                    >
                      checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="hidden text-white text-lg md:block"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
